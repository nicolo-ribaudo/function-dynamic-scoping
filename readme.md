# Outputs

Firefox:
```
Inline function loaded /js/mod.js
Polyfilled function loaded /js/folder/mod.js
Inline indirect eval loaded /js/mod.js
Polyfilled indirect eval loaded /js/folder/mod.js
```

Safari:
```
Inline function loaded /js/mod.js
Polyfilled function loaded /js/mod.js
Inline indirect eval loaded /js/mod.js
Polyfilled indirect eval loaded /js/mod.js
```

Chrome:
```
Inline function loaded /js/mod.js
Polyfilled function loaded /js/folder/mod.js
Inline indirect eval loaded /js/mod.js
Polyfilled indirect eval loaded /js/folder/mod.js
```

Chrome without the bytecode caching fix (see `unique` in `js/main.js`) is one of the following, depending on how planets are aligned:
```
Inline function loaded /js/folder/mod.js
Polyfilled function loaded /js/folder/mod.js
Inline indirect eval loaded /js/folder/mod.js
Polyfilled indirect eval loaded /js/folder/mod.js
```
```
Inline function loaded /js/folder/mod.js
Polyfilled function loaded /js/folder/mod.js
Inline indirect eval loaded /js/mod.js
Polyfilled indirect eval loaded /js/mod.js
```
```
Inline function loaded /js/mod.js
Polyfilled function loaded /js/folder/mod.js
Inline indirect eval loaded /js/mod.js
Polyfilled indirect eval loaded /js/folder/mod.js
```
