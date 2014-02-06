#!/usr/bin/env node

var command = require("new-command")({ 'p': 'port', 'o': 'hostname' });

require('default-debug')('circle:server');
var server = require('../');

server.start(command._[0],
             command.port || 3000,
             command.hostname || '127.0.0.1');
