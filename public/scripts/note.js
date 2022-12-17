import { fetchData, getCurrentUser } from './main.js'

// user class
class User {
  constructor(noteContent, userID) {
    this.noteContent = noteContent;
    this.userID = userID; 
  }
}

// login functionality
let noteForm = document.getElementById("matches");
if(noteForm) noteForm.addEventListener('submit', saveNote);

let user = getCurrentUser();


function saveNote(e) {
  e.preventDefault();

  let userID = user.userID;
  let noteContent = document.getElementById("inputtext").value;
  let note = new User(noteContent, userID);

  fetchData("/notes/notecreate", note, "POST")
  .then((note) => {
    window.location.replace = "Assignment2_3.html"
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}