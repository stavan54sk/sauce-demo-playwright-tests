# Sauce Demo Automation Suite

This project contains an automated end-to-end test suite for the [Sauce Labs Demo website](https://www.saucedemo.com) using Playwright. The suite covers the customer flow of selecting items, adding/removing items from the cart, validating prices, and completing the checkout process.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup Guide](#setup-guide)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests in CI/CD Pipeline](#running-tests-in-cicd-pipeline)
- [Running Tests Locally](#running-tests-locally)



## Prerequisites

1. **Install Node.js and Set Up PATH**
   - Install Node.js by following the official guide: [Node.js Installation Guide](https://nodejs.org/en/download/)
   - Make sure to **add Node.js to your PATH** during installation. You can follow this detailed guide to set it up: [Setting up Node.js PATH](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
   
2. **Install Visual Studio Code (VS Code)**
   - Install Visual Studio Code by visiting the official download page: [VS Code Installation](https://code.visualstudio.com/download).
   - For setting up VS Code and customizing your environment, refer to this guide: [VS Code Setup Documentation](https://code.visualstudio.com/docs/getstarted/keybindings).

## Setup Guide

Once prerequisites are installed, clone this repository and set up the project.

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/stavan54sk/sauce-demo-playwright-tests.git
   cd sauce-demo-playwright-tests

2. **Install Dependencies:**:

   ```bash
   npm install

3. **Install Playwright Browsers:**:

   ```bash
   npx playwright install

## Project Structure
   - .github/playwright.yml - Configuration file to run the tests automatically on push or pull request events.
   - pageObjects/ – Contains the Page Object Model (POM) classes for each page on the Sauce Demo site.
   - playwright-report – Contains the HTML test report that is generated after the test run.
   - test-results/ - Contains the execution results, including artifacts like screenshots and videos  after the test run.
   - tests/ – Contains test files for different test cases.
   - package.json – Configuration file for managing project dependencies, scripts, and configurations, enabling smooth automation and test execution through Playwright, as well as integrating with the CI/CD pipeline. 
   - package-lock.json – Configuration file for dependency versions across different environments, providing a reliable and reproducible setup for all team members and CI/CD systems.
   - playwright.config.js – Configuration file for Playwright test settings.

## Running Tests in CI/CD Pipeline
   - Push your changes to your GitHub repository.
   - The workflow defined in .github/workflows/playwright.yml will automatically execute the tests.
   - You can view the test results in the GitHub Actions tab, where logs, screenshots, and videos are available for debugging.
   - 
## Running Tests Locally
   - Ensure all dependencies are installed by running npm install in your terminal.
   - To execute all tests, run the following command:
   ```bash
   npx playwright test


