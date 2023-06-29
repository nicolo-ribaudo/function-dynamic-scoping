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

Chrome without the unique sources (see `unique` in `js/main.js`) is one of the followings, depending on how planets are aligned:
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
