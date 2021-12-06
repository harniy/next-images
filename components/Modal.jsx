// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function Modal({ imageUrl, setIsModal, images }) {
  const style = {
    position: "fixed",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(3px) brightness(0.4)",
  };

  const currentImageId = images.findIndex((img) => img.contentUrl === imageUrl);

  return (
    <div style={style}>
      <Swiper navigation={true} className="mySwiper" loop={true} initialSlide={currentImageId}> 
        {images.map(({contentUrl}, id) => (
          <SwiperSlide key={id}>
            <img
              style={{ maxHeight: "90vh", maxWidth: "90vw" }}
              src={contentUrl}
              alt=""
              onClick={() => setIsModal(false)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
