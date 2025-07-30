import React, { useEffect, useRef, useState } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import eco1 from "../../../assets/eco1.jpg";
import uzma2 from "../../../assets/uzma2.jpg";
import collection from "../../../assets/collection.jpg";

const images = [eco1, uzma2, collection];

const slideContent = [
  {
    title: "Contact Akoya Laundry",
    subtitle: "Sustainable methods without compromising quality",
    button: "Schedule Pickup"
  },
  {
    title: "Professional Care",
    subtitle: "Sustainable methods without compromising quality",
    button: "Schedule Pickup"
  },
  {
    title: "Eco-Friendly Solutions",
    subtitle: "Sustainable methods without compromising quality",
    button: "Schedule Pickup"
  }
];

const Contact2 = () => {
  const [currentBg, setCurrentBg] = useState(images[0]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const flickityInstance = useRef(null);

  useEffect(() => {
    flickityInstance.current = new Flickity(sliderRef.current, {
      cellAlign: "left",
      contain: true,
      autoPlay: 2500,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: true,
      draggable: false,
    });

    flickityInstance.current.on("change", (index) => {
      setCurrentBg(images[index]);
      setCurrentSlide(index);
    });

    return () => {
      flickityInstance.current?.destroy();
    };
  }, []);

  const goPrev = () => {
    flickityInstance.current?.previous();
  };

  const goNext = () => {
    flickityInstance.current?.next();
  };

  return (
    <div
      className="relative w-full h-[90vh] min-h-[600px] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-10 text-white"
      style={{ backgroundImage: `url(${currentBg})` }}
    >
      {/* Slider for background change */}
      <div ref={sliderRef} className="absolute inset-0 w-full h-full opacity-0 pointer-events-none">
        {images.map((img, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={img}
              alt={`bg-${index}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000085] bg-opacity-40"></div>

      {/* Left arrow */}
      <button
        onClick={goPrev}
        className="absolute sm:left-4 h-12 w-12 top-1/2 transform -translate-y-1/2 z-30 bg-black text-[#D4AF37] p-2 rounded-full transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right arrow */}
      <button
        onClick={goNext}
        className="absolute right-4 sm:right-6 h-12 w-12 top-1/2 transform -translate-y-1/2 z-30 bg-black text-[#D4AF37] p-2 rounded-full transition"
      >
        <ChevronRight size={30} />
      </button>

      {/* Custom Flickity dots styling */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <style dangerouslySetInnerHTML={{
          __html: `
            .flickity-page-dots {
              display: flex !important;
              justify-content: center;
              gap: 10px;
              position: static !important;
            }
            .flickity-page-dots .dot {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: white;
              opacity: 0.5;
              transition: all 0.3s ease;
              cursor: pointer;
            }
            .flickity-page-dots .dot.is-selected {
              background: #D4AF37;
              opacity: 1;
            }
          `
        }} />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div
          className="text-center max-w-[90%] sm:max-w-xl"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 break-words max-w-full">
            {slideContent[currentSlide].title}
          </h2>

          <p className="text-base sm:text-lg md:text-2xl text-[#D4AF37] mb-8 break-words max-w-full">
            {slideContent[currentSlide].subtitle}
          </p>

          <button
            type="button"
            className="bg-[#D4AF37] hover:bg-[#c9a227] text-[#1C1C1C] px-5 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium transition-colors duration-300"
          >
            {slideContent[currentSlide].button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
