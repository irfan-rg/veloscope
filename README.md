<div align="center">
  <h1>veloscope - more than just sports</h1>
  <br />
  <img src="./public/images/veloscope-logo.png" width="180" alt="Veloscope Logo" />
  <br />
  <br />
</div>

A high-contrast, brutalist editorial platform built for an endurance sports photography agency. This project is my submission for the **Veloscope UI Engineering Challenge**.

## Live Demo

- **Live URL:** [https://veloscope.vercel.app](https://veloscope.vercel.app)
- **Design Reference:** [Figma Design Link](https://www.figma.com/design/5GP3njgupb7jsiCXnN4Vpy/Flow--Copy-?node-id=650-1970&t=BWE0WT5Q5O2ZHn8T-0)

---

## Tech Stack & Architecture

While I typically rely on utility-first frameworks like Tailwind CSS, I chose a different path for this assessment to explicitly demonstrate my grasp on fundamental styling and modular architecture.

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Pure CSS Modules (`.module.css`) + CSS Variables
- **Layout:** CSS Grid & Flexbox (no third-party grid systems)
- **Typography:** Fluid sizing using `clamp()` calculations

## Design Decisions & Deviations

The original brief called for a strict mobile-first implementation. I honored that by ensuring the mobile experience is mathematically sound and buttery smooth. However, I took the creative liberty to expand the design system and build out a **premium, fully responsive desktop experience**.

### 1. The Magazine Editorial Aesthetic
I transitioned the desktop layout into a cinematic, brutalist magazine format:
- **Asymmetric Split Layouts:** On internal pages like the Event Detail view, the massive hero images are constrained to a `4/5` portrait ratio and docked beside a sticky text column, preventing the "screen-spanning banner" effect common in naive desktop ports.
- **Symmetric Grid Rosters:** The Team page utilizes a strict 3-column CSS Grid to present the roster professionally, rather than relying on chaotic flex-wrap logic.

### 2. Pure CSS Modules Over Tailwind
Building this via standard CSS Modules allowed me to:
- Establish a highly structured, scalable design token system using native CSS variables (`var(--font-primary)`, `var(--color-accent)`).
- Implement precise `clamp()` typography that smoothly scales between a 390px mobile viewport and a 1440px desktop monitor without relying on jagged media query breakpoints.
- Avoid utility class clutter in the JSX, keeping the React components incredibly semantic and readable.

### 3. Micro-Interactions & Polish
To breathe life into the UI, I implemented several subtle enhancements:
- A custom, inverted-blend-mode cursor that interacts naturally with the dark brutalist backgrounds.
- A smooth scroll-progress tracker pinned to the navigation bar.
- Aperture-inspired shutter animations on the mobile hamburger menu.

---

## Running Locally

To run this project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/veloscope.git
   cd veloscope
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

*Thank you for reviewing my submission. I look forward to discussing the code!*
