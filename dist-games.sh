#!/usr/bin/env bash

# Cleanup
rm -rf static/projects/ >> /dev/null

# Whale
mkdir -p static/projects/whale/game
cp -r node_modules/whale-dive/dist/. static/projects/whale/game

# Fox Hole
mkdir -p static/projects/fox-hole/game
cp -r node_modules/fox-hole/dist/. static/projects/fox-hole/game

# Alien Expansion
mkdir -p static/projects/alien-expansion/game
cp -r node_modules/alien-expansion/dist/. static/projects/alien-expansion/game
cp -r node_modules/alien-expansion/favicon.png static/projects/alien-expansion/game/.
