function solution(strlist) {
  let answer = [];
  for(let index = 0; index < strlist.length; index++) {
    answer.push(strlist[index].length);
  }
  return answer;
}

//다른 풀이 map을 사용해도 반복문처럼 인덱스의 탐색을 사용할 수 있다.
function solution(strlist) {
  return strlist.map((element) => element.length);
}