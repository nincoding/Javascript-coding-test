function solution(age) {
  const str = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  let result = String(age).split('');
  return result.map((v) => v = str[Number(v)]).join('');
}