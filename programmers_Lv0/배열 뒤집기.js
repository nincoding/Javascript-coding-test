function solution(num_list) {
  return num_list.reverse((a, b) => b - a);
}

//다른 풀이 reverse만 사용해도 배열의 숫자타입값들이 역순으로 재정렬 된다.
function solution(num_list) {
    return num_list.reverse()
}