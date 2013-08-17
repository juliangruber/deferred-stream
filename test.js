var test = require('tape');
var deferred = require('./');
var Writable = require('stream').Writable
|| require('readable-stream').Writable;

test('deferred', function (t) {
  t.plan(1);

  var wr = Writable();
  wr._write = function (chunk) {
    t.equal(chunk.toString(), 'hey!');
  }

  deferred(function (str) {
    setTimeout(function () {
      str.end('hey!');
    });
  }).pipe(wr);
});

