function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function SignUp() {
  document.getElementById("Signup").style.display = "block";
  document.getElementById("Login").style.display = "none";
  disableScroll();
}

function Submit_Signup() {
  let username = document.getElementById("username_signup").value;
  let password = document.getElementById("password_signup").value;
  localStorage.setItem("Name", username);
  localStorage.setItem("Password", password);
  document.getElementById("Signup").style.display = "none";
}

function Login() {
  document.getElementById("Login").style.display = "block";
  document.getElementById("Signup").style.display = "none";
  disableScroll();
}

function enableScroll() {
    window.onscroll = function() {};
}

function Submit_Login() {
  let user = localStorage.getItem("Name");
  let pass = localStorage.getItem("Password");
  let username = document.getElementById("username_login").value;
  let password = document.getElementById("password_login").value;
  if (user == username && pass == password) {
    document.getElementById("Login").style.display = "none";
    localStorage.removeItem("Name");
    localStorage.removeItem("Password");
    const s = document.getElementById("signup");
    s.remove();
    const p = document.getElementById("login");
    p.remove();
    document.getElementById("Logout").style.display = "block";
    enableScroll();
  } else {
    document.getElementById("InvalidLogin").innerText =
      "Invalid Login, Try Again";
  }
}

function Destination_Scroll(){
  var element = document.getElementById('Destinations');
var position = element.getBoundingClientRect();
var x = position.left;
var y = position.top;
console.log(x);
console.log(y);
scrollTo(x,y);
}
