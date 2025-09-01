# deploy.ps1

param(
    [string]$msg = "update site"
)

Write-Host "🔄 Remote dəyişikliklər gətirilir..."
git pull origin main --rebase

Write-Host "➕ Dəyişikliklər əlavə olunur..."
git add .

Write-Host "💬 Commit edilir..."
git commit -m "$msg"

Write-Host "🚀 GitHub-a göndərilir..."
git push origin main

Write-Host "✅ Deploy tamamlandı!"
