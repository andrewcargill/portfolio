import React from 'react';

function ContactForm() {
  return (
    <form action="https://getform.io/f/c7f89d82-c481-426a-9b60-c524882c0e66" method="POST" data-getform-success-url="https://www.ggoogle.com">
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="text" name="message" />
      <input type="hidden" name="_gotcha" style={{ display: 'none !important' }} />

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
