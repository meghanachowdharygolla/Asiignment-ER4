import { fetchData, setCurrentUser } from './main.js'

// user class
class User {
  constructor(first_name, last_name,Email_id, password) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.Email_id = Email_id;
    this.password = password;
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

  let Email_id = document.getElementById("Email_ID").value;
  let password = document.getElementById("password").value;
  let user = new User("","",Email_id, password);

  fetchData("/users/login", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "Assignment2_3.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}
 
// register functionality
let regForm = document.getElementById("reg_form");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();
  
  let first_name = document.getElementById("first_name").value;
  let Last_name = document.getElementById("Last_name").value;
  let Email_id = document.getElementById("Email_ID").value;
  let password = document.getElementById("password").value;
  let user = new User(first_name, Last_name, Email_id, password);

  fetchData("/users/register", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "Assignment2_2.html";
  })
  .catch((err) =>{
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  })
}