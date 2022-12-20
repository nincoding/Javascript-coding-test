/*
n개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

입력설명:
첫 줄에 자연수 n이 주어진다.(3<=n<=30)
두번째 줄부터 n개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
각 문자열의 길이는 서로 다르다.

출력설명:
첫 줄에 가장 긴 문자열을 출력한다.

입력예제1:
5
teacher
time
student
beautiful
good

출력예제1:
beautiful
*/
let str=["teacher", "time", "student", "beautiful", "good"];
function solution(str) {
  let result = str.map((v) => v = v.length).sort((a, b)=> b - a);
  let maxNum = result[0];
  for(x of str) {
    if(x.length === maxNum) return console.log(x)
  }
}
solution(str);