function solution(cipher, code) {
  var answer = '';
  let num = code - 1;
  let arr = cipher.split('');
  for(let i = num; i < arr.length; i += code ) {
    answer += arr[i];
  }
  return answer;
}

//다른풀이 - filter를 사용한 풀이 index가 code로 나누었을때 나머지가 0인 수(code의 배수)
function solution(cipher, code) {
  return cipher.split('').filter((v, i) => (i + 1) % code === 0).join('');
}