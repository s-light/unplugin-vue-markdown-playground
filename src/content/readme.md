---
title: Hello World
tags: [key, switch, input]
id: 25
---

# Hello World :-)

we have some text before the break.

<!-- more_details -->

and lots more after the break...

this contains an example for an imported fenced code block:

```js :./example.js
// this content will be overwritten!
const sun = 512;
```


a normal code block:
```js
const ping = "pong";
```

a code block with import that fails as the file is not available
```js :./notAvailable.js
// this should load notAvailable.js
// but this file does not exist!
// so this content should be left in place..
console.log("hello world!");
```