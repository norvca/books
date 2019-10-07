const fs = require("fs");

fs.writeFile("target.txt", "Nice day today", err => {
  if (err) {
    console.log(err);
  }
});
