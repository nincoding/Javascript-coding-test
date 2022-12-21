function solution(n, k) {
  let price = n * 12000 + k * 2000;
  let sale = Math.floor(n / 10);
  return price - (sale * 2000);
}