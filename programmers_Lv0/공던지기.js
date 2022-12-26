function solution(numbers, k) {
  let getBall = 1
  for(let i = 0 ; i < k-1 ; i ++) {
    getBall += 2
    if(getBall > numbers.length - 1) getBall -= numbers.length
  }
  return getBall
}

//다른 풀이
function solution(numbers, k) {
  return numbers[((2 * (k - 1))) % numbers.length];
}