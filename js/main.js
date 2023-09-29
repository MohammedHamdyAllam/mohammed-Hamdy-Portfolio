// get elements from HTML
let menu = document.getElementById('menu');
let navBar = document.getElementById('nav-bar');
let themeButton = document.getElementById('theme');
let links = document.querySelectorAll('.nav');
let upButton = document.getElementById('up-button');
let myPicture = document.getElementById('my-picture');
let loader = document.getElementById('loader');
let contactCard = document.querySelectorAll('.contact-card')

// varibles
let menuVar = 0;
let themeVar = 0;

// make loading scripts
window.onload = function () {
  // theme script
  if (localStorage.getItem('D')) {
    contactCard.forEach((card) => {
      card.style.backgroundColor = '#222';
      card.style.color = '#fff';
    });
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
    themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    t = 1;
  }
  else if(themeVar == 1){
    contactCard.forEach((card) => {
      card.style.backgroundColor = '#fff';
      card.style.color = '#000';
    });
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
    themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    themeVar = 0;
  }
};
// make a burger menu script
menu.onclick = function () {
  if (menuVar == 0) {
    links.forEach((link) => {
      link.style.display = 'block';
    });
    navBar.style.height = '100%';
    navBar.style.width = '50%';
    navBar.style.backgroundColor = '#222';
    navBar.style.animationName = 'burgerMenuOpenAnim';
    navBar.style.animationDuration = '0.5s';
    themeButton.style.display = 'block';
    menu.className = 'fa-solid fa-xmark menu'; // fa-solid fa-xmark menu
    menuVar = 1;
  }
  else {
    links.forEach((link) => {
      link.style.display = 'none';
    });
    navBar.style.height = '0';
    navBar.style.width = '0';
    navBar.style.animationName = 'burgerMenuCloseAnim';
    navBar.style.animationDuration = '0.5s';
    navBar.style.backgroundColor = 'transparent';
    themeButton.style.display = 'none';
    menu.className = 'fa-solid fa-bars menu'; // fa-solid fa-bars menu
    menuVar = 0;
  }
};

// make a theme script
themeButton.onclick = function () {
  if (themeVar == 0) {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
    themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    contactCard.forEach((card) => {
      card.style.backgroundColor = '#222';
      card.style.color = '#fff';
    });
    localStorage.setItem('D', 'dark');
    localStorage.removeItem('L');
    themeVar = 1;
  }
  else{
    contactCard.forEach((card) => {
      card.style.backgroundColor = '#fff';
      card.style.color = '#000';
    });
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
    themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem('L', 'light');
    localStorage.removeItem('D');
    themeVar = 0;
  }
};


