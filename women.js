const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const images = document.querySelectorAll('.slider img');
let currentIndex = 0;
let intervalId;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

nextButton.addEventListener('click', () => {
  clearInterval(intervalId); // Stop the automatic slideshow
  nextImage();
  startAutoSlide(); // Restart the automatic slideshow
});

prevButton.addEventListener('click', () => {
  clearInterval(intervalId); // Stop the automatic slideshow
  prevImage();
  startAutoSlide(); // Restart the automatic slideshow
});

function startAutoSlide() {
  clearInterval(intervalId); // Clear any previous intervals to avoid overlap
  intervalId = setInterval(nextImage, 2500); // Advance to the next image every 1 second (1000ms)
}

startAutoSlide(); // Start the automatic slideshow when the page loads

let home=document.querySelector(".home");
let men=document.querySelector(".men");
let wo=document.querySelector(".women");
let logo=document.querySelector(".logo");
home.addEventListener('click',function(){
  window.location.href='choose.html'
})
men.addEventListener('click',function(){
  window.location.href='men.html'
})
wo.addEventListener('click',function(){
  window.location.href='women.html'
})
logo.addEventListener('click',function(){
  window.location.href='index.html'
})

document.querySelector(".slider").addEventListener('click',()=>{
  window.location.href='top.html'
})
let a=document.querySelectorAll(".trendcard");
for(t of a){
  t.addEventListener('click',()=>{
    window.location.href='womendress.html'
  })
}
let b=document.querySelectorAll(".itemspic");
for(t of b){
  t.addEventListener('click',()=>{
    window.location.href='womendress.html'
  })
}
let c=document.querySelectorAll(".bCard");
for(t of c){
  t.addEventListener('click',()=>{
    window.location.href='womendress.html'
  })
}
document.querySelector(".dewali").addEventListener('click',()=>{
  window.location.href='womendress.html'
})
let d=document.querySelectorAll(".cardd");
for(t of d){
  t.addEventListener('click',()=>{
    window.location.href='womendress.html'
  })
}
let e=document.querySelectorAll(".shpic");
for(t of e){
  t.addEventListener('click',()=>{
    window.location.href='womendress.html'
  })
}
let kurti=document.querySelectorAll('.kurti');
for(k of kurti){
  k.addEventListener("click",()=>{
    window.location.href='kurti.html'
  })
}
let jeans=document.querySelectorAll('.jeans');
for(k of jeans){
  k.addEventListener("click",()=>{
    window.location.href='jeans.html'
  })
}
let tops=document.querySelectorAll('.top');
for(k of tops){
  k.addEventListener("click",()=>{
    window.location.href='top.html'
  })
}
// let top=document.querySelectorAll('.top');
// for(t of top){
//   t.addEventListener('click',()=>{
//     window.location.href='top.html'
//   })
// }
let skrt=document.querySelectorAll('.skirt');
for(s of skrt){
  s.addEventListener('click',()=>{
    window.location.href='skirt.html'
  })
}
document.querySelector('.onepic').addEventListener('click',()=>{
  window.location.href='onepic.html'
})