import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    bottom: 0,
    marginLeft: '-7.5vw',
    width: '100vw', 
  };

  return (
    <footer style={footerStyle}>
      All rights reserved St. Joseph's College of Engineering | Design by <a href='https://linkedin.com/in/saii-varun-m-r-9b6178227/' target='_blank' style={{color: 'white'}}>SAII VARUN M R</a>
    </footer>
  );
}

export default Footer;
