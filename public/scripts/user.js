import { fetchData, setCurrentUser } from './main.js'

// user class
class User {
  constructor(Email_ID, password) {
    this.Email_ID = Email_ID;
    this.password = password;
    //this.fullName = fullName;
  }

  getUsername() {
    return this.Email_ID;
  }
}

// login functionality
let loginForm = document.getElementById("login-form");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let Email_ID = document.getElementById("Email_ID").value;
  let password = document.getElementById("password").value;
  let user = new User(Email_ID, password);

  fetchData("/users/login", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "bmi.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}
 
// register functionality
let regForm = document.getElementById("reg-form");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  let Email_ID = document.getElementById("Email_ID").value;
  let password = document.getElementById("password").value;
  let user = new User(Email_ID, password);

  fetchData("/users/register", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "bmi.html";
  })
  .catch((err) =>{
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  })
}