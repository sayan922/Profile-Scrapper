# 📊 Instagram Profile Scraper & Analytics Dashboard 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-teal.svg)](https://tailwindcss.com/)  
[![Vite](https://img.shields.io/badge/Vite-4.0-purple.svg)](https://vitejs.dev/)  
[![Node.js](https://img.shields.io/badge/Node.js-20-green.svg)](https://nodejs.org/)  
[![Python](https://img.shields.io/badge/Python-3.12-blue.svg)](https://www.python.org/)  

A modern web application that fetches Instagram profile details of any creator and generates actionable insights through a sleek analytics dashboard. Track engagement, audience demographics, and post performance all in one place.  

---

## 🌟 Key Features

- **Profile Insights:** Fetch followers, posts, bio, and other public metrics.  
- **Engagement Analytics:** Calculate engagement rate, impressions, CPM, and risk score.  
- **Post Exploration:** View images, reels, likes, and comments.  
- **Audience Insights:** Analyze top locations, age, and gender distribution.  
- **Data Visualization:** Beautiful charts using **Recharts** (AreaChart, BarChart, PieChart).  
- **Responsive UI:** Built with **TailwindCSS** for modern and mobile-friendly design.  
- **Flexible Backend:** Supports scraping with **Python (BeautifulSoup/Selenium)** or **Node.js (Puppeteer/Playwright)**.  

---

## 🛠 Tech Stack

- **Frontend:** React.js, Vite, TailwindCSS, Recharts, Lucide Icons  
- **Backend (Optional):** Node.js / Python  
- **Web Scraping:** Puppeteer / Playwright (Node.js) or Selenium / BeautifulSoup (Python)  
- **State Management:** React Hooks / Context API  
- **Routing:** React Router  
- **API Calls:** Axios / Fetch  

---

## 📂 Project Structure

```bash
frontend/
│
├─ public/            # Static assets (images, fonts, etc.)
├─ src/
│  ├─ components/     # Reusable UI components (charts, cards, buttons)
│  ├─ pages/          # Page-level components (Dashboard, Profile, Analytics)
│  ├─ services/       # API & scraping logic
│  ├─ utils/          # Helper functions & constants
│  ├─ App.jsx         # Main app component
│  └─ main.jsx        # Entry point
├─ index.css           # TailwindCSS imports
└─ vite.config.js      # Vite configuration


## ⚡ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/instagram-profile-scraper.git

Frontend:
cd instagram-profile-scraper/frontend
npm install
npm run dev

Backend:
cd Flask Backend
pip install -r requirements.txt
python app.py

Open "http://localhost:5173" in your browser