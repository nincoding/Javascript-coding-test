function solution(n) {
  var answer = 1;
  let arr = [];
  for(let i = 1; i <= n; i++) {
    answer *=  i
    if(answer <= n) arr.push(i)
  }
  return Math.max(...arr)
}

//다른풀이 while문 사용
function solution(n) {
  let i = 1;
  let f = 1;
  while (f * i < n) f *= ++i;
  return i;
}