const fs = require("fs");
const filename = process.argv[2];

if (!filename) {
  throw Error("A file to watch must be specified!");
}

fs.watch(filename, () => {
  console.log(`File ${filename} is changed!`);
});

console.log(`Now watch ${filename} for changes...`);
