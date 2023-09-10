import React, { useState } from 'react';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(true); 

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    <div className={`hamburger ${isOpen ? 'active' : ''}`}>
      <div className="bar bar-1"></div>
      <div className="bar bar-2"></div>
      <div className="bar bar-3"></div>
    </div>
  ); 
};

export default Hamburger;
 