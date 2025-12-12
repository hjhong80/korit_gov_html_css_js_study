// 변수 선언 => let, const
let name = "아무개";
console.log(name);
console.log("Hello world!");
name = "홍길동";
console.log(name);

const age = 27;
console.log(age);
// age = 18
// console.log(age)                     // const는 상수이므로 에러뜸

let data1 = 10;
let data2 = "10";
let result = data1 == data2;
console.log(result); // == -> 단순 값비교 / 동등 연산자
let result2 = data1 === data2;
console.log(result2); // === -> 주소 비교 / 일치 연산자

// 타입 확인
console.log(typeof data1, typeof data2);

// 연산 법칙
console.log("1" + "2"); // 12
console.log(1, 2); // 1 2
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log(1 + 2); // 3
console.log("1" - "2");

// not 연산자
console.log(!1); // false
console.log(!0); // true
console.log(!"a"); // false
console.log(!""); // true
console.log(!null); // true
console.log(!!null); // false, !!는 자료형을 boolean으로 바꾸기 위한 명시적 선언

console.log("abc".length); // 문자열의 길이를 구하는 메소드 .length
console.log("abc".length > 0); // 비교 연산자가 들어가면 boolean type
console.log(!!"" === false); //""는 boolean 변환시 false

// (json 형태와 유사)javascript에서 객체로 판단
let data = {
    name: "이동윤",
    age: 27,
};

console.log(data);

if (!data) {
    console.log("사용자 정보가 없습니다.");
} else if (data.name == "삼동윤" && data.age === 27) {
    console.log("사용자 이름과 나이가 모두 일치합니다.")
} else if (data.name === "삼동윤") {
    console.log("사용자 이름이 일치합니다.");
} else if (data.age === 27) {
    console.log("사용자 이름은 일치하지 않지만, 나이는 일치합니다.");
} else {
    console.log("사용자가 일치하지 않습니다.");
}

for (let i = 0 ; i < 10 ; i++) {
    console.log(i)
}
