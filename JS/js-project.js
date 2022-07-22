// CHALLANGE 35 ==================================================================================
// CHALLANGE 34 ==================================================================================
// CHALLANGE 33 ==================================================================================

// CHALLANGE 32 ==================================================================================
const challange32Data = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// get parent element
const challange32List = document.querySelector(".challange32List");
const challange32Buttons = document.querySelector(".challange32Buttons");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(challange32Data);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);
    return `<div class="challange32Card">
          <img src=${item.img} alt=${item.title} class="challange32Image" />
          <div class="challange32Content">
            <div class="challange32SmallTitle">
              <h4>${item.title}</h4>
              <p>$${item.price}</p>
            </div>
            <div class="challange32Description">
              ${item.desc}
            </div>
          </div>
        </div>`;
  });

  displayMenu = displayMenu.join("");
  // console.log(displayMenu);
  challange32List.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = challange32Data.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="challange32Button" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  challange32Buttons.innerHTML = categoryBtns;
  const filterBtns = challange32Buttons.querySelectorAll(".challange32Button");
  // console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = challange32Data.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(challange32Data);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

// CHALLANGE 31 ==================================================================================
const API_URL = "https://api.github.com/users/";

const challange31Card = document.getElementById("challange31Card");
const challange31Form = document.getElementById("challange31Form");
const challange31SearchInput = document.getElementById("challange31SearchInput");

getUser("Manishyadav514");

async function getUser(username) {
  const resp = await fetch(API_URL + username);
  const respData = await resp.json();
  createUserCard(respData);
  getRepos(username);
}

async function getRepos(username) {
  const resp = await fetch(API_URL + username + "/repos");
  const respData = await resp.json();
  addReposToCard(respData);
}

function createUserCard(user) {
  const cardHTML = `
        <div class="challange31Card">
            <div class="challange31Image">
                <img src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div class="challange31Texts">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul class="info">
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `;

  challange31Card.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach((repo) => {
      const repoEl = document.createElement("a");
      repoEl.classList.add("challange31Repository");

      repoEl.href = repo.html_url;
      repoEl.target = "_blank";
      repoEl.innerText = repo.name;

      reposEl.appendChild(repoEl);
    });
}

challange31Form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = challange31SearchInput.value;

  if (user) {
    getUser(user);

    challange31SearchInput.value = "";
  }
});

// CHALLANGE 30 ==================================================================================

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const challange30List = document.getElementById("challange30List");
const challange30Form = document.getElementById("challange30Form");
const challange30Search = document.getElementById("challange30Search");

// initially get fav movies
getMovies(APIURL);

async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  const movies = data?.results?.slice(0, 2);
  // console.log(movies);
  showMovies(movies);
}

function showMovies(movies) {
  challange30List.innerHTML = "";
  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("challange30Movie");
    movieEl.innerHTML = `
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="challange30Movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
      vote_average
    )}">${vote_average}</span>
            </div>
            <div class="challange30Description">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;
    challange30List.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

challange30Form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = challange30Search.value;

  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);

    challange30Search.value = "";
  }
});

// CHALLANGE 29 ==================================================================================

const icon = document.querySelector(".icon");
const challange29 = document.querySelector(".challange29");
const Ssearch = document.getElementById("search");
icon.onclick = function () {
  console.assert("icon");
  Ssearch.classList.toggle("active");
};

// CHALLANGE 28 ==================================================================================
const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const challange28Submit = document.getElementById("challange28Submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

challange28Submit.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
              <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
              
              <button onclick="location.reload()">Reload</button>
          `;
    }
  }
});

// CHALLANGE 27 ==================================================================================
const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById("main");
const challange27Form = document.getElementById("challange27Form");
const search = document.getElementById("search");

const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
  const resp = await fetch(url(city), { origin: "cors" });
  const respData = await resp.json();

  console.log(respData);

  addWeatherToPage(respData);
}

function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);

  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
        <small>${data.weather[0].main}</small>
    `;

  // cleanup
  main.innerHTML = "";

  main.appendChild(weather);
}

function KtoC(K) {
  return Math.floor(K - 273.15);
}

challange27Form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = search.value;

  if (city) {
    getWeatherByLocation(city);
  }
});

// CHALLANGE 26 ==================================================================================
const form = document.querySelector(".challange26Form");
const alert = document.querySelector(".challange26Alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".challange26Button");
const container = document.querySelector(".challange26Items");
const list = document.querySelector(".challange26ItemList");
const clearBtn = document.querySelector(".challange26Clear");
// edit option
let editElement;
let editFlag = false;
let editID = "";
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);

// ****** functions **********

// add item
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value !== "" && !editFlag) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("challange26Item");
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="challange26Edit">
                <i class="fas fa-edit">Edit</i>
              </button>
              <!-- delete btn -->
              <button type="button" class="challange26Delete">
                <i class="fas fa-trash">Delete</i>
              </button>
            </div>
          `;
    // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".challange26Delete");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".challange26Edit");
    editBtn.addEventListener("click", editItem);

    // append child
    list.appendChild(element);
    // display alert
    displayAlert("item added to the list", "success");
    // show container
    container.classList.add("challange26Show");
    // set local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "success");

    // edit  local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// clear items
