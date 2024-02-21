import React from 'react';
import './Marquee.css';
import cognizantImage from '../Assets/cognizant.png';
import wiproImage from '../Assets/wipro.png';
import mindtreeImage from '../Assets/mindtree.png';
import ciscoImage from '../Assets/cisco.png';
import zohoImage from '../Assets/zoho.png';
import accentureImage from '../Assets/accenture.png';
import adobeImage from '../Assets/adobe.png';
import avasoftImage from '../Assets/avasoft.png';
import image1 from '../Assets/eurofins.png'
import image2 from '../Assets/food hub.png'
import image3 from '../Assets/Group 51.png'
import image4 from '../Assets/Group 52.png'
import image5 from '../Assets/Group 53.png'
import image6 from '../Assets/Group 54.png'
import image7 from '../Assets/Group 55.png'
import image8 from '../Assets/Group 56.png'
import image9 from '../Assets/Group 57.png'
import image10 from '../Assets/Group 58.png'
import image11 from '../Assets/Group 59 (1).png'
import image12 from '../Assets/Group 60 (1).png'
import image13 from '../Assets/Group 61 (1).png'
import image14 from '../Assets/Group 62 (1).png'
import image15 from '../Assets/Group 63 (1).png'
import image16 from '../Assets/Group 64 (1).png'
import image17 from '../Assets/high.png'
import image18 from '../Assets/intellect.png'
import image19 from '../Assets/kaar.png'
import image20 from '../Assets/kanini.png'
import image21 from '../Assets/lucid.png'


const MarqueeComponent = () => {
    return (
        <div className="marquee-container">
            
            <h2 className="marquee-heading" style={{fontSize:'3rem'}}>Our Reputable Recruiters</h2>
            <div className="marquee-content">
                <div className="marquee-item">
                    <img src={cognizantImage} alt="Cognizant" />
                </div>
                <div className="marquee-item">
                    <img src={wiproImage} alt="Wipro" />
                </div>
                <div className="marquee-item">
                    <img src={mindtreeImage} alt="Mindtree" />
                </div>
                <div className="marquee-item">
                    <img src={ciscoImage} alt="Cisco" />
                </div>
                <div className="marquee-item">
                    <img src={zohoImage} alt="Zoho" />
                </div>
                <div className="marquee-item">
                    <img src={accentureImage} alt="Accenture" />
                </div>
                <div className="marquee-item">
                    <img src={adobeImage} alt="Adobe" />
                </div>
                <div className="marquee-item">
                    <img src={avasoftImage} alt="Avasoft" />
                </div>
                <div className="marquee-item">
                    <img src={image1} alt="image1" />
                </div>
                <div className="marquee-item">
                    <img src={image2} alt="image2" />
                </div>
                <div className="marquee-item">
                    <img src={image3} alt="image3" />
                </div>
                <div className="marquee-item">
                    <img src={image4} alt="image4" />
                </div>
                <div className="marquee-item">
                    <img src={image5} alt="image5" />
                </div>
                <div className="marquee-item">
                    <img src={image6} alt="image6" />
                </div>
                <div className="marquee-item">
                    <img src={image7} alt="image7" />
                </div>
                <div className="marquee-item">
                    <img src={image8} alt="image8" />
                </div>
                <div className="marquee-item">
                    <img src={image9} alt="image9" />
                </div>
                <div className="marquee-item">
                    <img src={image10} alt="image10" />
                </div>
                <div className="marquee-item">
                    <img src={image11} alt="image11" />
                </div>
                <div className="marquee-item">
                    <img src={image12} alt="image12" />
                </div>
                <div className="marquee-item">
                    <img src={image13} alt="image13" />
                </div>
                <div className="marquee-item">
                    <img src={image14} alt="image14" />
                </div>
                <div className="marquee-item">
                    <img src={image15} alt="image15" />
                </div>
                <div className="marquee-item">
                    <img src={image16} alt="image16" />
                </div>
                
            </div>
        </div>
    );
};

export default MarqueeComponent;
