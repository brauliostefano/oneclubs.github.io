import React, { useState, useEffect } from 'react';

const Counter = ({ endValue, duration = 2000, showPlus = false }) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let startTimestamp = null;
    setIsAnimating(true); // Iniciamos el desenfoque

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      setCount(Math.floor(progress * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setIsAnimating(false); // Detenemos el desenfoque al terminar
      }
    };

    window.requestAnimationFrame(step);
  }, [endValue, duration]);

  return (
    <span
      className={`inline-block ${
        isAnimating ? 'counter-animating' : 'counter-static'
      }`}
    >
      {count.toLocaleString()}
      {showPlus && '+'}
    </span>
  );
};

export default Counter;
