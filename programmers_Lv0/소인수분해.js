function solution(n) {
  let result = [];
  let divisor = 2;
  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor)
      n = n / divisor;
    }
    if (n % divisor !== 0) divisor ++;
  }
  return [...new Set(result)];
}

//다른풀이 for문과 while문 사용
function solution(n) {
  let resSet = new Set()
  for (let i = 2; i <= n; i++) {
    while ( n % i === 0 ) {
      n /= i
      resSet.add(i)
    }
  }
  return [...resSet];
}