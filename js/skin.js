import navbar from "../components/navbar.js";
 console.log(navbar)
let header = document.getElementById("header");
header.innerHTML = navbar();

import footer from '../components/footer.js';
let footer1 = document.getElementById("footer");
footer1.innerHTML = footer();


let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("skin-mySlides");
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

  console.log("successful");

 
  function cartcontainer(cartdata){
    let parent = document.querySelector(".cartpage");
    parent.innerHTML = ``
    let btn = document.createElement("button");
    btn.setAttribute("class" , "checkout");
    btn.innerHTML = `PROCEED >`;
    let btn1 = document.createElement("button");
    btn1.setAttribute("class" , "cross");
    btn.addEventListener("click" , ()=>{
      
      location.href = "/cartpage.html"
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