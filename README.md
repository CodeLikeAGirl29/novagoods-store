# Nova Goods — Sapphire Edition
### Full-Stack Precision E-Commerce Interface

**Nova Goods** is a high-end, full-stack e-commerce platform built for the "Quiet Luxury" market. Transitioning from a classic cyberpunk aesthetic to a sophisticated **Electric Sapphire** visual identity, this project demonstrates the integration of a modern React frontend with a secure Node.js/Express backend and a PostgreSQL database.

![Project Status](https://img.shields.io/badge/System-Operational-2563EB?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-PERN-blue?style=for-the-badge)

> you can view my project [here](https://novagoods-store.vercel.app/)

---

## 💎 The Sapphire Evolution
Originally conceived with a high-contrast cyan palette, Nova Goods underwent a strategic rebrand to **Electric Sapphire**. This shift represents a transition toward professional authority and luxury market positioning.
* **Primary Palette:** Electric Blue (`#2563EB`) & Deep Obsidian Navy (`#0F172A`).
* **Visual Language:** Glassmorphism, tight-tracking typography, and high-entropy sapphire glows.

## 🚀 Technical Architecture

### Core Stack
* **Frontend:** React 18, Vite, TypeScript, Tailwind CSS.
* **Backend:** Node.js, Express.js.
* **Database:** PostgreSQL via Supabase.
* **State Management:** Zustand (for high-performance cart synchronization).
* **Animations:** Framer Motion for system-fluid transitions.

### Key Engineering Features
* **Dynamic Data Fetching:** A custom-built API utility that maps PostgreSQL snake_case fields to camelCase frontend props.
* **Full-Stack Routing:** Implemented React Router with dynamic segments (`/product/:id`) to handle thousands of unique SKU views from a single component.
* **Zustand Store:** A persistent cart system that manages inventory state and provides real-time updates to the sapphire-glow notification badge.
* **Responsive Design:** A mobile-first, grid-based layout that adapts from 1 to 5 columns depending on device viewport.

---

## 🛠️ System Configuration

### Frontend Installation
```bash
git clone https://github.com/codelikeagirl29/novagoods-store.git
cd novagoods-store
npm install
npm run dev
```

### Backend Installation
```bash
cd server
npm install
# Ensure .env is configured with DATABASE_URL and JWT_SECRET
npm start
```

## 📂 Project Structure
```text
├── src/
│   ├── components/      # Glassmorphism UI & Navigation
│   ├── lib/             # API Utility & Data Normalization
│   ├── store/           # Zustand Cart Logic
│   ├── pages/           # Shop, Collections, & Product Details
│   └── styles.css       # Sapphire HSL Color Tokens
└── server/
    ├── src/config/      # PostgreSQL Pool Logic
    ├── src/controllers/ # API Request Logic
    └── src/routes/      # Endpoint Definitions
```

---

## 🛰️ Deployment Strategy
* **Frontend:** Optimized and deployed via **Vercel** with environment-variable-injected API endpoints.
* **Backend:** Hosted on **Render**, utilizing an Express.js web service.
* **Database:** **Supabase** instance providing a secure, cloud-hosted PostgreSQL layer.

## ⚖️ License
This project is part of **lindseykdev** professional portfolio. 
*Designed and Engineered by Lindsey Howard.*