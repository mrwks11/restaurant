(()=>{"use strict";const e=e=>{e.innerHTML="\n  <h1>Welcome to Tonsai Thai restaurant</h1>\n  <p>Since 1998 you can find Tonsai Thai Restaurant on the “Zeedijk” in Amsterdam. Authenticity and quality assured.</p>\n  <p>As soon as you enter our restaurant, you will experience the typical Thai atmosphere. The staff, the design and the food of course will take care of that.</p>\n  <p>Our restaurant has 110 chairs divided over 3 seperate spaces. If you don’t succeed in getting a table right away, you can start with a drink at the bar.</p>\n  <p>In the kitchen our Thai cooks are working only with fresh ingredients. Our specialities are the red and green curry sauces that can be combined with fish, prawns, beef, chicken or pork. In the Thai kitchen vegetables take a prominent place. That is why we have a great variety of vegetarian starters and main dishes.</p>\n  ",e.classList.add("content")},a=document.querySelector("body"),n=document.getElementById("content");((e,a)=>{const n=document.createElement("header");e.insertBefore(n,a);const t=document.createElement("div");t.classList.add("nav-bar"),n.appendChild(t);const s=document.createElement("img");s.classList.add("flag-image"),s.setAttribute("src","images/thai-flag.png"),t.appendChild(s);const i=document.createElement("ul");t.appendChild(i);const c=document.createElement("li");c.innerText="HOME",c.classList.add("tab","tab-home"),i.appendChild(c);const d=document.createElement("li");d.innerText="MENU",d.classList.add("tab","tab-menu"),i.appendChild(d);const r=document.createElement("li");r.innerText="CONTACT",r.classList.add("tab","tab-contact"),i.appendChild(r);const h=document.createElement("div");h.classList.add("header-image"),n.appendChild(h)})(a,n),e(n),homeTab.addEventListener("click",e(n)),menuTab.addEventListener("click",(e=>{e.innerHTML='\n  <h1>Tonsai menu</h1>\n  <div class="menu">\n    <div class="menu-item">\n      <img class="dishes" src="images/som-tum.jpg">\n      <h5>Som Tum</h5>\n      <h4 class="price">4.90$</h4>\n    </div>\n    <div class="menu-item">\n      <img class="dishes" src="images/pad-thai.jpg">\n      <h5>Pad Thai</h5>\n      <h4 class="price ">6.90$</h4>\n    </div>\n    <div class="menu-item">\n      <img class="dishes" src="images/khao-pad.jpg">\n      <h5>Khao Pad</h5>\n      <h4 class="price">7.90$</h4>\n    </div>\n    <div class="menu-item">\n      <img class="dishes" src="images/tom-yum.jpg">\n      <h5>Tom Yum</h5>\n      <h4 class="price">8.90$</h4>\n    </div>\n  </div>\n  ',e.classList.add("content")})(n)),contactTab.addEventListener("click",(e=>{e.innerHTML='\n  <h1>Contact Us</h1>\n  <form id="contact-form">\n    <label for"name">Name</label>\n    <input type="text" id="name" placeholder="Your name here...">\n    <label for "message">Message</label>\n    <input type="textarea" style="height: 200px;" id="message" placeholder="Your message here...">\n    <input type="submit" value="Submit">\n  </form>\n  ',e.classList.add("content")})(n))})();