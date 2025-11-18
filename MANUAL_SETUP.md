# Manual GitHub Repository Setup

## Quick Setup (Recommended)

### Option 1: Using the Script with Token

1. **Get a GitHub Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name: "Create Repo Token"
   - Select scope: **`repo`** (full control)
   - Click "Generate token"
   - **Copy the token immediately** (you won't see it again!)

2. **Run the script:**
   ```powershell
   cd "C:\Users\Dziyana_Yankouskaya\Desktop\2025\AI\My todo app"
   .\create-repo-with-token.ps1 -Token "your_token_here"
   ```

   Or set as environment variable:
   ```powershell
   $env:GITHUB_TOKEN = "your_token_here"
   .\create-repo-with-token.ps1
   ```

### Option 2: Manual Creation via Web Interface

1. **Create Repository on GitHub:**
   - Go to: https://github.com/new
   - Repository name: `my-todo-app`
   - Description: `React Todo App with Redux and 3D Cosmic Flight Simulation to Mars`
   - Set to **Public** ✅
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Push Your Code:**
   ```powershell
   cd "C:\Users\Dziyana_Yankouskaya\Desktop\2025\AI\My todo app"
   
   # Add remote with github.com-personal host
   git remote add origin https://github.com-personal/diana-yankovska/my-todo-app.git
   
   # Ensure main branch
   git branch -M main
   
   # Push code
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to: https://github.com/diana-yankovska/my-todo-app/settings/pages
   - Under "Source", select **"GitHub Actions"**
   - The deployment will start automatically

4. **Access Your App:**
   - After deployment completes (check Actions tab), your app will be at:
   - https://diana-yankovska.github.io/my-todo-app/

## Troubleshooting

**If push fails:**
- Check that the repository exists on GitHub
- Verify your git credentials are configured for `github.com-personal`
- Try: `git config --global credential.helper manager-core`

**If Pages doesn't work:**
- Make sure you selected "GitHub Actions" as the source (not "Deploy from a branch")
- Check the Actions tab for any workflow errors
- Wait 2-3 minutes for GitHub Pages to propagate

