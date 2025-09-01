# deploy.ps1

param(
    [string]$msg = "update site"
)

Write-Host "🔄 Remote dəyişikliklər gətirilir..."

# Əvvəlcə local dəyişiklikləri saxla
if ((git status --porcelain) -ne $null) {
    git stash
    $stashed = $true
} else {
    $stashed = $false
}

git pull origin main --rebase

# Əgər stash olunmuş dəyişikliklər varsa, geri qaytar
if ($stashed) {
    git stash pop
}

Write-Host "➕ Dəyişikliklər əlavə olunur..."
git add .

# Əgər dəyişiklik yoxdursa, commit etmə
if ((git diff --cached --quiet) -eq $true) {
    Write-Host "⚠️ Heç bir dəyişiklik yoxdur, commit atılmadı."
} else {
    Write-Host "💬 Commit edilir..."
    git commit -m "$msg"

    Write-Host "🚀 GitHub-a göndərilir..."
    git push origin main
}

Write-Host "✅ Deploy tamamlandı!"
