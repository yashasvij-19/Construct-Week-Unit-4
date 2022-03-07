import navbar from "../components/navbar.js";
import chatbox from "../components/chatbox.js";
import slider from '../components/slider.js';
import footer from '../components/footer.js';
let footer1 = document.getElementById("footer");
footer1.innerHTML = footer();

let header = document.getElementById("header");
header.innerHTML = navbar();
let carousel = document.querySelector(".carousel");
carousel.innerHTML = slider();

let box = document.createElement("div");
box.innerHTML = chatbox();
document.body.append(box);
localStorage.removeItem("allproducts");
let allproducts = [
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/a/face-primer.jpg",
    name: "Nykaa Prep Me Up! Face Primer",
    mrp: 549,
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/b/cbf2ea96902395773153__1_.jpg",
    name: "Maybelline New York Fit Me Primer",
    mrp: 499,
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/7/174d3118906074711892-1nw.jpg",
    name: "Iba Photo Perfect HD Face Primer",
    mrp: 549,
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/8/b8bfcf5kaybe00000089_1.jpg",
    name: "Kay Beauty Colour Correcting Primer",
    mrp: 639,
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/d/fd6c29amac_prmpfx_rv__1.jpg",
    name: "M.A.C Prep + Prime Fix+",
    mrp: 549,
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/3/3350900000394_1_1.jpg",
    name: "Embryolisse Lait-Creme Concentré",
    mrp: 549,
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/3/739429a773602345830_rv__1.jpg",
    name: "M.A.C Prep + Prime Fix+ - Original",
    mrp: 549,
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/7/971a3858904207502386_1.jpg",
    name: "Insight Cosmetics 3 In 1 Long Lasting Primer",
    mrp: 549,
  },
];
localStorage.setItem("allproducts", JSON.stringify(allproducts));

let rightproduct = document.querySelector(".rightproduct");
let data = JSON.parse(localStorage.getItem("allproducts"));

function renderproducts(data) {
  let rightproduct = document.querySelector(".rightproduct");
  rightproduct.innerHTML = "";
  data.forEach((element) => {
    console.log(element.mrp);
    let div = document.createElement("div");
    div.setAttribute("class", "productcard");
    let img = document.createElement("img");
    img.src = `${element.img}`;

    let h5 = document.createElement("h5");
    h5.innerText = `${element.name}`;
    let mrp = document.createElement("h5");
    mrp.innerText = `MRP:${element.mrp}`;

    let btm = document.createElement("div");
    btm.setAttribute("class", "btmcard");

    let btn1 = document.createElement("button");
    btn1.setAttribute("class", "wishlistbtn");
    btn1.innerHTML = `<i class="fa-solid fa-heart"></i>`;

    let btn2 = document.createElement("button");
    btn2.setAttribute("class", "addtocartbtn");

    btn2.addEventListener("click", () => {
      cartreader(element)
    });
    btn2.innerText = `ADD TO BAG`;
    btm.append(btn1, btn2);

    div.append(img, h5, mrp, btm);

    rightproduct.append(div);
  });
}
renderproducts(data);

let sort = document.getElementById("sort");
sort.addEventListener("change", () => {
  // console.log(112)
  let data = JSON.parse(localStorage.getItem("allproducts"));
  console.log(data);
  let opt1 = document.getElementById("sort").value;
  // console.log(opt1)

  if (opt1 == "asc") {
    let ans2 = data.sort(function (a, b) {
      return a.mrp - b.mrp;
    });

    renderproducts(ans2);
  } else {
    let ans2 = data.sort(function (a, b) {
      return +b.mrp - +a.mrp;
    });
    //   console.log(ans2)
    renderproducts(ans2);
  }
});

let count=0;
let cartdata = JSON.parse(localStorage.getItem("cartdata"));
if(cartdata){
  let cartnumber = document.querySelector(".cartnumber");
  cartnumber.innerText = cartdata.length;
}

function cartreader(element){
  // count++
  let cartnumber = document.querySelector(".cartnumber");
 
  
  let cartdata = JSON.parse(localStorage.getItem("cartdata"));
  if(!cartdata){
    localStorage.setItem("cartdata" , JSON.stringify([]));
    let cartdata1 = JSON.parse(localStorage.getItem("cartdata"));
    cartdata1.push(element);
    cartnumber.innerText = cartdata1.length;
    localStorage.setItem("cartdata" , JSON.stringify(cartdata1));
    cartcontainer(cartdata1)
  }else{
    cartdata.push(element);
    cartnumber.innerText = cartdata.length;
    localStorage.setItem("cartdata" , JSON.stringify(cartdata));
    cartcontainer(cartdata)
  }

}
let carting = JSON.parse(localStorage.getItem("cartdata"));
if(!carting){
  let parent = document.querySelector(".cartpage");
  parent.innerHTML = ``
  let btn = document.createElement("button");
  btn.setAttribute("class" , "checkout");
  btn.innerHTML = `PROCEED >`;
  parent.append(btn)
}else{
  cartcontainer(carting)
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





// function myFunction(){
//     console.log(1)
// }