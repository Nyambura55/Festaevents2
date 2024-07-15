import React from 'react';


const mainPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url('Outdoor Wedding Inspo.jpeg')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      {/* Navigation bar */}
      <nav>
        <ul>
          {/* My logo for festaevents will be here */}
          <li><a href="/FAQs">FAQs</a></li>
          <li><a href="/Testimonials">Testimonials</a></li>
          <li><a href="#about">About</a></li>
          <li className="dropdown">
            <a href="#services" className="dropbtn">Services</a>
            <ul className="dropdown-content">
              <li><a href="/partiesPrivate" target="_blank">Private Party</a></li>
              <li><a href="#">Corporate Events</a></li>
              <li><a href="/wedding">Weddings</a></li>
              <li><a href="#">Funerals</a></li>
            </ul>
          </li>
          <li><a href="#home">Home</a></li>
          <li className="logo">FESTAEVENTS</li>
        </ul>
      </nav>

      <div className="content">
        <h2>FESTAEVENTS</h2>
        <p>Creating Memories, One Event at a Time</p>
        <button id="getStartedButton" className="GetStarted-button" onClick={redirectToLogin}>Get Started</button>
      </div>
    </div>
  );

}

export default mainPage;
