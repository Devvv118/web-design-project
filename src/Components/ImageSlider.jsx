import { useRef } from "react";

import img1 from "/rimg1.png";
import img2 from "/rimg2.png";
import img3 from "/rimg3.png";
import img4 from "/rimg4.png";
import img5 from "/rimg5.png";
import img6 from "/cimg1.png";
import img7 from "/cimg2.png";
import img8 from "/cimg3.png";
import img9 from "/cimg4.png";
import img10 from "/cimg5.png";
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function ImageSlider() {
  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300, // pixels to move left
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300, // pixels to move right
      behavior: "smooth",
    });
  };

  return (
    <div className="slider-wrapper">
      <button className="arrow left" onClick={scrollLeft}>
        &#10094;
      </button>

      <div className="slider-container" ref={sliderRef}>
        {images.map((img, index) => (
          <div className="card" key={index}>
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={scrollRight}>
        &#10095;
      </button>
    </div>
  );
}
