// My age script
let htmlAge = document.getElementById('age');
let dateNow = new Date();
let birthDate = new Date('Feb 11 2010');
let age = Math.floor((dateNow - birthDate) / 1000 / 60 / 60 / 24 / 365);
htmlAge.innerHTML = age;
console.log(age);