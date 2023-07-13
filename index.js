function ScrollToTop() {
  scrollTo(0, 0);
}
// Scroll to Top Icon Visibilty
window.addEventListener("scroll", function () {
  var top = document.getElementById("ScrollTop");
  var scrollTop = window.pageYOffset;
  if (scrollTop > 10) {
    top.style.display = "block";
  } else {
    top.style.display = "none";
  }
});

// Language Box
function Languages() {
  const width = window.innerWidth;
  if (width > 700) {
    document.getElementById("Nolang").style.display = "block";
    setInterval(function () {
      document.getElementById("Nolang").style.display = "none";
    }, 10000);
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

function Exit() {
  document.getElementById("Signup").style.display = "none";
  document.getElementById("Login").style.display = "none";
}

function Submit_Signup() {
  // var pass = /^[A-Za-z]\w{6,14}$/;
  var username = document.getElementById("username_signup").value;
  var password = document.getElementById("password_signup").value;
  let p = password;
  let a = 0,
    b = 0,
    c = 0,
    d = 0;
  if (password.length > 5) {
    d++;
  }

  for (let i = 0; i < p.length; i++) {
    let d = p[i];
    let e = d.charCodeAt();
    if (e > 64 && e < 91) {
      c++;
    }
    if (e > 96 && e < 123) {
      a++;
    }
    if (p[i] < 10 && p[i] >= 0) {
      b++;
    }
  }
  if (a > 0 && b > 0 && c > 0 && d > 0) {
    localStorage.setItem("Name", username);
    localStorage.setItem("Password", password);
    document.getElementById("Signup").style.display = "none";
    document.getElementById("signup").style.display = "none";
    setTimeout(function () {
      Login();
    }, 1500);
  } else {
    let check = "";
    check =
      "Password Should be Greater than 5 characters,Contain both Upper and Lower Case and a Number";
    document.getElementById("Check").innerHTML = check;
    document.getElementById("password_signup").style.borderColor = "red";
  }
}

function Login() {
  document.getElementById("Login").style.display = "block";
  document.getElementById("Signup").style.display = "none";
  disableScroll();
}

var nameuser;
function Submit_Login() {
  let user = localStorage.getItem("Name");
  let pass = localStorage.getItem("Password");
  let username = document.getElementById("username_login").value;
  let password = document.getElementById("password_login").value;
  if (user == username && pass == password) {
    document.getElementById("Login").style.display = "none";
    nameuser = username;
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

  const dot_one = document.getElementById("dot_one");
  const dot_two = document.getElementById("dot_two");
  const dot_three = document.getElementById("dot_three");

  if (slide == 1) {
    Person1.style.display = "none";
    Person2.style.display = "block";
    dot_one.style.backgroundColor = "transparent";
    dot_two.style.backgroundColor = "grey";
    dot_three.style.backgroundColor = "transparent";

    slide++;
  } else if (slide == 2) {
    Person2.style.display = "none";
    Person3.style.display = "block";
    dot_one.style.backgroundColor = "transparent";
    dot_two.style.backgroundColor = "transparent";
    dot_three.style.backgroundColor = "grey";
    slide++;
  } else if (slide == 3) {
    Person3.style.display = "none";
    Person1.style.display = "block";
    dot_one.style.backgroundColor = "grey";
    dot_two.style.backgroundColor = "transparent";
    dot_three.style.backgroundColor = "transparent";
    slide = 1;
  }
}

function UpSlide() {
  const Person1 = document.getElementById("Person1");
  const Person2 = document.getElementById("Person2");
  const Person3 = document.getElementById("Person3");

  const dot_one = document.getElementById("dot_one");
  const dot_two = document.getElementById("dot_two");
  const dot_three = document.getElementById("dot_three");

  if (slide == 1) {
    Person1.style.display = "none";
    Person3.style.display = "block";
    dot_one.style.backgroundColor = "transparent";
    dot_two.style.backgroundColor = "grey";
    dot_three.style.backgroundColor = "transparent";
    slide = 3;
  } else if (slide == 2) {
    Person2.style.display = "none";
    Person1.style.display = "block";
    dot_one.style.backgroundColor = "grey";
    dot_two.style.backgroundColor = "transparent";
    dot_three.style.backgroundColor = "transparent";
    slide--;
  } else if (slide == 3) {
    Person3.style.display = "none";
    Person2.style.display = "block";
    dot_one.style.backgroundColor = "transparent";
    dot_two.style.backgroundColor = "transparent";
    dot_three.style.backgroundColor = "grey";
    slide--;
  }
}

function Subscribe() {
  let Number = document.getElementById("email").value;
  let num = Number.toString();
  let ans = "";
  if (num.length != 10) {
    ans = "Please Enter Valid Mobile Number";
  } else {
    ans = "Message Sent";

    const accountSid = "AC6b54f460bff09c54b7b69111ced35c7b";
    const authToken = "d9a1fee9a112e544e21521b5bce80bf7";
    const fromNumber = "+15737734730";
    const toNumber = `+91${num}`;
    const messageBody = `\nHey ${nameuser},\nThank you for Subscribing to Jadoo Travel Agency.\nWe will keep you updated with upcoming tours and travels.\n Thank You`;

    fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${accountSid}:${authToken}`)}`,
        },
        body: `From=${encodeURIComponent(fromNumber)}&To=${encodeURIComponent(
          toNumber
        )}&Body=${encodeURIComponent(messageBody)}`,
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data.sid))
      .catch((error) => console.error(error));
  }
  document.getElementById("EmailSent").innerText = ans;
}
