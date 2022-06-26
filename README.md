# HTML-CSS-JS
Static Work
```
// CHALLANGE 10
const challange10 = document.getElementById("challange-10");
const challange10text = document.getElementById("challange-10-text");
c10DivColorChanger = (value) => {
  const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
  challange10.style.background = color;
  challange10text.innerHTML = color;
  document.body.style.backgroundColor = "";
};
c10BodyColorChanger = () => {
  const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
  document.body.style.background = color;
  challange10.style.background = "";
  challange10text.innerHTML = color;
};
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
c10HexColorChanger = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  document.body.style.backgroundColor = hexColor;
  challange10.style.background = "";
  challange10text.innerHTML = hexColor;
};
c10resetColorChanger = () => {
  challange10.style.background = "";
  document.body.style.backgroundColor = "";
  challange10text.innerHTML = "";
};











// CHALLANGE 9
let count = 0;
// select value and buttons
const challange9value = document.querySelector("#challange-9-value");
const challange9button = document.querySelectorAll(".challange-9-button");
challange9button.forEach(function (btn) {
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
      challange9value.style.color = "green";
    }
    if (count < 0) {
      challange9value.style.color = "red";
    }
    if (count === 0) {
      challange9value.style.color = "#222";
    }
    challange9value.textContent = count;
  });
});











// Challange 8:
function challange8ageInDays() {
  var year = prompt("DOB?");
  let currentYear = new Date().getFullYear();
  var ageindays = (currentYear - year) * 365;
  var result = "you are " + ageindays + " days old";
  document.getElementById("challange8-result").innerHTML = result;
}
challange8remove() {
  document.getElementById("challange8-result").remove();
}

//Challange 7:
function challange7imgGenerator() {
  var image = document.createElement("img");
  var div = document.getElementById("challange-7");
  image.src = "https://source.unsplash.com/weekly?water";
  div.appendChild(image);
}
function challange7del() {
  document.getElementById("challange-7").remove();
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




// Challange 3
challange3convert=(degree)=> {
  var x;
  if (degree == "C") {
    x = (document.getElementById("challange3c").value * 9) / 5 + 32;
    document.getElementById("challange3f").value = x;
  } else {
    x = ((document.getElementById("challange3f").value - 32) * 5) / 9;
    document.getElementById("c").value = Math.round(x);
  }
}





// CHALLANGE 2
challange2on = ()=> {
  document.getElementById("challange-2").src =
    "https://source.unsplash.com/100x100/weekly?water";
}
challange2off=()=> {
  document.getElementById("challange-2").src =
    "https://source.unsplash.com/100x100/?nature,water";
}






// CHALLANGE 1
const container = document.querySelector(".challange-1");
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

```




```
/*  CHALLANGE 10 */
.challange-10 {
  width: 300px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 10px;
}
.challange-10 h2 {
  background: #222;
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 2.5rem;
}
.challange-10 h2 span {
  color: hsl(205, 78%, 60%);
}
.challange-10-button {
  background-color: transparent;
  color: black;
  padding: 1rem;
  font-family: inherit;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  border: 3px solid black;
  border-radius: 5px;
  transition: transform 0.1s linear;
  cursor: pointer;
  display: block;
}
.challange-10-button:hover {
  color: white;
  background: black;
}

/*  CHALLANGE 9 */
.challange-9-button {
  text-transform: uppercase;
  background: transparent;
  color: black;
  padding: 0.375rem 0.75rem;
  display: inline-block;
  transition: 0.5;
  font-size: 0.875rem;
  border: 2px solid black;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  margin: 0.5rem;
}
.challange-9-button:hover {
  color: white;
  background: black;
}
.challange-9-button-container {
  text-align: center;
}
#challange-9-value {
  font-size: 6rem;
  font-weight: bold;
}
.challange-9 {
  display: flex;
  flex-wrap: wrap;
}

/*  CHALLANGE 8  */
/*  CHALLANGE 7  */
/*  CHALLANGE 6  */
/*  CHALLANGE 5  */
/*  CHALLANGE 5  */
/*  CHALLANGE 4  */
/*  CHALLANGE 3  */
.challange-3 {
  width: 100px;
  height: 15px;
  border: 2px solid black;
  padding: 10px 10px 0px 0px;
}
/*  CHALLANGE 2  */
/*  CHALLANGE 1  */

.challange3 {
  cursor: pointer;
  border: 3px solid black;
  justify-content: space-around;
}
.challange3:hover {
  box-shadow: 5px 8px 15px 5px rgb(166, 212, 238);
}
.but {
  width: 40%;
  height: 10%;
  padding: 10x 10px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  background-color: black;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.cyan {
  background-color: cyan;
}
.green {
  background-color: green;
}

/* COMMON CSS TO ALL */
.button {
  text-transform: uppercase;
  background: transparent;
  color: black;
  padding: 0.375rem 0.75rem;
  display: inline-block;
  transition: 0.5;
  font-size: 0.875rem;
  border: 2px solid black;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  margin: 0.5rem;
}
.button:hover {
  color: white;
  background: black;
}
.container {
  border: 3px solid black;
  text-align: center;
  padding: 15%;
  margin: 80px;
  height: 100%;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  border: 3px solid black;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px;
}
.flex-container img {
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  height: 60px;
  width: 100px;
}

```


