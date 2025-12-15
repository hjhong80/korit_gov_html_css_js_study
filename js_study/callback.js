// callback function
// 다른 함수의 인자로 전달되는 함수

// async callback
// 비동기 작업이 완료된 후에 호출되는 콜백함수

// function getData(callback) {
//     setTimeout(() => {
//         console.log("서버에서 데이터 받아옴");
//         callback({ name: "이동윤" });
//     }, 2000);
// }

// getData((data) => {
//     console.log(data);
// });

// 쇼핑몰 로그인 솔루션

function login(username, callback) {
    setTimeout(() => {
        callback(username);
    }, 1000);
}

// 장바구니 추가 솔루션

function addToCart(product, callback) {
    setTimeout(() => {
        callback(product);
    }, 1000);
}

// 결제하기 솔루션

function checkout(cardNumber, product, callback) {
    setTimeout(() => {
        callback(cardNumber, product);
    }, 1000);
}

login("이동윤", (username) => {
    console.log(`${username}님이 로그인 했습니다.`);
    addToCart("닌텐도 스위치 2", (product) => {
        console.log(`${product}가 장바구니에 추가되었습니다.`);
        checkout("1234-5678-9012-3456", product, (cardNumber, product) => {
            console.log(
                `${username}님의 ${product}에 대한 결제가 완료되었습니다. 카드번호 : ${cardNumber}`
            );
        });
    });
});

// 위처럼 콜백함수가 중첩되면서 콜백지옥이 발생된다.