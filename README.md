# JavaScript-Learning-Projects

## Here you can find some of my learning Projects for JavaScript and the documentation about them. 


![programming-6119584](https://user-images.githubusercontent.com/57542570/155857517-4d1f98e9-d5af-4c79-91aa-2e3fa84db02e.png)



<br><br>









<!-- First Project -->
## Color-Flipper Project




https://user-images.githubusercontent.com/57542570/155860300-f28ca666-7fd8-4803-b2e0-296451ae7f2c.mp4



In this Project I worked with Array functions to generate Random hex Values.<br><br>
 <br><br>
 
 ```JavaScript
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += hex[Math.floor(Math.random() * hex.length)]
    }
    document.body.style.backgroundColor = hexColor;
    color.innerHTML = hexColor
})
```



<br><br><br><br><br><br><br><br>


## Navbar Project


https://user-images.githubusercontent.com/57542570/155857538-f8b7b04e-2eef-4301-bf43-7ceb74f8fbb5.mp4


In this project I created a nice animated navbar with the help of JavaScript and Css. <br><br>
I used the JS ES6 Arrow Function and used the shortest possible writing style <br> for the toggle function. <br>
went more into Sass featuresand replaced media querys with Sass variables. <br><br>

![navbar](https://user-images.githubusercontent.com/57542570/155857540-9b5d99ed-6ddd-4dff-9222-c21fc1064760.png)

<br><br><br><br><br><br><br><br>

## Sidebar Project





In this project I created a nice animated navbar with the help of JavaScript and Css. <br><br>
I used the JS ES6 Arrow Function and used the shortest possible writing style <br> for the toggle function. <br>
went more into Sass featuresand replaced media querys with Sass variables. <br><br>



```JavaScript
const toggelBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar");

toggelBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar")
})
```

![Screenshot (106)](https://user-images.githubusercontent.com/57542570/155888843-a2f61081-0fd6-429d-98c1-324dd76979ae.png)
![Screenshot (107)](https://user-images.githubusercontent.com/57542570/155888845-d2aea4eb-664b-4cff-b11f-ef45373c7c3e.png)

<!-- CONTACT -->
## Contact

Meik Grünholz -  prt3@hotmail.de






