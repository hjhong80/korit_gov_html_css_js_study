// 비구조 할당 (구조 분해)
// 배열이나 객체의 속성을 해체하여 개별 변수에 할당하는 문법

const student = {
    name: "이동윤",
    age: 27,
    address: "부산광역시",
};

// const studentName = student.name;
// const studentAge = student.age;

// const { name: studentName, age: studentAge, address: studentAddress } = student;

// console.log(student);
// console.log(studentName, studentAge, studentAddress);

const { name, age, address } = student;

console.log(name, age, address);

// function printInfo(studentObj) {
//     console.log(studentObj.name);
//     console.log(studentObj.age);
//     console.log(studentObj.address);
// }

function printInfo({ name: studentName, age, address }) {
    console.log(studentName);
    console.log(age);
    console.log(address);
}
printInfo(student);

// 서로 다른 객체지만 속성 명이 같아서 충돌 발생
const s1 = {
    name: "이동윤",
    age: 27,
};

const s2 = {
    name: "박윤호",
    age: 25,
};

const { name: n1, age: a1 } = s1;
const { name: n2, age: a2 } = s2;

// 배열에서 비구조 할당
const numbers = [1, 2, 3, 4, 5];
const [num1, num2, num3] = numbers;

console.log(num1);
console.log(num2);
console.log(num3);
