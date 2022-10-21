/*
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
*/

function solution(n) {
    var answer = [];
    n = n.toString(); //숫자n을 문자열로 변환해준다.
    for(let i = 0; i < n.length; i++){
        answer.push(parseInt(n[i]))
    } //한글자 한글자 쪼개서 배열에 숫자로 다시 변환해 집어넣기
    answer.reverse(); //배열의 순서를 거꾸로 바꾸기
    return answer;
}