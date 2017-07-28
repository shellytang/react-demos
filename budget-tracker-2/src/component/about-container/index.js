import React from 'react';
import Navbar from '../navbar';

class AboutContainer extends React.Component {
  render() {
    return (
      <div className='about-container'>
        <Navbar />
        <p>About</p>
      </div>
    );
  }
}

export default AboutContainer;
