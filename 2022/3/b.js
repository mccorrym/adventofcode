const fs = require("fs");
let puzzles = [];
let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let score = 0;

fs.readFile("../data/3.txt", (err, data) => {
  if (err) throw err;

  puzzles = data.toString().split("\n");

  loop1: while (puzzles.length > 0) {
    let letters = [];
    for (let i = 0; i < 3; i++) {
      let str;
      try {
        str = puzzles.shift();
        letters.push([...str]);
      } catch (e) {
        break loop1;
      }
    }
    let compartments = [];
    letters.forEach((compartment) => {
      compartments.push(compartment.map((letter) => letter.charCodeAt(0)));
    });

    compartments[0].some((letter) => {
      if (
        compartments[1].includes(letter) &&
        compartments[2].includes(letter)
      ) {
        score += alphabet.indexOf(String.fromCharCode(letter)) + 1;
        return true;
      }
    });
  }

  console.log("Total score:", score);
});
