let username = document.querySelector(".username")
let usr = JSON.parse(localStorage.getItem("userdetails"))
// console.log(username)
username.innerText = `Hello ${usr.name} We hope to see you again`