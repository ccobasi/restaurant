import Navigation from './nav';
import initPage from './initial';
import homePage from './home';
import contactPage from './contact';
import menuPage from './menu'
import aboutPage from './about'
import './main.css';

function html() {
  const link = document.querySelector("link[rel*='icon']")
    || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  document.getElementsByTagName('head')[0].appendChild(link);
  }

// const mainContent = document.getElementById('content');
const content = document.querySelector('.content');
content.append(initPage());

const mainContent = document.querySelector('.main-content');
// const mainContent = document.getElementById('content');
{/* <div class="intro">
<h1>The Best Noodle Spot in Town</h1>
<button type="button" class="cta-btn">Check our menu</button>
</div>`; */}
mainContent.append(homePage());
// mainContent.append(menuPage());
mainContent.append(html());

const menuContent = document.querySelector('.menu-page');
menuContent.append(menuPage());
menuContent.append(html());

const contactContent = document.querySelector('.contact-page');
contactContent.append(contactPage());
contactContent.append(html());

const nav = new Navigation();
const pages = document.querySelectorAll('.pages');
for (let i = 1; i < pages.length; i) {
  pages[i].classList.add('hide');
}

const hidePages = () => {
  for (let i = 0; i < pages.length; i) {
    pages[i].classList.add('hide');
  }
};

const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', () => {
  const menu = document.querySelector('.menu-page');
  hidePages();
  menu.classList.remove('hide');
});

nav.onClick((e) => {
  if (e.target.id === 'home') {
    const home = document.querySelector('.home-page');
    hidePages();
    home.classList.remove('hide');
  }

  if (e.target.id === 'contact') {
    const contact = document.querySelector('.contact-page');
    hidePages();
    contact.classList.remove('hide');
  }

  if (e.target.id === 'menu') {
    const menu = document.querySelector('.menu-page');
    hidePages();
    contact.classList.remove('hide');
  }
});

