# Dhairya Patel - Portfolio Website

A modern, multi-page, fully responsive portfolio website built using React, Vite, Tailwind CSS (v4), and Framer Motion.

## Features
- **Modern Design:** Dark-themed aesthetic with subtle gradients, glassmorphism, and smooth scroll animations.
- **Fully Responsive:** Works flawlessly on mobile, tablet, and desktop viewports.
- **Multi-Page Navigation:** Uses React Router DOM for seamless navigation with Framer Motion page transitions.
- **Dynamic Avatar:** Floating avatar with glow effects as requested.
- **Contact Form:** Integrated with Formspree (ready for your Formspree ID).

## Technology Stack
- **React 19 + Vite** (Fast development environment)
- **React Router DOM v7** (Client-side routing)
- **Tailwind CSS v4** (Utility-first styling with custom design tokens)
- **Framer Motion** (Animations and page transitions)
- **Lucide React** (Beautiful consistent icons)

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```
   *The built files will be in the `dist` directory.*

## Setup Notes for Dhairya
- **Avatar Image:** Ensure the image `Gemini_Generated_Image_19vm1219vm1219vm.png` is placed inside the `public` folder.
- **Resume:** Place your resume PDF in the `public` folder and name it `resume.pdf`.
- **Contact Form:** To receive emails, go to `src/pages/Contact.jsx` and replace the Formspree endpoint URL with your actual Formspree form ID.
