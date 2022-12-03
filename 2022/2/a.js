const fs = require("fs");
let games = [];
let score = 0;

fs.readFile("../data/2.txt", (err, data) => {
  if (err) throw err;

  games = data.toString().split("\n");

  games.map((game) => {
    let result = game.split(" ");
    switch (result[1].trim()) {
      // Rock OR Loss
      case "X":
        score += 0;
        switch (result[0].trim()) {
          // Rock against Rock, draw
          case "A":
            score += 1;
            break;
          // Rock against Paper, loss
          case "B":
            score += 2;
            break;
          // Rock against Scissors, win
          case "C":
            score += 3;
            break;
          default:
            console.error("Their game not found!", result[0]);
        }
        break;
      // Paper OR Draw
      case "Y":
        score += 3;
        switch (result[0].trim()) {
          // Paper against Rock, win
          case "A":
            score += 1;
            break;
          // Paper against Paper, draw
          case "B":
            score += 2;
            break;
          // Paper against Scissors, loss
          case "C":
            score += 3;
            break;
          default:
            console.error("Their game not found!", result[0]);
        }
        break;
      // Scissors OR Win
      case "Z":
        score += 6;
        switch (result[0].trim()) {
          // Scissors against Rock, loss
          case "A":
            score += 1;
            break;
          // Scissors against Paper, win
          case "B":
            score += 2;
            break;
          // Scissors against Scissors, draw
          case "C":
            score += 3;
            break;
          default:
            console.error("Their game not found!", result[0]);
        }
        break;
      default:
        console.error("My game not found!", result[1]);
    }
  }, score);

  console.log(score);
});
