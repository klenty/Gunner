#!/bin/bash

rm -rf ./es5
rm -rf ./browser
mkdir ./es5
mkdir ./browser

echo "----> :: Building Gunner for browser ::"

echo "----> Browserifying..."
./node_modules/.bin/browserify ./index.js -s Gunner > ./browser/index.js

echo "----> Babelifying..."
./node_modules/.bin/babel \
	--presets @babel/preset-env \
	--plugins @babel/plugin-syntax-object-rest-spread \
	./browser/index.js \
	-o ./browser/index.js

echo "> Done ./browser/index.js"
echo ""

echo "----> :: Babelifying Gunner source ::"

echo "----> Babelifying..."
./node_modules/.bin/babel \
	--presets @babel/preset-env \
	--plugins @babel/plugin-syntax-object-rest-spread \
	./src \
	--out-dir ./es5

echo "> Done ./es5"
