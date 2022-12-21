function solution(money) {
  return [
    Math.floor(money / 5500),
    money - (Math.floor(money / 5500) * 5500)
  ];
}

//다른 풀이 - 잔돈 계산시 나머지 연산자 활용
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}