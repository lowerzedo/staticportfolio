# Project showcase maintenance

The six entries live in `index.html`; their presentation is in `assets/css/projects.css`. Keep descriptions tied to implemented behavior. Do not add client names, impact metrics, ownership claims, production claims, or public links without verifying them.

Source paths below are relative to the shared projects directory containing `portfolio/`. Portfolio asset paths are relative to `staticportfolio/`.

| Showcase name | Content sources | Scope and stage |
| --- | --- | --- |
| CAI Verify | `ai_compliance/README.md`, `ai_compliance/src/cai_verify/aws/reciprocal_retrieval_runner.py`, `ai_compliance/src/cai_verify/evidence/verification.py` | Engineering alpha for reciprocal AWS retrieval-boundary checks. Manual AWS release validation remains pending; this is not compliance certification. |
| SyncFlo | `syncflo/WalletExpenseTracker/WalletExpenseTrackerApp.swift`, `syncflo/WalletExpenseTracker/Services/PersistenceController.swift`, `syncflo/WalletExpenseTracker/Intents/AddExpenseFromWalletIntent.swift`, `syncflo/WalletExpenseTracker/Services/ExpenseAnalyticsService.swift`, `landing_page/DESIGN.md` | Native Swift/SwiftUI iOS app using SwiftData, App Intents, and Swift Charts. Wallet capture requires a user-configured Shortcuts automation. The companion website supplies screenshots with fictional purchases and budgets. |
| MedBot | `medbot/medbot/README.md`, `medbot/medbot/src/medbot/api.py`, `medbot/medbot/src/medbot/ai.py`, `medbot/medbot_ui/src/components/referral-workspace.tsx` | Synthetic-data reference implementation with deterministic extraction fixtures, human review, FHIR resources, and audit history. Do not imply live clinical use, diagnosis, or compliance certification. |
| Kaizen Flow | `kaizen/kaizen_flow_front_ph1/PRODUCT.md`, `kaizen/kaizen_flow_front_ph1/src/pages/upload.tsx`, `kaizen/kaizen-flow-backend-ph1/app/services/calculations/declaration_calculation_service.py` | Customs document, declaration, and calculation workflows. Describe implemented integrations without implying independently verified production use or processing results. |
| Wilsons Creek Insurance / Insurance Management | `ims/AGENTS.md`, `ims/ims-front/src/App.tsx`, `ims/ims_api/apps/certificates/views.py` | Previously labelled IMS. Brand spelling is verified from the source logo. The repository explicitly identifies active production use; avoid exposing customer records or implying measured business outcomes. |
| Sterling Ledger Capital / Loan Management | `loan_project/loan_front/src/App.tsx`, `loan_project/loan_front/index.html`, `loan_project/loan_api/loans/urls.py`, `loan_project/loan_api/loans/document_security.py` | Client, lender, application, and document workflows. Brand spelling follows the source. Deployment and adoption claims require separate verification. |

## User-provided public links

The portfolio owner supplied the following destinations for the Experience and Selected Work entries. These URLs are recorded as user-provided links, without inferring deployment, adoption, or ownership claims from their contents.

| Section | Entry | Destination |
| --- | --- | --- |
| Experience | AgentKYZ | [Company website](https://agentkyz.com/) |
| Experience | BT Group | [Company website](https://www.bt.com/) |
| Experience | Drangue | [Company LinkedIn](https://www.linkedin.com/company/drangue.ai/) |
| Experience | CTI | [Company website](https://www.cti.my/) |
| Experience | Krunch | [Company website](https://www.krunchdata.io/) |
| Experience | Net Zero | [Company LinkedIn](https://www.linkedin.com/company/nzt-ae/) |
| Experience | KEA | [Company website](https://www.kea-hydraulic.com/) |
| Selected Work | SyncFlo | [Product website](https://syncflo.pages.dev/) |
| Selected Work | Wilsons Creek Insurance | [Company website](https://wilsonscreekinsurance.com/) |
| Selected Work | Sterling Ledger Capital | [Company website](https://sterlingledgercapital.com/) |
| Selected Work | Kaizen Flow | [Product website](https://kaizen-flow.com/) |
| Selected Work | CAI Verify | [GitHub repository](https://github.com/lowerzedo/ai_compliance) |

## Image provenance

| Portfolio asset | Original source |
| --- | --- |
| `assets/img/projects/cai-verify.jpg` | `ai_compliance/assets/screenshots/console-plan-review.jpg`; committed console capture with masked identifiers. |
| `assets/img/projects/syncflo-expenses.jpg` | `landing_page/public/screens/expenses-light.png`; resized JPEG of the supplied app capture. |
| `assets/img/projects/syncflo-analytics.jpg` | `landing_page/public/screens/analytics-dark.png`; resized JPEG of the supplied app capture. |
| `assets/img/projects/medbot.jpg` | Actual MedBot referral workspace, rendered locally using its committed synthetic Playwright fixture and synthetic referral PDF. For capture, the embedded PDF viewer uses a Poppler raster of that same PDF. |
| `assets/img/projects/kaizen-flow.jpg` | Actual Kaizen dashboard and layout components, with a temporary local fixture adapter supplying fictional jobs, counts, and a demo operator. |
| `assets/img/projects/wilsons-creek.jpg` | Actual IMS dashboard, with temporary local demo authentication and an in-memory fixture API supplying fictional clients, opportunities, policies, and tasks. |
| `assets/img/projects/sterling-ledger.jpg` | Actual loan dashboard, with temporary local demo authentication and an in-memory fixture API supplying fictional clients, loans, lenders, submissions, and activities. |

`landing_page/DESIGN.md` documents the SyncFlo captures as simulator screenshots using fictional data. Phone frames preserve the screenshot aspect ratio and use rounded hardware-shaped casings rather than image borders.

The four application screenshots were captured on 25 September 2026 from isolated temporary copies of the original frontends, with no production API connections or source-repository edits. Their figures explicitly identify synthetic demo data; the displayed amounts and counts are illustrative, not business-impact metrics. Application layouts and components are preserved, except for MedBot’s documented PDF rendering fallback. Original-resolution captures are linked from each preview. Keep replacement assets free of personal records, credentials, account identifiers, and customer documents.

Before updating an entry, recheck its source and stage, preserve descriptive image alt text, and verify the details disclosure and layout on narrow screens. Repository origins alone do not establish that source code is publicly accessible.
