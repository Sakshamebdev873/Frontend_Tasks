# Floating Hero Section - Legal Platform

A pixel-perfect, fully responsive replication of a "Legal Work Platform" hero section. Built with Next.js, this project features a split layout with animated, floating UI elements that gracefully stack on mobile devices.

## ✨ Key Features

* **Responsive Layout:** "Chaotic but organized" floating cards on desktop, gracefully falling back to a clean vertical stack on mobile.
* **Framer Motion Animations:** Smooth, staggered entrance animations and a continuous organic floating effect for the cards (disabled on mobile for better UX).
* **Component Architecture:** Features a highly reusable `<FloatingCard />` component capable of handling standard icon/label props as well as custom layout variants (e.g., the "John Doe" portal card).
* **Dark Mode Support:** Fully integrated light and dark themes using `next-themes` and Tailwind CSS v4 custom variants.
* **Visual Polish:** Accurately recreated typography hierarchy, drop shadows, and solid decorative background pills bleeding off the screen edges.

## 🛠 Tech Stack

* **Framework:** Next.js 14+ (App Router)
* **Styling:** Tailwind CSS (v4)
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Theming:** `next-themes`

## 🚀 Getting Started

1. **Clone the repository and install dependencies:**
   ```bash
   npm install