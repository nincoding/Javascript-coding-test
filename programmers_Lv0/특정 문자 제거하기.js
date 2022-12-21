function solution(my_string, letter) {
  let answer = [];
  for(let i = 0; i < my_string.length; i++) {
    if(my_string[i] !== letter) answer.push(my_string[i]);
  }
  return answer.join('');
}

//다른 풀이 
function solution(my_string, letter) {
  const answer = my_string.split(letter).join('')
  return answer;
}


function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

function solution(my_string, letter) {
  return Array.from(my_string).filter(t => t !== letter).join('');
}