/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
    console.log("building app...");
    await execa("ng", ["build", "--base-href", "https://peltos.github.io/d20d/"]);
    console.log("Changing branch to 'gh-pages'...");
    await execa("git", ["checkout", "gh-pages"]);
    console.log("Changing files...");
    await execa("find", ["./", "-maxdepth", "1", "-type", "f", "-exec", "rm", "-iv", "-f", "{}\;"]);
    await execa("mv", ["-v", "dist/*", "."]);
    await execa("mv", ["-v", "d20d/*", "."]);
    await execa("rm", ["-r", "dist"]);
    await execa("rm", ["-r", "d20d"]);
    console.log("Committing new files...");
    await execa("find", ["./", "-maxdepth", "1", "-type", "f", "-exec", "git", "add", "{}\;"]);
    await execa("git", ["commit", "-m", "\"gh-pages changes\""]);
    await execa("git", ["push"]);
    console.log("Done!!");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();