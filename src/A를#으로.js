/* 
대문자로 이루어진 영어단어가 입력되면 
단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램을 작성하세요.

입력설명: 첫 번째 줄에 문자열이 입력된다.
출력설명: 첫 번째 줄에 바뀐 단어를 출력한다.

입력예제1: BANANA
출력예제1: B#N#N#
*/

//나의 풀이
let answer = 'BANANA';

function solution(answer) {
  arr = answer.split('')
  return arr.map((index) => {
    if(index == 'A') return index = '#';
    if(index !== 'A') return index;
  }).join('')
}
console.log(solution(answer));

//해설 풀이1
function solution(s) {
  let answer = "";
  for(let x of s) {
    if(x === 'A') answer += "#";
    else answer += x;
  }
  return answer;
}
let str = 'BANANA';
console.log(solution(str));

//해설 풀이2
function solution(s) {
  let answer = s;
  s = s.replace(/A/g, '#');
  return answer;
}
let str2 = 'BANANA';
console.log(solution(str2));