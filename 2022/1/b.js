const fs = require("fs");
let calories = [];
let top_elves = [];
let count = 0;
let elves = [];

fs.readFile("../data/1.txt", (err, data) => {
  if (err) throw err;

  calories = data.toString().split("\n");

  calories.map((element) => {
    if (isNaN(parseInt(element))) {
      if (count > 0) {
        elves.push(count);
        count = 0;
      }
    } else {
      count += parseInt(element);
    }
  }, count);

  let helpers = {
    count: 0,
    elf: null
  };

  for (let i = 0; i < 3; i++) {
    elves.map((element, index) => {
      if (element > helpers.count) {
        helpers.count = element;
        helpers.elf = index;
      }
    }, helpers);

    top_elves.push({
      index: helpers.elf,
      calories: helpers.count
    });
    elves.splice(helpers.elf, 1);
    helpers.count = 0;
    helpers.elf = null;
  }

  console.log(
    "Elf " +
      top_elves[0]["index"] +
      " has " +
      top_elves[0]["calories"] +
      " calories.",
    "Elf " +
      top_elves[1]["index"] +
      " has " +
      top_elves[1]["calories"] +
      " calories.",
    "Elf " +
      top_elves[2]["index"] +
      " has " +
      top_elves[2]["calories"] +
      " calories."
  );
  console.log(elves);
});
