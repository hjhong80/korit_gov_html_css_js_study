/*
async - 비동기 함수 정의 키워드
await - 비동기 함수 동기 호출 키워드

이때 await는 async 함수 내부에서만 사용 가능
*/

// async function getData() {
//     // 함수 앞에 async가 붙으면 리턴값이 promise가 됨
//     return "박윤호";
//     // resolve가 "박윤호"
// }

// const user = getData();
// user.then((name) => console.log(name));

// function getUserReq() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("사용자 데이터 받아옴");
//             resolve("서버1");
//         }, 2000);
//     });
// }

// async function getData() {
//     await getUserReq(); // getUserReq()함수의 promise가 resolve반환될때 까지 대기
//     await getUserReq(); // await를 붙이면? 2초간 3번 6초간 대기후 서버 2 반환(동기 실행)
//     await getUserReq(); // await를 안붙이면? 서버2 반환후 2초뒤에 3개가 한꺼번에 실행됨 (비동기 실행)
//     return "서버2";
// }

// const data = getData();
// data.then((server) => {
//     console.log(server);
// });

function getUserReq() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("사용자 데이터 받아옴");
            resolve({ name: "이동윤", age: 27 });
        }, 2000);
    });
}

function getTodoReq() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("투두 데이터 받아옴");
            resolve({ todoId: 1, title: "잠자기" });
        }, 3000);
    });
}

async function getUser() {
    const response = await getUserReq();
    return response;
}

async function getTodo() {
    const response = await getTodoReq();
    return response;
}

async function getData() {
    const user = await getUser();
    const todo = await getTodo();
    console.log(user);
    console.log(todo);
    console.log(`${user.name}의 할 일 ${todo.title}입니다.`);
}

getData();
