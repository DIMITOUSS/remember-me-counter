import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <motion.div
        className="heart"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
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
        {count} {count === 1 ? "Time" : "Times"}
      </motion.div>
    </div>
  );
};

export default Counter;
