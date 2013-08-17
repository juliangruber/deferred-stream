var PassThrough = require('stream').PassThrough
|| require('readable-stream').PassThrough;

module.exports = deferred;

function deferred (fn) {
  var str = PassThrough();
  fn(str);
  return str;
}
