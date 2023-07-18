function orcQuestionTwo(inquirer, chalk) {
  console.log(
    chalk.blue(
      "Você decidiu partir sozinho em uma jornada perigosa. Guiado pelas pistas vagas encontradas nas escrituras antigas e pelos símbolos enigmáticos do medalhão, você atravessou vastas planícies e terras selvagens."
    )
  );
  console.log(
    chalk.red(
      "Foi então que um ser diminuto, com um sorriso travesso no rosto e olhos faiscantes, atravessou seu caminho. Era um duende, conhecido por sua natureza brincalhona e ardilosa. Garok parou e encarou o duende, curioso para descobrir o motivo de sua aparição."
    )
  );
  console.log(
    chalk.green(
      "HA HA HA, O duende riu, 'Olá, bravo guerreiro orc! Vejo que estás em uma jornada repleta de mistérios e perigos. Posso lhe oferecer um conselho, se estiveres disposto a me conceder um pequeno favor.'"
    )
  );
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você faz:",
        choices: [
          "Perguntar ao duende do que se trata.",
          "Ignorar a proposta e seguir seu caminho adiante.",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "Perguntar ao duende do que se trata.") {
        console.log(chalk.bgBlue("Continua..."));
      } else if (
        action === "Ignorar a proposta e seguir seu caminho adiante."
      ) {
        console.log(chalk.bgBlue("Continua..."));
      }
    });
}

module.exports = orcQuestionTwo;
