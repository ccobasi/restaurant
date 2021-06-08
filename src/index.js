import { homePage, contactPage, menuPage } from './app';

const content = document.querySelector('#content');

homePage(content);

const render = (content, e) => {
  const clickedItem = e.target.innerHTML;

  if (clickedItem === 'CONTACT US') {
    contactPage(content);
    // eslint-disable-next-line no-use-before-define
    handleClick();
  } else if (clickedItem === 'MENU') {
    menuPage(content);
    // eslint-disable-next-line no-use-before-define
    handleClick();
  } else {
    homePage(content);
    // eslint-disable-next-line no-use-before-define
    handleClick();
  }
};

const handleClick = () => {
  document
    .getElementById('menu-list')
    .addEventListener('click', (e) => render(content, e));
};

handleClick();
