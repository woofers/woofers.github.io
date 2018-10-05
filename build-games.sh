#!/usr/bin/env bash
cd games/whale
./build.sh
cd ../../
mkdir -p static/projects/whale/game
cp -r games/whale/export/html5/bin/. static/projects/whale/game
