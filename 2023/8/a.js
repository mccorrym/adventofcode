const fs = require("fs");
let movements =
  "LRRLRRLLRRRLRRLRLRRRLRRLRRRLRLLRRRLRRRLRLRRRLRRLRRLRLRLLLRRRLRRRLRRLRRLRLRRRLRRLLRRLRRLRLLRLRLRRLRLLRLRLRRRLRRLRLLRLRLLRRLRLRRLLLRLRRLRRRLLLRRLRLRRRLLRRLLLRRRLRRRLLLRRLLRLRRLRLRRLLLRLRRLLLLRRLLRRRLRRLRRLRLRLLRLRRRLLRRLLRRLRRLRRLRRLRLLRRLRRRLRLRLLLRRRLLRRRLRRLRRLLLLRRRR";
let map = {};
let count = 0;
let index = "AAA";

fs.readFile("./data/8.txt", (err, input) => {
  let data = input.toString().split("\n");
  let regexp = /\(([A-Z]{3}), ([A-Z]{3})\)/g;

  data.map((movement) => {
    let step = movement.toString().trim().split(" = ");
    let options = step[1].matchAll(regexp);
    options = Array.from(options);
    map[step[0]] = [options[0][1], options[0][2]];
  });

  let steps = movements.trim().split("");
  let zzz = false;

  while (!zzz) {
    for (let i = 0; i < steps.length; i++) {
      switch (steps[i]) {
        case "L":
          index = map[index][0];
          break;
        case "R":
          index = map[index][1];
          break;
      }
      count++;

      if (index == "ZZZ") {
        zzz = true;
        break;
      }
    }
  }

  console.log("Total number of steps", count);
});
