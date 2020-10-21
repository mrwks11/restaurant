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
// Load Home
home(content);

// EVENT: Click HOME
homeTab.addEventListener('click', home(content));
// EVENT: Click MENU
menuTab.addEventListener('click', menu(content));
// EVENT: Click CONTACT
contactTab.addEventListener('click', contact(content));