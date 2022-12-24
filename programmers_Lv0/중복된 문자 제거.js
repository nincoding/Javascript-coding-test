function solution(my_string) {
  let answer = '';
  for(let i = 0; i < my_string.length; i++) {
    if(my_string.indexOf(my_string[i]) === i) answer += my_string[i];
  }
  return answer
}

//다른 풀이 - set을 사용한 풀이
function solution(my_string) {
  return [...new Set(my_string)].join('');
}