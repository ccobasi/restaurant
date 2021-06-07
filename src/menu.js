export default function menuPage() {
  const menuDiv = document.createElement('DIV');
  menuDiv.className = 'pages menu-page';

  const html = `
           <div class="menu-item">
           <img src='/src/asset/chicken.jpg' alt="Chicken Noodles">
           <div class="item-details">
               <p class="item-name">Chicken Noodles</p>
               <p class="item-price">#950</p>
           </div>
          </div>

              <div class="menu-item">
                  <img src='/src/asset/beef.jpg' alt="Beef Noodle">
                  <div class="item-details">
                      <p class="item-name">Beef Noodle</p>
                      <p class="item-price">#950</p>
                  </div>
              </div>
              <div class="menu-item">
                  <img src='/src/asset/veggie.jpg' alt="Veggie Noodles">
                  <div class="item-details">
                      <p class="item-name">Veggie Noodles</p>
                      <p class="item-price">#1100</p>
                  </div>
              </div>
              <div class="menu-item">
                  <img src='/src/asset/Spicy.jpg'; alt="Spicy Noodles">
                  <div class="item-details">
                      <p class="item-name">Spicy Noodles</p>
                      <p class="item-price">#600</p>
                  </div>
              </div>
          </div>
          <p class="add-ons">With Softdrinks Add #400</p>
      `;

  menuDiv.insertAdjacentHTML('beforeend', html);

  return menuDiv;
}
