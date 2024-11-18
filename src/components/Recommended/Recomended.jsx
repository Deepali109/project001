import React, { useRef } from 'react';
import one1 from '../../assets/images/baloonBost.png';
import one2 from '../../assets/images/bingo.png';
import one3 from '../../assets/images/crossword.png';
import one4 from '../../assets/images/makeahouse.png';
import one5 from '../../assets/images/numberRacing200PX.png';
import one6 from '../../assets/images/reciperemix.png';
import one7 from '../../assets/images/sliderpuzzle.png';

const Recommended = ({ title }) => {
  const recommendedItems = [
    { id: 1, title: 'Ballon Buster', image: one1, link: 'https://kidzone-edugames.itch.io/balloon-buster-math-edition' },
    { id: 2, title: 'Number Racing', image: one5, link: 'https://kidzone-edugames.itch.io/numbers-racing-game' },
    { id: 3, title: 'Bingo', image: one2, link: 'https://example.com/learning-module' },
    { id: 4, title: 'Make A House', image: one4, link: 'https://example.com/practice-quiz' },
    { id: 5, title: 'Crossword', image: one3, link: 'https://example.com/challenge-mode' },
    { id: 6, title: 'Recipe remix', image: one6, link: 'https://example.com/progress-tracker' },
    { id: 7, title: 'Slider Puzzle', image: one7, link: 'https://example.com/daily-rewards' },
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
      <h2>{title || 'Maths Games'}</h2>
      <div className="scroll-wrapper">
        <button className="scroll-button left" onClick={() => scroll('left')}>❮</button>
        <div className="scrollable-cards" ref={scrollRef}>
          {recommendedItems.map((item) => (
            <a 
              key={item.id} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-link"
            >
              <div className="card">
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
            </a>
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scroll('right')}>❯</button>
      </div>
    </div>
  );
};

export default Recommended;
