#!/usr/bin/env bash

gem install --user-install bundler jekyll

bundle exec jekyll build
bundle exec jekyll serve
