# Supabase Setup Guide

## 1. Create a Supabase Project
1. Go to [Supabase](https://supabase.com/) and create an account or sign in.
2. Click on "New Project".
3. Select an organization, name your project (e.g., "Samuel Portfolio"), and set a strong database password.
4. Choose a region closest to your target audience.
5. Click "Create new project". It will take a few minutes for the database to be provisioned.

## 2. Run Database Schema
1. Once your project is ready, navigate to the **SQL Editor** from the left sidebar.
2. Click on "New query".
3. Copy the contents of the `schema.sql` file in this folder and paste it into the SQL editor.
4. Click "RUN" to execute the SQL query. It will create the `projects` and `contacts` tables, set up the necessary Row Level Security (RLS) policies, and insert sample project data.

## 3. Get API Keys
1. Go to **Project Settings** (the gear icon on the left sidebar).
2. Click on **API** under the Configuration section.
3. You will need two pieces of information:
   - **Project URL**: Found under "Project URL".
   - **Project API Key (anon/public)**: Found under "Project API keys".

## 4. Configure Backend environment
1. In your `backend` folder, copy `.env.example` to a new file named `.env`.
2. Update the variables with the keys you just copied:
   ```
   SUPABASE_URL=your_project_url
   SUPABASE_ANON_KEY=your_anon_key
   ```

## 5. Storage for Images (Optional)
If you want to host your project images on Supabase:
1. Go to **Storage** on the left sidebar.
2. Create a new bucket named `portfolio`.
3. Make the bucket "Public".
4. Upload your images here and replace the `image_url` fields in the database with the public URL provided by Supabase.
