// Back to top button
mybutton = document.getElementById("backButton");
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
const header = document.getElementById('header');
const menutoggle = document.getElementById('menutoggle');
const navbar = document.getElementById('navbar');
      
document.onclick = function(e) {
  if(e.target.id !== 'header' && e.target.id !== 'menutoggle' && e.target.id !== 'navbar') {
  menutoggle.classList.remove('active');
  navbar.classList.remove('active');
  }
}
      
menutoggle.onclick = function(){
  menutoggle.classList.toggle('active');
  navbar.classList.toggle('active');
}


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
  });

//ES -> EN OFF
selectedEspanol.addEventListener("click", () => {
  selectedEspanol.classList.add("langSelected");
  selectedEnglish.classList.remove("langSelected");
  showSpanishText();
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

  // Dark-Light mode
  const setTheme = theme => document.documentElement.className = theme;


  // Share buttons
  const link = 'https://elyrod85.github.io/EleonoraRod85/';
  const msg = encodeURIComponent('Eleonora is a Front-End Dev & Web Designer, check out her portfolio!');
  const title = encodeURIComponent(document.querySelector('title').textContent);

  const fb = document.querySelector('.facebook');
  fb.href = `https://www.facebook.com/sharer.php?u=${link}`;

  const twitter = document.querySelector('.twitter');
  twitter.href = `https://twitter.com/share?&url=${link}&text=${msg}&hashtags=frontend,webdesign`;

  const linkedIn = document.querySelector('.linkedin');
  linkedIn.href = `https://linkedin.com/sharing/share-offsite/?url=${link}&title=${msg}`;

  const whatsApp = document.querySelector('.whatsapp');
  whatsApp.href = `https://wa.me/?text=${msg} ${link}`;

  const sendEmail = document.querySelector('.sendemail');
  sendEmail.href = `mailto:?subject=${title}&body=${msg} ${link}`;
