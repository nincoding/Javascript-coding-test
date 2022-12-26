function solution(before, after) {
  var answer = 0;
  let str1 = before.split('').sort().join('');
  let str2 = after.split('').sort().join('');
  if(str1 === str2) return answer = 1;
  if(str1 !== str2) return answer = 0;
}

