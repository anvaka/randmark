randmark
========

Just a quick and dirty test of pseudo random number generators. See results [here](http://anvaka.github.io/randmark/knownprngs.html)

Simple test renders results of `Math.random()` and Robert Jenkin's 32 bit [integer hash](http://burtleburtle.net/bob/hash/integer.html) on a canvas.

Build
=====
Install [browserify](http://browserify.org/), and run:

``` js
browserify index.js -o out/bundle.js
```

