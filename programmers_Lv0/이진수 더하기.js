//parseInt와 toString은 특정 문자를 받아서, 뒤에 특정 진수로 변환해줌

function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
 }