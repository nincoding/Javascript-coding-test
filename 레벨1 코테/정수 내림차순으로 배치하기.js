/*
함수 solution은 정수 n을 매개변수로 입력받습니다.
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
예를들어 n이 118372면 873211을 리턴하면 됩니다.
*/

function solution(n) {
    return Number(n.toString().split("").sort((a,b)=>b-a).join(""));
}

/*
n을 문자로 바꿔준다.
문자가 된 n을 하나씩 쪼갠다.
그걸 sort(a,b)=>b-a 로 바꾼 함수에 넣는다. 이러면 숫자가 큰순으로 정렬됨
그리고 다시 하나로 합쳐준다.
마지막으로 숫자로 바꿔준다.
*/