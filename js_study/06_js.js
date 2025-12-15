// 단축 평가 논리 연산
// && || ??

const name = "이동윤";
console.log(!!name && !!"이동윤");

// &&의 성질 : 앞의 값이 true일때 뒤의 값을 리턴, 앞의 값이 false일때 false 리턴
console.log(false && 10);
console.log(true && 10);

const data = [1, 2, 3, 4, 5];
console.log(data.length != 0 && "데이터 출력"); // data 배열의 내용이 있으면 "데이터 출력" 이라는 문자열 출력

// ||의 성질 : 앞의 값이 true일때 true 리턴, 앞의 값이 false 일때 뒤의 값을 리턴

console.log(data.length != 0 || "데이터 출력"); // data 배열의 내용이 있으면 true 출력

// ??의 성질 : 앞의 값이 null 또는 undefined가 아니면 앞의 값, 그 외에는 뒤의 값
console.log(null ?? 100);
console.log(undefined ?? 100);
console.log(20 ?? 100);

