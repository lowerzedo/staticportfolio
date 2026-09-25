---
name: Nazar Hasanov Portfolio
description: A kinetic, recruiter-focused portfolio for cloud and software engineering.
colors:
  electric-blue: "oklch(0.56 0.255 265)"
  electric-blue-deep: "oklch(0.44 0.25 265)"
  signal-lime: "oklch(0.89 0.2 126)"
  systems-ink: "oklch(0.145 0.018 265)"
  systems-ink-soft: "oklch(0.22 0.022 265)"
  cool-paper: "oklch(0.975 0.006 265)"
  cool-paper-dim: "oklch(0.92 0.012 265)"
  muted-ink: "oklch(0.5 0.018 265)"
  structural-line: "oklch(0.79 0.014 265 / 0.55)"
typography:
  display:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(3.3rem, 7.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(2.8rem, 5.8vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.015em"
rounded:
  sm: "6px"
  md: "12px"
  pill: "999px"
components:
  button-primary:
    backgroundColor: "{colors.systems-ink}"
    textColor: "{colors.cool-paper}"
    rounded: "{rounded.pill}"
    padding: "13px 19px"
  button-primary-hover:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.systems-ink}"
  skill-chip:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.systems-ink}"
    rounded: "{rounded.pill}"
    padding: "9px 13px"
  credential-card:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.systems-ink}"
    rounded: "{rounded.md}"
    padding: "27px"
---

# Design System: Nazar Hasanov Portfolio

## 1. Overview

**Creative North Star: "Kinetic Systems Map"**

The interface behaves like a system diagram brought to life. A saturated blue first screen carries Nazar's name, role, and portrait while orbit lines and technical markers create controlled movement around the person at the centre. The layout then becomes quieter and more linear as evidence accumulates.

The visual voice is engineered, kinetic, and assured. Large Archivo typography provides the confidence of the reference sites, while JetBrains Mono labels add technical precision only where metadata benefits from it. The system explicitly rejects generic developer portfolio templates, decorative glassmorphism, terminal-themed dark interfaces, and repetitive card grids.

Motion explains space and hierarchy. Pointer parallax is confined to the hero, image zoom belongs to the portrait story, the credential rail enters horizontally, and the contact orb arrives as a distinct object. Every movement has a static reduced-motion equivalent.

**Key Characteristics:**

- One saturated blue world creates the first impression.
- Oversized type remains readable, direct, and capped at 6rem.
- Evidence becomes more structured as the visitor scrolls.
- Lime signals interaction and motion without flooding the page.
- Flat surfaces rely on overlap, scale, and contrast for depth.

## 2. Colors

The palette combines electric blue commitment with near-black structure, cool paper breathing room, and a precise lime signal.

### Primary

- **Electric Blue:** The hero, current-role row, and credential world. It carries identity and should occupy a decisive surface rather than appear as a timid accent.
- **Electric Blue Deep:** Focus indicators and darker interactive states on light surfaces.

### Secondary

- **Signal Lime:** Technical markers, active expertise labels, chips, selection, and high-attention contact actions. Its rarity is part of its strength.

### Neutral

- **Systems Ink:** Primary text, dark sections, buttons, and structural contrast.
- **Systems Ink Soft:** Inner depth in the portrait orbit and limited tonal layering.
- **Cool Paper:** The light page surface and credential objects.
- **Cool Paper Dim:** Quiet hover or supporting surface differentiation.
- **Muted Ink:** Metadata on light surfaces. It remains above WCAG AA contrast.
- **Structural Line:** Rules, separators, and low-emphasis boundaries.

**The Drenched First Screen Rule.** The hero is fully committed to Electric Blue. Do not dilute it with floating white cards or decorative gradients.

**The Lime Signal Rule.** Signal Lime marks motion, focus, selection, or action. It never becomes a general background theme.

## 3. Typography

**Display Font:** Archivo with Arial fallback  
**Body Font:** Archivo with Arial fallback  
**Label/Mono Font:** JetBrains Mono with a system monospace fallback

**Character:** Archivo feels direct, engineered, and human at large sizes. JetBrains Mono is used as metadata, never as a costume for technical credibility.

### Hierarchy

- **Display** (800, fluid up to 6rem, 0.94): Hero and contact statements only.
- **Headline** (800, fluid up to 5rem, 0.98): Major section ideas and career framing.
- **Title** (700, 1.4rem to 2.7rem, 1.05 to 1.2): Expertise rows, credentials, and roles.
- **Body** (400, 1rem, 1.6): Explanatory copy, capped near 65 characters where layout allows.
- **Label** (600, 0.72rem, compact tracking): Dates, roles, metadata, and technical previews. Sentence case is the default.

**The One Shout Per View Rule.** One display statement dominates a viewport. Supporting text steps down clearly and never competes through scale.

**The Hard Ceiling Rule.** Display type never exceeds 6rem and letter spacing never tightens beyond -0.04em.

## 4. Elevation

The system is flat by default and uses no decorative box shadows. Depth comes from overlapping orbit geometry, saturated surface changes, image cropping, horizontal rails, and controlled scale. The hero portrait uses one short drop shadow to separate the transparent cutout from the dark disc.

