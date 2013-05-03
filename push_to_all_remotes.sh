#!/bin/bash
git commit -am "Committing the generated files"
echo "Pushing to GitHub..."
git push origin master
echo ""
echo "Pushing to Heroku..."
git push heroku master
