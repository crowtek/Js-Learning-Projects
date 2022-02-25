let count = 0;

let value = document.getElementById("value");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");


decrease.addEventListener("click", () => {
    count--;
    value.innerHTML = count;
    if(count < 0){
        value.style.color = "red";
    }
}) ;

increase.addEventListener("click", () => {
    count++;
    value.innerHTML = count;
    if(count > 0){
        value.style.color = "green";
    }
}) ;

reset.addEventListener("click", () => {
    count = 0;
    value.innerHTML = "0"
    value.style.color ="#102A42"
}) ;