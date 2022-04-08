function run()  {

document.getElementById("paragraph").innerHTML = "hello world!";
document.getElementById("paragraph").style.backgroundColor = "green";
document.getElementById("paragraph").style.color = "purple";
document.getElementById("paragraph").style.padding = "29px";
randomNum();
userNumber();
compareNumbers();

}

function randomNum() {
let ran = Math.floor(Math.random() * 10);
let x = document.getElementById("random");
x.innerHTML = ran;
x.style.backgroundColor = "green";
x.style.color = "purple";
x.style.padding = "29px";
x.style.textAlign = "center";

}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.color = "yellow";
    y.style.backgroundColor = "blue";
    y.style.padding = "20px";
    y.styletextAlign = "center";


}

function compareNumbers() {
    let a = userNumber();
    let b = randomNum();

    if (a!= b) {
        document.getElementById("compare").innerHTML = "numbers are not the same. computer got " + b + ", and user got " + a;
    } else if ( a == b) {
        document.getElementById("compare").innerHTML = "numbers are the same. Computer got " + b + ", and user got " + a;

    }


    }