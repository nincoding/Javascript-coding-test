function solution(n) {
  let arr = new Set();
  for(let i = 1; i <= n; i++){
    for(let j = 2; j < i; j++){
      if(i % j === 0) arr.add(i);
    }
  }
  return arr.size;
}

//다른 풀이 - set을 사용하지 않는 방법
function solution(n) {
  let answer = 0;
  for(let i = 4; i <= n; i++) {
    for(let j = 2; j < i; j++) {
      if(i % j === 0) {
        answer += 1;
        break;
      }
    }
  }
  return answer;
}