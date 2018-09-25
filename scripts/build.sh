#!/bin/bash

rm -rf ./es5
mkdir ./es5

echo "----> :: Gunner ::"
echo "----> Browserifying..."
./node_modules/.bin/browserify ./index.js -s Gunner > ./es5/index.js
echo "----> Babelifying..."
./node_modules/.bin/babel --presets env --plugins transform-object-rest-spread ./es5/index.js -o ./es5/index.js
echo "> Done"
echo ""

echo "----> :: Runner ::"
echo "----> Browserifying..."
./node_modules/.bin/browserify ./Runner.js -s Runner > ./es5/Runner.js
echo "----> Babelifying..."
./node_modules/.bin/babel --presets env --plugins transform-object-rest-spread ./es5/Runner.js -o ./es5/Runner.js

echo "> Done"
