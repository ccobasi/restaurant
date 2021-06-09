export default function initPage() {
  const container = document.createElement('DIV');
  container.className = 'container';

  const html = `
  
    
      <ul class="navbar">
          <li class="link" id="home">Home</li>          
          <li class="link" id="menu">Menu</li>
          <li class="link" id="contact">Contact</li>    
      </ul>
      
      <div class="main-content"></div>
      `;
  container.insertAdjacentHTML('beforeend', html);
  return container;
}