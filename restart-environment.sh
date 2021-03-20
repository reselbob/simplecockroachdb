#!/usr/bin/env bash

docker-compose -f docker-compose.yaml down
rm -rf ./data

docker-compose  -f docker-compose.yaml up
