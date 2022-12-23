function solution(n) {
  let answer = String(n).split('').map((v) => Number(v));
  return answer.reduce((acc, v) => acc + v)
}