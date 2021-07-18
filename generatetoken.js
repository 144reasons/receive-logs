const random = require('rand-token')
const fs = require('fs')

var token = random.generate(32);

console.log(token)

fs.writeFile('./savetoken.txt', token, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });