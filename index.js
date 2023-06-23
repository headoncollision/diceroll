var randomVariable1 = (Math.floor(Math.random()*6) + 1);
var randomVariable2 = (Math.floor(Math.random()*6) + 1);

/*const img1 = document.getElementsByClassName("img1");
const img2 = document.getElementsByClassName("img2");

function selectImage(para,randvar) {
    if (randvar === 1) {
        para.setAttribute("src" , "images/dice1.png");
    } 
    else if (randvar === 2) {
        para.setAttribute("src" , 'images/dice2.png');
    }
    else if (randvar === 3) {
        para.setAttribute("src" , "images/dice3.png");
    }
    else if (randvar === 4) {
        para.setAttribute("src" , "images/dice4.png");
    }
    else if (randvar === 5) {
        para.setAttribute("src" , "images/dice5.png");
    }
    else {
        para.setAttribute("src" , "images/dice6.png");
    }
}

selectImage(img1,randomVariable1);
selectImage(img2,randomVariable2);*/

var randomImage1 = "images/dice" + randomVariable1 + ".png";
var randomImage2 = "images/dice" + randomVariable2 + ".png";

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src" , randomImage1);
img2.setAttribute("src" , randomImage2);

if (randomVariable1 > randomVariable2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
}
else if (randomVariable1 < randomVariable2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}