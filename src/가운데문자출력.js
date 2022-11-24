/*
소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

입력설명: 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
출력설명: 첫 줄에 가운데 문자를 출력합니다.

입력예제1: study
출력예제1: u
*/

let answer = "study";
function solution(answer) {
  let len = answer.length;
  if(len % 2 !== 0) { //홀수
    let 나누기 = Math.floor(len / 2);
    let re = answer.substring(나누기,len - 나누기);
    console.log(re);
    return re
  }
  if(len % 2 === 0) { //짝수
    let 짝수 = Math.floor(len / 2)- 1;
    let re = answer.substring(짝수,len - 짝수); 
    console.log(re);
    return re
  }
} 
solution(answer);
