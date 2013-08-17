var deferred = require('./');

deferred(function (str) {
  setTimeout(function () {
    str.write('hey!');
  }, 1000);
}).pipe(process.stdout);
