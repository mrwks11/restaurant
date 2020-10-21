const header = (body, content) => {
  // HEADER
  const header = document.createElement('header');
  body.insertBefore(header, content);

  // Navbar
  const navDiv = document.createElement('div');
  navDiv.classList.add('nav-bar');
  header.appendChild(navDiv);
  // Flag image
  const flagImage = document.createElement('img');
  flagImage.classList.add('flag-image');
  flagImage.setAttribute('src', 'images/thai-flag.png');
  navDiv.appendChild(flagImage);
  // Links list
  const navList = document.createElement('ul');
  navDiv.appendChild(navList);
  //Home link
  const homeTab = document.createElement('li');
  homeTab.innerText = 'HOME';
  homeTab.classList.add('tab', 'tab-home');
  navList.appendChild(homeTab);
  // Menu link
  const menuTab = document.createElement('li');
  menuTab.innerText = 'MENU';
  menuTab.classList.add('tab', 'tab-menu');
  navList.appendChild(menuTab);
  // Contact link
  const contactTab = document.createElement('li');
  contactTab.innerText = 'CONTACT';
  contactTab.classList.add('tab', 'tab-contact');
  navList.appendChild(contactTab);

  // Header image
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('header-image');
  header.appendChild(imageDiv);
}

export default header;
