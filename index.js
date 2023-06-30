function ScrollToTop() {
  scrollTo(0, 0);
}
// Scroll to Top Icon Visibilty
window.addEventListener('scroll', function() {
  var top = document.getElementById('ScrollTop');
  var scrollTop = window.pageYOffset;
  if (scrollTop > 10) {
    top.style.display = 'block';
  } else {
    top.style.display = 'none';
  }
});

// Language Box
function Languages(){
  const width = window. innerWidth; 
  if(width>700){
  document.getElementById('Nolang').style.display="block";
  setInterval(function(){
    document.getElementById('Nolang').style.display="none";
  },10000);
}
}

// Disable Scrolling
function disableScroll() {
  scrollTop = window.pageYOffset;
  (scrollLeft = window.pageXOffset),
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}
// Enable Scrolling
function enableScroll() {
  window.onscroll = function () {};
}

function SignUp() {
  document.getElementById("Signup").style.display = "block";
  document.getElementById("Login").style.display = "none";
  disableScroll();
}

function Exit(){
  document.getElementById("Signup").style.display = "none";
  document.getElementById("Login").style.display = "none";
}

function Submit_Signup() {
  let username = document.getElementById("username_signup").value;
  let password = document.getElementById("password_signup").value;
  localStorage.setItem("Name", username);
  localStorage.setItem("Password", password);
  document.getElementById("Signup").style.display = "none";
  document.getElementById("signup").style.display = "none";
}

function Login() {
  document.getElementById("Login").style.display = "block";
  document.getElementById("Signup").style.display = "none";
  disableScroll();
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

function Destination_Scroll() {
  var element = document.getElementById("Destinations");
  var position = element.getBoundingClientRect();
  var x = position.left;
  var y = position.top;
  scrollTo(x, y);
}
function Flights_Scroll() {
  var element = document.getElementById("Airlines");
  var position = element.getBoundingClientRect();
  var x = position.left;
  var y = position.top - 220;
  scrollTo(x, y);
}



// TESTIMONIALS
let slide = 1;

function DownSlide() {
  const Person1 = document.getElementById("Person1");
  const Person2 = document.getElementById("Person2");
  const Person3 = document.getElementById("Person3");
  if (slide == 1) {
    Person1.style.display = "none";
    Person2.style.display = "block";
    slide++;
  } else if (slide == 2) {
    Person2.style.display = "none";
    Person3.style.display = "block";
    slide++;
  } else if (slide == 3) {
    Person3.style.display = "none";
    Person1.style.display = "block";
    slide = 1;
  }
}

function UpSlide() {
  const Person1 = document.getElementById("Person1");
  const Person2 = document.getElementById("Person2");
  const Person3 = document.getElementById("Person3");
  if (slide == 1) {
    Person1.style.display = "none";
    Person3.style.display = "block";
    slide = 3;
  } else if (slide == 2) {
    Person2.style.display = "none";
    Person1.style.display = "block";
    slide--;
  } else if (slide == 3) {
    Person3.style.display = "none";
    Person2.style.display = "block";
    slide--;
  }
}
