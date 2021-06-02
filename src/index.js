import Navigation from './nav';
import initPage from './initial';
import homePage from './home';
import './main.css';

function html() {
    const link = document.querySelector("link[rel*='icon']")
      || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  
  const content = document.querySelector('.content');
  content.append(initPage());

  const mainContent = document.querySelector('.main-content');
  mainContent.append(homePage());
  mainContent.append(html());

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

const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
  const home = document.querySelector('.home-page');
  hidePages();
  home.classList.remove('hide');
});