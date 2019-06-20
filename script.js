
var num = 0;

function plusNumber() {
    num = num + 1;
        document.querySelector('#apple-rate input').value = num;

}

function minusNumber() {
    if (num <= 0) {
        alert ('There is an Error');
    }
    else{
    num = num - 1;
        document.querySelector('#apple-rate input').value = num;
    }
}


function addNumber() {
    num = num + 1;
        document.querySelector('#orange-rate input').value = num;

}

function substNumber() {
    if (num <= 0) {
        alert ('There is an Error');
    }
    else{
    num = num - 1;
        document.querySelector('#orange-rate input').value = num;
    }
}


function plsNumber() {
    num = num + 1;
        document.querySelector('#banana-rate input').value = num;

}

function mnsNumber() {
    if (num <= 0) {
        alert ('There is an Error');
    }
    else{
    num = num - 1;
        document.querySelector('#banana-rate input').value = num;
    }
}


