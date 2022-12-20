function solution(angle) {
  let result = 0;
  if(angle > 0 && angle < 90) return result = 1;
  if(angle === 90) return result = 2;
  if(angle > 90 && angle < 180) return result = 3;
  if(angle === 180) return result = 4;
}

//다른 예시
function solution(angle) {
  return [0, 90, 91, 180].filter(x => angle >= x).length;
}