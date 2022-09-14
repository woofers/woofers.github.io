#!/usr/bin/env bash

# Move 404 out of folder since
# GitHub pages does not recognize this
mv out/404.html/index.html out/404-temp.html
rm -rf out/404.html
mv out/404-temp.html out/404.html
