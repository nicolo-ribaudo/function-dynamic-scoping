Serve `index.html` and open it in your favorite browser. Note that due to CORS restrictions you need a local server, and you cannot simply open that file in the browser with a `file://` url.

# Outputs

Firefox:
```
Inline function loaded /js/mod.js
Polyfilled function loaded /js/folder/mod.js
Inline indirect eval loaded /js/mod.js
Polyfilled indirect eval loaded /js/folder/mod.js
Inline function in folder/ loaded /js/folder/mod.js
Inline indirect eval loaded /js/folder/mod.js
Inline setTimeout loaded /js/mod.js
Polyfilled setTimeout loaded /js/folder/mod.js
```

Safari:
```
Inline function loaded /js/mod.js
Polyfilled function loaded /js/mod.js
Inline indirect eval loaded /js/mod.js
Polyfilled indirect eval loaded /js/mod.js
Inline function in folder/ loaded /js/folder/mod.js
Inline indirect eval in folder/ loaded /js/folder/mod.js
Inline setTimeout loaded /mod.js
Polyfilled setTimeout loaded /mod.js
```

Chrome:
```
Inline function loaded /js/mod.js
Polyfilled function loaded /js/folder/mod.js
Inline indirect eval loaded /js/mod.js
Polyfilled indirect eval loaded /js/folder/mod.js
Inline function in folder/ loaded /js/folder/mod.js
Inline indirect eval loaded /js/folder/mod.js
Inline setTimeout loaded /mod.js
Polyfilled setTimeout loaded /mod.js
```

Chrome without the bytecode caching fix (see `unique` in `js/main.js`) logs the first output on first load, and the second output on page reload:
```
Inline function loaded /js/mod.js
Polyfilled function loaded /js/folder/mod.js
Inline indirect eval loaded /js/mod.js
Polyfilled indirect eval loaded /js/folder/mod.js
Inline function in folder/ loaded /js/folder/mod.js
Inline indirect eval in folder/ loaded /js/folder/mod.js
Inline setTimeout loaded /mod.js
Polyfilled setTimeout loaded /mod.js
```
```
Inline function loaded /js/folder/mod.js
Polyfilled function loaded /js/folder/mod.js
Inline indirect eval loaded /js/folder/mod.js
Polyfilled indirect eval loaded /js/folder/mod.js
Inline function in folder/ loaded /js/folder/mod.js
Inline indirect eval in folder/ loaded /js/folder/mod.js
Inline setTimeout loaded /mod.js
Polyfilled setTimeout loaded /mod.js
```
