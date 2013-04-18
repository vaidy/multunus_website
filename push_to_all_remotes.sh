#!/bin/bash
echo "Pushing to GitHub..."
git push origin master
echo ""
echo "Pushing to Heroku..."
git push heroku master
