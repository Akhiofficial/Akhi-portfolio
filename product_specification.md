# Product Specification Document: Akhi Portfolio

## 1. Project Mission & Goals
The **Akhi Portfolio** is a high-end, immersive web application designed to showcase the professional work, skills, and creative experiments of Akhi. The goal is to provide a visually stunning, premium experience that reflects a high level of craftsmanship in frontend engineering and design.

## 2. Core Features

### 2.1 Navigation
- **Custom Cursor**: A dynamic, interactive cursor that follows the user and changes state based on interactions.
- **Magnetic Navbar**: A premium navigation bar with magnetic effects for links, providing a tactile feel.

### 2.2 Hero Section
- **Immersive Introduction**: A high-impact hero area with refined typography and smooth GSAP/Framer Motion entrance animations.
- **"Say Hello" Component**: A floating interactive element to encourage immediate contact engagement.

### 2.3 Projects Showcase
- **Horizontal Scroll Layout**: A dedicated projects page utilizing horizontal scrolling for a cinematic portfolio experience.
- **Dynamic Filtering**: Category-based filtering (All, MERN Stack, WordPress, Experiments) with smooth transitions.
- **Project Cards**: Detailed cards featuring tech badges, project descriptions, and parallax image effects.

### 2.4 About & Skills
- **Storytelling Layout**: A structured "About Me" section detailing experience and technical philosophy.
- **Skills Matrix**: Visual representation of technical expertise across frontend, backend, and creative tools.

### 2.5 Contact System
- **Web3Forms Integration**: A fully functional contact form powered by Web3Forms for seamless client communication without a custom backend.
- **Success/Error States**: Interactive feedback loops for form submission.

## 3. Technical Specifications

### 3.1 Frontend Tech Stack
- **Framework**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)

### 3.2 Key Architecture Patterns
- **Data-Driven UI**: Projects and skills are managed through centralized data files (e.g., `src/data/projects.js`) for easy maintenance.
- **Animation Orchestration**: Heavy usage of `useGSAP` and `ScrollTrigger` for complex, performance-optimized scroll-driven animations.

## 4. Design Language
- **Theme**: Dark modern aesthetic with high-contrast accent colors (e.g., `#00FF9C`).
- **Typography**: Clean, monospace-influenced headers mixed with modern sans-serif body text.
- **Micro-interactions**: Extensive use of magnetic buttons, hover parallax, and smooth state transitions.

## 5. Future Roadmap
- **Case Study Pages**: Detailed pages for each project with deeper technical dives.
- **Dynamic Backend**: Transition from static data to a CMS or custom API for real-time project management.
- **Interactive 3D Elements**: Integration of Three.js for more immersive hero backgrounds or skill visualizations.
