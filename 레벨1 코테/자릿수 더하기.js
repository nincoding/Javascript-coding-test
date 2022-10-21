/*
자연수 N이 주어지면, 
N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
*/

function solution(n)
{
    var answer = 0;
    n = n.toString() //숫자를 문자열로 변환해준다.
    for (let i = 0; i < n.length; i++){
        answer += parseInt(n[i])
    } //문자의 길이만큼 출력해 그걸 숫자로 변환시키고 answer에 계속 더해준다.
    return answer;
}