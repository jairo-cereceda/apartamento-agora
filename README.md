# 🏠 Apartamento Ágora - Accommodation Demo

A modern website demo for a holiday rental apartment, showcasing property details, amenities, photo gallery, location, and booking/contact information.

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/) - High-performance web framework designed for content-focused websites and fast loading speeds.
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Modern utility-first CSS styling integrated via `@tailwindcss/vite`.
- **Icons:** [Astro Icon](https://github.com/natemoo-re/astro-icon) - High-performance icon management.
- **Testing:** [Playwright](https://playwright.dev/) - Reliable end-to-end and component testing.
- **Linting & Formatting:** ESLint & Prettier - Maintaining code quality, formatting, and consistency.

## 📁 Project Structure

```text
├── public/             # Static assets
│   └── fonts/          # Custom web fonts
├── src/
│   ├── assets/         # Optimizable Assets
│   │   └── imgs/
│   ├── components/     # Reusable UI components
│   │   ├── atoms/
│   │   ├── molecules/
│   │   └── organisms/
│   ├── data/           # Site data
│   ├── icons/          # Custom SVG icons
│   ├── layouts/        # Page layouts
│   ├── pages/          # Site routes and views
│   ├── styles/         # Global CSS and Tailwind directives
│   └── utils/          # Reusable functions
├── tests/              # Page and feature tests
├── package.json        # Project metadata and dependencies
└── astro.config.mjs    # Astro configuration
```

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed:

- **Node.js:** `>=22.12.0`

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:jairo-cereceda/apartamento-agora.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd apartamento-agora
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

### Development

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:4321` in your browser to view the site.

## 📜 Available Scripts

| Script            | Description                            |
| :---------------- | :------------------------------------- |
| `npm run dev`     | Starts the local development server.   |
| `npm run build`   | Builds the site for production.        |
| `npm run preview` | Previews the production build locally. |
| `npm run test`    | Runs tests using Playwright.           |

## 🌐 Deployment (GitHub Pages)

> This site is deployed and hosted on [Vercel](https://apartamento-agora.vercel.app/).

## ✒️ Author

**Jairo Cereceda Berciano**

- **GitHub:** [@jairo-cereceda](https://github.com/jairo-cereceda)
- **LinkedIn:** [Jairo Cereceda Berciano](https://www.linkedin.com/in/jairo-cereceda-berciano/)
