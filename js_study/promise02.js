// promise chaining

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
//         console.log("첫번째 비동기 완료", data);
//         return getData();
//     })
//     .then((data) => {
//         console.log("두번째 비동기 완료", data);
//     });

promise
    .then(() => getData())
    .then(() => getData())
    .then(() => getData())
    .then((data) => console.log(data));
