const contact = (content) => {
  content.innerHTML = `
    <h4>Reservations</h4>
    <p>Unfortunately, placing reservations is not possible. If the restaurant is full when you arrive, you can wait for a table at the bar. This usually takes no longer than 10 minutes.</p>
    <h4>How to reach us</h4>
    <p>By car: See our location using this hyperlink – <a href="https://www.google.com/maps/place/Bird+Thai+Restaurant/@52.3745912,4.8982634,17z/data=!3m1!4b1!4m5!3m4!1s0x47c609b9a0956a53:0x479826d3b4a0c907!8m2!3d52.3745879!4d4.9004521" target="_blank">map</a>.</p>
    <p>Public transport: Tonsai is located at a walking distance of the Central Station (see location). For information about public transport take a look at <a href="https://9292ov.nl" target="_blank">9292ov.nl</a>.</p>
    
    <h1>Contact Us</h1>
    <form class="contact-form">
      <label for"name">Name</label>
      <input type="text" id="name" placeholder="Your name here...">
      <label for"email">Email</label>
      <input type="text" id="email" placeholder="Your email address here...">
      <label for"phone">Phone</label>
      <input type="text" id="phone" placeholder="Your phone number here...">
      <label for "message">Message</label>
      <input type="textarea" style="height: 200px; width: 400px;" id="message" placeholder="Your message here...">
      <input type="submit" value="Submit">
    </form>
  `;
  content.classList.add('content');
}

export default contact;