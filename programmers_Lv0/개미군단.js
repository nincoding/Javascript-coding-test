function solution(hp) {
  let a = Math.floor(hp / 5) //4 
  let b = Math.floor((hp - (a * 5)) / 3);
  let c = 0;
  if(a * 5 + b * 3 !== hp) c = hp - (a * 5 + b * 3);
  return a + b + c;
}

//다른 풀이
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + (hp % 5) % 3;
}

//count와 hp의 변하는 값을 활용한 풀이
function solution(hp) {
  let count = 0;
  count += Math.floor(hp/5);
  hp = hp % 5;
  count += Math.floor(hp/3);
  hp = hp % 3;
  return count + hp;
}