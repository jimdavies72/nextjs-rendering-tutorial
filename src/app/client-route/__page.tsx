'use client';

import { useTheme } from '@/components/themeProvider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientRoute = () => {
  
  const theme = useTheme();

  const settings = {
    dots: true,
  };

  return (
    <>
      <h1 style={{color: theme.colors.secondary}}>Client Route</h1>
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <img src="https://picsum.photos/400/200" />
          </div>
          <div>
            <img src="https://picsum.photos/400/200" />
          </div>
          <div>
            <img src="https://picsum.photos/400/200" />
          </div>
          <div>
            <img src="https://picsum.photos/400/200" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ClientRoute;
