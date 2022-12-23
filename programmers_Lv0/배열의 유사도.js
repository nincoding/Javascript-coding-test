function solution(s1, s2) {
  let answer = 0;
  for(let i = 0; i < s2.length; i++) {
    if(s1.includes(s2[i])) answer += 1;
  }
  return answer;
}

//다른 풀이 filter의 콜백함수로 includes 사용
function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}