const { Command } = require("commander");
const fs = require("fs");
const program = new Command();

function getStringFromFile(str) {
  const data = fs.readFileSync(str, "utf8");
  console.log(WordCount(data));
}

program
  .option("--value <fileName>", "file name")
  .action((options) => getStringFromFile(options.value));
program.parse(process.argv);
function WordCount(str) {
  return str.split(" ").length;
}
