#!/bin/bash

# Cambiar a jsx todos los archivos .js del directorio actual y subdirectorios
find . -type f -name "*.js" | while read filename; do
  newname="${filename%.js}.jsx"
  mv "$filename" "$newname"
  echo "Renombrado: $filename → $newname"
done
