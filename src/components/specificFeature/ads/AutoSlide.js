import { useEffect, useState } from 'react';

const AutoSlide = ({ images, intervalTime }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, intervalTime);

    return () => {
      clearInterval(timerId);
    };
  }, [currentIndex, images.length, intervalTime]);

  return (
    <div>
      <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="duration-300 w-32 h-32" />
    </div>
  );
};

export default AutoSlide;
