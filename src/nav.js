export default class Navigation {
  constructor() {
    this.home = document.getElementById('home');
    this.menu = document.getElementById('menu');
    this.contact = document.getElementById('contact');
  }

  onClick(cb) {
    [this.home, this.menu, this.contact].forEach((nav) => {
      nav.addEventListener('click', cb);
    });
  }
}
