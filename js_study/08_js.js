// REST 문법

const student = {
    name: "이동윤",
    age: 27,
    address: "부산광역시",
    phone: "010-9402-7212",
};

const { name, address } = student;
console.log(name, address);

// ...변수명 : 앞에 지정된 구조 분해된 속성 변수명 외에 나머지 속성들을 전부 취급
const { age, phone, ...other } = student;
console.log(age);
console.log(phone);
console.log(other);

const numbers = [1, 2, 3, 4];
const [n1, n2, ...ns] = numbers;
console.log(n1);
console.log(n2);
console.log(ns);

// SPREAD 문법
// 기존 객체의 모든 속성을 새로운 객체에 복사하거나, 새로운 속성을 추가할때 사용

const newStudent = {
    ...student,
    gender: "남성",
};
console.log(newStudent);

const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);

let names = [];

function addNames(name) {
    names = [...names, name];
}

addNames("이동윤");
addNames("배찬익");
addNames("박윤호");

console.log(names);

let obj = {
    data1: "data1",
    data2: "data2",
};

function addProps(props) {
    obj = {
        ...obj,
        ...props,
    };
}

addProps({ data3: "data3", data4: "data4", data5: "data5" });
console.log(obj);

// 1. title, author, publisherYear 속성을 포함하는 book 객체 생성
// 해리포터, J.K 롤링, 1997
// 2. book 객체의 title, author 속성값 출력 (점표기법, 대괄호표기법)
// 3. book 객체에 getAge()라는 메소드 추가
//    현재 연도(new Date().getFullYear()) 에서 publisherYear를 뺀 값을 리턴
// 4. getAge() 호출 후 출력
// 5. book 객체에 새로운 속성 genre를 추가하고 값을 할당 ("판타지")
// 6. book 객체의 publisherYear를 2000으로 변경

console.log();
console.log("------------------------------------------------");
console.log();
// 1
let book = {
    title: "해리포터",
    author: "J.K 롤링",
    publisherYear: 1997,
};
console.log("1.", book);

// 2
console.log("2-1.", book.title, "/", book.author);
console.log("2-2.", book["title"], "/", book["author"]);

// 3
book = {
    ...book,

    getAge: () => {
        return new Date().getFullYear() - book.publisherYear;
    },
};
console.log("3.", book);
book.getAge2 = () => {
    return new Date().getFullYear() - book.publisherYear;
};
console.log("3.", book);

// 4
console.log("4.", book.getAge());

// 5
book = {
    ...book,
    genre: "판타지",
};
console.log("5.", book);

// 6
book.publisherYear = 2000;
console.log("6.", book);

const products = [
    { id: 1, name: "노트북", price: 1200000, category: "전자제품" },
    { id: 2, name: "티셔츠", price: 25000, category: "의류" },
    { id: 3, name: "모니터", price: 300000, category: "전자제품" },
    { id: 4, name: "청바지", price: 50000, category: "의류" },
    { id: 5, name: "마우스", price: 15000, category: "전자제품" },
];

// 1. 50000원 이상인 제품만 필터링 해서 expensiveProducts 배열에 넣고 출력
// 2. products 배열에서 각 제품의 이름과 가격만 포함하는 productNamesAndPrices 배열 만들기
// map
// [{name :  "노트북", price: 1200000}, ...]
// 3. products 배열에서  category가 전자제품인 제품만 선택해서 각 제품의 이름과 가격을 10%할인한 discountProducts 배열을 만드세요

// 1
let expensiveProducts = products.filter((p) => p.price >= 50000);
console.log("1.", expensiveProducts);

// 2
let productNamesAndPrices = products.map(({ name, price }) => ({
    name,
    price,
}));
console.log("2.", productNamesAndPrices);

// 3
let discountProducts = products
    .filter((p) => p.category === "전자제품")
    .map(({ name, price }) => ({ name, price: price * 0.9 }));
console.log("3.", discountProducts);
