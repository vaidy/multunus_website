#!/bin/bash
git commit -am %1
echo "Pushing to GitHub..."
git push origin master
echo ""
echo "Pushing to Heroku..."
git push heroku master
