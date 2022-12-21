function solution(array, height) {
  let answer = array.filter((value) => value > height);
  return answer.length;
}