const fs = require("fs");
const path = require("path");

const rm = function(dirpath) {
  if (fs.existsSync(dirpath)) {
    fs.readdirSync(dirpath).forEach(function(file, index) {
      var curPath = path.join(dirpath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        rm(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dirpath);
  }
};

const args = process.argv.slice(2);

rm(args[0]);
