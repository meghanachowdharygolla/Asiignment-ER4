const register_form = document.getElementById("reg_form");
if(register_form) register_form.addEventListener("submit", UserObject);

function UserObject(e){
    e.preventDefault();
    let firstname = ((document.getElementById("firstname")||{}).value)||"";
    let lastname = ((document.getElementById("lastname")||{}).value)||"";
    let Email = ((document.getElementById("Email")||{}).value)||"";
    let password = ((document.getElementById("New_Password")||{}).value)||"";
    let note = ((document.getElementById("Note")||{}).value)||"";
    const newUser = new User(firstname,lastname,Email,password,note);
    console.log(newUser); 
    console.log(`Email = ${Email}`) 
    console.log(`note = ${note}`) 
}


function User(firstname,lastname,Email,password,note){
    this.firstname = firstname;
    this.lastname = lastname; //document.getElementById("lastname").value;
    this.Email = Email; //document.getElementById("username").value;
    this.password = password; //document.getElementById("password").value;
    this.note = note;
}

User.prototype.getFirstName = function(){
    return this.firstname;
}

User.prototype.getLastName = function(){
    return this.lastname;
}

User.prototype.getemail = function(){
    return this.Email;
}

User.prototype.getpassword = function(){
   return this.password;
}

User.prototype.getnote = function(){
    return this.note;
}


User.prototype.setFirstName = function(firstname){
    this.firstname = firstname;
}

User.prototype.setLastName = function(lastname){
    this.lastname = lastname;
}

User.prototype.setemail = function(Email){
    this.Email = Email;
}

User.prototype.setpassword = function(password){
   this.password = password;
}

User.prototype.setnote = function(note){
    this.note = note;
}