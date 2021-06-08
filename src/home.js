// eslint-disable-next-line import/prefer-default-export
export const homePage = () => {
  const homeDiv = document.createElement('DIV');
  homeDiv.className = 'pages home-page';

  const html = `
    
      <div class="intro">
      <h1>The Best Noodle Spot in Town</h1>
      <button type="button" class="cta-btn">Check our menu</button>
      </div>
      `;
  homeDiv.insertAdjacentHTML('beforeend', html);

  return homeDiv;
};
