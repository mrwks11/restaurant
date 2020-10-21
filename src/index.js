import home from './home'
import header from './header'
import menu from './menu'
import contact from './contact'

// Select Body
const body = document.querySelector('body');
// Select Content Div
const content = document.getElementById('content');

// Load Header
header(body, content);
// Load Home Content
home(content);

// Select Link Tabs
const tabs = document.querySelectorAll('.tab-list-item');

// Event: Click Tab
tabs.forEach(tab => {
  tab.addEventListener('click', switchTabs)
});

// Switch Tabs
function switchTabs(e) {
  if (e.target.innerText === 'HOME') {
    home(content);
  } 
  if (e.target.innerText === 'MENU') {
    menu(content);
  } 
  if (e.target.innerText === 'CONTACT') {
    contact(content);
  }
}