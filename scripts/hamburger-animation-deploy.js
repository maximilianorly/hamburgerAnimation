const execa = require("execa");
const fs = require("fs");

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "hamburger-animation"]);
    console.log("Building...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "hamburger-animation"]);
    console.log("Pushing to hamburger-animation...");
    await execa("git", ["push", "origin", "HEAD:hamburger-animation", "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "hamburger-animation"]);
    console.log("Successfully deployed!");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();