function solution(my_string) {
  let my_number = my_string.split('').filter((v) => Number(v));
  let result = my_number.map((v) => parseInt(v))
  return result.reduce((acc, v) => acc + v);
}