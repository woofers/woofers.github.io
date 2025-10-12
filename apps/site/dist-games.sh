#!/usr/bin/env bash

# Cleanup
rm -rf public/projects/ >> /dev/null

# Whale
mkdir -p public/projects/whale/play/game
cp -r node_modules/whale-dive/dist/. public/projects/whale/play/game

# Fox Hole
mkdir -p public/projects/fox-hole/play/game
cp -r node_modules/fox-hole/dist/. public/projects/fox-hole/play/game

# Alien Expansion
mkdir -p public/projects/ludum-dare-44/play/game
cp -r node_modules/alien-expansion/dist/. public/projects/ludum-dare-44/play/game
cp -r node_modules/alien-expansion/favicon.png public/projects/ludum-dare-44/play/game/.
cp -r node_modules/alien-expansion/placeholder.png public/projects/ludum-dare-44/play/game/.

# DOGE
mkdir -p public/projects/discord-jam-2/play/game
cp -r node_modules/doge-bois/dist/. public/projects/discord-jam-2/play/game