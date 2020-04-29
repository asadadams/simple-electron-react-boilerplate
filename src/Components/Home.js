import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='home'>
      <h1>This is the Home Route</h1>
      <Link to="/about">GO TO ABOUT</Link>
    </div>
  );

}

export default Home