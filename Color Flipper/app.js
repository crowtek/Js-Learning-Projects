const colors = ["green", "red", "blue", "pink"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const body = document.querySelector("body")

btn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
})