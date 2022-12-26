function solution(i, j, k) {
  var answer = '';
  for(let index = i; index <= j; index++) {
    answer += String(index);
  }
  let arr = answer.split('');
  return arr.filter((v) => Number(v) === k).length;
}


//다른 풀이 
function solution(i, j, k) {
  let a = '';
  for(i; i <= j; i++){
    a += i;
  }
  return a.split(k).length - 1;
}