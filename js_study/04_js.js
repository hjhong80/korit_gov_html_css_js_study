// 배열
const arr1 = []; // 빈배열
const arr2 = new Array(); // 빈배열

// push : 배열의 끝에 요소를 추가
arr1.push(10);
arr1.push(20);
arr1.push(30);
console.log(arr1);

arr2.push(10);
arr2.push(20);
arr2.push(30);
console.log(arr2);

console.log(arr1 == arr2);
console.log(arr1 === arr2);

const json1 = JSON.stringify(arr1); // json 형태의 문자열로 변경됨
const json2 = JSON.stringify(arr2);
console.log(json1);
console.log(json1 === json2);

const arr3 = JSON.parse(json1);
console.log(arr3);

const names = ["배찬익", "유노윤호", "z|희원|z"];
names.push("심재원");

// 요소 제거 : pop() -> 배열의 요소중 마지막 요소를 제거후 반환
console.log(names.pop());

// 요소 수정/삽입/제거 : splice(인덱스, 제거할수량, 추가할요소)
names.splice(1, 0, "오영진");
console.log(names);

names[0] = "빠니찬익";
console.log(names);

// 요소찾기 : find => 주어진 조건 함수를 만족하는 배열의 첫번째 요소를 반환
const findFx = (str) => str === "z|희원|z";
const foundName = names.find(findFx);
console.log(foundName);
console.log(names.find((name) => name === "z|희원|z"));

const students = [
    { name: "배찬익", age: 23 },
    { name: "박윤호", age: 6 },
    { name: "정희원", age: 15 },
    { name: "심재원", age: 18 },
];
console.log(students);

console.log(students.find((student) => student.name === "박윤호" && student.age === 6));
