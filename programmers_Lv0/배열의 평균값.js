function solution(numbers) {
  let sum = numbers.reduce((acc, value) => acc + value);
  return sum / numbers.length;
}