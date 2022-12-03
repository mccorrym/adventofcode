const fs = require("fs");
let puzzles = [];
let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let score = 0;

fs.readFile("../data/3.txt", (err, data) => {
  if (err) throw err;

  puzzles = data.toString().split("\n");

  puzzles.map((puzzle) => {
    let compartment = [];
    let str = puzzle.trim();
    let arr = [...str];

    const letters = arr.map((letter) => letter.charCodeAt(0));

    compartment.push(letters.splice(0, puzzle.length / 2));
    compartment.push(letters);

    compartment[0].some((letter) => {
      if (compartment[1].includes(letter)) {
        score += alphabet.indexOf(String.fromCharCode(letter)) + 1;
        return true;
      }
    });
  });

  console.log("Total score:", score);
});
