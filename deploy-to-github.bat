@echo off
cd /d "%~dp0"
echo Deploying to GitHub Pages...
echo.

echo Checking Git installation...
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or not in PATH.
    echo Please install Git from https://git-scm.com/download/win
    echo Or use GitHub Desktop: https://desktop.github.com/
    pause
    exit /b 1
)

echo Git found!
echo.

echo Checking remote repository...
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo Adding remote repository...
    git remote add origin https://github.com/Mattias957/matthias957.github.io.git
) else (
    echo Remote already configured.
    git remote set-url origin https://github.com/Mattias957/matthias957.github.io.git
)

echo.
echo Staging all changes...
git add .

echo.
echo Committing changes...
git commit -m "Configure for GitHub Pages deployment"

echo.
echo Pushing to GitHub...
git branch --show-current > temp_branch.txt
set /p CURRENT_BRANCH=<temp_branch.txt
del temp_branch.txt

if "%CURRENT_BRANCH%"=="main" (
    git push -u origin main
) else if "%CURRENT_BRANCH%"=="master" (
    git push -u origin master
) else (
    echo Pushing to main branch...
    git push -u origin %CURRENT_BRANCH%:main
)

if errorlevel 1 (
    echo.
    echo ERROR: Failed to push to GitHub. Please check the error messages above.
    pause
    exit /b 1
) else (
    echo.
    echo Successfully pushed to GitHub!
    echo Your site will be available at: https://matthias957.github.io
    echo Check the Actions tab in your repository to see the deployment progress.
    pause
)

