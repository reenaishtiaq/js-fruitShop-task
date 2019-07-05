
var myAccount = 0;
var rupes = 0;
var totalBill = 0;
var appleNumber = 0;
var orangeNumber = 0;
var bananaNumber = 0;

function plusNumber() {
    // 1. Get the value of input which have id "account"
    // 2. Get the value of input which have id "bill"
    // 3. Get the value of input which have id "apple"


    document.querySelector("#account").value;
    document.querySelector("#bill").value = totalBill;
    document.querySelector('#apple').value = appleNumber;


    if (myAccount > 10) {
        alert("You don't have sufficient money");
    } else {
        appleNumber += 1;
        rupes += 10;
        myAccount = myAccount - rupes;
        totalBill = 10 * appleNumber;
    }
}

function minusNumber() {
    document.querySelector("#bill").value = totalBill;
    document.querySelector('#apple').value = appleNumber;
    if (totalBill > 0) {
        appleNumber = appleNumber - 1;
        rupes -= 10;
        myAccount = myAccount + rupes;
        totalBill = +rupes;
    }
}


function addNumber() {
    document.querySelector("#account").value;
    document.querySelector("#bill").value = totalBill;
    document.querySelector('#orange').value = orangeNumber;

    if (myAccount > 10) {
        alert("You don't have sufficient money");
    } else {
        orangeNumber += 1;
        rupes += 15;
        myAccount = myAccount - rupes;
        totalBill = 15 * orangeNumber;
    }
}

function substNumber() {
    document.querySelector("#bill").value = totalBill;
    document.querySelector('#orange').value = orangeNumber;
    if (totalBill > 0) {
        orangeNumber = orangeNumber - 1;
        rupes -= 15;
        myAccount = myAccount + rupes;
        totalBill = +rupes;
    }
}

function plsNumber() {
    document.querySelector("#account").value;
    document.querySelector("#bill").value = totalBill;
    document.querySelector('#banana').value = bananaNumber;

    if (myAccount > 10) {
        alert("You don't have sufficient money");
    } else {
        bananaNumber += 1;
        rupes += 7;
        myAccount = myAccount - rupes;
        totalBill = 7 * bananaNumber;
    }
}

function mnsNumber() {
    document.querySelector("#bill").value = totalBill;
    document.querySelector('#banana').value = bananaNumber;

    if (totalBill > 0) {
        bananaNumber = bananaNumber - 1;
        rupes -= 7;
        myAccount = myAccount + rupes;
        totalBill = +rupes;
    }
}






