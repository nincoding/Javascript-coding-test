// 배열안에서 n의 배수는 배열의 인덱스를 n으로 나눈 나머지 값이 0인 수들
function solution(n, numlist) {
  return numlist.filter((v) => v % n === 0);
}