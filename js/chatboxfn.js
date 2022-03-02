let chatrobo  = document.querySelector(".chatrobo");
let chatclear  = document.querySelector(".chatclear");

chatrobo.addEventListener("click" , ()=>{
    chatrobo.style.display = "none";
    chatroboon = document.querySelector(".chatroboon");
    // chatroboon.style.height = "37rem"
    chatroboon.style.display = "flex";
})
chatclear.addEventListener("click" , ()=>{
    chatrobo.style.display = "flex";
     chatroboon = document.querySelector(".chatroboon");
    // chatroboon.style.height = "0"
    chatroboon.style.display = "none";
})