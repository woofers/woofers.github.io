#!/usr/bin/env bash

# Cleanup
rm -rf static/projects/ >> /dev/null

# Whale
mkdir -p static/projects/whale/play/game
cp -r node_modules/whale-dive/dist/. static/projects/whale/play/game

# Fox Hole
mkdir -p static/projects/fox-hole/play/game
cp -r node_modules/fox-hole/dist/. static/projects/fox-hole/play/game

# Alien Expansion
mkdir -p static/projects/ludum-dare-44/play/game
cp -r node_modules/alien-expansion/dist/. static/projects/ludum-dare-44/play/game
cp -r node_modules/alien-expansion/favicon.png static/projects/ludum-dare-44/play/game/.
cp -r node_modules/alien-expansion/placeholder.png static/projects/ludum-dare-44/play/game/.
