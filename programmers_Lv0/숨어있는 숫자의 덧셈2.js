function solution(my_string) {
  let answer = my_string.replace(/[a-zA-Z]/g, '_').split('_')
  return answer.map((v) => Number(v)).reduce((acc, v) => acc + v)
}

//다른 풀이
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}