const addBtn = document.querySelector("#input_btn_box > button");
const addTopoInput = document.querySelector("#input_btn_box > input");

let todoList = [];

window.onload = () => {
    if (!localStorage.getItem("TodoList")) {
        localStorage.setItem("TodoList", []);
    } else {
        todoList = JSON.parse(localStorage.getItem("TodoList"));
    }
};

function addTodoBtnOnclick() {
    if (addTopoInput.value === "") {
        alert("할 일을 입력해주세요.");
        return;
    }

    todoList = localStorage.getItem("TodoList");
    let todoId = 0;

    if (todoList.length !== 0) {
        todoId = todoList[todoList.length - 1].id + 1;
    }
    let today = new Date();

    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);

    let dateString = year + "-" + month + "-" + day;

    const newTodo = {
        id: todoId,
        content: addTopoInput.value,
        date: dateString,
        complete: false,
    };

    todoList = [...todoList, newTodo];
    localStorage.setItem("TodoList", JSON.stringify(todoList));

    addTopoInput.value = "";
    alert("할 일이 등록 되었습니다.");
}

addBtn.addEventListener("click", addTodoBtnOnclick);

function todoRender() {
    todoList = JSON.parse(localStorage.getItem("TodoList"));

    const todoListHtml = todoList.map((todo) => {
        return `
        
        `;
    });
}
