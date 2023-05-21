#!/bin/sh

echo "Installing dependencies...!"
yarn

if ["$NODE_ENV" = "production"]; then
  yarn start:production
else
  yarn start:test
fi
