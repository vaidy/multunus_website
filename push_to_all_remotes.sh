#!/bin/bash
echo "Pushing to Unfuddle..."
git push origin master
echo "\nPushing to Heroku..."
git push heroku master
