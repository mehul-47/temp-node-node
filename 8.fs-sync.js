const {readFileSync,writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')


writeFileSync('./content/result.txt',`Here is The result : ${first},${second}`,{ flag:'a'})
console.log('done with task');
console.log('starting with the next task');