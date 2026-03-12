# Akhi Portfolio

A high-end, immersive portfolio built with React 19, Tailwind CSS 4, GSAP, and Framer Motion.

## Features
- **Immersive Design**: Dark modern theme with smooth animations.
- **Projects Showcase**: Horizontal scroll layout for viewing projects.
- **Contact Form**: Powered by Web3Forms for seamless communication.

## Deployment on Netlify

This project is pre-configured for deployment on [Netlify](https://www.netlify.com/).

### Steps to Deploy
1. **Connect to GitHub**: Link your repository to a new site on Netlify.
2. **Build Settings**: The project includes a `netlify.toml` file that automatically configures the build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. **Environment Variables**:
   You MUST add the following environment variable in the Netlify dashboard under **Site configuration > Environment variables**:
   - `VITE_WEBFORM_ACCESS_KEY`: Your Web3Forms access key.

## Development
To run the project locally:
```bash
cd frontend
npm install
npm run dev
```

