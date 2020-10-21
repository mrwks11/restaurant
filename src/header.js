const header = (body, content) => {
  const headerElement = document.createElement('header');
  headerElement.innerHTML = `
    <img src="images/thai-flag.png" class="flag-image" alt="thai-flag"></img>
    <nav>
      <ul class="tab-list">
        <li class="tab-list-item">HOME</li>
        <li class="tab-list-item">MENU</li>
        <li class="tab-list-item">CONTACT</li>
      </ul>
    </nav>
    <div class="header-image"></div>
  `;
  body.insertBefore(headerElement, content);
}

export default header;
