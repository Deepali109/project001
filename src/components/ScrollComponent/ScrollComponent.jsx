import React, { useRef } from 'react';
import './scrollable.css';
import one1 from '../../assets/images/1.png';
import one2 from '../../assets/images/2.png';
import one3 from '../../assets/images/3.png';
import one4 from '../../assets/images/4.png';
import one5 from '../../assets/images/5.png';
import one6 from '../../assets/images/6.png';
import one7 from '../../assets/images/7.png';

const ScrollComponent = ({ title }) => {
  const recommendedItems = [
    { id: 1, title: 'Connect Dots', image: one1, link: 'https://kidzone-edugames.itch.io/numbers-racing-game' },
    { id: 2, title: 'Blue Ribbon', image: one2, link: 'https://www.facebook.com' },
    { id: 3, title: 'Alphabet Order', image: one3, link: 'https://www.twitter.com' },
    { id: 4, title: 'Crayon Painting', image: one4, link: 'https://www.instagram.com' },
    { id: 5, title: 'Color Blaster', image: one5, link: 'https://www.linkedin.com' },
    { id: 6, title: 'Candle Counting', image: one6, link: 'https://www.youtube.com' },
    { id: 7, title: 'Alphabet Bingo', image: one7, link: 'https://www.reddit.com' },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300;
      current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="recommended-container">
      <h2>Puzzle</h2>
      <div className="scroll-wrapper">
        {/* <button className="scroll-button left" onClick={() => scroll('left')}>❮</button> */}
        <div className="scrollable-cards" ref={scrollRef}>
          {recommendedItems.map((item) => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="card">
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
            </a>
          ))}
        </div>
        {/* <button className="scroll-button right" onClick={() => scroll('right')}>❯</button> */}
      </div>
    </div>
  );
};

export default ScrollComponent;
