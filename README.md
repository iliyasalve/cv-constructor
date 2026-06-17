# CV Constructor Studio 🎨

A modern, highly customizable, and privacy-respecting client-side resume builder workspace. Crafted with clean aesthetics, responsive sidebars, dark/light mode toggle, and multi-language support.

Designed and developed by [Iliya Glazunov](https://iliyaglazunov.com).

---

## ✨ Features

- **Live On-Page Editing**: Edit your resume content directly on the visual A4 page canvas.
- **Studio Layout Controls**:
  - **Content Density**: Toggle between *Compact*, *Normal*, and *Spacious* padding styles.
  - **Header Alignment**: Choose between *Left* and *Centered* layout headers.
  - **Contact Icons**: Easily toggle the visibility of contact detail icons.
- **Advanced Typography**: Premium typography pairings (Outfit, Inter, Playfair, Montserrat) to give your resume a unique look.
- **Dynamic Accent Color Picker**: Choose from preselected professional palettes or pick a custom hex color to highlight key elements of your CV.
- **Live CV Structure Panel**: Enable/disable sections (Experience, Projects, Skills, Education, Certifications, Qualities, Languages) and visually track the completion percentage of your resume.
- **Zero-Tracking Privacy Banner**: A GDPR-compliant notice reminding users that no personal data is collected or tracked. All resume data remains strictly inside the browser's `localStorage`.
- **Integrated Help Center & Settings**: Accompanying shortcuts list, recommended print configurations, and localized configurations.
- **Multi-language Support (i18n)**: Fully translated into **French** (default fallback), **English**, and **Russian**.
- **Responsive & Desktop Optimized**: Clean layouts for larger workspaces, with a fallback notice for mobile viewports to ensure high-fidelity document editing.

---

## 🛠 Tech Stack

- **Core Structure**: HTML5, Vanilla ES6 JavaScript
- **Styling**: Tailwind CSS (via CDN) & Custom CSS (`style.css` with CSS Custom Properties / variables)
- **Icons**: Font Awesome 6 & Google Material Symbols Outlined
- **Assets**: Inline and vector graphics (`icon.svg`)
- **Localization**: Pure JavaScript localization engine (`i18n.js`)

---

## 📂 Project Structure

```
.
├── index.html        # Main SPA interface and page structure
├── style.css         # Styling system, dark mode variables, and print stylesheets
├── app.js            # CV builder logic, data parsing, rendering, and content-editable bindings
├── studio.js         # Workspace UI interactions, sidebars, modals, and themes
├── i18n.js           # Multi-language dictionary and translation engine (FR, EN, RU)
└── icon.svg          # Author's vector logo (used as favicon and author avatar)
```

---

## 🚀 How to Run Locally

Since this is a fully static application, **no compilation or backend installation is required** to run the front-end interface.

### Option 1: Direct File Execution
Double-click `index.html` to open the application directly in any modern web browser.

### Option 2: Local Static Server
For the best experience (including relative path resolving for local resources like icons), run a simple local web server:

Using **Python 3**:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

Using **Node.js** (`npx`):
```bash
npx serve
```

---

## 🖨 Perfect PDF Export Guide

To export your resume to a flawless, print-ready A4 document on a single page, click the **Export PDF** button and use these settings in the browser print dialog:

| Print Setting | Recommended Option |
|---|---|
| **Destination** | Save as PDF / Microsoft Print to PDF |
| **Layout** | Portrait |
| **Paper size** | A4 |
| **Margins** | None (or Minimum) |
| **Background Graphics** | **ENABLED ☑** (Required to show colors and background styles) |

---

## 🔒 Privacy Policy
We believe in absolute data ownership.
* **No Tracking**: No telemetry, analytical cookies, or third-party tracking scripts.
* **Local Storage Only**: All resume information, language preferences, and dark mode states are saved locally on your device via `localStorage`.

---

## 👤 Author
Developed with ❤️ by **Iliya Glazunov**
* **Website**: [iliyaglazunov.com](https://iliyaglazunov.com)
* **GitHub**: [@iliyasalve](https://github.com/iliyasalve)
* **LinkedIn**: [Iliya Glazunov](https://fr.linkedin.com/in/iliya-glazunov)
