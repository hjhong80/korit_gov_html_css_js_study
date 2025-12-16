// DOM(Document Object Model)
// html은 document지만 tag는 object로 존재 -> javascript에서 tag들을 다룰 수 있다!

const title1 = document.getElementById("title");
console.log({ title1 });

const titles = document.getElementsByClassName("title");
console.log({ titles });

const h3 = document.getElementsByTagName("h3");
console.log({ h3 });

const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
console.log({ d1 }); // children인 d2의 정보도 가져올 수 있음

const title2 = document.querySelector("#title"); // #{id}
const title3 = document.querySelector(".title"); // .{classname}
const titles2 = document.querySelectorAll(".title");

const div2 = document.querySelector("#d1 > #d2"); // 자식 선택 가능
console.log(div2);

div2.innerHTML = "<p>innerHTML입니다.</p>";
// div2.innerText = "<p>innerHTML입니다.</p>";

const students = [
    { name: "박윤호", age: 25, address: "김해시" },
    { name: "배찬익", age: 23, address: "대연동" },
    { name: "정희원", age: 31, address: "사직동" },
];

const tbody = document.querySelector(".student_table > tbody");
const trs = students.map((student, index) => {
    return `<tr>
    <td>${index + 1}</td>
    <td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.address}</td>
    </tr>`;
});

tbody.innerHTML = trs.join("");

const tdList = document.querySelectorAll("td");
tdList.forEach((td) => {
    td.style = "border: 1px solid black";
});

const studentTable = document.querySelector(".student_table");
studentTable.id = "table_id";
studentTable.classList.remove("student");
studentTable.classList.add("student_class");
