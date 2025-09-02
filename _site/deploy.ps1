param(
    [string]$msg = "update site"
)

Write-Host "🔄 Remote dəyişikliklər gətirilir..."

# Lokal dəyişiklik varsa stash et
if ((git status --porcelain) -ne $null) {
    git stash
    $stashed = $true
} else {
    $stashed = $false
}

git pull origin main --rebase

# Stash varsa pop et
if ($stashed) {
    git stash pop
}

Write-Host "🛠 Sayt build edilir..."
jekyll build

Write-Host "➕ Dəyişikliklər əlavə olunur..."
git add .

# Əgər dəyişiklik yoxdursa commit etmə
if ((git diff --cached --quiet) -eq $true) {
    Write-Host "⚠️ Heç bir dəyişiklik yoxdur, commit atılmadı."
} else {
    Write-Host "💬 Commit edilir..."
    git commit -m "$msg"

    Write-Host "🚀 GitHub-a göndərilir..."
    git push origin main
}

Write-Host "✅ Deploy tamamlandı!"
