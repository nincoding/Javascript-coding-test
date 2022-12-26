function solution(num_list, n) {
  var answer = [];
  for(let i = 0; i < num_list.length; i += n) {
    answer.push(num_list.slice(i, i + n))
  }
  return answer
}

//다른 풀이

function solution(num_list, n) {
  return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n))
}