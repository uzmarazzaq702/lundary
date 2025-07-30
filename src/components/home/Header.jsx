import React, { useEffect, useRef, useState } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import eco1 from "../../assets/eco.jpg";
import uzma2 from "../../assets/uzma2.jpg";
import collection from "../../assets/collection.jpg";

const images = [eco1, uzma2, collection];

const slideContent = [
  {
    title: "Premium Garment Care",
    subtitle: "Sustainable methods without compromising quality",
    button: "Schedule Pickup"
  },
  {
    title: "Expert Fabric Treatment",
    subtitle: "Sustainable methods without compromising quality",
    button: "Schedule Pickup"
  },
  {
    title: "Eco-Friendly Solutions",
    subtitle: "Sustainable methods without compromising quality",
    button: "Schedule Pickup"
  }
];

const Header = () => {
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
      className="relative w-full h-[90vh] min-h-[600px] bg-cover bg-center flex items-center justify-start overflow-hidden px-4 sm:px-6 lg:px-10 text-white"
      style={{ backgroundImage: `url(${currentBg})` }}
    >
      {/* Hidden Slider */}
      <div className="absolute hidden" ref={sliderRef}>
        {images.map((img, index) => (
          <div key={index} className="w-full">
            <img src={img} alt={`bg-${index}`} />
          </div>
        ))}
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-[#00000085] z-0"></div>

      {/* Navigation Buttons */}
      <button
        onClick={goPrev}
        className="absolute sm:left-4 h-10 w-10 sm:h-12 sm:w-12 top-1/2 transform -translate-y-1/2 z-30 bg-black text-[#D4AF37] p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goNext}
        className="absolute right-4 sm:right-6 h-10 w-10 sm:h-12 sm:w-12 top-1/2 transform -translate-y-1/2 z-30 bg-black text-[#D4AF37] p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Styling */}
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
      <div className="relative z-10 max-w-[95%] sm:max-w-xl ml-2 sm:ml-6 md:ml-10 lg:ml-16">
        <h2 className="whitespace-nowrap text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 max-w-full">
          {slideContent[currentSlide].title}
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#D4AF37] mb-6 sm:mb-8">
          {slideContent[currentSlide].subtitle}
        </p>

        <button
          type="button"
          className="bg-[#D4AF37] hover:bg-[#c9a227] text-[#1C1C1C] px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-300"
        >
          {slideContent[currentSlide].button}
        </button>
      </div>
    </div>
  );
};

export default Header;
