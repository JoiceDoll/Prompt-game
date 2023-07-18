function vikingQuestionTwo(inquirer, chalk) {
  console.log("");
  console.log(
    chalk.blue(
      "Diante da profecia e da iminente ameaça que se aproxima do leste, você toma uma decisão mais cautelosa. Em vez de embarcar diretamente com sua tripulação para enfrentar o desconhecido, opta por enviar um grupo de exploradores para sondar o que está acontecendo."
    )
  );
  console.log(
    chalk.blue(
      "À medida que avançam em terreno desconhecido, seus exploradores encontram aldeias isoladas e pessoas amigáveis, mas temerosas. Elas compartilham histórias de uma força misteriosa que está se espalhando pela região. "
    )
  );
  console.log("");
  console.log(
    chalk.blue(
      "Com base nas informações trazidas pelos exploradores, você reúne sua tripulação e se prepara para a próxima fase. Agora, munido de conhecimento valioso, você está mais preparado para enfrentar a ameaça que paira sobre o leste. As escolhas que fizer a partir desse momento serão fundamentais para determinar o destino das terras orientais e sua própria jornada."
    )
  );
  console.log("");
  console.log(
    chalk.red(
      "A saga está apenas começando, e o futuro será moldado pelas suas decisões. Está pronto para liderar seus vikings em uma batalha épica contra o mal que ameaça as terras do leste?"
    )
  );

  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você vai escolher?",
        choices: [
          "SIM! estou pronto.",
          "Esperar um pouco mais.",
          "Não, prefiro fugir.",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "SIM! estou pronto.") {
        console.log(chalk.bgBlue("Continua..."));
      } else if (action === "Esperar um pouco mais.") {
        console.log(chalk.bgBlue("Continua..."));
      } else if (action === "Não, prefiro fugir.") {
        console.log(chalk.bgBlue("Continua..."));
      }
    });
}

module.exports = vikingQuestionTwo;
