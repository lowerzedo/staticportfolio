const header = document.getElementById("site-header");
const navToggle = document.getElementById("nav-toggle");
const navPanel = document.getElementById("nav-panel");
const mainContent = document.getElementById("main-content");
const navLinks = [...document.querySelectorAll(".nav__link")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function listenForMediaChange(mediaQuery, listener) {
  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", listener);
  } else {
    mediaQuery.addListener(listener);
  }
}

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 32);
}

function setMenu(open, returnFocus = false) {
  if (!navToggle || !navPanel) return;

  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  navPanel.classList.toggle("is-open", open);
  header?.classList.toggle("menu-open", open);
  document.body.classList.toggle("nav-open", open);
  if (mainContent) mainContent.inert = open;

  if (open) {
    navPanel.querySelector("a")?.focus();
  } else if (returnFocus) {
    navToggle.focus();
  }
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

navPanel?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    const menuWasOpen = navToggle?.getAttribute("aria-expanded") === "true";
    setMenu(false, menuWasOpen);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navToggle?.getAttribute("aria-expanded") === "true") {
    setMenu(false, true);
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const desktopNavigation = window.matchMedia("(min-width: 861px)");
listenForMediaChange(desktopNavigation, (event) => {
  if (event.matches) setMenu(false);
});

async function alignHashTarget() {
  if (!window.location.hash) return;

  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  const targetId = window.location.hash.slice(1);
  const target = document.getElementById(targetId);
  if (!target) return;

  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "instant", block: "start" });
  });
}

window.addEventListener("load", alignHashTarget);
window.addEventListener("hashchange", alignHashTarget);

const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

navLinks.forEach((link) => link.classList.remove("is-active"));

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("is-active", active);
        if (active) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    { rootMargin: "-20% 0px -62%", threshold: [0, 0.2, 0.5] }
  );

  observedSections.forEach((section) => sectionObserver.observe(section));
}

const heroVisual = document.getElementById("hero-visual");
let pointerFrame = 0;

function resetHeroParallax() {
  heroVisual?.style.setProperty("--mx", "0px");
  heroVisual?.style.setProperty("--my", "0px");
}

if (heroVisual && window.matchMedia("(pointer: fine)").matches && !reducedMotion.matches) {
  heroVisual.addEventListener("pointermove", (event) => {
    if (pointerFrame) return;

    pointerFrame = requestAnimationFrame(() => {
      const rect = heroVisual.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 32;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 32;
      heroVisual.style.setProperty("--mx", `${x.toFixed(2)}px`);
      heroVisual.style.setProperty("--my", `${y.toFixed(2)}px`);
      pointerFrame = 0;
    });
  });

  heroVisual.addEventListener("pointerleave", resetHeroParallax);
}

let scrollFrame = 0;

function updateHeroZoom() {
  if (!heroVisual || reducedMotion.matches) return;
  const progress = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1);
  heroVisual.style.setProperty("--hero-scroll", progress.toFixed(3));
}

window.addEventListener(
  "scroll",
  () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      updateHeroZoom();
      scrollFrame = 0;
    });
  },
  { passive: true }
);

listenForMediaChange(reducedMotion, () => {
  resetHeroParallax();
  updateHeroZoom();
});

updateHeroZoom();

const disciplineStrip = document.querySelector(".discipline-strip");
const disciplineTrack = disciplineStrip?.querySelector(".discipline-strip__track");
const disciplineGroup = disciplineTrack?.querySelector(".discipline-strip__group");
const TICKER_SPEED = 36;
let tickerLoopWidth = 0;
let tickerAnimationFrame = 0;
let tickerResizeFrame = 0;
let tickerLastTime = 0;
let tickerPauseUntil = 0;
let tickerIsVisible = false;
let tickerIsDragging = false;
let tickerDragStartX = 0;
let tickerDragStartScroll = 0;
let tickerIsNormalizing = false;

function pauseTicker(duration = 1400) {
  tickerPauseUntil = Math.max(tickerPauseUntil, performance.now() + duration);
}

