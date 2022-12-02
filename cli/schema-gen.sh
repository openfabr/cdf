#!/bin/bash

## Courtesy of https://github.com/YousefED/typescript-json-schema
## It generates json schema (default to 'schema.json' in package root) from the package config definitions (default to 'PackageInfraConfig' type)
npx typescript-json-schema -required true --titles true --out ${2:-'schema.json'} ./tsconfig.json ${1:-'PackageInfraConfig'} \
&& echo "JSON Schema generated successfully!"
