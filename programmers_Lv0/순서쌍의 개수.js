function solution(n) {
  let answer = [];
  for(let i = 1; i <= n; i++) {
    if(n % i === 0) answer.push(i); 
  }
  return answer.length;
}

//다른 풀이 반복문을 순회할때, 해당 n의 루트값까지만 순회후, 약수에 해당한다면 카운트를 2증가시킴
function solution(n) {
  let ans = 0;
  for (let i = 1; i < Math.sqrt(n); i++)
    if (n%i === 0) ans+=2;
  //만약 n의 루트값이 정수라면 카운트에 1 증가, 아니라면 그냥 카운트 리턴
  return Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
}