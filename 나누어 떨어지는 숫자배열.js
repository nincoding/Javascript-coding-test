/*
array의 각 element 중 divisor로 나누어 떨어지는 값을 
오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
*/

function solution(arr, divisor) {
    var answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor == 0){
           answer.push(arr[i]);
        }
    }
    if(answer.length == 0) {
        answer.push(-1);
    }
    return answer.sort((a,b) => a - b);
}

//다른 풀이
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}

//filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.