function clearItems() {
  const items = document.querySelectorAll(".challange26Item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("challange26Show");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

// delete item

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("challange26Show");
  }
  displayAlert("item removed", "danger");

  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}
// edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  //
  submitBtn.textContent = "edit";
}
// set backt to defaults
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// ****** local storage **********

// add to local storage
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });

  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// SETUP LOCALSTORAGE.REMOVEITEM('LIST');

// ****** setup items **********

function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("challange26Show");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("challange26Item");
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="challange26Edit">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="challange26Delete">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  // add event listeners to both buttons;
  const deleteBtn = element.querySelector(".challange26Delete");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".challange26Edit");
  editBtn.addEventListener("click", editItem);

  // append child
  list.appendChild(element);
}

// CHALLANGE 25 ==================================================================================
const challange25Input = document.getElementById("challange25Input");
const todosUL = document.getElementById("challange25Todos");

// const todos = JSON.parse(localStorage.getItem("todos"));
// if (todos) {
//     todos.forEach((todo) => {
//         addTodo(todo);
//     });
// }

document.getElementById("challange25Form").addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = challange25Input.value;
  if (todo) {
    todoText = todo.text;
  }
  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");

      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoEl.remove();

      updateLS();
    });

    todosUL.appendChild(todoEl);

    challange25Input.value = "";

    updateLS();
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

// CHALLANGE 24 ==================================================================================
const about = document.querySelector(".challange24BtnText");
const buttons = document.querySelectorAll(".challange24Button");
const articles = document.querySelectorAll(".challange24Text");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    buttons.forEach(function (button) {
      button.classList.remove("active");
    });
    e.target.classList.add("active");
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// CHALLANGE 23 ==================================================================================
const challange23Canvas = document.getElementById("challange23Canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const ctx = challange23Canvas.getContext("2d");
let size = 5;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

challange23Canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

challange23Canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

challange23Canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

increaseBtn.addEventListener("click", () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0, challange23Canvas.width, challange23Canvas.height);
});

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}
challange23PenSize = (n) => {
  console.log(n);
  size = n;
  updateSizeOnScreen();
};

// CHALLANGE 22 ==================================================================================
const challange22 = document.getElementById("challange22");
const challange22Image = document.getElementById("challange22Image");
challange22.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.offsetX;
  const y = e.clientY - e.offsetY;
  console.log(x, y);
  challange22Image.style.transformOrigin = `${x}px ${y}px `;
  challange22Image.style.transform = "scale(3)";
});
challange22Zoom = (e) => {
  // const x = e.clientX - e.target.offsetLeft;
  // const y = e.clientY - e.target.offsetTop;
  // //console.log(x, y);
  // challange22Image.style.transformOrigin = `${x}px ${y}px`;
  // challange22Image.style.transform = "scale(3)";
};
challange22Reset = () => {
  challange22Image.style.transformOrigin = "center center";
  challange22Image.style.transform = "scale(1)";
};
// CHALLANGE 21 ==================================================================================
challange21Toast = () => {
  const toast = document.createElement("div");
  toast.innerText = "I'll disappear in 3 seconds!";
  document.getElementById("challange21").appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2000);
};

// CHALLANGE 20 ==================================================================================
const challange20pwdText = document.getElementById("challange20_pwdText");
const challange20Copy = document.getElementById("challange20Copy");
const challange20Length = document.getElementById("challange20Length");
const challange20Upper = document.getElementById("challange20Upper");
const challange20Lower = document.getElementById("challange20Lower");
const challange20Number = document.getElementById("challange20Number");
const challange20Symbol = document.getElementById("challange20Symbol");
const challange20Generate = document.getElementById("challange20Generate");
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}
function generatePassword() {
  const len = challange20Length.value;
  let password = "";
  if (challange20Upper.checked) {
    password += getUppercase();
  }
  if (challange20Lower.checked) {
    password += getLowercase();
  }
  if (challange20Number.checked) {
    password += getNumber();
  }
  if (challange20Symbol.checked) {
    password += getSymbol();
  }
  for (let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
  }
  challange20pwdText.innerText = password;
}

