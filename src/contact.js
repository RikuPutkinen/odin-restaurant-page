export default function loadContact(container) {
  const heading = document.createElement('h1');
  heading.textContent = "Contact";
  container.appendChild(heading);

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact');

  const contactHeading = document.createElement('h2');
  contactHeading.textContent = "Contact Information";
  contactInfo.appendChild(contactHeading);

  const contactList = document.createElement('ul');
  const phoneNumber = document.createElement('li');
  phoneNumber.textContent = "Phone: 123 4567 890";
  contactList.appendChild(phoneNumber);

  const emailAddress = document.createElement('li');
  emailAddress.textContent = "Email: info@satellitecafe.com";
  contactList.appendChild(emailAddress);

  contactInfo.appendChild(contactList);
  container.appendChild(contactInfo);

  const openingHours = document.createElement('div');
  openingHours.classList.add('contact');

  const ohHeading = document.createElement('h2');
  ohHeading.textContent = "Opening hours";
  openingHours.appendChild(ohHeading);

  const ohPara = document.createElement('p');
  ohPara.textContent = "Mon - Sun: 9 - 21";
  openingHours.appendChild(ohPara);

  container.appendChild(openingHours);
}