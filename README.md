<a id="readme-top"></a>

<div align="center">

# 🎮 GAMEZONE

### `> LEVEL UP YOUR LIBRARY_`

**Your ultimate destination for next-gen gaming reviews, esports coverage, and library management.**

<br />

![Next.js](https://img.shields.io/badge/Next.js-App_Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-UI_Library-149ECA?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-A855F7?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-22C55E?style=for-the-badge)

<br />

[**Overview**](#-overview) ·
[**Features**](#-features) ·
[**Tech Stack**](#%EF%B8%8F-tech-stack) ·
[**Getting Started**](#-getting-started) ·
[**Structure**](#-project-structure) ·
[**Contributing**](#-contributing)

</div>

<br />

---

## 🌟 Overview

**GAMEZONE** is a modern web application built for gamers to **discover, track, and manage** their favorite and purchased video games.

Wrapped in a **dark neon / cyberpunk aesthetic** with glassmorphic UI elements, it delivers smooth, responsive layouts and instant, interactive state management, all powered by **Next.js**, **React**, and **Tailwind CSS**.

> 💡 *Browse the hottest AAA and indie titles, heart your favorites, and keep a verified record of everything you own, all in one place.*

<br />

<!--
  📸 Add a screenshot or GIF of your app here, for example:
  <div align="center">
    <img src="./public/screenshot.png" alt="GAMEZONE preview" width="90%" />
  </div>
-->

---

## ✨ Features

<table>
  <tr>
    <td width="50%" valign="top">

### 🎮 Extensive Game Library
Browse a curated collection of top-tier AAA and indie titles, including **GTA VI**, **Call of Duty: Black Ops 6**, **EA Sports FC 26**, **Elden Ring**, and more.

    </td>
    <td width="50%" valign="top">

### ❤️ Favorites Management
Add or remove games from your personal favorites list in one click, with dynamic, instant feedback.

    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">

### 🛍️ Purchased Games Tracker
Keep track of the games you own, view **total playtime hours**, and manage your purchase history with **verified badges**.

    </td>
    <td width="50%" valign="top">

### 🌌 Cyberpunk & Glassmorphism UI
A custom dark theme with glowing neon accents, frosted-glass cards, smooth transitions, and satisfying hover animations.

    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">

### 📱 Fully Responsive
Mobile-first design that scales seamlessly across smartphones, tablets, and desktop displays.

    </td>
    <td width="50%" valign="top">

### ⚡ Global State Management
Powered by the **React Context API** (`GameContext`) for seamless data sync across every view.

    </td>
  </tr>
</table>

<div align="center">

### 🔔 Instant Toast Notifications
Real-time action feedback powered by **`react-toastify`**.

</div>

<p align="right"><a href="#readme-top">⬆ back to top</a></p>

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| 🧱 **Framework** | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) App Router |
| ⚛️ **Frontend Library** | ![React](https://img.shields.io/badge/React-149ECA?style=flat-square&logo=react&logoColor=white) |
| 🎨 **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) |
| 🧠 **State Management** | React Context API |
| 🖼️ **Icons & Media** | Next.js `Image` component, SVG icons |
| 🔔 **Notifications** | ![React Toastify](https://img.shields.io/badge/React_Toastify-F59E0B?style=flat-square) |

<p align="right"><a href="#readme-top">⬆ back to top</a></p>

---

## 📁 Project Structure

```text
gamezone/
├── src/
│   ├── app/
│   │   ├── layout.jsx              # Root layout with flex sticky footer & provider
│   │   ├── page.jsx                # Home / Featured games page
│   │   ├── favorites/              # Favorites page
│   │   └── purchases/              # Purchase history page
│   ├── components/
│   │   ├── Navbar.jsx              # Top navigation bar
│   │   ├── Footer.jsx              # Sticky bottom footer
│   │   ├── ListCard.jsx            # Favorites list card component
│   │   └── PurchesListCard.jsx     # Purchased game card with playtime & delete
│   ├── context/
│   │   └── GameContext.jsx         # Global state for favorites & purchases
│   └── data/
│       └── games.json              # Game dataset
├── public/                         # Static assets
├── tailwind.config.js              # Tailwind CSS configuration
└── package.json
```

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### 📋 Prerequisites

| Requirement | Version |
| :--- | :--- |
| **Node.js** | `v18.0.0` or higher |
| **Package manager** | `npm`, `yarn`, or `pnpm` |

### ⚙️ Installation

**1. Clone the repository**

```bash
git clone https://github.com/your-username/gamezone.git
cd gamezone
```

**2. Install dependencies**

```bash
npm install
# or
yarn install
```

**3. Start the development server**

```bash
npm run dev
# or
yarn dev
```

**4. Open in your browser**

Head to 👉 **[http://localhost:3000](http://localhost:3000)** and start exploring.

<p align="right"><a href="#readme-top">⬆ back to top</a></p>

---

## 🎨 UI Components Overview

| Component | Description |
| :--- | :--- |
| 🃏 **`ListCard`** | Full-width glassmorphic card showing game info, star rating, price, category tag, and an instant remove button. |
| 💚 **`PurchesListCard`** | Emerald-themed card with a verified-purchase checkmark, playtime counter, and delete action. |
| 🏗️ **`RootLayout`** | Enforces a full-height flexbox structure (`flex flex-col min-h-full`) so the footer always stays pinned to the bottom. |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

1. 🍴 **Fork** the project
2. 🌿 **Create** your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. 💾 **Commit** your changes
   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. 📤 **Push** to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. 🔀 **Open** a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

<br />

<div align="center">

**Made with 💜, neon, and way too much caffeine.**

If you like this project, drop it a ⭐ — it helps a lot!

<a href="#readme-top">⬆ Back to top</a>

</div>
