function orcQuestionOne(inquirer, chalk) {
  console.log(
    chalk.blue(
      "Você reuniu um grupo de guerreiros orcs para se juntar a você nessa empreitada."
    )
  );
  console.log(
    chalk.blue(
      "Você ordena que sua tripulação vá adiante para investigar o que está acontecendo no leste. Os dias passam lentamente, e não houveram noticias."
    )
  );
  console.log(
    chalk.blue(
      "Groc o orc chega correndo e relata suas descobertas com respiração ofegante."
    )
  );

  console.log(
    chalk.red(
      "'Encontramos um acampamento inimigo no coração da floresta de Forkl. Parece ser uma força vasta e poderosa, pronta para invadir nossas terras!'"
    )
  );

  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você faz:",
        choices: [
          "Ir pessoalmente até la para ver a ameaça.",
          "Mandar que ataquem o exército.",
          "Ignorar e dar ordens para que continuem para o leste.",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "Ir pessoalmente até la para ver a ameaça.") {
        console.log(
          chalk.bgBlue(
            "Continua..."
          )
        );
      } else if (action === "Mandar que ataquem o exército.") {
        console.log(
          chalk.bgBlue(
            "Continua..."
          )
        );
      } else if (
        action === "Ignorar e dar ordens para que continuem para o leste."
      ) {
        console.log(
          chalk.bgBlue(
            "Continua..."
          )
        );
      }
    });
}

module.exports = orcQuestionOne;
