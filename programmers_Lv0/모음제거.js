function solution(my_string) {
  let answer = ['a', 'e', 'i', 'o', 'u'];
  let arr = my_string.split('');
  return arr.filter((v) => !answer.includes(v)).join('')
}

//다른풀이 - 정규표현식을 사용한 모음제거
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}