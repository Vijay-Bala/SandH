import React, { useState, useEffect } from 'react';
import image01 from '../Assets/Chemistry1.jpg';
import image02 from '../Assets/Chemistry6.jpg';
import image03 from '../Assets/Computer centre1.jpg';
import image04 from '../Assets/Computer centre3.jpg';
import image05 from '../Assets/lab.jpeg';
import image06 from '../Assets/lab.jpg';
import image07 from '../Assets/Physics1.jpg';

const Testimonial = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const imageDetails = [
    "Details about image 01",
    "Details about image 02",
    "Details about image 03",
    "Details about image 04",
    "Details about image 05",
    "Details about image 06",
    "Details about image 07",
    "Details about image 08",
    "Details about image 09",
    "Details about image 10",
    "Details about image 11",
    "Details about image 12",
    "Details about image 13",
    "Details about image 14"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 11);
        setImageOpacity(1);
      }, 1500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const getImageName = (index) => {
    const images = [image06,image05,  image02, image03,image01,image07,image04];
    return images[index];
  };

  const containerStyle = {
    position:"relative",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height:'auto',
    marginTop: '5vh',
  };

  const imageStyle = {
    width: '50%', 
    height: 'auto',
    borderRadius: '10px',
    transition: 'opacity 1s ease-in-out', 
    opacity: imageOpacity, 
    marginTop: '5vh'
  };

  const detailsStyle = {
    position:"absolute",
    bottom:0,
    left:"25%",
    width:"50%",
    marginTop: '10px',
    backgroundColor:"black",
    color:"white",
    
    height:"5%"
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '3rem', marginTop: '7vh', background: 'linear-gradient(black, blue)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent', }}>Testimonials</h2>
      <img
        src={getImageName(imageIndex)}
        alt={`Image ${imageIndex}`}
        style={imageStyle}
      />
      <div style={detailsStyle}>
        <p style={{backgroundColor:"black",padding:"7px 7px",}}>{imageDetails[imageIndex]}</p>
      </div>
    </div>
  );
};

export default Testimonial;