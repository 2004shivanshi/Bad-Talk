import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slide.css'; // Import your custom CSS file

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';

const Slide = () => {
  const data = [
    { Name: 'Bharat Khatwani', img: image1 },
    { Name: 'Bharat', img: image2 },
    { Name: 'Bharat', img: image3 },
    { Name: 'Bharat', img: image4 },
    { Name: 'Bharat', img: image5 },
    { Name: 'Bharat', img: image6 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div>
      <h1 className='heading'>Our Team</h1>
      <div>
        {/* Tech Team Section */}
        <div className='card'>
          <h2 className="team-heading tech-team-heading">Tech Team</h2>
          <div className='inside'>
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} className='custom-card'>
                  <div className='custom-image-container'>
                    <img src={d.img} alt={d.Name} className='custom-image' />
                  </div>
                  <div className='additional-content'>
                    <p>{d.Name}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Management Team Section */}
        <div className='card'>
          <h2 className="team-heading">Management Team</h2>
          <div className='inside'>
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} className='custom-card'>
                  <div className='custom-image-container'>
                    <img src={d.img} alt={d.Name} className='custom-image' />
                  </div>
                  <div className='additional-content'>
                    <p>{d.Name}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Slide;
