const vikingQuestionOne = require("../chapter1/viking/vikingQuestionOne")
const vikingQuestionTwo = require("../chapter1/viking/vikingQuestionTwo")
const vikingQuestionThree = require("../chapter1/viking/vikingQuestionThree")



function viking(inquirer, chalk) {
  console.log(
    chalk.blue(
      "Skool, Gunnar! Os sons de música, risadas e cantorias ecoam pelo salão, você foi eleito o campeão de combate viking! "
    )
  );
  console.log(
    chalk.red(
      "No entanto, uma profecia foi dita: uma ameaça chegou ao leste, e o destino de todo o reino agora é incerto. "
    )
  );
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O leste precisa de você, e você, o que faz?",
        choices: [
          "Embarcar rumo ao leste com sua tripulação para enfrentar a ameaça.",
          "Enviar sua tripulação para sondar o que está acontecendo.",
          "Se exilar ao norte.",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];
      if (
        action ===
        "Embarcar rumo ao leste com sua tripulação para enfrentar a ameaça."
      ) {
        vikingQuestionOne(inquirer, chalk);
      } else if (
        action === "Enviar sua tripulação para sondar o que está acontecendo."
      ) {
        vikingQuestionTwo(inquirer, chalk);
      } else if (action === "Se exilar ao norte.") {
        vikingQuestionThree(inquirer, chalk);
      }
    });
}

module.exports = viking;
