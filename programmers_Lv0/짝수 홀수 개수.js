function solution(num_list) {
  let evenNum = num_list.filter((v) => v % 2 === 0).length;
  let oddNum = num_list.filter((v) => v % 2 !== 0).length;
  let result = [];
  result.push(evenNum, oddNum);
  return result;
}

//다른 풀이 배열을 바로 리턴시키는 방법
function solution(num_list) {
  return [
    num_list.filter((num) => num % 2 === 0).length,
    num_list.filter((num) => num % 2 === 1).length
  ];
}