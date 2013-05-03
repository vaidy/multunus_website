#!/bin/bash
cd public
git add .
git add -u .
git commit -am "Committing the generated files"
echo "Pushing to GitHub..."
git push origin master
echo "Pushing to Heroku..."
git push heroku master
