let name = document.getElementById("name");
let usr = JSON.parse(localStorage.getItem("userdetails"))
name.value = `${usr.name}`

// console.log(usr)
let btn = document.getElementById("order");
btn.addEventListener("click" , (e)=>{
    e.preventDefault();
    // <input type="text" id="card" >
    // <label for="expirym">Exipry</label>
    // <div style="display: flex;justify-content:start;" class="moye">
    //     <input type="number" min="0" max="12" id="expirym" placeholder="(<--mm-->)" >
    
    // <input type="number" min="0" max="3000" id="expiryy"  placeholder="(<--yy-->)" >
    // </div>
    

    // <label for="name">Enter Card Holder Name</label>
    // <input type="text" id="name" >
    let sel = document.getElementById("banks").value;
    let expirym = document.getElementById("expirym").value;
    let expiryy = document.getElementById("expiryy").value;
    let name = document.getElementById("name").value;
    let card = document.getElementById("card").value;
    if(!sel || !expirym || !expiryy || !name || !card){
        alert("Please provide your bank details correctly");
    }else{
        location.href = "./finalgreet.html"
    }
    
})


let logo = document.querySelector(".logo");
logo.addEventListener("click" , ()=>{
    location.href = "./index.html"
})