function normalizeTickerPosition() {
  if (!disciplineStrip || !tickerLoopWidth || tickerIsNormalizing) return 0;

  const previous = disciplineStrip.scrollLeft;
  let next = previous;

  while (next < tickerLoopWidth) next += tickerLoopWidth;
  while (next >= tickerLoopWidth * 3) next -= tickerLoopWidth;

  const adjustment = next - previous;
  if (Math.abs(adjustment) > 0.5) {
    tickerIsNormalizing = true;
    disciplineStrip.scrollLeft = next;
    requestAnimationFrame(() => {
      tickerIsNormalizing = false;
    });
  }

  return adjustment;
}

function buildTickerLoop() {
  if (!disciplineStrip || !disciplineTrack || !disciplineGroup) return;

  const previousPhase = tickerLoopWidth
    ? ((disciplineStrip.scrollLeft % tickerLoopWidth) + tickerLoopWidth) % tickerLoopWidth / tickerLoopWidth
    : 0;

  [...disciplineTrack.querySelectorAll(".discipline-strip__group")].slice(1).forEach((group) => group.remove());
  tickerLoopWidth = disciplineGroup.getBoundingClientRect().width;
  if (!tickerLoopWidth) return;

  const groupCount = Math.max(6, Math.ceil(disciplineStrip.clientWidth / tickerLoopWidth) + 5);
  for (let index = 1; index < groupCount; index += 1) {
    const clone = disciplineGroup.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.dataset.tickerClone = "";
    disciplineTrack.append(clone);
  }

  disciplineStrip.scrollLeft = tickerLoopWidth * 2 + previousPhase * tickerLoopWidth;
}

function queueTickerBuild() {
  if (tickerResizeFrame) return;
  tickerResizeFrame = requestAnimationFrame(() => {
    tickerResizeFrame = 0;
    buildTickerLoop();
  });
}

function stopTickerAnimation() {
  if (!tickerAnimationFrame) return;
  cancelAnimationFrame(tickerAnimationFrame);
  tickerAnimationFrame = 0;
}

function runTickerAnimation(timestamp) {
  tickerAnimationFrame = 0;
  if (!disciplineStrip || !tickerIsVisible || reducedMotion.matches) return;

  const elapsed = tickerLastTime ? Math.min(timestamp - tickerLastTime, 1000) : 0;
  tickerLastTime = timestamp;

  if (!tickerIsDragging && timestamp >= tickerPauseUntil) {
    disciplineStrip.scrollLeft += TICKER_SPEED * (elapsed / 1000);
    normalizeTickerPosition();
  }

  tickerAnimationFrame = requestAnimationFrame(runTickerAnimation);
}

function startTickerAnimation() {
  if (tickerAnimationFrame || !tickerIsVisible || reducedMotion.matches) return;
  tickerLastTime = 0;
  tickerAnimationFrame = requestAnimationFrame(runTickerAnimation);
}

