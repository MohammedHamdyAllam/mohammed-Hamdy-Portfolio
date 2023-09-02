// get elements from HTML
let menu = document.getElementById('menu');
let navBar = document.getElementById('nav-bar');
let themeButton = document.getElementById('theme');
let links = document.getElementsByClassName('nav');
let upButton = document.getElementById('up-button');
let cards = document.getElementsByClassName('card2');
let mainLanguage = document.getElementById('main-language');
let frameWorks = document.getElementById('frame-works');
let libraries = document.getElementById('libraries');
let otherLang = document.getElementById('other-lang');
let timeCard = document.getElementById('time-card');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let myPicture = document.getElementById('my-picture');
let myName = document.getElementById('my-name');
let myWork1 = document.getElementById('my-work1');
let loader = document.getElementById('loader');
let yourubeLink = document.getElementById('youtube');
let facebookLink = document.getElementById('facebook');
let instagramLink = document.getElementById('instagram');
let twitterLink = document.getElementById('twitter');
let tiktokLink = document.getElementById('tiktok');
let discordLink = document.getElementById('discord');
let linkedinLink = document.getElementById('linkedin');
let githubLink = document.getElementById('github');
let nextSection = document.getElementById('next-section');
let information = document.getElementById('information');
let imageInformation = document.getElementById('image-information');

// varibles
let l = 0;
let t = 0;

// make loading scripts
window.onload = function () {
    // theme script
    if (localStorage.getItem('D')) {
        for (let c1 = 0; c1 <= 4; c1++) {
            cards[c1].style.backgroundColor = '#222';
            cards[c1].style.color = '#fff';
        }
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
        t = 1;
    }
    else if(t == 1){
        for (let c2 = 0; c2 <= 4; c2++) {
            cards[c2].style.backgroundColor = '#fff';
            cards[c2].style.color = '#000';
        }
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
        t = 2;
    }
    else{
        themeButton.innerHTML = '<i class="fa-solid fa-cloud-moon"></i>';
        t = 0;
    }
};

// make a burger menu script
menu.onclick = function () {
    if (l == 0) {
        for (let n0 = 0; n0 <= 3; n0++) {
            links[n0].style.display = 'block';
        }
        navBar.style.height = '100%';
        navBar.style.width = '50%';
        navBar.style.backgroundColor = 'rgba(3, 3, 3, 50%)';
        themeButton.style.display = 'block';
        menu.className = 'fa-solid fa-xmark menu'; // fa-solid fa-xmark menu
        l = 1;
    } else {
        for (let n1 = 0; n1 <= 3; n1++) {
            links[n1].style.display = 'none';
        }
        navBar.style.height = '0';
        navBar.style.width = '0';
        navBar.style.backgroundColor = 'rgba(3, 3, 3, 0)';
        themeButton.style.display = 'none';
        menu.className = 'fa-solid fa-bars menu'; // fa-solid fa-bars menu
        l = 0;
    }
};

// make a theme script
themeButton.onclick = function () {
    if (t == 0) {
        for (let c1 = 0; c1 <= 4; c1++) {
            cards[c1].style.backgroundColor = '#222';
            cards[c1].style.color = '#fff';
        }
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('D', 'dark');
        localStorage.removeItem('L');
        t = 1;
    }
    else  if(t == 1){
        for (let c2 = 0; c2 <= 4; c2++) {
            cards[c2].style.backgroundColor = '#fff';
            cards[c2].style.color = '#000';
        }
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('L', 'light');
        localStorage.removeItem('D');
        t = 2;
    }
    else{
        themeButton.innerHTML = '<i class="fa-solid fa-cloud-moon"></i>';
        localStorage.setItem('M', 'media');
        localStorage.removeItem('L');
        localStorage.removeItem('D');
        t = 0;
    }
};

// // animations
// window.onload = function() {
//     if (window.scrollY >= 0) {
//         myPicture.style.animationName = 'third-anim';
//         myPicture.style.animationDuration = '3s';
//         let counter = 1;
//         let counter2 = 1;
//         setInterval(function() {
//           const myTextName = 'I am Mohammed Hamdy Allam';
//           myName.innerHTML = myTextName.slice(0, counter);
//           counter++;
//         }, 100);
//         setInterval(function() {
//           // counter2 = 1;
//           const myTextWork = 'Front-end-develober';
//           myWork1.innerHTML = myTextWork.slice(0, counter2);
//           counter2++;
//         }, 200);
//         twitterLink.style.animationName = 'forth-anim';
//         twitterLink.style.animationDuration = '3.5s';
//         tiktokLink.style.animationName = 'forth-anim';
//         tiktokLink.style.animationDuration = '4s';
//         instagramLink.style.animationName = 'forth-anim';
//         instagramLink.style.animationDuration = '4.5s';
//         discordLink.style.animationName = 'forth-anim';
//         discordLink.style.animationDuration = '5s';
//         facebookLink.style.animationName = 'forth-anim';
//         facebookLink.style.animationDuration = '5.5s';
//         linkedinLink.style.animationName = 'forth-anim';
//         linkedinLink.style.animationDuration = '6s';
//         yourubeLink.style.animationName = 'forth-anim';
//         yourubeLink.style.animationDuration = '6.5s';
//         githubLink.style.animationName = 'forth-anim';
//         githubLink.style.animationDuration = '7s';
//         nextSection.style.animationName = 'forth-anim';
//         nextSection.style.animationDuration = '1s';
//     }
//     if (window.scrollY >= 500) {
//         information.style.animationName = 'fifth-anim';
//         information.style.animationDuration = '1s';
//         imageInformation.style.animationName = 'sixth-anim'
//         imageInformation.style.animationDuration = '1s';
//     }
//     if (window.scrollY >= 500) {
//         timeCard.style.animationName = 'main-anim';
//         timeCard.style.animationDuration = '2s';
//         timeCard.style.animationFillMode = 'forwards';
//         card2.style.animationName = 'main-anim';
//         card2.style.animationDuration = '1.5s';
//         card2.style.animationFillMode = 'forwards';
//         card3.style.animationName = 'main-anim';
//         card3.style.animationDuration = '1s';
//         card3.style.animationFillMode = 'forwards';
//         card4.style.animationName = 'main-anim';
//         card4.style.animationDuration = '0.5s';
//         card4.style.animationFillMode = 'forwards';
//     }
//     if (window.scrollY >= 1000) {
//         mainLanguage.style.animationName = 'main-anim';
//         mainLanguage.style.animationDuration = '0.4s';
//         mainLanguage.style.animationFillMode = 'forwards';
//     }
//     if (window.scrollY >= 1400) {
//         frameWorks.style.animationName = 'second-anim';
//         frameWorks.style.animationDuration = '0.7s';
//         frameWorks.style.animationFillMode = 'forwards';
//     }
//     if (window.scrollY >= 1800) {
//         libraries.style.animationName = 'main-anim';
//         libraries.style.animationDuration = '1s';
//         libraries.style.animationFillMode = 'forwards';
//     }
//     if (window.scrollY >= 2000) {
//         otherLang.style.animationName = 'second-anim';
//         otherLang.style.animationDuration = '1s';
//         otherLang.style.animationFillMode = 'forwards';
//     }
// };

