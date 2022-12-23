function solution(my_string) {
  var answer = [];
  let arr = my_string.split('');
  answer = arr.filter((v) => Number(v) || v === '0')
  return answer.map((v) => Number(v)).sort();
}