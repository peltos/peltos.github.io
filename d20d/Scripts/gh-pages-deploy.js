/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
    await execa("ng", ["build", "--base-href", "https://peltos.github.io/d20d/"]);
    await execa("git", ["checkout", "gh-pages"]);
    await execa("for", ["r", "in", "$(find", "./", "-type", "f", "-maxdepth", "1);do", "rm", "-v", "$r;done"]);
    await execa("mv", ["-v", "dist/*", "."]);
    await execa("rm", ["-r", "dist"]);
    await execa("for", ["r", "in", "$(find", "./", "-type", "f", "-maxdepth", "1);do", "git", "add", "$r;done"]);
    await execa("git", ["commit", "-m", "\"gh-pages changes\""]);
    await execa("git", ["push"]);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();