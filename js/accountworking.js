let data = JSON.parse(localStorage.getItem("userdetails"))
  if(data){
    location.href = "./finalgreet.html"
  }else{
    
let country = document.getElementById("country");
let name = document.getElementById("name");
let number = document.getElementById("number");
let code = document.getElementById("code");
let add = document.getElementById("add");


let ship = document.querySelector("#submitVerification");
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
      // console.log("hello");
      location.href = "./index.html";
    }
  

});



  }