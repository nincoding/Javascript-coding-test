function solution(numbers) {
  let answer = [];
  numbers.sort((a, b) => b - a);
  answer.push(numbers[0] * numbers[1]);
  answer.push(numbers[numbers.length - 1] * numbers[numbers.length - 2]);
  return Math.max(...answer);
}


//리팩토링 - push하는 과정 생략하고 바로 리턴 시키는 방법
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length-1] * numbers[numbers.length-2]
  );
}