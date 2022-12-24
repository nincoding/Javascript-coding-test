function solution(my_string, num1, num2) {
  let str = '';
  [...my_string].forEach((v, i) => {
    if(i === num1) str += my_string[num2];
    if(i === num2) str += my_string[num1];
    if(i !== num1 && i !== num2) str += v
 })
  return str;
}

//다른 풀이

function solution(my_string, num1, num2) {
  my_string = my_string.split('');
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join('');
}