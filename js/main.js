var userNameInput = document.querySelector("#floatingInputName");
var userEmailInput = document.querySelector("#floatingInputEmail");
var userPasswordInput = document.querySelector("#floatingInputPassword");
var btnSignUp = document.querySelector("#btnSignUp");
var allUsers = [];
var userNameHome=localStorage.getItem("username")
// console.log(userNameHome);
if (localStorage.getItem("user") != null) {
  allUsers = JSON.parse(localStorage.getItem("user"));
}
// btnSignUp.addEventListener("click", getUser);
function getUser() {
  if (valadteUser() == true && isExit() != true) {
    var user = {
      name: userNameInput.value,
      email: userEmailInput.value,
      password: userPasswordInput.value,
    };
    allUsers.push(user);
    localStorage.setItem("user", JSON.stringify(allUsers));
    console.log(allUsers);
    var success = document.querySelector("#success");
    success.classList.replace("d-none", "d-block");
    var btnSignIn = document.querySelector("#btnSignIn");
    btnSignIn.classList.replace("d-none", "d-block");
    btnSignUp.classList.replace("d-block", "d-none");
  } else {
    var error = document.querySelector("#error");
    error.classList.replace("d-none", "d-block");
  }
}
function isExit() {
  for (var i = 0; i < allUsers.length; i++) {
    if (
      allUsers[i].email.toLowerCase() == userEmailInput.value.toLowerCase() ||
      allUsers[i].name.toLowerCase() == userNameInput.value.toLowerCase()
    ) {
      var checkExist = document.querySelector("#checkExist");
      checkExist.classList.replace("d-none", "d-block");
      userNameInput.classList.remove("is-valid");
      userEmailInput.classList.remove("is-valid");

      return true;
    } else {
      return false;
    }
  }
}
function valadteUser() {
  valadteUserName();
  valadteUserEmail();
  valadteUserPassword();
  if (
    valadteUserName() == true &&
    valadteUserEmail() == true &&
    valadteUserPassword() == true
  ) {
    return true;
  } else {
    return false;
  }
}
function valadteUserName() {
  var regexName = /^[A-Z][a-z]{3,8}$/;
  if (
    regexName.test(userNameInput.value) == true &&
    userNameInput.value != ""
  ) {
    userNameInput.classList.remove("is-invalid");
    userNameInput.classList.add("is-valid");
    return true;
  } else {
    var nameAlert = document.querySelector("#nameAlert");
    userNameInput.classList.remove("is-valid");
    userNameInput.classList.add("is-invalid");
    nameAlert.classList.replace("d-none", "d-block");
    return false;
  }
}
function valadteUserEmail() {
  var regexEmail = /@gmail\.com$/;
  if (
    regexEmail.test(userEmailInput.value) == true &&
    userEmailInput.value != ""
  ) {
    userEmailInput.classList.remove("is-invalid");
    userEmailInput.classList.add("is-valid");
    return true;
  } else {
    var emailAlert = document.querySelector("#emailAlert");
    userEmailInput.classList.remove("is-valid");
    userEmailInput.classList.add("is-invalid");
    emailAlert.classList.replace("d-none", "d-block");

    return false;
  }
}
function valadteUserPassword() {
  var regexPassword = /^.{5,15}$/;
  if (
    regexPassword.test(userPasswordInput.value) == true &&
    userPasswordInput.value != ""
  ) {
    userPasswordInput.classList.remove("is-invalid");
    userPasswordInput.classList.add("is-valid");
    return true;
  } else {
    var passwordAlert = document.querySelector("#passAlert");
    passwordAlert.classList.replace("d-none", "d-block");
    userPasswordInput.classList.remove("is-valid");
    userPasswordInput.classList.add("is-invalid");
    return false;
  }
}
function loginUser() {
  var userEmail = document.querySelector("#floatingInput");
  var userPassword = document.querySelector("#floatingPassword");
  if (userEmail.value == "" || userPassword.value == "") {
    var fillUser = document.querySelector("#fillUser");
    fillUser.classList.replace("d-none", "d-block");
    return false;
  }
  for (let i = 0; i < allUsers.length; i++) {
    if (
      userEmail.value.toLowerCase() == allUsers[i].email.toLowerCase() &&
      userPassword.value.toLowerCase() == allUsers[i].password.toLowerCase())
       {
        localStorage.setItem("username",allUsers[i].name)
      window.location.href = "home.html";
    } else {
      var errorUser = document.querySelector("#errorUser");
      errorUser.classList.replace("d-none", "d-block");
    }
  }
}
function getHome(){
  var textHome=document.querySelector("#textHome");
  textHome.innerHTML= "Welcome " + userNameHome;

}
function logOut() {
localStorage.removeItem("username")  
}