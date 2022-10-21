/*
함수 solution은 정수 x와 자연수 n을 입력 받아, 
x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
*/

function solution(x, n) {
    var answer = [];
    var sum = [];
    //x씩 증가하는 건 x의 제곱근으로 치환할수 있음
    //Math.pow(x,n)
    //n은 n의 길이만큼 하나씩 커짐
    for(let i = 1; i <= n; i++){
      sum.push((n*i))
    }
    for(let j = 1; j <= sum.length; j++){
        answer.push(x * j)
    }
    return answer;
}

//다른 풀이

function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x*i)
    }
    return answer;
}

//또 다른 풀이
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}