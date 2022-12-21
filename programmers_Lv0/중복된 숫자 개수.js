function solution(array, n) {
  let arr = array.filter((value) => value === n);
  return arr.length;
}