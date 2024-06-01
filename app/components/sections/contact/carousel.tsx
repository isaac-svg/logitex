import React, { useEffect, useState, useRef } from 'react';
import 'tailwindcss/tailwind.css';

const images = [
  '/assets/about/creativa.svg',
  '/assets/about/creativa.svg',
  '/assets/about/creativa.svg',
  '/assets/about/creativa.svg',
  '/assets/about/creativa.svg',

  //   'https://via.placeholder.com/600x400?text=Slide+2',
  //   'https://via.placeholder.com/600x400?text=Slide+3',
  //   'https://via.placeholder.com/600x400?text=Slide+4',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full  mx-auto overflow-hidden border-b border-[1px] border-[rgba(255, 255, 255, .2)] pb-[60px]">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-52 h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2"></div>
    </div>
  );
};

export default Carousel;
