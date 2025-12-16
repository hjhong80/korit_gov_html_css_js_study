const inputButton = document.querySelector(".input_button");
let idx = 0;

inputButton.onclick = () => {
    const name = document.querySelector(".input_name");
    const age = document.querySelector(".input_age");
    const address = document.querySelector(".input_address");

    if (name.value === "" || age.value === "" || address.value === "") {
        alert("빈칸 입력 금지");
        return;
    }

    idx++;
    const tb = document.querySelector(".t_body");
    tb.innerHTML += `<tr id="${idx}">
    <td>${idx}</td>
    <td>${name.value}</td>
    <td>${age.value}</td>
    <td>${address.value}</td>
    <td><button class="del_btn" id="${idx}">삭제</button></td></tr>
    `;

    name.value = "";
    age.value = "";
    address.value = "";
};
