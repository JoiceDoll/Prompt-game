const inquirer = require("inquirer");
const chalk = require("chalk");

const viking = require("./historys/characters/viking");
const witch = require("./historys/characters/witch");
const orc = require("./historys/characters/orc");

operators();
function operators() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Bem vindo ao game! Escolha o seu personagem:",
        choices: ["Orc", "Viking", "Feiticeira"],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "Orc") {
        orc(inquirer, chalk);
      } else if (action === "Viking") {
        viking(inquirer, chalk);
      } else if (action === "Feiticeira") {
        witch(inquirer, chalk);
      }
    });
}
