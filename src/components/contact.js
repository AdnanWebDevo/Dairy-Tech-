import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section margin-bottom-huge" id='contact us'>  
      <div className="contact-heading">
        <h2 className='margin-bottom-big'>Contact Us</h2>
      </div>
      <div className="contact-container email margin-bottom-md"> 
        <h3  className='margin-bottom-sm'>Email</h3>
      </div> 
      <div className="contact-container whatsapp">
        <h3  className='margin-bottom-sm'>WhatsApp</h3>
        <p>Send us a message on WhatsApp at: <a href="https://wa.me/your-phone-number">0300 679 1000</a></p>
      </div> 
    </section>
  ); 
};

export default Contact; 
 