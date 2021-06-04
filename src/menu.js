export default function menuPage() {
    const menuDiv = document.createElement('DIV');
    menuDiv.className = 'pages menu-page';
  
    const html = `
           <div class="menu-item">
           <img src='/src/asset/chicken.jpg' alt="Red Burger">
           <div class="item-details">
               <p class="item-name">Red Burger</p>
               <p class="item-price">$5</p>
           </div>
          </div>
          
              <div class="menu-item">
                  <img src='/src/asset/beef.jpg' alt="Red Burger">
                  <div class="item-details">
                      <p class="item-name">Red Burger</p>
                      <p class="item-price">$5</p>
                  </div>
              </div>
              <div class="menu-item">
                  <img src='/src/asset/veggie.jpg' alt="Very Thicc Burger">
                  <div class="item-details">
                      <p class="item-name">Very Thicc Burger</p>
                      <p class="item-price">$7</p>
                  </div>
              </div>
              <div class="menu-item">
                  <img src='/src/asset/Spicy.jpg'; alt="Thicc Fries">
                  <div class="item-details">
                      <p class="item-name">Thicc Fries</p>
                      <p class="item-price">$3</p>
                  </div>
              </div>
          </div>
          <p class="add-ons">With Softdrinks Add $2</p>
      `;
  
    menuDiv.insertAdjacentHTML('beforeend', html);
  
    return menuDiv;
  }
