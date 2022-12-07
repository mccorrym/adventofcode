const fs = require("fs");
let letters = [];
let string;

fs.readFile("../data/6.txt", (err, data) => {
  if (err) throw err;

  letters = [...data.toString()];

  for (let i = 0; i < letters.length; i++) {
    string = letters.slice(i, i + 14);
    let unique = [...new Set(string)];
    if (unique.length == 14) {
      console.log("First unique set of 14 is at index", i + 14, unique);
      break;
    }
  }
});
