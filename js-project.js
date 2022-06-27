// CHALLANGE 11 ==================================================================================

// CHALLANGE 14 ==================================================================================
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});


// CHALLANGE 13 ==================================================================================
const text = [
  `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
  `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
  `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
  `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
  `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
  `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
  `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
  `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
  `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
];

const amount = document.getElementById("challange-13-amount");
const result = document.querySelector(".challange-13-lorem-text");
document.querySelector(".challange-13-lorem-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);
  if (isNaN(value) || value < 0 || value > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
challange13TextGenerator=(e)=>{
  const value = parseInt(e.value);
  const random = Math.floor(Math.random() * text.length);
  if (isNaN(value) || value < 0 || value > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
      document.querySelector(".challange-13-lorem-text").innerHTML = tempText;
  }
}
// CHALLANGE 12 ==================================================================================
challange12navbar = () => {
  document.getElementById("challange-12-btn").classList.toggle("challange-12-active");
  document.getElementById("challange-12-nav").classList.toggle("challange-12-active");
};

// challange12RemoveSidebar=()=>{
//   document.querySelector(".challange-12-2-sidebar").classList.remove("challange-12-2-show-sidebar");
// }
// challange12ShowSidebar=()=>{
//   document.querySelector(".challange-12-2-sidebar").classList.toggle("challange-12-2-show-sidebar");
// }
challange12SidebarChanger=()=>{
  const sidebar = document.querySelector(".challange-12-2-sidebar");
  if( sidebar.classList.contains("challange-12-2-show-sidebar")){
    sidebar.classList.remove("challange-12-2-show-sidebar");
  }
  else{
    sidebar.classList.toggle("challange-12-2-show-sidebar");
  }
}

// CHALLANGE 11 ==================================================================================
const challange11 = document.getElementById("challange-11");
document.getElementById("challange-11-open").addEventListener("click", () => {
  challange11.classList.add("challange-11-active");
});
document.getElementById("challange-11-close").addEventListener("click", () => {
  challange11.classList.remove("challange-11-active");
});

// CHALLANGE 10 ==================================================================================
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

function colorChange(col) {
  if (col.value === "reset") {
    challange10.style.background = "";
    challange10text.innerHTML = "";
  } else {
    challange10.style.background = col.value;
    challange10text.innerHTML = col.value;
  }
}

// CHALLANGE 9 ==================================================================================
let count = 0;
const challange9value = document.getElementById("challange-9-value");
challange9counter = (n) => {
  n = parseInt(n);
  const num = 0;
  count = n === num ? (count = 0) : (count = count + n);
  challange9value.style.color = count > 0 ? "green" : "red";
  if (n === num) {
    challange9value.style.color = "#222";
  }
  challange9value.textContent = count;
};

// Challange 8: ==================================================================================
function challange8ageInDays() {
  var year = prompt("DOB?");
  let currentYear = new Date().getFullYear();
  var ageindays = (currentYear - year) * 365;
  var result = "you are " + ageindays + " days old";
  document.getElementById("challange8-result").innerHTML = result;
}
challange8remove = () => {
  document.getElementById("challange8-result").remove();
};

//Challange 7: ==================================================================================
function challange7imgGenerator() {
  var image = document.createElement("img");
  var div = document.getElementById("challange-7");
  image.src = "https://source.unsplash.com/weekly?water";
  div.appendChild(image);
}
function challange7del() {
  document.getElementById("challange-7").remove();
}

// Challange 6: ==================================================================================
document.getElementById("toggle").addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
});

// Challange 5: ==================================================================================
const newYears = "1 Jan 2023";
challange5countdown = () => {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  document.getElementById("challange-5-days").innerHTML = days;
  document.getElementById("challange-5-hours").innerHTML = formatTime(hours);
  document.getElementById("challange-5-mins").innerHTML = formatTime(mins);
  document.getElementById("challange-5-seconds").innerHTML =
    formatTime(seconds);
};
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
setInterval(challange5countdown, 1000);

// Challange 4: ==================================================================================
challange4rpsGame = (e) => {
  const humanChoice = e.id;
  const botChoice = randomChoice();
  result = decideWinner(humanChoice, botChoice);
  message = finalMessage(result);
  rpsFrontEnd(e.id, botChoice, message);
  console.log(rpsFrontEnd(e.id, botChoice, message));
};
randomChoice = () => {
  return ["rock", " paper", "scissor"][Math.floor(Math.random() * 3)];
};
decideWinner = (v1, v2) => {
  var rpsDatabase = {
    rock: { scissor: 1, rock: 0.5, paper: 0 },
    scissor: { rock: 1, paper: 0.5, scissor: 0 },
    paper: { paper: 1, scissor: 0.5, rock: 0 },
  };
  var yourScore = rpsDatabase[v1][v2];
  var computerScore = rpsDatabase[v2][v1];
  return [yourScore, computerScore];
};
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
    scissor: document.getElementById("scissor").src,
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
    .getElementById("challange-4-final")
    .append(humandiv, messagediv, botdiv);
}

// Challange 3 ==================================================================================
challange3convert = (degree) => {
  var x;
  if (degree == "C") {
    x = (document.getElementById("challange3c").value * 9) / 5 + 32;
    document.getElementById("challange3f").value = x;
  } else {
    x = ((document.getElementById("challange3f").value - 32) * 5) / 9;
    document.getElementById("c").value = Math.round(x);
  }
};

// CHALLANGE 2 ==================================================================================
challange2on = () => {
  document.getElementById("challange-2").src =
    "https://source.unsplash.com/100x100/weekly?water";
};
challange2off = () => {
  document.getElementById("challange-2").src =
    "https://source.unsplash.com/100x100/?nature,water";
};

// CHALLANGE 1 ==================================================================================
const challange1 = document.querySelector(".challange-1");
loadImages = (numImages = 2) => {
  let i = 0;
  while (i < numImages) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const img = document.createElement("img");
        img.src = `${data.message}`;
        challange1.appendChild(img);
      });
    i++;
  }
};
window.addEventListener("scroll", () => {
  // console.log(window.scrollY); //scrolled from top
  // console.log(window.innerHeight); //visible part of screen
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImages();
  }
});
