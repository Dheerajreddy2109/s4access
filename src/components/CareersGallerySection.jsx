import React, { useState, useEffect } from 'react';
import random1 from '../assets/images/Careeres-img/random-imgs/random-1.jpg';
import random2 from '../assets/images/Careeres-img/random-imgs/random-2.jpg';
import random3 from '../assets/images/Careeres-img/random-imgs/random-3.jpg';
// import random4 from '../assets/images/Careeres-img/random-imgs/random-4.jpg';
import random5 from '../assets/images/Careeres-img/random-imgs/random-5.jpg';
import random6 from '../assets/images/Careeres-img/random-imgs/random-6.jpg';
import random7 from '../assets/images/Careeres-img/random-imgs/random-7.jpg';
// import random8 from '../assets/images/Careeres-img/random-imgs/random-8.jpg';
// import random9 from '../assets/images/Careeres-img/random-imgs/random-9.jpg';

const CareersGallerySection = () => {
  const [shuffledImages, setShuffledImages] = useState([]);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const initialImages = [
      { src: random1, alt: 'Random Image 1' },
      { src: random2, alt: 'Random Image 2' },
      { src: random3, alt: 'Random Image 3' },
      // { src: random4, alt: 'Random Image 4' },
      { src: random5, alt: 'Random Image 5' },
      { src: random6, alt: 'Random Image 6' },
      { src: random7, alt: 'Random Image 7' },
      // { src: random8, alt: 'Random Image 8' },
      // { src: random9, alt: 'Random Image 9' },
    ];
    setShuffledImages(shuffleArray(initialImages));
  }, []);

  return (
    <section className="careers-gallery-section">
      <div className="careers-gallery-grid">
        {/* Top row: 4 smaller images */}
        <img src={shuffledImages[0]?.src} alt={shuffledImages[0]?.alt} className="gallery-img top-row" />
        <img src={shuffledImages[1]?.src} alt={shuffledImages[1]?.alt} className="gallery-img top-row" />
        <img src={shuffledImages[2]?.src} alt={shuffledImages[2]?.alt} className="gallery-img top-row" />
        {/* <img src={shuffledImages[3]?.src} alt={shuffledImages[3]?.alt} className="gallery-img top-row" /> */}
        {/* Middle row: 3 larger images, rightmost wider */}
        <img src={shuffledImages[3]?.src} alt={shuffledImages[3]?.alt} className="gallery-img middle-row left" />
        <img src={shuffledImages[4]?.src} alt={shuffledImages[4]?.alt} className="gallery-img middle-row center" />
        <img src={shuffledImages[5]?.src} alt={shuffledImages[5]?.alt} className="gallery-img middle-row right" />
        {/* Bottom row: 2 larger images */}
        {/* <img src={shuffledImages[6]?.src} alt={shuffledImages[7]?.alt} className="gallery-img bottom-row left" />
        <img src={shuffledImages[7]?.src} alt={shuffledImages[8]?.alt} className="gallery-img bottom-row right" /> */}
      </div>
    </section>
  );
};

export default CareersGallerySection;