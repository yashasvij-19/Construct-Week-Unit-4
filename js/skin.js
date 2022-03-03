import navbar from "../components/navbar.js";
 console.log(navbar)
let header = document.getElementById("header");
header.innerHTML = navbar();


let slideIndex = 0;
function plusSlides(){
slideIndex--;    
}
function plusSlides1(){
    slideIndex++;    
    }
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("skin-dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" skin-active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " skin-active";
    setTimeout(showSlides, 2000);
  }