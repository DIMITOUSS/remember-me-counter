import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Retrieve the count from localStorage when the component mounts
  useEffect(() => {
    const savedCount = localStorage.getItem('rememberMeCount');
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('rememberMeCount', newCount);
  };

  return (
    <div className="counter-container">
      <motion.div
        className="heart"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onClick={handleClick}
      >
        <FaHeart className="heart-icon" />
      </motion.div>
      <motion.div
        className="count-display"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [10, 0] }}
        transition={{ duration: 0.5 }}
      >
        {count} {count === 1 ? 'Time' : 'Times'}
      </motion.div>
    </div>
  );
};

export default Counter;
