import React, { useState, useEffect } from 'react';
import image01 from '../Assets/Chemistry1.jpg';
import image02 from '../Assets/Chemistry6.jpg';
import image03 from '../Assets/Computer centre1.jpg';
import image04 from '../Assets/Computer centre3.jpg';
import image05 from '../Assets/lab.jpeg';
import image06 from '../Assets/lab.jpg';
import image07 from '../Assets/Physics1.jpg';


const NewSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0); 
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 7);
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
    width:"50%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '5vh'
  };

  const imageStyle = {
    width: 'auto', 
    height: 'auto',
    borderRadius: '10px', 
    transition: 'opacity 1s ease-in-out', 
    opacity: imageOpacity, 
  };

  return (
    <div style={containerStyle}>

      <img
        src={getImageName(imageIndex)}
        alt={`Image ${imageIndex}`}
        style={imageStyle}
      />
    </div>
  );
};

export default NewSlider;