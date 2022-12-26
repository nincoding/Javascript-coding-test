function solution(array) {
  let answer = array.join('').split('');
  return answer.filter((v) => v === '7').length;
}

//다른 풀이 - 굳이 filter를 사용할 필요없이 split할때 7을 기준으로 나눠서 길이를 반환하면 된다.
function solution(array) {
  return array.join('').split('7').length - 1;
}