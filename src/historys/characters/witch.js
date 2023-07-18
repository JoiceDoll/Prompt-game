const witchQuestionOne = require("../chapter1/witch/witchQuestionOne");
const witchQuestionTwo = require("../chapter1/witch/witchQuestionTwo");
const witchQuestionThree = require("../chapter1/witch/witchQuestionThree");

function witch(inquirer, chalk) {
  console.log(
    chalk.blue(
      "Uma aldeia pegando fogo, rodeada de cidadãos correndo e gritando para fora da cidade. Você acorda e percebe que teve uma visão."
    )
  );
  console.log(
    chalk.red("Os sinais são claros, a nova ameaça surgirá em uma aldeia. ")
  );
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message:
          "Você é a única com poderes suficientes para derrotar tal coisa. O que você faz? ",
        choices: [
          "Criar poçoes e embarcar em uma jornada para salvar os cidadãos.",
          "Procurar por guerreiros e contar o que você viu.",
          "Ignorar os sinais.",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];
      if (
        action ===
        "Criar poçoes e embarcar em uma jornada para salvar os cidadãos."
      ) {
        witchQuestionOne(inquirer, chalk);
      } else if (
        action === "Procurar por guerreiros e contar o que você viu."
      ) {
        witchQuestionTwo(inquirer, chalk);
      } else if (action === "Ignorar os sinais.") {
        witchQuestionThree(inquirer, chalk);
      }
    });
}

module.exports = witch;
