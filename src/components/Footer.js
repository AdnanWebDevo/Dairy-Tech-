import React from 'react';

const Footer = () => {
  return (
    <footer className='footer '>

      <div className='max-width-12'> 
        <div className='footer-content'> 

        <div className="footer-column footer-col-desc">
        <h1 className="logo footer_logo">Dairy Tech</h1>
        <p className='paragraph-text'>A proprietary manufacturing firm is serving livestock farmers with balanced compound animals feeds since 2021.</p>
        </div>

      <div className="footer-column">
        <h2 className='footer_heading'>Website Links</h2>
        <ul className='footer_list'>
          <li className='footer_item'><a href="#" className='footer_link'>Home</a></li>
          <li className='footer_item'><a href="#" className='footer_link'>Products</a></li>
          <li className='footer_item'><a href="#" className='footer_link'>Services</a></li>
          <li className='footer_item'><a href="#" className='footer_link'>About Us</a></li>
          <li className='footer_item'><a href="#" className='footer_link'>Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h2 className='footer_heading'>Social Links</h2>
        <ul className='footer_list'>
          <li className='footer_item'><a href="https://www.facebook.com/profile.php?id=100094078684048" target="_blank" className='footer_link'> Facebook </a> </li>
          <li className='footer_item'><a href="https://www.instagram.com/dairytech198/" target="_blank" className='footer_link'> Instagram </a> </li>
          <li className='footer_item'><a href="https://twitter.com/DairyTechX" target="_blank" className='footer_link'> Twitter </a> </li>
          <li className='footer_item'><a href="https://www.linkedin.com/in/dairy-tech-514725289/" target="_blank" className='footer_link'> Linked In </a></li>
        </ul>
      </div> 

        </div> 
      </div>
      <h6 className='footer-copyright'>All Rights Reserved Dairy Tech </h6>
    </footer>
  );
};

export default Footer;
