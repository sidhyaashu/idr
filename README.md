# Institute of Digital Risk (IDR) Brand & Homepage

This repository contains the design and frontend implementation for the "Institute of Digital Risk" (IDR) assignments. The project requires the creation of a brand logo and a responsive single-page homepage, built exclusively with vanilla HTML, CSS, and JavaScript.

## 🚀 Live Demo
Access the live implementation by opening the `index.html` file in any modern web browser.

## 🎨 Deliverables

### 1. Brand Logo Design
The logo utilizes a cube-inspired geometric shape to symbolize robust structure, foundational resilience, and the multi-faceted nature of digital risk. 
- **Files:** Located in the `assets/` directory (`logo-icon.svg` & `logo-full.svg`).
- **Design Rationale:** Detailed in `design-note.txt`. The primary palette utilizes vibrant orange, stark white, and deep black/dark gray to create a modern, tech-forward aesthetic.

### 2. Single-Page Homepage Build
A responsive, semantic HTML5 single-page website that effectively communicates IDR’s mission and service model.

#### Key Features & UI/UX Refinements
- **Zero CSS Frameworks utilized:** Completely built using custom vanilla CSS, utilizing Flexbox and CSS Grid for layout structuring.
- **Scroll Reveal Animations:** Powered by a lightweight JavaScript `IntersectionObserver`, sections gracefully fade and slide into view for a dynamic, premium feel.
- **Advanced Glassmorphism:** Applied dynamic `backdrop-filter: blur()` effects to the sticky header and hero overlay cards.
- **Advanced Real-Time Form Validation:** An enterprise-grade JavaScript validation system for the contact form featuring:
  - RFC 5322 standard regular expression checks for email inputs.
  - Character count constraints for name and message fields.
  - Dynamic visual error/success states (red/green borders).
  - Built-in accessibility focus management that natively targets the first invalid field upon form submission.
- **Accessibility Integration (A11y):** Form fields utilize ARIA attributes (`aria-expanded`, `aria-describedby`), focus rings (`:focus-visible`), and semantic HTML5 structuring.
- **Micro-Interactions:** Custom hover states, CSS transforms, cubic-bezier transitions on buttons, and a responsive mobile hamburger menu animation.

## 🛠️ Technology Stack
- **HTML5:** Semantic structuring (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **CSS3:** Custom properties (CSS variables), Grid, Flexbox, Animations, and responsive media queries.
- **JavaScript (ES6+):** DOM manipulation, Event Listeners, and Intersection Observer API (no external libraries like jQuery).

## 📂 Project Structure
```text
/
├── assets/
│   ├── logo-icon.svg       # Standalone IDR Logo Icon
│   └── logo-full.svg       # IDR Logo with typographic text
├── css/
│   └── style.css           # Vanilla CSS stylesheet
├── js/
│   └── main.js             # Vanilla JS functionality
├── index.html              # Main HTML markup
├── design-note.txt         # Brand design rationale
└── README.md               # Project documentation
```

## 💻 Local Setup
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/sidhyaashu/idr.git
   ```
2. Navigate to the project directory:
   ```bash
   cd idr
   ```
3. Open `index.html` directly in your web browser (Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge).
   - *Note: No build step, Node.js, or local server is strictly required since it is purely static vanilla code. However, you may use extensions like VSCode's "Live Server" for hot-reloading during development.*
