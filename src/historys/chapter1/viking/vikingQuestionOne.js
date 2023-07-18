function vikingQuestionOne(inquirer, chalk) {
  console.log(chalk.bgYellow(""));
  console.log(
    chalk.blue(
      "As águas do mar estão agitadas, as nuvens carregadas e o vento soprando com força. O clima sombrio parece refletir a gravidade da missão que está por vir."
    )
  );
  console.log(
    chalk.blue(
      "Finalmente, após uma jornada extenuante, sua tripulação avista as costas do leste. "
    )
  );
  console.log(
    chalk.blue(
      "Vocês encontram ruínas antigas e artefatos misteriosos, indícios de uma civilização há muito desaparecida."
    )
  );

  console.log(
    chalk.red(
      "Derrepende um pequeno grupo de selvagens se aproximam, querendo evitar que você e sua tripulação sigam adiante."
    )
  );

  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você faz:",
        choices: [
          "Eliminar todos os selvagens.",
          "Tentar negociar.",
          "Se render.",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "Eliminar todos os selvagens.") {
        console.log(chalk.bgBlue("Continua..."));
      } else if (action === "Tentar negociar.") {
        console.log(chalk.bgBlue("Continua..."));
      } else if (action === "Se render.") {
        console.log(chalk.bgBlue("Continua..."));
      }
    });
}

module.exports = vikingQuestionOne;
