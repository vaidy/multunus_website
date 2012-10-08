#!/bin/bash
echo "Pushing to Unfuddle..."
git push origin master
echo ""
echo "Pushing to Heroku..."
git push heroku master
