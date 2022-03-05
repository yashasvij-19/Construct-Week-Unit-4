let username = document.querySelector(".username")
let usr = JSON.parse(localStorage.getItem("userdetails"))
// console.log(username)
username.innerText = `Hello ${usr.name} We hope to see you again`
const tabledata = document.querySelector(".tabledata");
const userleft = document.querySelector(".userleft");
const userright = document.querySelector(".userright");

const element = document.getElementById("invoice");
let heading = document.createElement("h2");
heading.innerHTML = `INVOICE`;

let iname = document.createElement("h5")
iname.setAttribute("class" , "iname");
iname.innerHTML = `${usr.name}`;


let iadd = document.createElement("h5")
iadd.setAttribute("class" , "iadd");
iadd.innerHTML = `${usr.add}  ${usr.code} ${usr.co}`;

let inum = document.createElement("h5")
inum.setAttribute("class" , "inum");
inum.innerHTML = `${usr.number}`;

userleft.append(heading , iname , iadd , inum)

let currTime = Date();

let randomId = 10000000;
userright.append(currTime , ++randomId);



tabledata.innerHTML = "";
let div1 = document.createElement("div");
div1.innerText = "SRNO"
let div2 = document.createElement("div");
div2.innerText = "Description"
let div3 = document.createElement("div");
div3.innerText = "MRP"
// tabledata.append("SRNO");
// tabledata.append("d");
tabledata.append(div1,div2,div3);


let download = document.getElementById("download");
download.addEventListener("click" , ()=>{

    const tabledata = document.querySelector(".tabledata");
    
    let purchased = JSON.parse(localStorage.getItem("cartdata"));
   

    let count = 1;
    let total = 0;
    purchased.forEach(element => {
        let div11 = document.createElement("div");
        div11.innerText = `${count}`
        let div22 = document.createElement("div");
        div22.innerText = `${element.name}`
        let div33 = document.createElement("div");
        div33.innerText = `${element.mrp}`
        total += element.mrp;
        tabledata.append(div11,div22,div33);
        count++;
    });



const element = document.getElementById("invoice");
    element.append("total : " , total);

    setTimeout(() => {
        const element = document.getElementById("invoice");
    
        html2pdf()
        .from(element)
        .save();
        
    }, 3000);
})