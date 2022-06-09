const { exec } = require('child_process');
const express = require('express');
const parse = require('body-parser');
const path = require('path');
const fs = require('fs');
const filePath = './hello';
const sys = require('util');
let file = fs.readFileSync(filePath + '.hs');
//const filePath = './hello';

const doHaskell = function(x) {
  exec(filePath + " " + x, (error, stdout, stderr) => {
    console.log(x);
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
        console.log(`exec error: ${error}`);
    }
  });
}

const hello = express();

hello.get('/', function(req,res) {
  res.sendFile(path.join(__dirname,'hello.html'));
});

hello.post('/', parse.urlencoded({ extended: true }), (req,res) => {
  res.sendFile(path.join(__dirname,'hello.html'));
  let val = req.body.hello;
  //console.log(val);
  function puts(error, stdout, stderr) { sys.puts(stdout) };
  doHaskell(val);
});

hello.listen(8000, () => {
  console.log('hi');
});
