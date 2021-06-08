import './main.css';

function html() {
  const link = document.querySelector("link[rel*='icon']")
      || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  document.getElementsByTagName('head')[0].appendChild(link);
}

const homePage = (content) => {
  document.body.classList.remove('.main-content');
  document.body.classList.add('.main-content');

  content.innerHTML = '';

  const divElement = document.createElement('div');
  divElement.innerHTML = '<h1>The Best Noodle Spot in Town</h1><button type="button" class="cta-btn">Check our menu</button>';
  divElement.classList.add('.main-content');
  content.appendChild(divElement);
};

const clearPage = (content) => {
  document.body.classList.remove('.main-content');
  document.body.classList.add('main-bg');
  content.innerHTML = '';
};
const menuPage = (content) => {
  clearPage(content);
  content.appendChild(html());
};

const contactPage = (content) => {
  clearPage(content);
  content.appendChild(html());
};

export { homePage, contactPage, menuPage };
