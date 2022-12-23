function solution(str1, str2) {
  let answer = str1.indexOf(str2);
  if(answer !== -1) return answer = 1;
  if(answer === -1) return answer = 2;
}

//다른풀이 includes 사용- 문자열이 있다면 true, 없다면 false를 반환함
function solution(str1, str2) {
  if(str1.includes(str2)) return 1;
  return 2;
}