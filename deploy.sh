#!/bin/sh
rm -rf node_modules/.cache
rm -rf out/
node_modules/.bin/next build && node_modules/.bin/next export
touch out/.nojekyll
buildID=$(cat .next/BUILD_ID)
sed -i '' '/authorization/d' ./out/_next/static/development/pages/_app.js
sed -i '' 's/authorization:\"Bearer \".concat(\"[0-9a-zA-Z]*\")//' out/_next/static/$buildID/pages/_app.js
git add out/
git commit -m "Deploy Next.js to gh-pages, build id: $buildID"
git subtree push --prefix out origin gh-pages
