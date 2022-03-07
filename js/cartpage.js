let cartdata = JSON.parse(localStorage.getItem("cartdata"));
let userdata = JSON.parse(localStorage.getItem("userdetails"));

if(userdata){
  let country = document.getElementById("country");
let name = document.getElementById("name");
let number = document.getElementById("number");
let code = document.getElementById("code");
let add = document.getElementById("add");


country.value = userdata.co;
name.value = userdata.name;
number.value = userdata.number; 
code.value = userdata.code;
add.value = userdata.add;

prompt("Kindly check the data and proceed for payment")
}




if (cartdata) {
  let tophead = document.querySelector(".tophead");
  tophead.innerHTML = `${cartdata.length} Items in your Bag`;

  let allcarted = document.querySelector(".allcarted");
  allcarted.innerHTML = "";
  let totalprice = 0;
  cartdata.forEach((element) => {
    let div = document.createElement("div");
    div.setAttribute("class", "cartcontainer");
    let img = document.createElement("img");
    img.src = `${element.img}`;

    let h5 = document.createElement("h5");
    h5.innerText = `${element.name}`;
    let mrp = document.createElement("h5");
    mrp.innerText = `MRP:${element.mrp}`;

    div.append(img, h5, mrp);
    allcarted.append(div);
    totalprice += element.mrp;
  });

  let total = document.querySelector(".total");
  total.innerHTML = `Grand Total : ${totalprice} &#8377`;
}

let country = document.getElementById("country");
let name = document.getElementById("name");
let number = document.getElementById("number");
let code = document.getElementById("code");
let add = document.getElementById("add");
country.value = "India";

let ship = document.querySelector(".ship");
ship.addEventListener("click", (e) => {
  e.preventDefault();


    

    if (!name.value || !number.value || !code.value || !add.value) {
      alert("Please fill all the details correctly");
      // prompt("Please fill all the details correctly p")
    } else {
      let obj = {
        co: country.value,
        name: name.value,
        number: number.value,
        code: code.value,
        add: add.value,
      };
  
      localStorage.setItem("userdetails", JSON.stringify(obj));
      console.log("hello");
      location.href = "payment.html";
    }
  

});


let logo = document.querySelector(".logo");
logo.addEventListener("click" , ()=>{
    location.href = "./index.html"
})
