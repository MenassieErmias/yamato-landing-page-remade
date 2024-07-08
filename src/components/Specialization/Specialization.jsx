import React from 'react'

const Specialization = () => {
  return (
    <main className='spec'>
      <div className="spec-container">
        <h1 className="spec-header">
          We specialize in ...
        </h1>
        {/* CARDS */}
        <div className="card">
          <img src="" alt="" className="card-img" />
          <h2 className="card-header">
            Control Boards Solutions
          </h2>
          <p className="card-content">
            Precision control boards for diverse applications. Customized solutions built with cutting-edge tech for optimized operations and increased efficiency.
          </p>
        </div>
        <div className="card">
          <img src="" alt="" className="card-img" />
          <h2 className="card-header">
            Solar Power Solutions
          </h2>
          <p className="card-content">
            Harness clean solar energy with our comprehensive solutions. From feasibility studies to installation, we create eco-friendly systems for a greener future.
          </p>
        </div>
        <div className="card">
          <img src="" alt="" className="card-img" />
          <h2 className="card-header">
            SCADA Water Distribution Systems
          </h2>
          <p className="card-content">
            Real -time water management with SCADA technology. Gain insights for efficient resource allocation and continuous water supply.
          </p>
        </div>
        {/* CARDS */}

        {/* Learn more button */}
        <button className="learn-more-btn">
          Learn More ...
        </button>
      </div>
    </main>
  )
}

export default Specialization