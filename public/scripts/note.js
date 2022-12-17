import { fetchData, setCurrentUser } from './main.js'

// user class
class User {
  constructor(userID, noteContent) {
    this.userID = userID;
    this.noteContent = noteContent;
  }
}

// login functionality
let noteForm = document.getElementById("matches");
if(noteForm) noteForm.addEventListener('submit', saveNote);

function saveNote(e) {
  e.preventDefault();

  let userID = 1
  //document.getElementById("Email_ID").value;
  let noteContent = document.getElementById("inputtext").value;
  let note = new User(userID, noteContent);

  fetchData("/notes/insert", note, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.replace = "login.html"
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}