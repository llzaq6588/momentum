const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);
const HIDDEN_CLASSNAME = "hidden";

function paintgreeting() {
  greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


function onLoginSubmit(event){
event.preventDefault();
const username = loginInput.value;
localStorage.setItem(USERNAME_KEY, username);
loginForm.classList.add(HIDDEN_CLASSNAME);
greeting.innerText = "Hello " + username;
greeting.classList.remove(HIDDEN_CLASSNAME);
paintgreeting(username);
}
loginForm.addEventListener("submit", onLoginSubmit);

function paintgreeting(username) {
  greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintgreeting(savedUsername);
}
