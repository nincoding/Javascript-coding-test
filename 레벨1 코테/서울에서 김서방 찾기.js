/*
String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아,
"김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
*/

function solution(seoul) {
    var answer = '';
    var x = 0;
    x += seoul.indexOf("Kim");
    answer = "김서방은 "+x+"에 있다"
    return answer;
}


//answer = `김서방은 ${x}에 있다` 로 바꿀수 있음

//다른 풀이
function findKim(seoul) {
    return "김서방은 " + seoul.indexOf('Kim') + "에 있다";
}