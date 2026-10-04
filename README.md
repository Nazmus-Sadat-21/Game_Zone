<div align="center">

# 🎮 GAME ZONE

**The Ultimate High-Performance Gaming Platform**

A modern, full-stack web application built for gamers. Featuring dynamic game discovery, seamless authentication, interactive purchasing flows, and an immersive cyber-neon dark interface.

[Features](#-key-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [Environment Variables](#-environment-variables)

---

</div>

## 🌟 Key Features

- **⚡ Modern App Router Architecture**: Built with Next.js App Router for optimal server-side performance, routing, and instant page transitions.
- **🔐 Session-Based Authentication**: Powered by `better-auth` for secure, frictionless login, signup, and active session management.
- **🎨 Sleek Cyberpunk UI/UX**: High-contrast dark theme styled with Tailwind CSS, DaisyUI components, and glowing cyan/fuchsia gradient accents.
- **📱 Fully Responsive Design**: Mobile-first navigation with clean dynamic drawers, adaptive user avatars, and desktop layouts.
- **🛒 Interactive Purchase Flows**: Dynamic routing with context-driven state management for smooth item additions and checkouts.
- **🔔 Real-time Notifications**: Integrated `react-toastify` toast system providing instant feedback on user actions and system state changes.

---

## 🛠 Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) | React framework with App Router & Server Components |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/) | Utility-first CSS framework with UI components |
| **Authentication** | [better-auth](https://better-auth.com/) | Modern session management & user auth |
| **Database** | [MongoDB](https://www.mongodb.com/) | NoSQL database for games, users, and transactions |
| **State & Context** | React Context API | Global state management via `GameContext` |
| **Icons & Typography** | Geist & Geist Mono | Next.js Google Fonts optimization |
| **Notifications** | [React Toastify](https://fkhadra.github.io/react-toastify/) | Customizable toast alerts |

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.x or higher)
- **npm**, **yarn**, or **pnpm**
- **MongoDB** instance (local or MongoDB Atlas cluster)

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/game-zone.git](https://github.com/your-username/game-zone.git)
   cd game-zone