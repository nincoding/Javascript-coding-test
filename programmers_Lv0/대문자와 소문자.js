function solution(my_string) {
  let answer = my_string.split('');
  let result = '';
  answer.forEach((v) => {
    if(v === v.toUpperCase()) result += v.toLowerCase();
    if(v !== v.toUpperCase()) result += v.toUpperCase();
  })
  return result;
}