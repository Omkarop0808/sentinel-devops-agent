<div align="center">

# 🛡️ Sentinel

### AI-Powered DevOps Intelligence Agent

*Autonomous monitoring. Predictive healing. Always awake.*

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[Live Demo](https://sentinel-devops.vercel.app) • [View Dashboard](/dashboard) • [Interactive Demo](/demo)

</div>

---

## 🎯 Overview

**Sentinel** is an autonomous AI agent that monitors your infrastructure 24/7, predicts failures before they happen, and automatically heals incidents—all while explaining its reasoning transparently.

Built for the **AI Agents Assemble Hackathon** by WeMakeDevs, Sentinel demonstrates how AI can transform DevOps from reactive firefighting to proactive, self-healing operations.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔍 **24/7 Monitoring** | Continuous observation of all services with real-time metrics |
| 🧠 **Predictive Intelligence** | ML-powered failure prediction before outages occur |
| ⚡ **Autonomous Healing** | Automatic incident resolution with configurable workflows |
| 📊 **Transparent Reasoning** | Full visibility into AI decision-making process |
| 🎛️ **Interactive Dashboard** | Real-time visualization of system health and incidents |
| 📱 **Responsive Design** | Works seamlessly on desktop, tablet, and mobile |

---

## 🖼️ Screenshots

### Landing Page
![Landing Page](docs/screenshots/landing.png)

### Dashboard Overview
![Dashboard](docs/screenshots/dashboard.png)

### Interactive Demo
![Demo Mode](docs/screenshots/demo.png)

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16+ (App Router) |
| **Language** | TypeScript 5.0 |
| **Styling** | Tailwind CSS 4.0 |
| **Charts** | Recharts |
| **Animations** | Framer Motion |
| **3D Graphics** | Three.js (React Three Fiber) |
| **Icons** | Lucide React |
| **Fonts** | Geist Sans & Mono |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/SKfaizan-786/sentinel-devops-agent.git
cd sentinel-devops-agent/sentinel-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
sentinel-frontend/
├── app/                    # Next.js App Router pages
│   ├── dashboard/          # Dashboard pages
│   │   ├── analytics/      # Analytics charts & tables
│   │   ├── incidents/      # Incident management
│   │   ├── logs/           # Log viewer
│   │   ├── services/       # Service grid
│   │   └── settings/       # User preferences
│   ├── demo/               # Interactive demo
│   ├── login/              # Authentication
│   └── signup/             # Registration
├── components/
│   ├── analytics/          # Chart components
│   ├── common/             # Reusable UI components
│   ├── dashboard/          # Dashboard widgets
│   ├── incidents/          # Incident components
│   ├── landing/            # Landing page sections
│   ├── layout/             # Layout components
│   ├── logs/               # Log viewer components
│   └── settings/           # Settings panels
├── hooks/                  # Custom React hooks
│   ├── useMetrics.ts       # Real-time metrics
│   ├── useIncidents.ts     # Incident management
│   ├── useLogs.ts          # Log streaming
│   └── useWebSocket.ts     # WebSocket simulation
├── lib/                    # Utilities
│   ├── mockData.ts         # Demo data
│   └── utils.ts            # Helper functions
└── public/                 # Static assets
```

---

## 🎮 Demo Instructions

### Interactive Demo (`/demo`)

Experience Sentinel's self-healing capabilities through a simulated incident scenario:

1. **Navigate to** `/demo`
2. **Click Play** to start the automated walkthrough
3. **Watch the 5-step scenario:**
   - Step 1: Normal Operations (all systems healthy)
   - Step 2: Traffic Spike (latency increasing)
   - Step 3: Service Failure (Auth service OOM crash)
   - Step 4: AI Mitigation (Sentinel initiates rollback)
   - Step 5: Recovery (system stabilized)

**Controls:**
- ▶️ Play/Pause: Auto-advance through steps
- Click step indicators to jump to specific scenarios
- 🔄 Reset: Return to beginning

---

## 📊 Dashboard Pages

| Page | Route | Description |
|------|-------|-------------|
| **Overview** | `/dashboard` | System health summary, service grid, live metrics |
| **Analytics** | `/dashboard/analytics` | Historical charts, performance tables |
| **Services** | `/dashboard/services` | Detailed service cards with status |
| **Incidents** | `/dashboard/incidents` | Incident history with filters |
| **Logs** | `/dashboard/logs` | CLI-style log viewer with streaming |
| **Settings** | `/dashboard/settings` | Profile, notifications, API keys |

---

## 🎨 Design Philosophy

Sentinel follows the **Function–Aesthetic–Layout** formula:

### Landing Page
- **Function:** High-conversion SaaS marketing
- **Aesthetic:** Aurora Gradient + Glassmorphism
- **Layout:** Scrollytelling with Bento sections

### Dashboard
- **Function:** Real-time DevOps monitoring
- **Aesthetic:** Dark Glassmorphism
- **Layout:** Bento Grid with card-based widgets

---

## 🔗 API Endpoints (Future Integration)

```
GET  /api/services              # List all services
GET  /api/services/:id          # Service details
GET  /api/incidents             # List incidents
GET  /api/incidents/:id         # Incident details
GET  /api/metrics               # Metrics data
GET  /api/logs                  # Log search
WS   /api/stream                # Real-time updates
```

---

## 📈 Performance

- **Landing Page Load:** < 2s
- **Dashboard Initial Load:** < 3s
- **Real-time Updates:** < 500ms latency
- **Lighthouse Score:** 90+ (Performance)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

Built with ❤️ for the **AI Agents Assemble Hackathon**

---

<div align="center">

**[⬆ Back to Top](#-sentinel)**

</div>
