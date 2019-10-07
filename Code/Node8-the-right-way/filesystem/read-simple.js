const fs = require("fs");

fs.readFile("target.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
