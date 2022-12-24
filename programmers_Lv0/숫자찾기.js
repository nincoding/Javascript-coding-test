function solution(num, k) {
  let answer = String(num).indexOf(k);
  if(answer !== -1) return answer + 1;
  return answer;
}