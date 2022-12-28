function solution(my_string) {
  const splited = my_string.split(" ");
  let ans = Number(splited[0]);
  splited.forEach((item, index) => {
      if(item === "+") ans += Number(splited[index + 1]);
      if(item === "-") ans -= Number(splited[index + 1]);
  })
  return ans;
}

//다른 풀이 - eval 위험하지만 string타입을 계산해준다. 사용하면 해킹의 위험에 노출되므로 절대 지양해야된다.
//var solution = eval;

/*
eval(new String("2 + 2")); // "2 + 2"를 포함한 String 객체를 반환
eval("2 + 2");             // 4를 반환
*/