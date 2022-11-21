document.getElementById("btn-users").addEventListener('click', getUsers);

function getUsers() {
  fetch("http://localhost:3000/users/")
  .then((res)=> res.json())
  .then((data) => console.log(data))
  .catch((err)=> console.log(err))
}+



async function fetchData(route = '', data = {}, GET) {
    const response = await fetch(`http://localhost:3000${users}`, {
      method: GET, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }






const values = document.getElementById("reg_form");
if(values) values.addEventListener("submit", Identifier);

function Identifier(e){
    e.preventDefault();
    let frst_name = ((document.getElementById("first_name")||{}).value)||"";
    let lst_name = ((document.getElementById("Last_name")||{}).value)||"";
    let Email_id = ((document.getElementById("Email_ID")||{}).value)||"";
    let password = ((document.getElementById("New_Password")||{}).value)||"";
    let note = ((document.getElementById("inputtext")||{}).value)||"";
    const newEnduser = new Enduser(frst_name,lst_name,Email_id,password,note);
    console.log(newEnduser);   
}


function Enduser(firstname,lastname,Email_id,password,note){
    this.frst_name = firstname;
    this.lst_name = lastname; //document.getElementById("lastname").value;
    this.Email_id = Email_id; //document.getElementById("username").value;
    this.password = password; //document.getElementById("password").value;
    this.note = note;
}

Enduser.prototype.getFirstName = function(){
    return this.frst_name;
}

Enduser.prototype.getLastName = function(){
    return this.lst_name;
}

Enduser.prototype.getusername = function(){
    return this.Email_id;
}

Enduser.prototype.getpassword = function(){
   return this.password;
}

Enduser.prototype.getnote = function(){
    return this.note;
}


Enduser.prototype.setFirstName = function(firstname){
    this.frst_name = firstname;
}

Enduser.prototype.setLastName = function(lastname){
    this.lst_name = lastname;
}

Enduser.prototype.setusername = function(username){
    this.Email_id = username;
}

Enduser.prototype.setpassword = function(password){
   this.password = password;
}

Enduser.prototype.setnote = function(note){
    this.note = note;
}

let loginForm = document.getElementById("login-form");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  let password = document.getElementById("pswd").value;
  let users1 = new User(userName, password);

  fetchData("/users/login", users1, "POST")
  .then((data) => {
    console.log(data);
    window.location.href = "bmi.html";
  })
  .catch((err) => {
    console.log(`Error!!! ${err.message}`)
  }) 

}