**The Structural Depth Rule.** If a surface needs a wide soft shadow to feel important, the hierarchy is wrong. Change scale, placement, or color instead.

**The Flat Credential Rule.** Credential objects sit directly on blue with a paper fill and 12px corners. Hover movement is short and never paired with a decorative border.

## 5. Components

Components feel tactile and confident, with simple shapes and explicit state changes.

### Buttons

- **Shape:** Full pill for direct actions.
- **Primary:** Systems Ink fill, Cool Paper text, compact horizontal padding.
- **Hover / Focus:** Hover becomes Signal Lime with Systems Ink text. Focus uses a 3px high-contrast outline and 4px offset.
- **Text link:** A one-pixel underline and widening arrow gap provide a quieter secondary action.

### Chips

- **Style:** Signal Lime background, Systems Ink text, full-pill geometry, and mono labels.
- **State:** Chips communicate technical membership only. They are not decorative badges.

### Cards / Containers

- **Corner Style:** Gently curved at 12px.
- **Background:** Cool Paper on Electric Blue for credential objects.
- **Shadow Strategy:** No box shadow. Hover uses an 8px upward movement and restrained logo scale.
- **Border:** None at rest. Internal one-pixel rules separate content from the credential link.
- **Internal Padding:** Approximately 27px on desktop, reduced slightly on narrow screens.

### Navigation

- The desktop navigation is edge-aligned and transparent over the hero, then becomes Cool Paper with Systems Ink after scrolling.
- Active links use a two-pixel underline and `aria-current="location"`.
- The mobile menu is a solid Systems Ink viewport with large links, keyboard containment, overflow support, and a Signal Lime action.
- Without JavaScript, navigation remains visible as a static wrapped list.

### Selected Work

- Page order is Hero, About, Expertise, Credentials, Experience, Selected Work, then Contact. Projects retain direct links from the primary navigation and hero action.
- Two screenshot-led features use equal desktop columns with shared subgrid rows, keeping their visuals, headings, descriptions, stacks, and disclosures aligned. Four flat, rule-separated project rows pair application screenshots with their descriptions. Mobile presents a single column.
- Each project has a plain-language purpose, a compact technology list, and a native details disclosure for technical scope. All six remain readable and operable without JavaScript.
- Product imagery uses repository assets and captures of actual UI components with fictional or masked data. Application figures identify synthetic demo data and link to full-resolution images. SyncFlo screens use complete iPhone frames with screen-proportional corner radii and hardware casing; they retain their full screen aspect ratio. No stock code imagery or fabricated dashboards.
- Project disclosure controls have a visible focus state and at least a 44px target. Hover movement belongs only to the linked console screenshot; reduced motion keeps it static.
- `assets/css/projects.css` extends the shared tokens; `PROJECTS.md` records content and image sources.
- Desktop screenshot previews trim a narrow strip from the right edge with an overflow crop to hide captured browser scrollbars. Full-resolution source links and the complete SyncFlo phone screens are preserved.

### Experience Rows

- Work and education use linear rows, not an alternating timeline.
- The current role receives a single Electric Blue fill and 12px corners.
- Other rows remain flat and non-interactive, with no hover motion that implies a click.

### Discipline Strip

- The discipline list is a native horizontal rail with a seamless repeated sequence.
- Automatic movement runs at a calm, constant speed while the strip is visible.
- Trackpad scrolling, touch scrolling, mouse dragging, and Left or Right Arrow keys take immediate control.
- Automatic movement pauses briefly after direct input and remains disabled under reduced-motion preferences.

### Hero Orbit

- The portrait sits inside two one-pixel orbital rings and a dark circular field.
- Four compact technical labels move at different pointer depths.
- Scroll zoom affects the composition only while leaving the text stable.
- Reduced motion removes orbit, parallax, automatic ticker movement, and zoom while preserving the full composition and manual scrolling.

## 6. Do's and Don'ts

### Do:

- **Do** make the role, current company, and engineering value visible on the first screen.
- **Do** let Electric Blue carry a large surface instead of using it as a small accent.
- **Do** use verified outcomes, dates, roles, and credential links as primary evidence.
- **Do** vary motion by purpose: orbit in the hero, zoom on imagery, horizontal entry for rails, and object scale for the contact action.
- **Do** let direct user input take priority over automatic movement.
- **Do** preserve WCAG 2.2 AA contrast, visible focus, keyboard access, reduced motion, and useful no-JavaScript content.
- **Do** keep cards at 12px corners and reserve full pills for buttons, tags, and circular controls.

### Don't:

- **Don't** revert to generic developer portfolio templates, decorative glassmorphism, terminal-themed dark interfaces, repetitive card grids, or skill progress bars.
- **Don't** use stock code imagery, gradient text, side-stripe accents, or wide decorative shadows.
- **Don't** copy Nothin', PX Push, or Awwwards portfolio conventions literally. Use their confidence, scale, and spatial choreography as inspiration only.
- **Don't** apply one identical fade-and-rise reveal to every section.
- **Don't** hide content behind motion, JavaScript, hover, pointer precision, or color alone.
- **Don't** add marketing buzzwords, inflated claims, or hiring copy that sounds arrogant.
