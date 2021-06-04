export default function menuPage() {
    const homeDiv = document.createElement('DIV');
    homeDiv.className = 'pages menu-page';
  
    const html = `
      <div class="intro">
      <h1>The Best Noodle Spot in Town</h1>
      <button type="button" class="cta-btn">Check our menu</button>
      </div>
      `;
    homeDiv.insertAdjacentHTML('beforeend', html);
  
    return homeDiv;
  }

