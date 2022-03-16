let one = document.querySelector(".msg_one");
let two = document.querySelector(".msg_two");
let three = document.querySelector(".msg_three");
let four = document.querySelector(".msg_four");
document.getElementById('close').addEventListener('click',closeHandler,false);

function Message_one() {                                        
    one.style.display = "block";
}

function Message_two() {
    two.style.display = "block";
}

function Message_three() {
    three.style.display = "block";
}

function Message_four() {
    four.style.display = "block";
}

function tabClose() {
    var tab = window.open(window.location,"_top");
    tab.close();
}