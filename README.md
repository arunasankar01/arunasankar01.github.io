# Note to Self
Branch: portfolio;
## Docs folder is necessary to host the website.

After making changes from local,
npm run dev - to check in local

npm run build - creates a dist directory that has the contents necessary for github pages to read from; contains an index.html file
rm -rf docs
mv dist docs
git add -f docs
git add .
git commit -m "message for commit"
git push origin portfolio
