function solution(dot) {
  let answer = 0;
  if(dot[0] > 0 && dot[1] > 0) return answer = 1;
  if(dot[0] > 0 && dot[1] < 0) return answer = 4;
  if(dot[0] < 0 && dot[1] > 0) return answer = 2;
  if(dot[0] < 0 && dot[1] < 0) return answer = 3;
}