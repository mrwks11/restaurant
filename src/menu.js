const menu = (content) => {
  content.innerHTML = `
  <h1>Tonsai menu</h1>
  <div class="menu">
    <div class="menu-item">
      <img class="dishes" src="images/som-tum.jpg">
      <h5>Som Tum</h5>
      <h4 class="price">4.90$</h4>
    </div>
    <div class="menu-item">
      <img class="dishes" src="images/pad-thai.jpg">
      <h5>Pad Thai</h5>
      <h4 class="price ">6.90$</h4>
    </div>
    <div class="menu-item">
      <img class="dishes" src="images/khao-pad.jpg">
      <h5>Khao Pad</h5>
      <h4 class="price">7.90$</h4>
    </div>
    <div class="menu-item">
      <img class="dishes" src="images/tom-yum.jpg">
      <h5>Tom Yum</h5>
      <h4 class="price">8.90$</h4>
    </div>
  </div>
  `
  content.classList.add('content');
}

export default menu;