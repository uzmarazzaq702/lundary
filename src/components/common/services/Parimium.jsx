import React, { useEffect, useRef, useState } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import pCollection from "../../../assets/pCollection.jpg";
import eco1 from "../../../assets/eco1.jpg";
import uzma7 from "../../../assets/uzma7.jpg";

const images = [pCollection, eco1, uzma7];

const slideContent = [
  {
    title: "Premium Garment Care",
    subtitle: "Experience the Akoya difference",
    button: "Book a Collection",
  },
  {
    title: "Luxury Laundry Services",
    subtitle: "For the most discerning clients",
    button: "Book a Collection",
  },
  {
    title: "Precision Fabric Care",
    subtitle: "Tailored to your garment's needs",
    button: "Book a Collection",
  },
];

const Parimium = () => {
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

  const goPrev = () => flickityInstance.current?.previous();
  const goNext = () => flickityInstance.current?.next();

  return (
    <div
      className="relative w-full h-[90vh] min-h-[600px] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${currentBg})` }}
    >
      {/* Flickity hidden images */}
      <div className="hidden" ref={sliderRef}>
        {images.map((img, index) => (
          <div key={index} className="w-full">
            <img src={img} alt={`bg-${index}`} />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000085] z-0" />

      {/* Navigation Buttons */}
      <button
        onClick={goPrev}
        className="absolute left-3 sm:left-6 h-10 w-10 sm:h-12 sm:w-12 top-1/2 transform -translate-y-1/2 z-30 bg-black text-[#D4AF37] p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goNext}
        className="absolute right-3 sm:right-6 h-10 w-10 sm:h-12 sm:w-12 top-1/2 transform -translate-y-1/2 z-30 bg-black text-[#D4AF37] p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Flickity Page Dots Styling */}
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

      {/* Centered Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
        <div className="text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            {slideContent[currentSlide].title}
          </h2>

          <div className="flex items-center justify-center mb-8">
            <div className="bg-[#D4AF37] h-0.5 w-12 sm:w-16"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-[#D4AF37] mx-4 sm:mx-6">
              {slideContent[currentSlide].subtitle}
            </p>
            <div className="bg-[#D4AF37] h-0.5 w-12 sm:w-16"></div>
          </div>

          <button
            type="button"
            className="bg-[#D4AF37] hover:bg-[#c9a227] text-[#1C1C1C] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium transition-colors duration-300"
          >
            {slideContent[currentSlide].button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parimium;
