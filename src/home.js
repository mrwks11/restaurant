const home = (content) => {
  content.innerHTML = `
    <h1>Welcome to Tonsai Thai restaurant</h1>
    <p>Since 1998 you can find Tonsai Thai Restaurant on the “Zeedijk” in Amsterdam. <strong>Authenticity and quality assured.</strong></p>
    <p>As soon as you enter our restaurant, you will experience the typical Thai atmosphere. The staff, the design and the food of course will take care of that.</p>
    <p>Our restaurant has 110 chairs divided over 3 seperate spaces. If you don’t succeed in getting a table right away, you can start with a drink at the bar.</p>
    <p>In the kitchen our Thai cooks are working only with fresh ingredients. Our specialities are the red and green curry sauces that can be combined with fish, prawns, beef, chicken or pork. In the Thai kitchen vegetables take a prominent place. That is why we have a great variety of vegetarian starters and main dishes.</p>
  `;
  content.classList.add('content');
}

export default home;