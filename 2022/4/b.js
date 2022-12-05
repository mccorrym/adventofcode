const fs = require("fs");
let pairs = [];
let score = 0;

fs.readFile("../data/4.txt", (err, data) => {
  if (err) throw err;

  pairs = data.toString().split("\n");

  pairs.map((pair) => {
    let data = pair.split(",");
    let ranges = [data[0].split("-"), data[1].split("-")];

    if (
      (parseInt(ranges[1][0]) >= parseInt(ranges[0][0]) &&
        parseInt(ranges[1][0]) <= parseInt(ranges[0][1])) ||
      (parseInt(ranges[1][0]) <= parseInt(ranges[0][0]) &&
        parseInt(ranges[1][1]) >= parseInt(ranges[0][0]))
    ) {
      score++;
    }
  });

  console.log("# of ranges that overlap: " + score);
});
