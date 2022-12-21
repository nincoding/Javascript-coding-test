function solution(numbers) {
  let arr = numbers.map((v, i) => {
    return numbers[i] * numbers[i + 1];
  })
  arr.pop();
  return Math.max(...arr);
}

//다른 풀이 sort를 사용해서 역순으로 정렬 후,
//가장 큰 수와 다음으로 가장 큰수를 바로 곱함(가장 큰 곱이 나옴)
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}