function solution(sides) {
  var answer = 0;
  let sum = sides.reduce((acc, v) => acc + v);
  let maxNum = Math.max(...sides);
  if(sum - maxNum > maxNum) return answer = 1;
  if(sum - maxNum <= maxNum) return answer = 2;
}