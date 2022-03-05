let name = document.getElementById("name");
let usr = JSON.parse(localStorage.getItem("userdetails"))
name.value = `${usr.name}`

// console.log(usr)