window.addEventListener("load", function () {
    "use strict";
    
    let usersContainer = document.querySelector("#users");
    let userName = document.querySelector("#name");
    let userAge = document.querySelector("#age");
    let userMail = document.querySelector("#email");
    let addBtn = document.querySelector("#button");

    let users = new Table({
        tableClass: "table table-bordered table-hover"
    });

    users.addHeadingsRow("Имя", "Возраст", "Email");

    users.addRow("Иван", 39, "ivan@yandex.ru");
    users.addRow("Светлана", 19, "svetko@mail.ru");
    users.addRow("Наталья", 23, "nataly@gmail.com");

    usersContainer.innerHTML = users.generate();

    addBtn.addEventListener("click", function () {
        if (userName.value ==="" && userAge.value === "" && userMail.value === "") {
            alert("Заполните все поля!");
        } else {
            users.addRow(userName.value, userAge.value, userMail.value);
            usersContainer.innerHTML = users.generate();
            userName.value = "";
            userAge.value = "";
            userMail.value = "";
        }
    });
});