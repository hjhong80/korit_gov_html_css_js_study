// // 쇼핑몰 로그인 솔루션

// function login(username, callback) {
//     setTimeout(() => {
//         callback(username);
//     }, 1000);
// }

// // 장바구니 추가 솔루션

// function addToCart(product, callback) {
//     setTimeout(() => {
//         callback(product);
//     }, 1000);
// }

// // 결제하기 솔루션

// function checkout(cardNumber, product, callback) {
//     setTimeout(() => {
//         callback(cardNumber, product);
//     }, 1000);
// }

// login("이동윤", (username) => {
//     console.log(`${username}님이 로그인 했습니다.`);
//     addToCart("닌텐도 스위치 2", (product) => {
//         console.log(`${product}가 장바구니에 추가되었습니다.`);
//         checkout("1234-5678-9012-3456", product, (cardNumber, product) => {
//             console.log(
//                 `${username}님의 ${product}에 대한 결제가 완료되었습니다. 카드번호 : ${cardNumber}`
//             );
//         });
//     });
// });

// 실패시 사용자 이름 없음 에러 객체 전달

function login(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username) {
                resolve(username);
            } else {
                reject(new Error("사용자 이름 없음"));
            }
        }, 1000);
    });
}

// 실패시 상품이 없음 에러 객체 전달
function addToCart(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product) {
                resolve(product);
            } else {
                reject(new Error("상품이 없음"));
            }
        }, 1000);
    });
}

// 실패시 카드 번호 또는 제품 없음 에러 전달
function checkout(cardNumber, product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cardNumber && product) {
                resolve({ cardNumber, product });
            } else {
                reject(new Error("카드번호 또는 제품 없음"));
            }
        }, 1000);
    });
}

const promise = login("이동윤");

promise
    .then((username) => {
        console.log(`${username}님이 로그인 했습니다.`);
        return addToCart("닌텐도 스위치 2");
    })
    .then((product) => {
        console.log(`${product}를 장바구니에 담았습니다.`);
        return checkout("1234-5678-9012-3456", product);
    })
    .then(({ cardNumber, product }) => {
        console.log(
            `${product}에 대한 결제가 완료되었습니다. 카드번호 : ${cardNumber}.`
        );
    })
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log("쇼핑몰 로그 아웃");
    });
