#!/bin/bash

# From https://stackoverflow.com/a/44833470/9129020

VERSION='';
re="\"(version)\": \"([^\"]*)\"";

while read -r l; do
    if [[ $l =~ $re ]]; then
        value="${BASH_REMATCH[2]}";
        VERSION="$value";
    fi
done < package.json;

echo v$VERSION;
