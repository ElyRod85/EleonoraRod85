// Back to top button
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// Responsive Navbar
var tglbtn = document.getElementById("nav-toggle");
var navlst = document.getElementById("nav-list")

tglbtn.addEventListener('click', () => {navlst.classList.toggle("active");});



// EN-ES Translation
const selectedEnglish = document.getElementById("eng");
const selectedEspanol = document.getElementById("esp");
const hidden = "display:none;visibility:hidden;";
const shown = "display:block;";

const allEnglishText = document.getElementsByClassName("eng");
const allEspanolText = document.getElementsByClassName("esp");

//EN
  function showEnglishText() {
    for (element in allEnglishText) {
       allEnglishText[element].style = shown;
    }
    for (element in allEspanolText) {
      allEspanolText[element].style = hidden;
    }
  }

//ES
  function showSpanishText() {
    for (element in allEnglishText) {
      allEnglishText[element].style = hidden;
    }
    for (element in allEspanolText) {
      allEspanolText[element].style = shown;
    }
  }

//EN-> ES OFF
  selectedEnglish.addEventListener("click", () => {
  selectedEnglish.classList.add("langSelected");
  selectedEspanol.classList.remove("langSelected");
  showEnglishText();
  localStorage.setItem("languageActive", "english");
  });

//ES -> EN OFF
  selectedEspanol.addEventListener("click", () => {
  selectedEspanol.classList.add("langSelected");
  selectedEnglish.classList.remove("langSelected");
  showSpanishText();
  localStorage.setItem("languageActive", "espanol");
  });

// Default language
switch (localStorage.getItem("languageActive")) {
  case "english":
    selectedEnglish.classList.add("langSelected");
    showEnglishText();
    break;
 
  case "espanol":
    selectedEspanol.classList.add("langSelected");
    showSpanishText();
    break;
 
  default:
    showEnglishText();
  }