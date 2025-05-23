﻿# Bookmark Manager Micro SaaS

## Overview

The Bookmark Manager is a simple, privacy-focused Micro SaaS application built for the **Advanced DevOps Practices for Enterprise-Scale Micro SaaS Development** course (**IT31023, Intake 11 Term 1**). It allows users to save, categorize, and manage web bookmarks using a subscription-based model, implemented with HTML, CSS, and JavaScript. The app is deployed on **Vercel** with a CI/CD pipeline managed by **GitHub Actions**, adhering to enterprise-grade DevOps practices.

## Features

* Add and delete bookmarks with URL and optional category.
* Mark bookmarks as completed (strikethrough).
* Client-side storage using `localStorage` for persistence.
* Responsive design with clean styling.
* Automated CI/CD pipeline with linting and production deployment.

## Tech Stack

* **Frontend**: HTML, CSS, JavaScript
* **Deployment**: Vercel
* **CI/CD**: GitHub Actions
* **Linting**: `htmlhint`, `stylelint` (handled in pipeline)

## Setup and Deployment

This project is designed to run **without local dependencies** (e.g., npm or Vercel CLI). All linting, building, and deployment are managed via GitHub Actions.

### Prerequisites

* A GitHub account and repository (`bookmark-manager`).
* A Vercel account linked to the repository for deployment.
* Git installed locally for version control.

### Local Development

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Imashiuthpala/bookmark-manager.git
   cd bookmark-manager
   ```
2. **Edit Files**:

   * Modify `index.html`, `styles.css`, or `script.js` as needed.
   * No local linting tools required; linting is handled by GitHub Actions.
3. **Test Locally**:

   * Open `index.html` in a browser to preview the app.
   * Add bookmarks to verify functionality.

## CI/CD Pipeline

The pipeline is defined in `.github/workflows/ci-cd.yml` and runs on push or pull request to the `main` branch. It:

* Lints HTML (`htmlhint`) and CSS (`stylelint` with auto-fixing).
* Builds the app for production (`vercel build --prod` for main).
* Deploys to Vercel (production for `main`, preview for other branches).

### Key Files

* `.stylelintrc.json`: Configures `stylelint` rules for CSS.
* `runbook.md`: Documents pipeline setup and incident response.

## Deployment

### Vercel Setup

1. Link the repository to a Vercel project via the Vercel dashboard.
2. Set environment secrets in GitHub:

   * `VERCEL_TOKEN`: Vercel API token.
   * `VERCEL_ORG_ID`: Vercel organization ID.
   * `VERCEL_PROJECT_ID`: Vercel project ID.

### Trigger Deployment

```bash
git add .
git commit -m "Update app"
git push origin main
```

The pipeline automatically builds and deploys to Vercel.

### Access the App

Visit the Vercel production URL https://bookmark-manager-liard.vercel.app/.

## Documentation

* **Runbook**: `runbook.md` details the CI/CD pipeline, local development, monitoring, and incident response.
* **Stylelint Config**: `.stylelintrc.json` ensures CSS compliance with short hex codes and modern color notation.
* **Source Code**: `index.html`, `styles.css`, `script.js` contain the app's core functionality.

## Monitoring

* **Client-Side Analytics**: Logs page loads and user interactions to the browser console.
* **Vercel Analytics**: Enabled in the Vercel dashboard for performance metrics.

## Academic Integrity

This project was completed individually as per the assignment guidelines. Discussions with classmates were limited to concepts and approaches, and all submitted work is my own.

## AI Usage

This project used Grok (xAI) for guidance on:

* Setting up the CI/CD pipeline with GitHub Actions.
* Resolving `stylelint` errors without local npm.
* Fixing Vercel deployment environment mismatch issues.
* Structuring documentation and troubleshooting steps.

All code, configurations, and documentation were written by the student.

## Troubleshooting

* **Pipeline Fails**: Check GitHub Actions logs for `stylelint` or deployment errors. Verify `styles.css` and `.stylelintrc.json`.
* **Deployment Fails**: Ensure Vercel secrets are correct in GitHub. Check Vercel dashboard logs.
* **App Not Loading**: Confirm `index.html` links to `styles.css` and `script.js` correctly.

## License

This project is for educational purposes only and not licensed for commercial use.
