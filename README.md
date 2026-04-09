# Professional Developer Portfolio Monorepo

Welcome to the Professional Developer Portfolio! This is a production-ready, full-stack application designed to showcase your skills, projects, and experiences with a premium aesthetic.

## 🏗 Architecture

This project is built using a monorepo structure:
- **Frontend**: React (Vite), Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express (Serverless-friendly for Vercel)
- **Database**: Supabase (PostgreSQL)

## 📁 Repository Structure

```
/portfolio-project
  /frontend       # React + Vite application
  /backend        # Express.js REST API
  /supabase       # Database schema and setup guides
  README.md       # This file
```

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v18+)
- npm or yarn

### 1. Frontend Setup
1. Open a terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`.

### 2. Backend Setup
1. Open another terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - *Note: For local development without Supabase, the backend will return fallback data.*
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   The backend API will be available at `http://localhost:5000`.

## 🗄️ Connecting to Supabase

To make the application dynamic, connect it to Supabase:
1. Follow the instructions in `supabase/setup.md` to create your database and run the schema.
2. In the `backend` folder, update `.env` with your Supabase credentials:
   ```env
   SUPABASE_URL=your_project_url
   SUPABASE_ANON_KEY=your_anon_key
   ```
3. The backend API will automatically use the database instead of fallback data once keys are provided.

## ⚙️ Deployment to Vercel

This monorepo is fully optimized for Vercel deployment. You will be deploying the frontend and backend as two separate Vercel projects from this monorepo.

### Step 1: Deploying the Backend API
1. Push your code to a GitHub repository.
2. Log into Vercel and click "Add New Project".
3. Import your GitHub repository.
4. **Important**: In the project configuration, edit the "Root Directory" and set it to `backend`.
5. Under "Environment Variables", add:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
6. Click "Deploy".
7. Once deployed, note down the production URL of your backend api (e.g., `https://my-backend-api.vercel.app`).

### Step 2: Deploying the Frontend
1. Back on Vercel dashboard, click "Add New Project" again.
2. Import the *same* GitHub repository.
3. In the project configuration, edit the "Root Directory" and set it to `frontend`.
4. Ensure the Framework Preset is set to "Vite".
5. Click "Deploy".

*(Note: If you want the frontend to use the live backend API, update the fetch urls in `src/components/Projects.jsx` and `src/components/Contact.jsx` from `http://localhost:5000` to your Vercel backend URL, or use environment variables).*

## 🌟 Customization
- **Theme**: Modify `tailwind.config.js` in the frontend to change colors and typography.
- **Content**: Update the placeholders in `src/components/` (About, Experience, Hero).
- **Images**: Place your profile and project pictures in `frontend/public/images/`.

### Extra Features Included
- **Animations**: Powered by Framer Motion.
- **Glassmorphism Design**: High-end modern UI effects setup in `index.css`.
- **Responsive**: Mobile-first design for all device types.
- **SEO Ready**: Basic meta tags setup in `index.html`.
