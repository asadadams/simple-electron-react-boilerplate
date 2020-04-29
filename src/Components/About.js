import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {

  return (
    <div className='About'>
      <h1>This is the About Route</h1>
      <Link to="/home">GO TO HOME</Link>
    </div>
  );

}

export default About