```
<!-- CHALLANGE 10 -->
<div class='container'>
  <h2>Challange 10: Color Changer</h2>
  <div class="flex-container">
    <div id="challange-10" class="challange-10">
      <button onclick="c10DivColorChanger()" class="button">
        Change div color
      </button>
      <button onclick="c10BodyColorChanger()" class="button">
        Change Body Color
      </button>
      <button onclick="c10HexColorChanger()" class="button">
        Random Hex Color
      </button>
      <button onclick="c10resetColorChanger()" class="button">
        Reset
      </button>
      <h2>
        background color :
        <span class="c10colorValue" id="challange-10-text">#f1f5f8</span>
      </h2>
    </div>
  </div>
</div>

<!-- CHALLANGE 9 -->
<div class='container'>
  <h2>Challange 9: Convertor</h2>
  <div class="flex-container">
    <div class="challange-9-container">
      <h1>counter</h1>
      <span id="challange-9-value">0</span>
      <div class="challange-9-button-container">
        <button class="challange-9-button decrease">decrease</button>
        <button class="challange-9-button reset">reset</button>
        <button class="challange-9-button increase">increase</button>
      </div>
    </div>
  </div>
</div>

<!-- CHALLANGE 8 -->
<div class='container'>
  <h2>Challange 8: Convertor</h2>
  <div class="flex-container">
    <button class="button" onclick="challange8ageInDays()">Click to enter your age</button>
    <button class="button" onclick="challange8remove()">Reset your age</button>
    <div id='challange8-result'>Your result will appear here:</div>
  </div>
</div>

<!-- CHALLANGE 7 -->
<div class='container'>
  <h2>Challange 7: Image Generator</h2>
  <div class="flex-container">
    <button class="button" onclick="challange7imgGenerator()">Click to add images</button>
    <button class="button" onclick="challange7del()">Click to delete the image</button>
    <div id='challange-7'></div>
  </div>
</div>

<!-- CHALLANGE 6 -->
<div class='container'>
  <h2>Challange 3: Paper Scissor Rock</h2>
  <div class="flex-container" id='challange-6-final'>
    <div>
      <img src="https://img.icons8.com/emoji/96/000000/rock-emoji.png" class="challange3" id="rock" onclick="rpsGame(this)">
    </div>
    <div>
      <img src="https://img.icons8.com/color/48/000000/hand-scissors--v2.png" class="challange3" id="scissor" onclick="rpsGame(this)" />
    </div>
    <div>
      <img src="https://img.icons8.com/cute-clipart/64/000000/paper.png" class="challange3" id="paper" onclick="rpsGame(this)" />
    </div>
  </div>
</div>

<!-- CHALLANGE 7 -->
<div class='container'>
  <h2>Challange 4: Button Background color change:</h2>
  <div class="flex-container">
    <form type>
      <select id="color-selection" name='backdrop' onchange="colorChange(this)">
        <option <option value="red">red</option>
        <option value="green">green</option>
        <option value="random">random</option>
        <option value="reset">reset</option>
      </select>

    </form>
  </div>
  <div class="flex-container">
    <button class="but button1" onclick="ageInDays()">Click to enter your age</button>
    <button class="but button2" onclick="remove()">Reset your age</button>
  </div>
</div>

<!-- CHALLANGE 3 -->
<div class='container'>
  <h2>Challange 3: </h2>
  <div id="body">
    <div class="flex-container">
      <p>Celsius : <input class="challange-3" id="challange3c" onkeyup="challange3convert('C')">
      <p>Farnehite : <input class="challange-3" id="challange3f" onkeyup="challange3convert('F')"></p>
    </div>
  </div>
</div>

<!-- CHALLANGE 2 -->
<div class='container'>
  <h2>Challange 2 </h2>
  <div id="body">
    <div class="flex-container">
      <button class="button" onclick="challange2on()">Turn on the light</button>
      <button class="button" onclick="challange2off()">Turn off the light</button>
      <img id="challange-2" src="https://source.unsplash.com/100x100/?nature,water" style="width:100px">
    </div>
  </div>
</div>

<!-- CHALLANGE 1 -->
<div class='container'>
  <h2>Challange 1: </h2>
  <div id="body">
    <div class="challange-1">
    </div>
  </div>
</div>
```
