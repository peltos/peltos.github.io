/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
    await execa("ng", ["build", "--base-href", "https://peltos.github.io/d20d/"]);
    await execa("git", ["checkout", "gh-pages"]);
    await execa("find", ["./", "-maxdepth", "1", "-type", "f", "-exec", "rm", "-iv", "-f", "{}\;"]);
    await execa("mv", ["-v", "dist/*", "."]);
    await execa("rm", ["-r", "dist"]);
    await execa("find", ["./", "-maxdepth", "1", "-type", "f", "-exec", "git", "add", "{}\;"]);
    await execa("git", ["commit", "-m", "\"gh-pages changes\""]);
    await execa("git", ["push"]);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();