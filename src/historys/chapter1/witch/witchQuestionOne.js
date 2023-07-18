function witchQuestionOne(inquirer, chalk) {
  console.log(chalk.bgYellow(""));
  console.log(
    chalk.blue(
      "Enquanto você viaja pelo norte e coleta os ingredientes necessários, você cria poções poderosas, capazes de curar feridas, fortalecer a resistência e até mesmo dissipar os efeitos que ameaçam o leste. "
    )
  );
  console.log(
    chalk.blue(
      "Você está andando por uma floresta, quando derrepente surge um anão furioso com um machado na mão pronta para ataca-la."
    )
  );
  console.log(chalk.bgRed("O anão grita: Deve ser aniquilada!"));

  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você faz:",
        choices: [
          "Lançar uma de suas poções no homem que está vindo em sua direção.",
          "Lançar uma poção em sí mesma para se retirar dali.",
          "Se render.",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (
        action ===
        "Lançar uma de suas poções no homem que está vindo em sua direção."
      ) {
        console.log(chalk.bgBlue("Continua..."));
      } else if (
        action === "Lançar uma poção em sí mesma para se retirar dali."
      ) {
        console.log(chalk.bgBlue("Continua..."));
      } else if (action === "Se render.") {
        console.log(chalk.bgBlue("Continua..."));
      }
    });
}

module.exports = witchQuestionOne;
