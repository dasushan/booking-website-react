import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';

export default function SimpleSlider({images}) {
  var setting = {
    className: '',
    dots: true,
    swipeToSlide: true,

    infinit: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  
  return (
    
    <div className=''>
      <Slider {...setting} className="h-[10rem] w-[15rem]">
        {images.map((image) => {
            return(
                <img src={image} className='h-[10rem]'/>
            )
        })}
      </Slider>
    </div>
  );
}
