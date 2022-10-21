/* 
두 정수 a, b가 주어졌을 때 
a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, 
solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 
3 + 4 + 5 = 12이므로 12를 리턴합니다.
*/


function solution(a, b) {
    var answer = 0;
    if(a<=b){
    for(var i = a; i <= b; i++){
        answer += i 
    }
} else if(a >= b) {
    for(var i = b; i <= a; i++){
        answer += i
    }
}
    return answer;
}

/*
a 와 b에 속한 정수는 (a <= 정수 <= b) 또는 (b <= 정수 <= a) 이다.
이 정수는 이 범위 안에서 하나씩 커지며,
커진 수를 반복적으로 더해줘야한다.
*/