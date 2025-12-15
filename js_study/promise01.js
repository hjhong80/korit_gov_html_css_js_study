// promise는 기본적으로 javascript의 비동기 처리에 사용되는 객체

// promise 객체는 state와 result 속성을 가지고 있다.

// state = { pending, fulfilled, rejected }
// pending(대기) : 초기 상태, 비동기 작업이 아직 완료되지 않은 상태 / peding 상태일때 result = undefined
// fulfilled(이행) : 비동기 작업이 성공적으로 완료된 상태 / fulfilled 상태일때 result = 작업의 결과값
// rejected(거부) : 비동기 작업이 실패한 상태 / reject 상태일때 result = 실패한 이유(에러 객체)

// promise의 인자로 함수(executor)를 전달
// 객체 생성과 동시에 즉시 executor 실행됨
// resolve => 비동기 작업이 성공했을때 호출하는 함수
// reject => 비동기 작업이 실패했을때 호출하는 함수

function getData() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "이동윤" };
            // const data = null;
            if (data) {
                console.log("비동기 작업 성공");
                resolve(data);
            } else {
                reject(new Error("네트워크 에러 발생"));
            }
        }, 2000);
    });
    return promise;
}

const promise = getData();

// promise
//     .then((data) => {
//         console.log("작업 성공 후 이행 상태", data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("마무리 작업");
//     });

// promise
//     .then(() => getData(2))
//     .then(() => getData(2))
//     .then(() => getData(1))
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error.message));

promise
    .then((data) => {
        console.log(data);
        return "hello";
        // 값을 리턴하면 promise의 resolve에 해당 값이 전달됨
    })
    .then((data) => {
        console.log(data);
    });
