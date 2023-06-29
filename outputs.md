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

Chrome without the unique sources (see `unique` in `js/main.js`):
```
Inline function loaded /js/folder/mod.js
Polyfilled function loaded /js/folder/mod.js
Inline indirect eval loaded /js/folder/mod.js
Polyfilled indirect eval loaded /js/folder/mod.js
```
