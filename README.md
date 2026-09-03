Interactive 3D Portfolio Website

An interactive personal portfolio website featuring animated 3D scenes, smooth camera transitions, interactive model showcases, and a fully responsive design.

Tech Stack
React 19
Three.js
React Three Fiber
Drei
GSAP
Tailwind CSS
Vite
Features
Animated 3D models with reveal animations
Realistic lighting and shadows
GSAP-powered scroll interactions
Responsive layout with Tailwind CSS (Flexbox/Grid)
Micro-interactions throughout the UI
Multi-section layout (About, Projects, Contact)
Mobile-optimized 3D experience
Getting Started
Prerequisites
Git
Node.js
npm (comes with Node.js)
Setup
bash
git clone https://github.com/Talib3102/3d-portfolio.git
cd 3d-portfolio
npm install
Environment Variables

Create a .env file in the project root:

env
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=

Fill in the values with your own EmailJS credentials.

Run Locally
bash
npm run dev

Then open http://localhost:5173 in your browser.

Based on the 3D Portfolio project structure by JavaScript Mastery, customized and maintained here.
