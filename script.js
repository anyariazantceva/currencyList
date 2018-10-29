window.addEventListener("load", function () {
    "use strict";
    
    let usersContainer = document.querySelector("#users");

    let users = new Table({
        tableClass: "table table-bordered table-hover"
    });

    const request = new XMLHttpRequest();
    let URL = "https://www.cbr-xml-daily.ru/daily_json.js";
    request.open("GET", URL);
    request.send();

    request.addEventListener("load", function() {
        if(request.status === 200) {
            let currency = JSON.parse(request.responseText);

            users.addHeadingsRow("Название", "Код", "Курс к рублю");

            users.addRow(currency.Valute.USD.Name, currency.Valute.USD.NumCode, currency.Valute.USD.Value);
            users.addRow(currency.Valute.EUR.Name, currency.Valute.EUR.NumCode, currency.Valute.EUR.Value);
            users.addRow(currency.Valute.GBP.Name, currency.Valute.GBP.NumCode, currency.Valute.GBP.Value);
            users.addRow(currency.Valute.CNY.Name, currency.Valute.CNY.NumCode, currency.Valute.CNY.Value);
            users.addRow(currency.Valute.JPY.Name, currency.Valute.JPY.NumCode, currency.Valute.JPY.Value);

            usersContainer.innerHTML = users.generate();
        } else {
            alert("Данные не поступили")
        }


    });

});