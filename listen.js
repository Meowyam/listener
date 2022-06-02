const fs = require('fs');
const { exec } = require('child_process');
const filePath = './hello';

let file = fs.readFileSync(filePath + '.hs');

const doHaskell = function() {
  exec('ghc ' + filePath + '.hs; ./' + filePath, (error, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
        console.log(`exec error: ${error}`);
    }
  });
}

console.log('Initial file content : ' + file);
console.log('Initial output : ');
doHaskell();

fs.watchFile(filePath + '.hs', { persistent: true, interval: 100 }, function() {
  console.log('File Changed ...');
  file = fs.readFileSync(filePath + '.hs');
  console.log('New file content : ' + file);
  console.log('New output : ');
  doHaskell();
});
