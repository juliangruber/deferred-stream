
# deferred-stream

A simple deferred stream, useful when you need to do async operations before
emitting data.

Uses Streams2 and falls back to
[readable-stream](https://github.com/isaacs/readable-stream) on older node
versions or browserify.

[![build status](https://secure.travis-ci.org/juliangruber/deferred-stream.png)](http://travis-ci.org/juliangruber/deferred-stream)

[![testling badge](https://ci.testling.com/juliangruber/deferred-stream.png)](https://ci.testling.com/juliangruber/deferred-stream)

## Example

```js
var deferred = require('deferred-stream');

deferred(function (str) {
  setTimeout(function () {
    str.write('hey!');
  }, 1000);
}).pipe(process.stdout);
```

## API

### deferred([options, ] fn)

Returns a readable stream and calls `fn` with it.  `options` is passed down to the underlying `Stream` constructor, so use this for example to set `objectMode` to `true`.

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install deferred-stream
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
