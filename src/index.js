let content = document.getElementById('content');

let buttonAbout = document.getElementById('button-about');
let buttonMenu = document.getElementById('button-menu');
let buttonContact = document.getElementById('button-contact');

buttonAbout.addEventListener("click", printAbout);
buttonMenu.addEventListener("click", printMenu);
buttonContact.addEventListener("click", printContact);

import printAbout from "./about";
import printMenu from "./menu";
import printContact from "./contact";

printAbout();