# Profile Scraper & Analytics Dashboard 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-teal.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.0-purple.svg)](https://vitejs.dev/)

A web application that fetches Instagram profile details of any creator and generates insights through a beautiful dashboard. Visualize engagement metrics, audience demographics, and post performance in one place.

---

## 🌟 Features

- Fetch Instagram profile data (followers, posts, bio, etc.)
- Calculate engagement metrics:
  - Impressions, Engagement Rate, CPM, Risk Score
- Visualize data with charts:
  - AreaChart, BarChart, PieChart
- Explore posts (images & reels) with likes and comments
- Audience insights: Age, Gender, Top Locations
- Responsive and modern UI with TailwindCSS

---

## 🛠 Tech Stack

- **Frontend:** React.js, Vite, TailwindCSS, Recharts, Lucide Icons  
- **Backend (optional):** Node.js/Python for scraping Instagram profiles  
- **Web Scraping:** Puppeteer / Playwright (Node.js) or Selenium / BeautifulSoup (Python)

---

## 📂 Project Structure

frontend/
│
├─ public/ # Static assets
├─ src/
│ ├─ components/ # Reusable components
│ ├─ pages/ # Page-level components
│ ├─ services/ # API & scraping logic
│ ├─ utils/ # Helper functions
│ ├─ App.jsx
│ └─ main.jsx
├─ index.css # Tailwind imports
└─ vite.config.js

### Installation

```bash
git clone https://github.com/yourusername/instagram-profile-scraper.git
cd instagram-profile-scraper/frontend
npm install
npm run dev