let btn=document.querySelector("button");
let con=document.querySelector(".container");
// btn.addEventListener('click',function(){
//     con.classList.remove("container");
//     con.classList.add("slide");
//     btn.style.display='none';
// })
document.addEventListener('DOMContentLoaded', function() {
    // Your code to run after the DOM has loaded
    // This event fires as soon as the HTML structure (DOM) is ready, but it doesn't wait for images and other resources to load.
    con.classList.remove("container");
    con.classList.add("slide");
    console.log("loaded");
    // btn.style.display='none';
    
  });
let women=document.querySelector(".left");
let men=document.querySelector(".right");
women.addEventListener('click',function(){
    window.location.href = 'women.html';
})
men.addEventListener('click',function(){
    window.location.href = 'men.html';
})