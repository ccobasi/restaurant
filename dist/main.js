(()=>{"use strict";document.querySelector(".content").append(function(){const n=document.createElement("DIV");return n.className="container",n.insertAdjacentHTML("beforeend",'\n  \n      \n      <ul class="navbar">\n          <li class="link" id="home">Home</li>      \n          <li class="link" id="about">About</li>     \n          <li class="link" id="menu">Menu</li>\n          <li class="link" id="contact">Contact</li>    \n      </ul>\n      \n      <div class="main-content"></div>\n      '),n}());const n=document.querySelector(".main-content");n.append(function(){const n=document.createElement("DIV");return n.className="pages home-page",n.insertAdjacentHTML("beforeend",'\n      <div class="intro">\n      <h1>The Best Noodle Spot in Town</h1>\n      <button type="button" class="cta-btn">Check our menu</button>\n      </div>\n      '),n}()),n.append(function(){const n=document.querySelector("link[rel*='icon']")||document.createElement("link");n.type="image/x-icon",n.rel="shortcut icon",document.getElementsByTagName("head")[0].appendChild(n)}())})();