import navbar from "../components/navbar.js";
import slider from '../components/slider.js';
import chatbox from "../components/chatbox.js";
 console.log(navbar)
let header = document.getElementById("header");
header.innerHTML = navbar();
import footer from '../components/footer.js';
let footer1 = document.getElementById("footer");
footer1.innerHTML = footer();

let box = document.createElement("div");
box.innerHTML = chatbox();
document.body.append(box);

let carousel = document.querySelector(".carousel");
console.log(carousel)
carousel.innerHTML = slider();


let slideIndex = 0;
function plusSlides(){
slideIndex--;    
}
function plusSlides1(){
    slideIndex++;    
    }
// showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
  }
  
  
  function cartcontainer(cartdata){
    let parent = document.querySelector(".cartpage");
    parent.innerHTML = ``
    let btn = document.createElement("button");
    btn.setAttribute("class" , "checkout");
    btn.innerHTML = `PROCEED >`;
    let btn1 = document.createElement("button");
    btn1.setAttribute("class" , "cross");
    btn.addEventListener("click" , ()=>{

      let cdata = JSON.parse(localStorage.getItem("cartdata"))
      let udata = JSON.parse(localStorage.getItem("userdetails"));
      if(!cdata){
        alert("Please add some products to check")
      }

      else if(!udata){
        location.href = "/cartpage.html"
        // console.log(bolo)
      }else{
        location.href = "./guestpageregister.html";
        
      }


      
    })
    btn1.addEventListener("click" , ()=>{
      
      let cartcontainer = document.querySelector(".cartpage");
      // console.log("yes")
      // console.log(cartcontainer)
      cartcontainer.style.visibility = "hidden";
    })
  btn1.innerHTML = ` <i class="fa-solid fa-circle-xmark"></i>`
  parent.append(btn, btn1)
  cartdata.forEach((element=>{
    
    let div = document.createElement("div");
    div.setAttribute("class" , "cartcontainer");
    let img = document.createElement("img");
    img.src = `${element.img}`;
    
    let h5 = document.createElement("h5");
    h5.innerText = `${element.name}`;
    let mrp = document.createElement("h5");
    mrp.innerText = `MRP:${element.mrp}`;
    
      div.append(img,h5,mrp);
      parent.append(div);
    }))
  }
  let checkout = document.querySelector("#cartdetails");
  checkout.addEventListener("click" , ()=>{
    let cartcontainer = document.querySelector(".cartpage");
    // console.log("yes")
    console.log(cartcontainer)
    cartcontainer.style.visibility = "visible";
  })
  
  cartcontainer(JSON.parse(localStorage.getItem("cartdata")))