// window.onscroll = function() {
//     // make a up button script
//     if (window.scrollY >= 120) {
//         upButton.style.display = 'block';
//         upButton.onclick = function () {
//         window.scrollTo({
//             left: 0,
//             top: 0,
//             behavior: 'smooth',
//         })}
//     }
//     else {
//         upButton.style.display = 'none';
//     }
//     // make an animation script
//     if (window.scrollY >= 0) {
//       myPicture.style.animationName = 'third-anim';
//       myPicture.style.animationDuration = '3s';
//       let counter = 1;
//       let counter2 = 1;
//       // setInterval(function() {
//       //   const myTextName = 'I am Mohammed Hamdy Allam';
//       //   myName.innerHTML = myTextName.slice(0, counter);
//       //   counter++;
//       // }, 100);
//       // setInterval(function() {
//       //   // counter2 = 1;
//       //   const myTextWork = 'Front-end-develober';
//       //   myWork1.innerHTML = myTextWork.slice(0, counter2);
//       //   counter2++;
//       // }, 200);
//         twitterLink.style.animationName = 'forth-anim';
//         twitterLink.style.animationDuration = '3.5s';
//         tiktokLink.style.animationName = 'forth-anim';
//         tiktokLink.style.animationDuration = '4s';
//         instagramLink.style.animationName = 'forth-anim';
//         instagramLink.style.animationDuration = '4.5s';
//         discordLink.style.animationName = 'forth-anim';
//         discordLink.style.animationDuration = '5s';
//         facebookLink.style.animationName = 'forth-anim';
//         facebookLink.style.animationDuration = '5.5s';
//         linkedinLink.style.animationName = 'forth-anim';
//         linkedinLink.style.animationDuration = '6s';
//         yourubeLink.style.animationName = 'forth-anim';
//         yourubeLink.style.animationDuration = '6.5s';
//         githubLink.style.animationName = 'forth-anim';
//         githubLink.style.animationDuration = '7s';
//         nextSection.style.animationName = 'forth-anim';
//         nextSection.style.animationDuration = '1s';
//     }
//     if (window.scrollY >= 500) {
//         information.style.animationName = 'fifth-anim';
//         information.style.animationDuration = '1s';
//         information.style.animationFillMode = 'forwards';
//         imageInformation.style.animationName = 'sixth-anim'
//         imageInformation.style.animationDuration = '1s';
//         imageInformation.style.animationFillMode = 'forwards';
//     }
//     if (window.scrollY >= 500) {
//         timeCard.style.animationName = 'main-anim';
//         timeCard.style.animationDuration = '2s';
//         timeCard.style.animationFillMode = 'forwards';
//         card2.style.animationName = 'main-anim';
//         card2.style.animationDuration = '1.5s';
//         card2.style.animationFillMode = 'forwards';
//         card3.style.animationName = 'main-anim';
//         card3.style.animationDuration = '1s';
//         card3.style.animationFillMode = 'forwards';
//         card4.style.animationName = 'main-anim';
//         card4.style.animationDuration = '0.5s';
//         card4.style.animationFillMode = 'forwards';
//     }
//     if (window.scrollY >= 1000) {
//         mainLanguage.style.animationName = 'main-anim';
//         mainLanguage.style.animationDuration = '0.4s';
//         mainLanguage.style.animationFillMode = 'forwards';
//     }
//     if (window.scrollY >= 1400) {
//         frameWorks.style.animationName = 'second-anim';
//         frameWorks.style.animationDuration = '0.7s';
//         frameWorks.style.animationFillMode = 'forwards';
//     }
//     if (window.scrollY >= 1800) {
//         libraries.style.animationName = 'main-anim';
//         libraries.style.animationDuration = '1s';
//         libraries.style.animationFillMode = 'forwards';
//     }
//     if (window.scrollY >= 2000) {
//       otherLang.style.animationName = 'second-anim';
//       otherLang.style.animationDuration = '1s';
//       otherLang.style.animationFillMode = 'forwards';
//   }
// };


// functions

