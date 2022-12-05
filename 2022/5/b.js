const fs = require("fs");
let movements = [];
let stacks = [
  ["W", "R", "F"],
  ["T", "H", "M", "C", "D", "V", "W", "P"],
  ["P", "M", "Z", "N", "L"],
  ["J", "C", "H", "R"],
  ["C", "P", "G", "H", "Q", "T", "B"],
  ["G", "C", "W", "L", "F", "Z"],
  ["W", "V", "L", "Q", "Z", "J", "G", "C"],
  ["P", "N", "R", "F", "W", "T", "V", "C"],
  ["J", "W", "H", "G", "R", "S", "V"]
];

fs.readFile("../data/5.txt", (err, data) => {
  if (err) throw err;

  movements = data.toString().split("\n");

  movements.map((movement) => {
    if (movement !== "") {
      let instruction = movement.match(/move ([\d]+) from ([\d]+) to ([\d]+)/);

      let stack = [];
      for (let i = 0; i < instruction[1]; i++) {
        stack.unshift(stacks[instruction[2] - 1].pop());
      }
      stacks[instruction[3] - 1] = [...stacks[instruction[3] - 1], ...stack];
    }
  });
  console.log(stacks);
});
