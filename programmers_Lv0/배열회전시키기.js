function solution(numbers, direction) {
  if(direction === 'left') {
    numbers.push(numbers[0]);
    numbers.shift();
    return numbers
  }
  numbers.unshift(numbers[numbers.length - 1])
  numbers.pop();
  return numbers;
}