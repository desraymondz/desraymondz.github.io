const today = new Date();
document.querySelector('#current-date').innerHTML = today.toDateString();
document.querySelector('#button-style').addEventListener('click', function() {
// document.getElementById("memes").innerHTML = "wow naughty kiddo🤨"
document.getElementById("memes").innerHTML = "BOO!"
document.getElementById("memes").style.fontSize = '15vw'
document.querySelector('#super-gif').style.display = 'inline';
const audio = new Audio('Super-Idol.mp3');
audio.play();
});
// document.querySelector('#button-style').addEventListener('mouseover', function() {
//   document.getElementById("memes").innerHTML = "HAHAHA"
// });
// document.querySelector('#button-style').addEventListener('mouseout', function() {
//   document.getElementById("memes").innerHTML = "NOPE"
// });