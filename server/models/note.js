const con = require("./db_connect");

// Table Creation 
async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS notes (
    noteID INT NOT NULL AUTO_INCREMENT,
    noteContent VARCHAR(255),
    userID INT NOT NULL,
    CONSTRAINT notePK PRIMARY KEY(noteID),
    CONSTRAINT noteFK FOREIGN KEY(noteID) references users(userID)
  ); `
  await con.query(sql);
}
createTable();
// grabbing all notes in database
async function getAllNotes() {
  const sql = `SELECT * FROM notes;`;
  let notes = await con.query(sql);
  console.log(notes)
}


// Read Note
async function Read(note) { // {userName: "sda", password: "gsdhjsga"}
  let cNote = await getnote(note); //[{userName: "cathy123", password: "icecream"}]
  
  if(!cNote[0]) throw Error("NoteID not found");
  

  return cNote[0];
}

// Create  note - 
async function notecreate(note) {
    let cnote = await getNote(note);
    //if(cnote.length > 0) throw Error("Username already in use");
  
    const sql = `INSERT INTO notes (userID, noteContent )
      VALUES ("${note.userID}","${note.noteContent}");
    `
    await con.query(sql);
   
  }
  

// Update Note function
async function editNotes(note) {
  let sql = `UPDATE notes 
    SET noteContent = "${note.noteContent}"
    WHERE userID = ${note.userID}
  `;

  await con.query(sql);
  let updatedNote = await getNote(note);
  return updatedNote[0];
}

// Delete Note function
async function deleteNote(note) {
  let sql = `DELETE FROM notes
    WHERE userID = ${note.userID}
  `
  await con.query(sql);
}


// Useful Functions
async function getNote(note) {
  let sql;

  if(note.userID) {
    sql = `
      SELECT * FROM notes
       WHERE userID = ${note.userID}
    `
  } else {
    sql = `
    SELECT * FROM notes 
    WHERE userID = ${note.userID}
  `;
  }
  return await con.query(sql);  
}


module.exports = { getAllNotes, Read, editNotes, deleteNote,notecreate};