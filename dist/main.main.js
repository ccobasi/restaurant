(()=>{"use strict";var n={150:(n,r,e)=>{e.d(r,{Z:()=>d});var t=e(645),o=e.n(t),i=e(667),a=e.n(i),c=e(4),s=o()((function(n){return n[1]}));s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap);"]);var l=a()(c);s.push([n.id,':root {\r\n  --dark: #1a2026;\r\n  --light-yellow: #f2b705;\r\n  --orange: #f29f05;\r\n  --brown: #bf5b04;\r\n  --red: #bf2806;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: "Poppins", sans-serif;\r\n  background-color: var(--light-yellow);\r\n  height: 100vh;\r\n}\r\n\r\nh1 {\r\n  color: white;\r\n  font-weight: 500;\r\n  font-size: 48px;\r\n  width: 450px;\r\n  text-align: center;\r\n}\r\n\r\n.logo {\r\n  height: 178px;\r\n  width: 200px;\r\n  cursor: pointer;\r\n}\r\n\r\n.content {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.container {\r\n  width: 1360px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.navbar {\r\n  height: 50px;\r\n  width: 100%;\r\n  background: var(--dark);\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.link {\r\n  flex: 1;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--orange);\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  font-size: 24px;\r\n}\r\n\r\n.link:hover {\r\n  background: var(--red);\r\n}\r\n\r\n.main-content {\r\n  height: 100%;\r\n  width: 100%;\r\n  background: var(--light-yellow);\r\n  position: relative;\r\n}\r\n\r\n/* Home page */\r\n.home-page {\r\n  height: 800px;\r\n  width: 100%;\r\n  background-image: url('+l+");\r\n  background-size: cover;\r\n  position: absolute;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.intro {\r\n  position: absolute;\r\n  top: 260px;\r\n  left: 126px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 25px;\r\n}\r\n\r\n.cta-btn {\r\n  padding: 15px 25px;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  border: 2px solid var(--orange);\r\n  border-radius: 15px;\r\n  background-color: var(--orange);\r\n  color: var(--dark);\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.cta-btn:hover {\r\n  border: 2px solid var(--orange);\r\n  background: transparent;\r\n  color: var(--orange);\r\n}\r\n\r\n/* About page */\r\n.about-page {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.about-page img {\r\n  margin-top: 103px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.about-content {\r\n  margin-top: 103px;\r\n  padding: 0 10px 0 10px;\r\n  width: 665px;\r\n}\r\n\r\n.about-title {\r\n  font-size: 48px;\r\n}\r\n\r\n.about-text {\r\n  font-size: 18px;\r\n  line-height: 2rem;\r\n}\r\n\r\n/* Menu Page */\r\n.menu-page {\r\n  background-color: var(--dark);\r\n  width: 100%;\r\n  position: absolute;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  color: white;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.menu-items {\r\n  margin-top: 50px;\r\n  width: 80%;\r\n  height: 90%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.menu-item {\r\n  display: flex;\r\n  height: 250px;\r\n  width: 490px;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  margin: 20px 6px;\r\n}\r\n\r\n.item-details {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 180px;\r\n}\r\n\r\n.item-name {\r\n  font-size: 24px;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.item-price {\r\n  font-size: 48px;\r\n  color: var(--orange);\r\n}\r\n\r\n.add-ons {\r\n  margin-top: 50px;\r\n  margin-bottom: 20px;\r\n  font-size: 24px;\r\n}\r\n\r\n/* Contact page */\r\n\r\n.contact-page {\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.contact-container {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\niframe {\r\n  flex: 1;\r\n}\r\n\r\n.contact-details {\r\n  margin-top: 20px;\r\n  height: 400px;\r\n  width: 350px;\r\n}\r\n\r\n.contact-title {\r\n  font-size: 48px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.contact-text {\r\n  font-size: 18px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.contact-details img {\r\n  cursor: pointer;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .intro {\r\n    position: initial;\r\n    margin-top: 100px;\r\n  }\r\n\r\n  h1 {\r\n    width: 100%;\r\n  }\r\n\r\n  .menu-items {\r\n    width: 100%;\r\n  }\r\n\r\n  .menu-item {\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .item-details {\r\n    margin-top: 20px;\r\n  }\r\n}\r\n",""]);const d=s},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,r,e)=>{var t,o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function a(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function c(n,r){for(var e={},t=[],o=0;o<n.length;o++){var c=n[o],s=r.base?c[0]+r.base:c[0],l=e[s]||0,d="".concat(s," ").concat(l);e[s]=l+1;var u=a(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:f(p,r),references:1}),t.push(d)}return t}function s(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var l,d=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function u(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=d(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function p(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var m=null,h=0;function f(n,r){var e,t,o;if(r.singleton){var i=h++;e=m||(m=s(r)),t=u.bind(null,e,i,!1),o=u.bind(null,e,i,!0)}else e=s(r),t=p.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=a(e[t]);i[o].references--}for(var s=c(n,r),l=0;l<e.length;l++){var d=a(e[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}e=s}}}},4:(n,r,e)=>{n.exports=e.p+"95e334bb3f6ae9008ff2.jpg"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=e(379),r=e.n(n),t=e(150);r()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,document.querySelector(".content").append(function(){const n=document.createElement("DIV");return n.className="container",n.insertAdjacentHTML("beforeend",'\n  \n      \n      <ul class="navbar">\n          <li class="link" id="home">Home</li>      \n          <li class="link" id="about">About</li>     \n          <li class="link" id="menu">Menu</li>\n          <li class="link" id="contact">Contact</li>    \n      </ul>\n      \n      <div class="main-content"></div>\n      '),n}());const o=document.querySelector(".main-content");o.append(function(){const n=document.createElement("DIV");return n.className="pages home-page",n.insertAdjacentHTML("beforeend",'\n      <div class="intro">\n      <h1>The Best Noodle Spot in Town</h1>\n      <button type="button" class="cta-btn">Check our menu</button>\n      </div>\n      '),n}()),o.append(function(){const n=document.createElement("DIV");return n.className="pages home-page",n.insertAdjacentHTML("beforeend",'\n      <div class="intro">\n      <h1>The Best Noodle Spot in Town</h1>\n      <button type="button" class="cta-btn">Check our menu</button>\n      </div>\n      '),n}()),o.append(function(){const n=document.querySelector("link[rel*='icon']")||document.createElement("link");n.type="image/x-icon",n.rel="shortcut icon",document.getElementsByTagName("head")[0].appendChild(n)}()),new class{constructor(){this.home=document.getElementById("home"),this.about=document.getElementById("about"),this.menu=document.getElementById("menu"),this.contact=document.getElementById("contact")}onClick(n){[this.home,this.about,this.menu,this.contact].forEach((r=>{r.addEventListener("click",n)}))}};const i=document.querySelectorAll(".pages");for(let n=1;n<i.length;n)i[n].classList.add("hide");const a=()=>{for(let n=0;n<i.length;n)i[n].classList.add("hide")};document.querySelector(".cta-btn").addEventListener("click",(()=>{const n=document.querySelector(".menu-page");a(),n.classList.remove("hide")})),document.querySelector(".logo").addEventListener("click",(()=>{const n=document.querySelector(".home-page");a(),n.classList.remove("hide")}))})()})();