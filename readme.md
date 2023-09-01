Serve `index.html` and open it in your favorite browser. Note that due to CORS restrictions you need a local server, and you cannot simply open that file in the browser with a `file://` url.

# Outputs

Firefox:
```
Inline function loaded /js/mod.js
Wrapped function loaded /js/folder/mod.js
Bound function loaded /js/mod.js
--------------------------------------------------------------------------------
Inline indirect eval loaded /js/mod.js
Wrapped indirect eval loaded /js/folder/mod.js
Bound indirect eval loaded /js/mod.js
--------------------------------------------------------------------------------
Inline function in folder/ loaded /js/folder/mod.js
Inline indirect eval in folder/ loaded /js/folder/mod.js
--------------------------------------------------------------------------------
Inline setTimeout loaded /js/mod.js
Wrapped setTimeout loaded /js/folder/mod.js
Bound setTimeout loaded /js/mod.js
```

Safari:
```
Inline function loaded /js/mod.js
Wrapped function loaded /js/mod.js
Bound function loaded /js/mod.js
--------------------------------------------------------------------------------
Inline indirect eval loaded /js/mod.js
Wrapped indirect eval loaded /js/mod.js
Bound indirect eval loaded /js/mod.js
--------------------------------------------------------------------------------
Inline function in folder/ loaded /js/folder/mod.js
Inline indirect eval in folder/ loaded /js/folder/mod.js
--------------------------------------------------------------------------------
Inline setTimeout loaded /mod.js
Wrapped setTimeout loaded /mod.js
Bound setTimeout loaded /mod.js
```

Chrome:
```
Inline function loaded /js/mod.js
Wrapped function loaded /js/folder/mod.js
Bound function loaded /js/mod.js
--------------------------------------------------------------------------------
Inline indirect eval loaded /js/mod.js
Wrapped indirect eval loaded /js/folder/mod.js
Bound indirect eval loaded /js/mod.js
--------------------------------------------------------------------------------
Inline function in folder/ loaded /js/folder/mod.js
Inline indirect eval in folder/ loaded /js/folder/mod.js
--------------------------------------------------------------------------------
Inline setTimeout loaded /mod.js
Wrapped setTimeout loaded /mod.js
Bound setTimeout loaded /mod.js
```

| Test case                        | Firefox | Safari | Chrome |
|:--------------------------------:|:-------:|:------:|:------:|
| Inline function                  | `/js/mod.js`        | `/js/mod.js`        | `/js/mod.js`        |
| Wrapped function                 | `/js/folder/mod.js` | `/js/mod.js`        | `/js/folder/mod.js` |
| Bound function                   | `/js/mod.js`        | `/js/mod.js`        | `/js/mod.js`        |
| Inline indirect eval             | `/js/mod.js`        | `/js/mod.js`        | `/js/mod.js`        |
| Wrapped indirect eval            | `/js/folder/mod.js` | `/js/mod.js`        | `/js/folder/mod.js` |
| Bound indirect eval              | `/js/mod.js`        | `/js/mod.js`        | `/js/mod.js`        |
| Inline function in folder/       | `/js/folder/mod.js` | `/js/folder/mod.js` | `/js/folder/mod.js` |
| Inline indirect eval in folder/  | `/js/folder/mod.js` | `/js/folder/mod.js` | `/js/folder/mod.js` |
| Inline setTimeout                | `/js/mod.js`        | `/mod.js`           | `/mod.js`           |
| Wrapped setTimeout               | `/js/folder/mod.js` | `/mod.js`           | `/mod.js`           |
| Bound setTimeout                 | `/js/mod.js`        | `/mod.js`           | `/mod.js`           |

**Note**: I do not understand how Safari can have different results for the "Wrapped" and "Inline in folder/" tests.