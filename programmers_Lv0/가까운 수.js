function solution(array, n) {
  let arr = array.map((v) => {
    if(v < n) return n - v;
    if(v >= n) return v - n;
  })
  if(arr.includes(0)) return n;
  if(array.includes(n - Math.min(...arr))) return n - Math.min(...arr)
  if(array.includes(n + Math.min(...arr))) return n + Math.min(...arr)
}
