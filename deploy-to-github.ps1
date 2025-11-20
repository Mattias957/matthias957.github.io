# Script to deploy to GitHub Pages
# Make sure Git is installed and in your PATH before running this

Set-Location $PSScriptRoot

Write-Host "Checking Git installation..." -ForegroundColor Cyan
try {
    $gitVersion = git --version
    Write-Host "Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Git is not installed or not in PATH." -ForegroundColor Red
    Write-Host "Please install Git from https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Or use GitHub Desktop: https://desktop.github.com/" -ForegroundColor Yellow
    exit 1
}

Write-Host "`nChecking remote repository..." -ForegroundColor Cyan
$remote = git remote get-url origin -ErrorAction SilentlyContinue
if ($LASTEXITCODE -ne 0) {
    Write-Host "Adding remote repository..." -ForegroundColor Yellow
    git remote add origin https://github.com/Mattias957/matthias957.github.io.git
} else {
    Write-Host "Remote already configured: $remote" -ForegroundColor Green
    # Update if needed
    git remote set-url origin https://github.com/Mattias957/matthias957.github.io.git
}

Write-Host "`nStaging all changes..." -ForegroundColor Cyan
git add .

Write-Host "`nChecking for changes to commit..." -ForegroundColor Cyan
$status = git status --porcelain
if ($status) {
    Write-Host "Committing changes..." -ForegroundColor Cyan
    git commit -m "Configure for GitHub Pages deployment"
} else {
    Write-Host "No changes to commit." -ForegroundColor Yellow
}

Write-Host "`nPushing to GitHub..." -ForegroundColor Cyan
$branch = git branch --show-current
if ($branch -eq "main") {
    git push -u origin main
} elseif ($branch -eq "master") {
    git push -u origin master
} else {
    Write-Host "Current branch: $branch" -ForegroundColor Yellow
    Write-Host "Pushing to main branch..." -ForegroundColor Cyan
    git push -u origin $branch:main
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "Your site will be available at: https://matthias957.github.io" -ForegroundColor Cyan
    Write-Host "Check the Actions tab in your repository to see the deployment progress." -ForegroundColor Cyan
} else {
    Write-Host "`n❌ Error pushing to GitHub. Please check the error messages above." -ForegroundColor Red
}

