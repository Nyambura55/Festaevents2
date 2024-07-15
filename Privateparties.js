import React from "react";

const  PrivateParties = () => {
    return (
      <div className="body" style={{
        backgroundImage: "url('_.. dining on the beach _ outdoor events')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }}>
        {/* Navigation bar */}
        <nav>
          <ul>
            <li><a href="FAQs">FAQs</a></li>
            <li><a href="Testimonials.html">Testimonials</a></li>
            <li><a href="#about">About</a></li>
            <li className="dropdown">
              <a href="#services" className="dropbtn">Services</a>
              <ul className="dropdown-content">
                <li><a href="#">Private Party</a></li>
                <li><a href="#">Corporate Events</a></li>
                <li><a href="wedding.html">Weddings</a></li>
                <li><a href="#">Funerals</a></li>
              </ul>
            </li>
            <li><a href="mainPage.html">Home</a></li>
            <li className="logo">FESTAEVENTS</li>
          </ul>
        </nav>
        <div className="content">
          <h1>Private Parties</h1>
          <p>Whether it's a birthday party or a milestone celebration, we create personalized and unforgettable experiences for your private events.</p>
          <button className="GetStarted-button">Get Started</button>
        </div>
        <div className="vendor-panels">
          <div className="vendor-panel" style={{ backgroundImage: "url('DANNY.png')" }}>
            <h3>Danny</h3>
            <p>Provides services like tents, seats and entertainment Services</p>
          </div>
          <div className="vendor-panel" style={{ backgroundImage: "url('MYERS.png')" }}>
            <h3>Myers</h3>
            <p>All decoration services</p>
          </div>
          <div className="vendor-panel" style={{ backgroundImage: "url('JUNE.png')" }}>
            <h3>June</h3>
            <p>Catering services</p>
          </div>
          <div className="vendor-panel" style={{ backgroundImage: "url('JOHNNYSECURITY.png')" }}>
            <h3>Johnny</h3>
            <p>Security services</p>
          </div>
        </div>
      </div>
    );
  }
  export default PrivateParties;