if (disciplineStrip && disciplineTrack && disciplineGroup) {
  buildTickerLoop();
  document.fonts?.ready.then(queueTickerBuild);

  disciplineStrip.addEventListener("scroll", normalizeTickerPosition, { passive: true });
  disciplineStrip.addEventListener("wheel", () => pauseTicker(1600), { passive: true });
  disciplineStrip.addEventListener("dragstart", (event) => event.preventDefault());

  disciplineStrip.addEventListener("pointerdown", (event) => {
    pauseTicker(1800);
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    event.preventDefault();
    tickerIsDragging = true;
    tickerDragStartX = event.clientX;
    tickerDragStartScroll = disciplineStrip.scrollLeft;
    disciplineStrip.classList.add("is-dragging");
    disciplineStrip.setPointerCapture(event.pointerId);
  });

  disciplineStrip.addEventListener("pointermove", (event) => {
    if (!tickerIsDragging) {
      if (event.pointerType !== "mouse") pauseTicker(1800);
      return;
    }

    disciplineStrip.scrollLeft = tickerDragStartScroll - (event.clientX - tickerDragStartX);
    tickerDragStartScroll += normalizeTickerPosition();
  });

  const finishTickerDrag = (event) => {
    if (tickerIsDragging) {
      tickerIsDragging = false;
      disciplineStrip.classList.remove("is-dragging");
      if (disciplineStrip.hasPointerCapture(event.pointerId)) {
        disciplineStrip.releasePointerCapture(event.pointerId);
      }
    }
    pauseTicker(1200);
  };

  disciplineStrip.addEventListener("pointerup", finishTickerDrag);
  disciplineStrip.addEventListener("pointercancel", finishTickerDrag);

  disciplineStrip.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    pauseTicker(1800);
    disciplineStrip.scrollLeft += event.key === "ArrowRight" ? 160 : -160;
    normalizeTickerPosition();
  });

  if ("ResizeObserver" in window) {
    const tickerResizeObserver = new ResizeObserver(queueTickerBuild);
    tickerResizeObserver.observe(disciplineStrip);
    tickerResizeObserver.observe(disciplineGroup);
  } else {
    window.addEventListener("resize", queueTickerBuild);
  }

  if ("IntersectionObserver" in window) {
    const tickerObserver = new IntersectionObserver((entries) => {
      tickerIsVisible = entries.some((entry) => entry.isIntersecting);
      if (tickerIsVisible) {
        startTickerAnimation();
      } else {
        stopTickerAnimation();
      }
    });
    tickerObserver.observe(disciplineStrip);
  } else {
    tickerIsVisible = true;
    startTickerAnimation();
  }

  listenForMediaChange(reducedMotion, () => {
    if (reducedMotion.matches) {
      stopTickerAnimation();
    } else {
      startTickerAnimation();
    }
  });
}

const expertiseItems = [...document.querySelectorAll(".expertise__item")];

expertiseItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    expertiseItems.forEach((otherItem) => {
      if (otherItem !== item) otherItem.open = false;
    });
  });
});

const careerTabs = [...document.querySelectorAll(".career__tab")];

function activateCareerTab(tab) {
  careerTabs.forEach((candidate) => {
    const active = candidate === tab;
    const panel = document.getElementById(candidate.dataset.panel);

    candidate.classList.toggle("is-active", active);
    candidate.setAttribute("aria-selected", String(active));
    candidate.tabIndex = active ? 0 : -1;
    if (panel) panel.hidden = !active;
  });
}

careerTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateCareerTab(tab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex = index;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % careerTabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + careerTabs.length) % careerTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = careerTabs.length - 1;
    if (nextIndex === index) return;

    event.preventDefault();
    activateCareerTab(careerTabs[nextIndex]);
    careerTabs[nextIndex].focus();
  });
});

activateCareerTab(careerTabs.find((tab) => tab.getAttribute("aria-selected") === "true") || careerTabs[0]);

const credentialsRail = document.getElementById("credentials-rail");
const credentialsPrev = document.getElementById("credentials-prev");
const credentialsNext = document.getElementById("credentials-next");

function updateRailButtons() {
  if (!credentialsRail || !credentialsPrev || !credentialsNext) return;
  const maxScroll = credentialsRail.scrollWidth - credentialsRail.clientWidth;
  credentialsPrev.disabled = credentialsRail.scrollLeft <= 4;
  credentialsNext.disabled = credentialsRail.scrollLeft >= maxScroll - 4;
}

function moveCredentialRail(direction) {
  if (!credentialsRail) return;
  const distance = Math.min(credentialsRail.clientWidth * 0.82, 440);
  credentialsRail.scrollBy({ left: distance * direction, behavior: reducedMotion.matches ? "auto" : "smooth" });
}

credentialsPrev?.addEventListener("click", () => moveCredentialRail(-1));
credentialsNext?.addEventListener("click", () => moveCredentialRail(1));
credentialsRail?.addEventListener("scroll", updateRailButtons, { passive: true });
window.addEventListener("resize", updateRailButtons);
updateRailButtons();

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
