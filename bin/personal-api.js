#!/usr/bin/env node

var debug = require('default-debug')('circle:server');

var opt = require('optimist');

var argv = opt
      .options('port', { alias: 'p' })
      .options('hostname', { alias: 'o' })
      .options('version', { alias: 'v' })
      .options('help', { alias: 'h' })
      .argv;

var server = require('../');

if (argv.version) require('show-version');
if (argv.help || argv._.length == 0) require('show-help');

server.start(argv._[0], argv.port || 3000, argv.hostname);
