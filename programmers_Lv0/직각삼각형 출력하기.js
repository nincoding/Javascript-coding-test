const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  const size = Number(input[0]);
  let result = '';
  for(let i = 0; i < size; i++) {
    for(let j = 0; j <= i; j++) {
      result += '*';
    }
    result += '\n'
  }
  return console.log(result);
});

// 다른풀이 - 반복문을 한번만 사용하면서, repeat 적용
for(let i = 1; i <= Number(input[0]); i++){
  console.log('*'.repeat(i))
}