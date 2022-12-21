function solution(my_string, n) {
  let answer = '';
  for(let i = 0; i < my_string.length; i++) {
    for(let j = 0; j < n; j++){
      answer += my_string[i];
    }
  }
  return answer;
}

//다른 풀이 repeat를 사용한 반복처리
function solution(my_string, n) {
  var answer = [...my_string].map(v => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}