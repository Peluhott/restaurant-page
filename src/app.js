import "./styles.css";
import { parentContainer } from "./domLoader";
import { renderHome, renderAbout, renderFood } from "./domLoader";



const homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', renderHome);

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click',renderFood);