var circle = require("circle");
var readJSON = require("read-json");
var document;

var server = circle({
  '/': home
});

module.exports = {
  server: server,
  start: start
};

function start (filename, port, hostname) {
  readJSON(filename, function (error, doc) {
    if (error) throw error;
    document = doc;
    server.start(port, hostname);
  });
}

function home (reply) {
  reply(undefined, document);
}
