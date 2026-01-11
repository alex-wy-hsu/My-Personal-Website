You are a senior web designer + front-end developer. Build a personal website.

Goal
- The overall visual style and layout must be primarily inspired by Jake’s website (jakegines.in): minimalist, dark/space vibe, monospace/terminal feel, centered content column, thin divider lines, subtle link colors, and a calm “hacker/academic” aesthetic.
- Replace Jake’s “research” section with “projects”.
- The About page content should be presented in the style of Justin’s About (justinchi.me): an Apple Terminal-inspired screen with command-like lines and outputs, including a blinking cursor feel.
- Even though About and Projects adopt Justin-like content/presentation, the final look must still feel consistent with Jake’s site (same typography, spacing, border style, background mood, link styling).

Information Architecture
1) Home
- Keep Jake-like homepage structure and vibe.
- Provide navigation links to: About, Projects (and optionally Blog if needed, but Projects is required).
- Minimal and fast-loading; content centered.

2) About (Jake-style page wrapper + Justin-style terminal content)
- Page wrapper must match Jake: same background, same centered container width, same heading style, same separators, same “← home” link placement.
- Inside the main content, render a macOS Terminal-inspired block (like Justin):
  - A large prompt line showing: "> {Your Name}" with a cursor (visual blinking effect if possible).
  - Under it, show terminal “commands” and “outputs” that communicate:
    - location
    - contact (email + links like LinkedIn/GitHub)
    - resume (a filename/link)
    - interests (list)
    - education
    - languages/tech stack
  - Use monospace font, terminal-like spacing, and subtle syntax highlighting (but do not break Jake’s minimal color palette).
- The About content must be editable via a simple data object so the user can change fields easily.

3) Projects (Jake-style page wrapper + Justin-style project cards)
- Rename/replace any “research” navigation/section to “projects”.
- Each project must be displayed in the same layout pattern as Justin’s project presentation:
  - A rectangular card with a thin border.
  - Left side: 20% width reserved for the project image/thumbnail (cover or contain, consistent crop).
  - Right side: 80% width with:
    - Top: project title + short description text (2–5 lines).
    - Bottom: a row/wrap of technology tags.
  - Tech tags: each tag is text enclosed in a small rectangular outline (not pill), consistent with Jake’s minimal style.
  - Optionally include “Live Demo” and “View Source” links/buttons if project data provides them, but keep them visually minimal and consistent with Jake (outline style, small).
- Cards should be stacked vertically with consistent spacing, or arranged in one-column on desktop to match Jake’s narrow centered column. (If using two-column, it must still feel Jake-like; one-column is safer.)
- Responsive behavior:
  - On mobile, the image area can move to the top of the card (or remain left but become smaller). Ensure readability and no overflow.

Global Style Requirements (Jake-inspired)
- Background: dark, space-like mood (can be subtle starfield/texture), but keep performance in mind.
- Typography: monospace primary; headings slightly larger; body readable with comfortable line-height.
- Layout: centered container with a max width; generous vertical spacing; thin horizontal rules/dividers.
- Links: subtle colored links (bluish/soft) with clear hover states.
- No heavy animations; if any, keep minimal (cursor blink is enough).
- Accessibility: sufficient contrast, keyboard navigable links, alt text for project images.

Content/Data Model
- Provide a projects data structure like:
  - title
  - description
  - image (path/url)
  - techTags (array of strings)
  - links (optional: demoUrl, sourceUrl)
- Provide an about data structure like:
  - name
  - location
  - email
  - socialLinks
  - resumeUrl
  - interests
  - education
  - languagesOrSkills

Deliverable
- Output a complete website implementation or detailed spec that a developer can implement directly.
- Ensure the About and Projects pages look like they belong to Jake’s site, while the internal content layout matches Justin’s patterns (terminal About and project cards).
- Keep the design cohesive, minimal, and consistent across pages.
Reference inspirations:
- Jake’s site: https://jakegines.in/
- Justin’s site: https://www.justinchi.me/