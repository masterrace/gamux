'use strict'

const Promise = require('bluebird')
    , fs = Promise.promisifyAll(require('fs-extra'))
    , path = require('path')
    , yaml = require('js-yaml')
    , R = require('ramda')

module.exports = main

function main(mode, state) {

  if (mode === 'run') {

  } else if (mode === 'update') {

  } else if (mode === 'diagnose') {

  }
}

/*
const Promise = require('bluebird')
    , fs = Promise.promisifyAll(require('fs-extra'))
    , state = require('./lib/state')
    , yaml = require('js-yaml')
    , R = require('ramda')

function bootstrap() {
  return fs.mkdirpAsync(state.root)
    .then(fs.copyAsync(state.defaults, state.config, { clobber: false }))
    .then(fs.mkdirpAsync(state.cache))
}

function save(game) {
  return fs.outputFileAsync(game.path(), game.toJSON())
}

function main() {
  return bootstrap()
    .then(state.load())
}

process.nextTick(() => main())
*/
