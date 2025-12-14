# GitHub Pages Deployment Guide

This guide explains how to deploy the website to GitHub Pages.

## Automatic Deployment

The repository is configured with GitHub Actions to automatically deploy to GitHub Pages whenever you push to the `main` branch.

### How It Works

1. Push changes to the `main` branch
2. GitHub Actions workflow triggers automatically
3. The site is built and deployed to GitHub Pages
4. Your site is live at `https://yourusername.github.io/lucas-herrera-web/`

## Initial Setup (One-Time)

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Save

### 2. Verify the Workflow File

Ensure `.github/workflows/deploy.yml` exists in your repository. This file is already created and configured.

### 3. Push to Main

```bash
git add .
git commit -m "Initial setup"
git push origin main
```

### 4. Check Deployment Status

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You should see a workflow run in progress or completed
4. Once successful, your site is live!

## Viewing Your Site

After deployment, your site will be available at:

```
https://yourusername.github.io/lucas-herrera-web/
```

Replace `yourusername` with your GitHub username.

## Manual Deployment

If you need to trigger a deployment manually:

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Select "Deploy to GitHub Pages" workflow
4. Click **Run workflow** → **Run workflow**

## Updating the Site

Simply push your changes to the `main` branch:

```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

The site will automatically rebuild and deploy within a few minutes.

## Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain name
3. Click **Save**
4. Add a CNAME file to the `public/` folder with your domain:
   ```
   yourdomain.com
   ```
5. Configure your domain's DNS settings:
   - For apex domain: Add A records pointing to GitHub's IPs
   - For subdomain: Add a CNAME record pointing to `yourusername.github.io`

See [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for detailed instructions.

## Troubleshooting

### Deployment Failed

1. Go to the **Actions** tab
2. Click on the failed workflow run
3. Check the error logs for details

Common issues:
- **Build errors**: Check for TypeScript/ESLint errors in your code
- **Missing dependencies**: Ensure `package.json` is up to date

### 404 Errors on Routes

This is normal for single-page applications. The app handles routing client-side. If you directly access a URL like `/portfolio`, you may see a 404 until the React app loads.

The configuration already uses the correct `basename` for React Router to work with GitHub Pages.

### Changes Not Showing

1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Check the Actions tab to ensure deployment completed successfully

### Workflow Permissions Error

If the workflow fails with permissions errors:

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select "Read and write permissions"
3. Save and re-run the workflow
