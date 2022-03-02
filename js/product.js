import navbar from "../components/navbar.js"
import chatbox from "../components/chatbox.js";

let header = document.getElementById("header");
header.innerHTML = navbar();

let box = document.createElement("div");
box.innerHTML = chatbox();
document.body.append(box)