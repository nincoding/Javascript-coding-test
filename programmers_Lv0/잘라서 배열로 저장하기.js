function solution(my_str, n) {
  let answer = [];
  for(let i = 0; i < my_str.length; i+= n) {
    if(i === 0) answer.push(my_str.substring(i, n));
    if(i !== 0) answer.push(my_str.substring(i, i + n));
  }
  return answer;
}