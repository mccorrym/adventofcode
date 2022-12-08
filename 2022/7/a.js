const fs = require("fs");
let log = [];

let files = {};
let path = [];

fs.readFile("../data/7.txt", (err, data) => {
  if (err) throw err;

  log = data.toString().split("\n");

  log.map((line) => {
    let input = line.split(" ");
    if (input.length > 1) {
      if (!isNaN(input[0])) {
        // This is a file.

        // Add it to the list of files
        files[path.join() + "," + input[1]] = parseInt(input[0]);
      } else if (input[0] === "$") {
        // This is a command
        switch (input[1].trim()) {
          case "cd":
            if (input[2].trim() !== "..") {
              // Entering a new directory
              path.push(input[2].trim());
            } else {
              // Leaving a directory
              path.pop();
            }
            break;
          case "ls":
            break;
          default:
            console.error("Unrecognized command", input[1]);
        }
      } else if (input[0] === "dir") {
        // This is a directory
      } else {
        console.error("Unrecognized input", input[0]);
      }
    }
  });

  console.log(files);

  let directories = {};
  for (let file in files) {
    let path = file.split(",");
    for (let i = 0; i < path.length - 1; i++) {
      if (!(path[i] in directories)) {
        directories[path[i]] = 0;
      }
      directories[path[i]] += files[file];
    }
  }

  let total = 0;
  for (let directory in directories) {
    if (directories[directory] <= 100000) {
      total += directories[directory];
    }
  }
  console.log(directories);

  console.log("Total size of directories having <= 100,000:", total);
});
