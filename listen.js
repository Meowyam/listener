const fs = require('fs');
const filePath = './hello.hs';

var file = fs.readFileSync(filePath);

console.log('Initial File content : ' + file);


fs.watchFile(filePath, { persistent: true, interval: 100 }, function() {
    console.log('File Changed ...');
    file = fs.readFileSync(filePath);
    console.log('File content at : ' + new Date() + ' is \n' + file);
});
