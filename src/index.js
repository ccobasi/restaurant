import initPage from './initial';
import homePage from './home';

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