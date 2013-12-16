var circle = require("circle");
var readJSON = require("read-json");
var document;

var api = circle({
  '/': home
});

module.exports = start;

function start (filename, port, hostname) {
  readJSON(filename, function (error, doc) {
    if (error) throw error;
    document = doc;
    api.start(port, hostname);
  });
}

function home (reply) {
  reply(undefined, document);
}
