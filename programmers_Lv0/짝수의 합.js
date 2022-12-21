function solution(n) {
  let answer = 0;
  for(let index = 0; index <= n; index++) {
    if(index % 2 === 0) answer += index;
  }
  return answer;
}