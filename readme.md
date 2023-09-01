Serve `index.html` and open it in your favorite browser. Note that due to CORS restrictions you need a local server, and you cannot simply open that file in the browser with a `file://` url.

# Outputs

Firefox:
```
Inline function loaded /js/mod.js
Wrapped function loaded /js/folder/mod.js
Bound function loaded /js/mod.js
Then function loaded /mod.js
--------------------------------------------------------------------------------
Inline indirect eval loaded /js/mod.js
Wrapped indirect eval loaded /js/folder/mod.js
Bound indirect eval loaded /js/mod.js
Then indirect eval loaded /mod.js
--------------------------------------------------------------------------------
Inline function in folder/ loaded /js/folder/mod.js
Inline indirect eval in folder/ loaded /js/folder/mod.js
--------------------------------------------------------------------------------
Inline setTimeout loaded /js/mod.js
Wrapped setTimeout loaded /js/folder/mod.js
Bound setTimeout loaded /js/mod.js
Then setTimeout loaded /mod.js
```

Safari:
```
Inline function loaded /js/mod.js
Wrapped function loaded /js/mod.js
Bound function loaded /js/mod.js
Then function loaded /mod.js
--------------------------------------------------------------------------------
Inline indirect eval loaded /js/mod.js
Wrapped indirect eval loaded /js/mod.js
Bound indirect eval loaded /js/mod.js
Then indirect eval loaded /mod.js
--------------------------------------------------------------------------------
Inline function in folder/ loaded /js/folder/mod.js
Inline indirect eval in folder/ loaded /js/folder/mod.js
--------------------------------------------------------------------------------
Inline setTimeout loaded /mod.js
Wrapped setTimeout loaded /mod.js
Bound setTimeout loaded /mod.js
Then setTimeout loaded /mod.js
```

Chrome:
```
Inline function loaded /js/mod.js
Wrapped function loaded /js/folder/mod.js
Bound function loaded /js/mod.js
Then function loaded /mod.js
--------------------------------------------------------------------------------
Inline indirect eval loaded /js/mod.js
Wrapped indirect eval loaded /js/folder/mod.js
Bound indirect eval loaded /js/mod.js
Then indirect eval loaded /mod.js
--------------------------------------------------------------------------------
Inline function in folder/ loaded /js/folder/mod.js
Inline indirect eval in folder/ loaded /js/folder/mod.js
--------------------------------------------------------------------------------
Inline setTimeout loaded /mod.js
Wrapped setTimeout loaded /mod.js
Bound setTimeout loaded /mod.js
Then setTimeout loaded /mod.js
```

| Test case                        | Firefox | Safari | Chrome |
|:--------------------------------:|:--------|:-------|:-------|
| Inline function                  | `/js/mod.js`        | `/js/mod.js`        | `/js/mod.js`        |
| Wrapped function                 | `/js/folder/mod.js` | `/js/mod.js`        | `/js/folder/mod.js` |
| Bound function                   | `/js/mod.js`        | `/js/mod.js`        | `/js/mod.js`        |
| Then function                    | `/mod.js`           | `/mod.js`           | `/mod.js`           |
| Inline indirect eval             | `/js/mod.js`        | `/js/mod.js`        | `/js/mod.js`        |
| Wrapped indirect eval            | `/js/folder/mod.js` | `/js/mod.js`        | `/js/folder/mod.js` |
| Bound indirect eval              | `/js/mod.js`        | `/js/mod.js`        | `/js/mod.js`        |
| Then indirect eval               | `/mod.js`           | `/mod.js`           | `/mod.js`           |
| Inline function in folder/       | `/js/folder/mod.js` | `/js/folder/mod.js` | `/js/folder/mod.js` |
| Inline indirect eval in folder/  | `/js/folder/mod.js` | `/js/folder/mod.js` | `/js/folder/mod.js` |
| Inline setTimeout                | `/js/mod.js`        | `/mod.js`           | `/mod.js`           |
| Wrapped setTimeout               | `/js/folder/mod.js` | `/mod.js`           | `/mod.js`           |
| Bound setTimeout                 | `/js/mod.js`        | `/mod.js`           | `/mod.js`           |
| Then setTimeout                  | `/mod.js`           | `/mod.js`           | `/mod.js`           |

# Notes
- Firefox is implementing the spec
- Chrome is implementing the spec for `Function` and `eval`, but not for `setTimeout`
- I do not understand how Safari can have different results for the "Wrapped" and "Inline in folder/" tests.

The behavior of `Function`/`eval`/`setTimeout` should not depend on where they are called from, so for each of the three evaluation functions all the rows in the table above should have the same result. Probably all `/mod.js`.
