function changeTheme () {
  const setTheme = document.body;
  setTheme.classList.toggle("dark-theme");

  let theme;

  if (setTheme.classList.contains("dark-theme")) {
    theme = "DARK";
  }
  else {
    theme = "LIGHT";
  }
  
  localStorage.setItem("PageTheme", JSON.stringify(theme));
};

let getTheme = JSON.parse(localStorage.getItem("PageTheme"));

if (getTheme === "DARK") {
  document.body.classList.add("dark-theme");
}

function addHamburger() {
  let topNav = document.getElementById("top-nav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}

const submitMsg = () => {
  if ((document.forms["submitForm"]["fName"].value) == "") {
    document.getElementById("fName").style.border = "1px solid red";
    document.getElementById("warn1").style.display = "block";
    document.getElementById("warn1").innerHTML = "First name can't be empty";
    return false;
  }

  else if((document.forms["submitForm"]["lName"].value) == "") {
    document.getElementById("lName").style.border = "1px solid red";
    document.getElementById("warn2").style.display = "block";
    document.getElementById("warn2").innerHTML = "Last name can't be empty";
    return false;
  }

  else if((document.forms["submitForm"]["email"].value) == "") {
    document.getElementById("email").style.border = "1px solid red";
    document.getElementById("warn3").style.display = "block";
    document.getElementById("warn3").innerHTML = "Email can't be empty";
    return false;
  }

  else if((document.forms["submitForm"]["phone"].value) == "") {
    document.getElementById("phone").style.border = "1px solid red";
    document.getElementById("warn4").style.display = "block";
    document.getElementById("warn4").innerHTML = "Phone number can't be empty";
    return false;
  }

  else {
    
    document.getElementById("buttonClick").innerHTML = "Thank you! We will contact back soon!";
  }
} 

function showDesc(){
  document.getElementById("desc1").style.display = "block";
}

function showDesc1(){
  document.getElementById("desc2").style.display = "block";
}

function showDesc2(){
  document.getElementById("desc3").style.display = "block";
}

function showDesc3(){
  document.getElementById("desc4").style.display = "block";
}

function showDesc4(){
  document.getElementById("desc5").style.display = "block";
}

function showDesc5(){
  document.getElementById("desc6").style.display = "block";
}

function showDesc6(){
  document.getElementById("desc7").style.display = "block";
}

