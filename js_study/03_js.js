// 객체
const student = {
    name: "박윤호",
    age: 25,
};

console.log(student.name);
console.log(student.age);

console.log(student["name"]);
console.log(student["age"]);

console.log(student);

student["name"] = "배찬익";
student["age"] = 23;
console.log(student);

student.name = "유노윤호";
student.age = 7;
student.address = "화성";
console.log(student);

student.printName = () => console.log("이름 : ", student.name);
student.printName();

const loginButton = {
    text: "로그인",
    value: "로그인되었음",
    onclick: () => {
        console.log(loginButton.value);
    },
};

loginButton.onclick();

const loginButtonKeys = Object.keys(loginButton)
console.log(loginButtonKeys)
console.log(Object.values(loginButton))
console.log(Object.entries(loginButton))
loginButtonEntries = Object.entries(loginButton)

for(let entry of loginButtonEntries) {
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value)
}