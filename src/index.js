
import loadHome from "./home";

const container = document.getElementById('content');
const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

function clearPage() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

loadHome(container);