import placeHolder from './placeholder.jpg';

function addItem(parent, name, price, description, image) {
  const item = document.createElement('div');
  item.classList.add('item');
  
  const itemName = document.createElement('h3');
  itemName.innerHTML = `${name} <span class="price">${price}</span>`;
  itemName.classList.add('name');

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('description');

  const descriptionText = document.createElement('div');
  descriptionText.textContent = description;
  
  const descriptionImage = document.createElement('img');
  descriptionImage.setAttribute('src', image);
  descriptionImage.setAttribute('alt', name);

  descriptionContainer.appendChild(descriptionText);
  descriptionContainer.appendChild(descriptionImage);

  item.appendChild(itemName);
  item.appendChild(descriptionContainer);

  parent.appendChild(item);
}

function addSection(parent, name) {
  const sectionContainer = document.createElement('div');
  sectionContainer.classList.add('section');

  const sectionHeader = document.createElement('h2');
  sectionHeader.textContent = name;

  sectionContainer.appendChild(sectionHeader);
  parent.appendChild(sectionContainer);

  return sectionContainer;
}

export default function loadMenu(container) {
  const heading = document.createElement('h1');
  heading.textContent = "Menu";
  container.appendChild(heading);

  const drinkContainer = addSection(container, "Drinks");
  
  addItem(
    drinkContainer,
    "Coffee",
    "1.30 €",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, quam quis bibendum varius, nulla mauris tristique velit, nec dapibus.",
    placeHolder);

  addItem(
    drinkContainer,
    "Tea",
    "1.50 €",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum nisi sit amet sapien iaculis, sed hendrerit libero facilisis. Vestibulum.",
    placeHolder);

  const foodContainer = addSection(container, "Food");
  
  addItem(
    foodContainer,"Mooncake",
    "3.00 €",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non dui ac velit dapibus dictum eget at ligula. Sed quis.",
    placeHolder);

  addItem(foodContainer,
    "Mocchi",
    "4.00 €",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque est vel tellus pellentesque consequat. Orci varius natoque penatibus et.",
    placeHolder);
}