import loadHome from "./home";
import loadMenu from "./menu";
import './styles.css';

const container = document.getElementById('content');
const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

function clearPage() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

homeButton.addEventListener('click', () => {
  clearPage();
  loadHome(container);
});

menuButton.addEventListener('click', () => {
  clearPage();
  loadMenu(container);
});

/*contactButton.addEventListener('click', () => {
  clearPage();
  loadContact(container);
});*/

loadHome(container);