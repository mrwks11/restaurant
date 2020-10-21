const contact = (content) => {
  content.innerHTML = `
  <h1>Contact Us</h1>
  <form id="contact-form">
    <label for"name">Name</label>
    <input type="text" id="name" placeholder="Your name here...">
    <label for "message">Message</label>
    <input type="textarea" style="height: 200px;" id="message" placeholder="Your message here...">
    <input type="submit" value="Submit">
  </form>
  `;
  content.classList.add('content');
}

export default contact;