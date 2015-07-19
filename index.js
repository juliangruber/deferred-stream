var PassThrough = require('stream').PassThrough
|| require('readable-stream').PassThrough;

module.exports = deferred;

function deferred (options, fn) {
  if(!fn) {
    fn = options;
    options = null;
  }
  var str = PassThrough(options);
  fn(str);
  return str;
}
