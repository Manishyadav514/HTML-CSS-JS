const ColorText = document.getElementById("challange-1-text");
c1DivColorChanger=(value)=> {
    // if(value==="div"){
    //     document.getElementById("challange-1").style.background =  `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    // }
    // else{
    //     const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    //     document.body.style.background = color;
    //     ColorText.innerHTML = color;
    // }
    document.getElementById("challange-1").style.background =  `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}
c1BodyColorChanger=()=> {
    const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    document.body.style.background = color;
    ColorText.innerHTML = color;
}
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
c1HexColorChanger=()=> {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  document.body.style.backgroundColor = hexColor;
  ColorText.innerHTML = hexColor;
}




// Challange 1:
function ageInDays() {
  var year = prompt("What is your age?");
  var ageindays = (2018 - year) * 365;
  var result = "you are " + ageindays + " days old";
  document.getElementById("flex-box-result").innerHTML = result;
}
function remove() {
  document.getElementById("flex-box-result").remove();
}

//Challange 2:
function imgGenerator() {
  var image = document.createElement("img");
  var div = document.getElementById("img-gen");
  image.src = "https://source.unsplash.com/weekly?water";
  div.appendChild(image);
}
function del() {
  document.getElementById("img-gen").remove();
}

// Challange 3:
function rpsGame(yourChoice) {
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  //console.log(humanChoice);
  botChoice = randomChoice();
  //console.log(botChoice);
  result = decideWinner(humanChoice, botChoice);
  //console.log(result);
  message = finalMessage(result);
  //console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
  console.log(rpsFrontEnd(yourChoice.id, botChoice, message));
}

function randomChoice() {
  return ["rock", " paper", "scissor"][Math.floor(Math.random() * 3)];
}
function decideWinner(v1, v2) {
  var rpsDatabase = {
    rock: { scissor: 1, rock: 0.5, paper: 0 },
    scissor: { rock: 1, paper: 0.5, scissor: 0 },
    paper: { paper: 1, scissor: 0.5, rock: 0 }
  };
  var yourScore = rpsDatabase[v1][v2];
  var computerScore = rpsDatabase[v2][v1];
  return [yourScore, computerScore];
}
function finalMessage([yourScore, computerScore]) {
  if (yourScore == 0) {
    return { message: "you lost!", color: "red" };
  } else if (yourScore == 0.5) {
    return { message: "draw", color: "black" };
  } else {
    return { message: "You win", color: "green" };
  }
}
function rpsFrontEnd(yc, bc, ms) {
  var imageDataBase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissor: document.getElementById("scissor").src
  };
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissor").remove();

  var humandiv = document.createElement("div");
  var messagediv = document.createElement("div");
  var botdiv = document.createElement("div");

  humandiv.innerHTML = "<img src='" + imageDataBase[yc] + "'>";
  messagediv.innerHTML =
    "<h1 style='color:" +
    finalMessage["color"] +
    " font-size: 50px;'>" +
    finalMessage["message"] +
    "</h1>";
  botdiv.innerHTML = "<img src='" + imageDataBase[bc] + "'>";

  document
    .getElementById("challange-3-final")
    .append(humandiv, messagediv, botdiv);
}

// Challange 4:
var all_button = document.getElementsByTagName("button");
console.log(all_button);
var copyallbutton = [];
for (let i = 0; i < all_button.length; i++) {
  copyallbutton.push(all_button[i].classList[1]);
}
console.log(copyallbutton);

function colorChange(col) {
  if (col.value === "red") {
    buttonRed();
  } else if (col.value === "green") {
    buttonGreen();
  } else if (col.value === "reset") {
    buttonReset();
  } else if (col.value === "random") {
    buttonRandom();
  }
}

function buttonRed() {
  for (let i = 0; i < all_button.length; i++) {
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add("btn-danger");
  }
}
function buttonGreen() {
  for (let i = 0; i < all_button.length; i++) {
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add("btn-success");
  }
}
function buttonReset() {
  for (let i = 0; i < all_button.length; i++) {
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(copyallbutton[i]);
  }
}
function buttonRandom() {
  var choice = ["btn-info", "btn-dark", "btn-warning", "btn-primary"];
  for (let i = 0; i < all_button.length; i++) {
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(choice[Math.floor(Math.random() * 4)]);
  }
}

// Challange 6
function convert(degree) {
  var x;
  if (degree == "C") {
    x = (document.getElementById("c").value * 9) / 5 + 32;
    document.getElementById("f").value = x;
  } else {
    x = ((document.getElementById("f").value - 32) * 5) / 9;
    document.getElementById("c").value = Math.round(x);
  }
}

// CHALLANGE 7
function on() {
  document.getElementById("myImage").src =
    "https://source.unsplash.com/100x100/weekly?water";
}
function off() {
  document.getElementById("myImage").src =
    "https://source.unsplash.com/100x100/?nature,water";
}

// CHALLANGE 8
const container = document.querySelector(".challange-8");
loadImages = (numImages = 2) => {
  let i = 0;
  while (i < numImages) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const img = document.createElement("img");
        img.src = `${data.message}`;
        container.appendChild(img);
      });
    i++;
  }
};
window.addEventListener("scroll", () => {
  console.log(window.scrollY); //scrolled from top
  console.log(window.innerHeight); //visible part of screen
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImages();
  }
});








// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});