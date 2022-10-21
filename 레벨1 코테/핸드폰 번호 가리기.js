/*
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 
고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 
전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, 
solution을 완성해주세요.
*/

function solution(phone_number) {
    var answer = '';
    var a = phone_number.split("")
    for(var i = 0; i < a.length-4; i++){
    a.splice(i,1,'*')
    }
    a.toString();
    answer = a.join("")
    return answer;
}

//다른 풀이
const solution = n => [...n].fill("*",0,n.length-4).join("")

/*
문자열 n을 배열로 바꾸고,
배열의 첫번째부터 마지막에서 4번째 전 배열의 크기만큼
*로 채워라 그 이후에 조인하여 스트링으로 변환해라.
*/