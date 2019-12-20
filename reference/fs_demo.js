const fs = require('fs');
const path = require('path');

//Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//     if (err) throw err;
//     console.log('Folder created...');

// });

// Create and write to a file
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'oof', function (err) {
//     if (err) throw err;
//     console.log('File written to...');

// });

//Read
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);

});