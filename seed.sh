#!/bin/sh
./node_modules/.bin/ts-node --compiler-options '{"module": "CommonJS"}' prisma/seed.ts
