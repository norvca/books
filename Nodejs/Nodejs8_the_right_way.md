# Node.js 8 the Right Way

## 1. Getting up to speed on Node.js 8

### 1.1 Wrangling the file system

```js
// watcher-argv.js

const fs = require("fs");
const filename = process.argv[2];

if (!filename) {
  throw Error("A file to watch must be specified!");
}

fs.watch(filename, () => {
  console.log(`File ${filename} is changed!`);
});

console.log(`Now watch ${filename} for changes...`);
```

```js
// $ node watcher-argv.js target.txt

Now watch target.txt for changes...
```

- Argv stands for argument vector, it's an array containing command line arguments.
- If we didn't put in the third argument `target.txt`, an error will thrown into Node.js which will stop the process.





