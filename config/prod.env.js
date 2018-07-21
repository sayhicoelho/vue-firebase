'use strict'
const merge = require('webpack-merge')
const dotenv = require('dotenv-safe').load()

module.exports = merge(dotenv.parsed, {
  NODE_ENV: '"production"'
})
