function solution(rsp) {
  var answer = '';
  let arr = rsp.split('')
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] === '2') answer += '0';
      if(arr[i] === '0') answer += '5';
      if(arr[i] === '5') answer += '2';
  }
  return answer;
}

//다른 풀이 객체를 사용한 풀이 rsp가 2면, arr가 2인 값에 접근(0)해서 rsp의 2를 0으로 바꿈
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2
  };
  var answer = [...rsp].map(v => arr[v]).join("");
  return answer;
}