param(
    [string]$msg = "update site"
)

git add .
git commit -m "$msg"
git push origin main
