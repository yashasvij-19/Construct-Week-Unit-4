let username = document.querySelector(".username")
let usr = JSON.parse(localStorage.getItem("userdetails"))
// console.log(username)
username.innerText = `Hello ${usr.name} We hope to see you again`
const tabledata = document.querySelector(".tabledata");
const userleft = document.querySelector(".userleft");
const userright = document.querySelector(".userright");

const element = document.getElementById("invoice");
let heading = document.createElement("h2");
let logo = document.createElement("div");
logo.innerHTML = `<div style="flex:1;text-align: right;" class="logo"><svg style="height: 2.5rem;max: width 2rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 250"><path xmlns="http://www.w3.org/2000/svg" d="M157.9 57.2c5-9.6-11.2-6.9-11.2-6.9-5.8 0-8.4 7-9.6 9l-17.5 34.5c-3.3 5.7-14.2 30.1-17.8 35.5-.3-5.5.1-16.5.2-19.1.7-10.4 1.4-18.3 2.5-27.8.8-7.4 2.4-15.7.9-23.1-1-4.6-2.5-4.9-9.1-5.6-6.9-.7-11.6 9.3-13.9 14-8.4 17.4-17.8 34.4-25.3 52.2-2.2 5.2-4.9 10.4-7.2 15.5-2.7 6.2-5.2 12.3-8.1 18.4-3.1 6.4-12.8 27.4-15.5 34-3 7.2-3.6 13 8.4 12.7 1.9 0 6.1.4 11.3-5.2 4.1-4.4 4.9-8.5 7.3-14.6 8.6-21.6 14.7-35.9 24.1-57.3.9-2.1 3-8.2 5.1-12.9-.1 6.7-1.2 14.7-1.7 20-1.6 19.4-2.7 38.1-4.4 57.3-.2 2.6-.9 5.7.3 8.1 1.2 2.4 4.2 3 6.6 3.3 9.6 1.2 10.6-3.6 13.6-10.2 2.7-5.9 4.3-10.7 6.7-16.7 7.4-18.5 15.2-36.8 23.8-54.8 2.2-4.6 4.4-9.1 6.8-13.6 4.4-8.3 8-16.1 12.8-25.3 3.6-6.6 7.1-14.1 10.9-21.4zm329.5 52.1c-1.1-11.1-16.3-5.5-25.4-3.8-3.4.6-13.9 2.6-26 4.9-.5-12.5-.3-10-.4-17.6-.3-11-.9-19.6-1.5-29.3-.4-6.1-1.3-14.6-12.3-13-12.8 1.8-14.9 8.2-18.3 15.9-8.9 20.1-8.6 20.2-18.7 42.6-.8 1.7-4.5 10.7-5.1 12.5-.4.1-1.2.3-2.2.6-4.1.9-9.1 2-14.6 3.2l.1-.5c1.3-10.2 2.9-20.4 4.3-30.6 1.3-9.3 2.7-24.5 3.8-33.8 1.2-10-10.4-9.8-10.4-9.8-7.1-.4-9.8 1.7-14.3 7.5-7.7 10-17 20.8-25.2 31.8-14.9 19.9-25.8 34.9-39.3 54.9-3.9 5.8-9.9 14.6-15.1 21.5-3.5-6.9-6.5-14.5-9.4-21.5-4.2-10-7.3-16.2-9.3-22.8-1.8-5.8.4-6.6 4.7-9.9 12.4-9.4 26.4-15.9 39.1-24.9 9-6.4 19.8-13.5 28.6-20.1 0 0 5.1-3 7.9-6.8 3.5-4.8-6.4-9.8-6.4-9.8-5.6-.9-8.7.4-12.6 2.2-4 1.8-9.2 5.9-12.6 8.6-7.5 5.8-17 12.7-24.4 18.5-9.1 7.1-15.3 11.5-25.3 17.4l25.4-38c8.3-10.7-13.7-13.7-22.1-2.4-7.8 10.1-13.1 19-19.2 28.2-14.7 21.9-26.8 44.9-38.9 69-4.6 9.2-9.1 18.8-13.3 28.3-2 4.6-7.9 15.2.2 16.3 17.3 2.2 20.1-6 24-15.9 6.4-16.3 8.5-19.3 12.6-29.4 4-9.8 6.9-15.4 11.4-23.8.1-.1 1.4-2.2 1.4-2.2.8 1.7 6.1 19.3 6.8 21.3 3.6 9.5 9.9 31.7 13.5 41.8 2.6 8.4 3.3 10.8 14.6 10.5 5.6-.1 8-2.3 11.7-9.3s19.7-36.8 19.7-36.8c4.8-.8 11.7-2 16.2-2.8.8-.1 2.6-.5 5.1-1 1.7-.2 3.1-.5 4.2-.8.1 0 .1 0 .2-.1 4.4-.9 10-2 16.1-3.2-1.1 5.5-4.5 17.6-5.2 20.7 0 0-7.4 28.8 2.2 30.3 6 .9 9.1-.1 9.1-.1 11.2-1.3 11.4-16.4 11.4-16.4l6.1-39.1c4.4-.9 8.8-1.8 13.1-2.6l-13.2 44.6c-1.9 6.3-3.3 14.4 8 14.4 9.2.5 9.8-5.3 9.8-5.3.2-.9 7.5-24.4 9.3-32.8 1.2-5.4 5.5-19.3 7.2-24.9 4.8-.9 8.4-1.6 10.1-1.9 2-.3 5.9-1 11-1.8-.1 5.2 0 12.4.1 13.4 1.1 15.8-.1 32.2 3.2 47.7.5 2.5 1.5 5.7 4.7 5.7 3.8 0 5-.4 9-.7 11.6-1 9.5-12.7 8.8-20.1-.8-8.2-1.6-15.1-2.7-23.3-.9-6.7-1.5-15.5-1.6-26.1v-.2c19-3.2 39.5-6.7 42.5-7.2 4.8-1.3 8.8-.9 7.8-11.9zm-148.5 21c0 .1-.1.1-.1.2-13.3 2.9-25.8 5.7-32.8 7.3 7-11.7 37.8-54.3 42.5-59.3-2.6 13.2-6.8 37.7-9.6 51.8zm76.8-16.8v.7c-6.4 1.2-12.4 2.4-17.2 3.3 6.1-15.8 12.5-35.2 16.3-45-.3 7.3 1.2 33.8.9 41zM229.2 66.4c2-3.7 6.5-11 .9-13.8-3.3-1.6-7.7-2.6-11.1-.9-2.8 1.5-4.9 4.4-6.3 7.1l-21.4 33.7c-3.5 4.8-6.8 10.8-13.9 11.6-4.7.5-8.1-1.5-8-5.7.1-4.3 2.6-10 4.5-13.7 5.6-10.6 6.3-14.2 11.7-24.7 5.2-10.1-11.8-12.4-16-5.1-3 5.2-8.8 15-10.1 18.3-2.4 6-20.4 34.6-12.6 45.9 10 12.8 36.6-7.4 23 15.9-11 18.7-17.9 29.4-27.5 46.7-2.1 3.7-4.7 7.4-5.4 11.8-1 6.2 7.5 6.1 11.2 5.9 6.5-.5 9.6-3.5 12.2-9.4 1.4-3.1 3.3-6.9 4.7-10 12.6-27.5 26-51.4 42.6-78 7.9-12.6 14.9-23.4 21.5-35.6z" fill="#fc2779"></path></svg></div>`
heading.append(logo);
let head = document.createElement("h3");
head.innerText = `INVOICE`
heading.append(head)

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


// const tabledata = document.querySelector(".tabledata");

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



// const element = document.getElementById("invoice");
element.append("total : " , total);
let download = document.getElementById("download");
download.addEventListener("click" , ()=>{


    setTimeout(() => {
        const element = document.getElementById("invoice");
    
        html2pdf()
        .from(element)
        .save();
        
    }, 3000);
})