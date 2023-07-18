function witchQuestionTwo(inquirer, chalk) {
  console.log(chalk.bgYellow(""));
  console.log(
    chalk.blue(
      "Você viaja por vilas e cidades, contando aos líderes e habitantes sobre a ameaça que viu e a necessidade urgente de unir suas forças para enfrentá-la."
    )
  );
  console.log(
    chalk.blue(
      "À medida que ela compartilha suas visões e relatos sobre a iminente ameaça, a notícia se espalha rapidamente."
    )
  );
  console.log(
    chalk.bgRed(
      "Agora você tem um pequeno exército de seguidores dispostos a morrer pelo reino."
    )
  );

  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Que ordens você tem para eles?",
        choices: [
          "Marchar para o leste e procurar pela ameaça.",
          "Aguardar um pouco mais.",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "Marchar para o leste e procurar pela ameaça.") {
        console.log(chalk.bgBlue("Continua..."));
      } else if (action === "Aguardar um pouco mais.") {
        console.log(chalk.bgBlue("Continua..."));
      }
    });
}

module.exports = witchQuestionTwo;
