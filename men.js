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
const slides = document.querySelector('.slides');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

let slideIndex = 0;
let slideInterval;

function updateSlide() {
  slides.style.transform = `translateX(-${slideIndex * 1500}px)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % 5; // Assuming 3 images
  updateSlide();
}

function prevSlide(){
  slideIndex = (slideIndex - 1 + 3) % 5; // Assuming 3 images
  updateSlide();
}
nextButton.addEventListener('click', () => {
  nextSlide();
});
prevButton.addEventListener('click', () => {
  prevSlide();
});
function startAutoSlide() {
  setInterval(nextSlide, 3000); // Auto-advance every 3 seconds
}
startAutoSlide();


const customSlides = document.querySelector('.custom-slides');
const customNextButton = document.querySelector('.custom-next-button');
const customPrevButton = document.querySelector('.custom-prev-button');

let customSlideIndex = 0;

function customUpdateSlide() {
  customSlides.style.transform = `translateX(-${customSlideIndex * 1500}px)`;
}

function customNextSlide() {
  customSlideIndex = (customSlideIndex + 1) % 5; // Assuming 3 images
  customUpdateSlide();
}

function customPrevSlide() {
  customSlideIndex = (customSlideIndex - 1 + 3) % 5; // Assuming 3 images
  customUpdateSlide();
}

customNextButton.addEventListener('click', () => {
  customNextSlide();
});

customPrevButton.addEventListener('click', () => {
  customPrevSlide();
});

function customStartAutoSlide() {
  setInterval(customNextSlide, 3000); // Auto-advance every 3 seconds
}

customStartAutoSlide();

let a=document.querySelectorAll(".newpic");
for(el of a){
  el.addEventListener("click",()=>{
    window.location.href='mendress.html'
  })
}
let accos=document.querySelectorAll('.accos');
for(as of accos){
  as.addEventListener('click',()=>{
    window.location.href='accessories.html';
  })
}

let card=document.querySelectorAll('.card');
for(c of card){
    c.addEventListener('click',()=>{
        window.location.href='kurta.html'
    })
}
let watch=document.querySelectorAll('.watches');
for(c of watch){
    c.addEventListener('click',()=>{
        window.location.href='watches.html'
    })
}
let shoe=document.querySelectorAll('.shoes');
for(c of shoe){
    c.addEventListener('click',()=>{
        window.location.href='shoes.html'
    })
}
document.querySelector(".glasses").addEventListener("click",()=>{
  window.location.href='glasses.html';
})
let tshirt=document.querySelectorAll(".tshirt");
for(s of tshirt){
  s.addEventListener("click",()=>{
    window.location.href='tshirt.html';
  })
}