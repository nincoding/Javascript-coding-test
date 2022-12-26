//한번만 등장한 문자를 찾을 땐 indexOf와 lastIndexOf가 같은지 비교하자.

function solution(s) {
  let answer = [];
  let a = s.split('');
  a.forEach((v) => {
    if(a.indexOf(v) === a.lastIndexOf(v)) answer.push(v);
 })
  return answer.sort().join('');
}