const orcQuestionOne = require("../chapter1/orc/orcQuestionOne");
const orcQuestionTwo = require("../chapter1/orc/orcQuestionTwo");
const orcQuestionThree = require("../chapter1/orc/orcQuestionThree");

function orc(inquirer, chalk) {
  console.log(
    chalk.black.bgGreen(
      "Garok, o ORC! uma antiga profecia começa a se desenrolar."
    )
  );
  console.log(chalk.red("Uma sombra negra  se ergue nas terras do leste."));

  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O destino o chama Garok, o que você vai fazer:",
        choices: [
          "Reunir um grupo de guerreiros orcs para caçar a sombra",
          "Partir sozinho em busca de artefatos que o levem a ameaça",
          "Se esconder",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "Reunir um grupo de guerreiros orcs para caçar a sombra") {
        orcQuestionOne(inquirer, chalk);
      } else if (
        action === "Partir sozinho em busca de artefatos que o levem a ameaça"
      ) {
        orcQuestionTwo(inquirer, chalk);
      } else if (action === "Se esconder") {
        orcQuestionThree(inquirer, chalk);
      }
    });
}

module.exports = orc;
