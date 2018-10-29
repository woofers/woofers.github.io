#!/usr/bin/env bash

ROOT=$PWD

# Cleanup
rm -rf static/projects/ >> /dev/null

# Whale
cd games/whale
./build.sh
cd $ROOT
mkdir -p static/projects/whale/game
cp -r games/whale/export/html5/bin/. static/projects/whale/game
rm -rf static/projects/whale/game/manifest >> /dev/null

# Fox Hole
cd games/fox-hole
yarn install
yarn build
cd $ROOT
mkdir -p static/projects/fox-hole/game
cp -r games/fox-hole/bin/. static/projects/fox-hole/game
