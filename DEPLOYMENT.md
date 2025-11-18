# Deployment Guide

## Creating GitHub Repository and Deploying to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository name: `my-todo-app` (or your preferred name)
5. Description: "React Todo App with Redux and 3D Cosmic Flight Simulation"
6. Set to **Public**
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click "Create repository"

### Step 2: Push Code to GitHub

Open PowerShell/Terminal in the project directory and run:

```powershell
cd "C:\Users\Dziyana_Yankouskaya\Desktop\2025\AI\My todo app"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/my-todo-app.git

# Rename branch to main if needed
git branch -M main

# Push code
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **"GitHub Actions"**
5. The GitHub Actions workflow will automatically deploy your app

### Step 4: Update Base Path (if repository name is different)

If your repository name is NOT `my-todo-app`, update `vite.config.js`:

```javascript
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
```

### Step 5: Access Your Deployed App

After the GitHub Actions workflow completes (check the **Actions** tab), your app will be available at:

```
https://YOUR_USERNAME.github.io/my-todo-app/
```

### Troubleshooting

- **Workflow fails**: Check the Actions tab for error messages
- **404 on GitHub Pages**: Ensure the base path in `vite.config.js` matches your repository name
- **Assets not loading**: Verify the base path includes the trailing slash

## Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will:
- Automatically build the app when you push to `main`
- Deploy to GitHub Pages
- Run on every push to `main` branch

No manual steps needed after initial setup!

