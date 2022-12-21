function solution(n) {
  let answer = [];
  for(let i = 0; i <= n; i++) {
    if(i % 2 !== 0) answer.push(i);
  }
  return answer.sort((a, b) => a - b);
}

//다른 풀이 - 반복문 조건을 홀수로 설정하고 범위를 입력받는 n까지 설정
function solution(n) {
  var answer = [];
  for (let i = 1; i<=n; i+=2) answer.push(i)
  return answer;
}