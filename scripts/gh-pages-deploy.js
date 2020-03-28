// Refer to line 32 of README.md

const execa = require("execa");
const fs = require("fs");
const emoji = require("node-emoji");

(async () => {
  try {
    console.log(`Grab a ${emoji.get('coffee')}  while we build and deploy... ${emoji.get('computer')} ${emoji.get('rocket')}`)
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    console.log(`Building... ${emoji.get('building_construction')} ${emoji.get('construction')}`);
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log(`Pushing to gh-pages... ${emoji.get('arrow_upper_right')} ${emoji.get('cloud')}`);
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log(`${emoji.get('tada')} ${emoji.get('tada')} ${emoji.get('tada')}`)
    console.log(`Successfully deployed! ${emoji.get('postbox')} ${emoji.get('person_in_lotus_position')}`);
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();