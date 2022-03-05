
let queno=1;

let btn=document.getElementById("help-submit-btn");
console.log(btn);

btn.addEventListener("click", saveHelp);

function saveHelp(){

let que=document.getElementById("help-query").value;
localStorage.setItem(queno, que);
queno++;
} 