function generateX() {
  const xs = [];
  if (challange20Upper.checked) {
    xs.push(getUppercase());
  }
  if (challange20Lower.checked) {
    xs.push(getLowercase());
  }
  if (challange20Number.checked) {
    xs.push(getNumber());
  }
  if (challange20Symbol.checked) {
    xs.push(getSymbol());
  }
  if (xs.length === 0) return "";
  return xs[Math.floor(Math.random() * xs.length)];
}

challange20Generate.addEventListener("click", generatePassword);

challange20Copy.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = challange20pwdText.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});

// CHALLANGE 19 ==================================================================================
function challange19() {
  let challange19 = document.getElementById("challange19");
  const heart = document.createElement("div");
  heart.classList.add("challange19_emoji");
  heart.style.left = Math.random() * 10 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  heart.innerText = "🏀";
  challange19.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(challange19, 300);

// CHALLANGE 18 ==================================================================================
const challange18Persons = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// select items
const challange18Image = document.getElementById("challange18_image");
const challange18Author = document.getElementById("challange18_author");
const challange18Job = document.getElementById("challange18_job");
const challange18Info = document.getElementById("challange18_info");

let challange18Index = 0;
window.addEventListener("DOMContentLoaded", function () {
  challange18ShowPerson(challange18Index);
});
challange18ShowPerson = (index) => {
  const item = challange18Persons[index];
  challange18Image.src = item.img;
  challange18Author.textContent = item.name;
  challange18Job.textContent = item.job;
  challange18Info.textContent = item.text;
};
challange18Slider = (n) => {
  challange18Index = challange18Index + n;
  if (challange18Index < 0) {
    challange18Index = challange18Persons.length - 1;
  } else if (challange18Index > challange18Persons.length - 1) {
    challange18Index = 0;
  }
  challange18ShowPerson(challange18Index);
};
challange18Random = () => {
  challange18Index = Math.floor(Math.random() * challange18Persons.length);
  challange18ShowPerson(challange18Index);
};
setInterval(function () {
  challange18Slider(1);
}, 2000);

// CHALLANGE 17 ==================================================================================
const challange17_text =
  "Manish Yadav is working to develop something amazing.";
let index = 0;
function17 = () => {
  document.getElementById("challange17").innerText = challange17_text.slice(
    0,
    index
  );
  index++;
  if (index > challange17_text.length) {
    index = 0;
  }
};
setInterval(function17, 300);

// CHALLANGE 16 ==================================================================================
const imgs = document.getElementById("challange16");
const img = document.querySelectorAll("#challange16 img");
let idx = 0;
function challange16() {
  idx++;
  if (idx > img.length - 1) {
    idx = 0;
  }
  imgs.style.transform = `translateX(${-idx * 300}px)`;
}
setInterval(challange16, 2000);

// CHALLANGE 15 ==================================================================================
const slides15 = document.querySelectorAll(".slide15");
let counter = 0;
slides15.forEach(function (slide, index) {
  slide.style.display = "none";
  slides15[counter].style.display = "block";
});
Slider15 = (n) => {
  counter = counter + n;
  if (counter > slides15.length - 1) {
    counter = 0;
  } else if (counter < 0) {
    counter = slides15.length - 1;
  }
  // console.log(counter);
  slides15.forEach(function (slide, index) {
    slide.style.display = "none";
    slides15[counter].style.display = "block";
  });
};

// CHALLANGE 14 ==================================================================================
const questions = document.querySelectorAll(".challange14_question");

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
document
  .querySelector(".challange-13-lorem-form")
  .addEventListener("submit", function (e) {
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
challange13TextGenerator = (e) => {
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
};
// CHALLANGE 12 ==================================================================================
challange12navbar = () => {
  document
    .getElementById("challange-12-btn")
    .classList.toggle("challange-12-active");
  document
    .getElementById("challange-12-nav")
    .classList.toggle("challange-12-active");
};

// challange12RemoveSidebar=()=>{
//   document.querySelector(".challange-12-2-sidebar").classList.remove("challange-12-2-show-sidebar");
// }
// challange12ShowSidebar=()=>{
//   document.querySelector(".challange-12-2-sidebar").classList.toggle("challange-12-2-show-sidebar");
// }
challange12SidebarChanger = () => {
  const sidebar = document.querySelector(".challange-12-2-sidebar");
  if (sidebar.classList.contains("challange-12-2-show-sidebar")) {
    sidebar.classList.remove("challange-12-2-show-sidebar");
  } else {
    sidebar.classList.toggle("challange-12-2-show-sidebar");
  }
};

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
