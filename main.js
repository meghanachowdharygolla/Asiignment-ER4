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
