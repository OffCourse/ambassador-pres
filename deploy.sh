# Deploy
cd build
git init
git add -A
git commit -m "deploy"
git push 'git@github.com:offcourse/ambassador-pres.git' master:gh-pages
