import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../CSS/Banner.css';

const Banner = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 300,
  });

  return (
    <animated.section style={fadeIn} className="banner">
      <h2>Welcome to BookNest</h2>
      <p>Your gateway to thousands of books</p>
      <button className="banner-button">Shop Now</button>
    </animated.section>
  );
};

export default Banner;
