import React from 'react';
import './hero.css';
import image from '../../assets/Autonomous-portable-tower-no-bg.jpg';

const Hero = () => {
  return (
    <main className='hero'>
      <div className="hero-container">
        <section className="section-left">
          <h1 className="section-header">
            Yamato Engineering
          </h1>
          <h2 className="section-subheader">
            Empowering the future of water
          </h2>
          <p className="section-paragraph">
            At Yamato Engineering plc, we take pride in offering a comprehensive range of services tailored to meet the specific needs of our clients in the fields of Control Boards, Solar Power, and SCADA Water Distribution Systems. With our expertise and dedication to innovation, we strive to provide sustainable, efficient, and reliable solutions that drive success for businesses and industries worldwide.
          </p>
        </section>
        <seciton className="section-right">
          <img src={image} alt="hero-image" className="section-img" />
        </seciton>
      </div>
    </main>
  )
}

export default Hero