const mainImage = document.querySelector("#img");
const button = document.querySelector(".btn");

const images = ["img/1.jpg", "img/2.jpg", "img/3.jpeg", "img/4.jpg"];

button.addEventListener("click", ()=>{
console.log("Hello!")
let rnd = Math.floor(Math.random() * images.length);
mainImage.src = images[rnd];
console.log("Random number:", rnd)
});