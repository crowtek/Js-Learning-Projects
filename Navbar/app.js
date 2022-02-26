// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".link");

toggleBtn.addEventListener("click",  () => {
    links.classList.add(".show-links")
});

