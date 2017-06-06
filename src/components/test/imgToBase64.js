/**
 * Created by Administrator on 2017/4/27.
 */
const fs = require('fs');
const path = require('path');
const mineType = require('mime-types');

let filePath = path.resolve('./0-11.gif');

let data = fs.readFileSync(filePath);

data = new Buffer(data).toString('base64');

let base64 = 'data:' + mineType.lookup(filePath) + ';base64,' + data;

console.log(base64);

fs.writeFile('123.txt', base64,function(d){
  console.log(d);
});
