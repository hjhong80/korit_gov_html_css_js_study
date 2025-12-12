// javascript 의 함수

// 일반 함수 정의
function 함수명(매개변수1, 매개변수2) {
    console.log("함수호출됨");
    let 리턴데이터 = "이것은 리턴값";
    console.log(매개변수1);
    console.log(매개변수2);
    return 리턴데이터;
}

console.log(함수명());
let 리턴값 = 함수명(1, 2);
console.log(리턴값);

// 익명함수 : 이름이 없는 함수, 주로 변수에 할당하거나
// 다른 함수의 인수로 사용함
const 함수명2 = function (매개변수1, 매개변수2) {
    console.log("aaaa");
};

// 화살표 함수
const 화살표함수 = (매개변수1, 매개변수2) => {
    return "리턴값";
};

/*
1. 매개변수가 하나면 () 생략 가능
2. 실행문(구현부)가 한줄이면 {} 생략 가능
3. {} 생략시 값만 입력하면 return값이 된다.
{} 를 생략하지 않고 return하려면 return 키워드를 명시해야 한다.
*/

// function fx() {}

const fx1 = () => console.log("fx1 호출");
const fx2 = (n) => console.log(n);
const fx3 = (n) => n + 1;
const fx4 = (n) => {
    console.log(n);
    return n + 1;
};

fx2(2);

const result = fx3(4);
console.log(result);

const a = fx3; // a라는 변수에 fx3이라는 함수를 할당
const aa = () => {
    console.log("aa 함수 호출");
    return "aa 함수 리턴값";
};

const bb = (fxx) => {
    console.log("bb 함수 호출");
    return fxx;
};

console.log("----------");

const aaa = (fxx, fxx2) => {
    console.log("aaa 함수 호출");
    console.log(fxx());
    console.log(fxx2());
    return "aaa 함수 리턴값";
};

console.log(aaa(bb(aa), bb(aa)));
