function solution(numbers) {
  let num = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
  ]
  num.forEach((item, index) => {
    numbers = numbers.split(item).join(String(index));
  })
  return Number(numbers);
}

//다른풀이 - 정규표현식을 이용한 replace사용법
function solution(numbers) {
  const obj = {
    zero: 0, one: 1, two: 2, three: 3, four: 4,
    five: 5, six: 6, seven: 7, eight: 8, nine: 9
  };
  const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
    return obj[v];
  });
  return Number(num);
}