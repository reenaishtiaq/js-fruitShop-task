
// var rupes = 0;
// var myAccount;
// var totalBill = 0;
// var appleNumber = 0;
// var orangeNumber = 0;
// var bananaNumber = 0;

function makeBill() {
    let appleNumber = parseInt(document.querySelector('#apple').value) * 10;
    let orangeNumber = parseInt(document.querySelector('#orange').value) * 15;
    let bananaNumber = parseInt(document.querySelector('#banana').value) * 7;
    let totalBill = parseInt(document.querySelector("#bill").value);

    totalBill = appleNumber + orangeNumber + bananaNumber;
    document.querySelector("#bill").value = totalBill;
}

function plusNumber() {

    let myAccount = parseInt(document.querySelector("#account").value);
    let appleNumber = parseInt(document.querySelector('#apple').value);
    let totalBill = parseInt(document.querySelector("#bill").value);


    if (myAccount < totalBill + 10) {
        alert("You don't have sufficient money");
    } else {
        document.querySelector('#apple').value = ++appleNumber;
    }
    makeBill();
}

function minusNumber() {
    let myAccount = parseInt(document.querySelector("#account").value);
    let appleNumber = parseInt(document.querySelector('#apple').value);


    if (appleNumber == 0) {
        alert("You don't have any Apples");
    } else {
        document.querySelector('#apple').value = --appleNumber;
    }
    makeBill();
}


function addNumber() {
    let myAccount = parseInt(document.querySelector("#account").value);
    let orangeNumber = parseInt(document.querySelector('#orange').value);
    let totalBill = parseInt(document.querySelector("#bill").value);


    if (myAccount < totalBill + 15) {
        alert("You don't have sufficient money");
    } else {
        document.querySelector('#orange').value = ++orangeNumber;
    }
    makeBill();
}

function substNumber() {
    let myAccount = parseInt(document.querySelector("#account").value);
    let orangeNumber = parseInt(document.querySelector('#orange').value);


    if (orangeNumber == 0) {
        alert("You don't have any Oranges");
    } else {
        document.querySelector('#orange').value = --orangeNumber;
    }
    makeBill();
}

function plsNumber() {
    let myAccount = parseInt(document.querySelector("#account").value);
    let bananaNumber = parseInt(document.querySelector('#banana').value);
    let totalBill = parseInt(document.querySelector("#bill").value);


    if (myAccount < totalBill + 7) {
        alert("You don't have sufficient money");
    } else {
        document.querySelector('#banana').value = ++bananaNumber;
    }
    makeBill();
}


function mnsNumber() {
    let myAccount = parseInt(document.querySelector("#account").value);
    let bananaNumber = parseInt(document.querySelector('#banana').value);


    if (bananaNumber == 0) {
        alert("You don't have any Bananas");
    } else {
        document.querySelector('#banana').value = --bananaNumber;
    }
    makeBill();
}






