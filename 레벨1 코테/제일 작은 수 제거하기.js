/*
정수를 저장한 배열, arr 에서 
가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
*/

//잘못된 코드
function solution(arr) {
    arr.sort((a,b)=>b-a);
    arr.pop()
    return arr.length <= 1 ? [-1] : arr;
}
//실행했더니 테스트 오류남

//다른 코드 실행
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    return arr.length <= 1 ? [-1] : arr
 }

 //배열 arr에서 제일 작은 수를 선택해 삭제한다.
 //그리고 arr의 길이가 1보다 작거나 같으면 즉 1또는 0 이라는 말 -1 을 배열에 담아준다
 //아니라면 그대로 배열 출력