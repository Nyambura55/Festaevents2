import React from 'react';

function CorporateEventPage() {
  return (
    <div>
      {/* Navigation bar */}
      <nav>
        <ul>
          {/* My logo for festaevents will be here */}
          <li><a href="FAQs">FAQs</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#about">About</a></li>
          <li className="dropdown">
            <a href="#services" className="dropbtn">Services</a>
            <ul className="dropdown-content">
              <li><a href="partiesPrivate.html" target="_blank">Private Party</a></li>
              <li><a href="#">Corporate Events</a></li>
              <li><a href="wedding.html">Weddings</a></li>
              <li><a href="funeralsevices.html">Funerals</a></li>
            </ul>
          </li>
          <li><a href="mainPage.html">Home</a></li>
          <li className="logo">FESTAEVENTS</li>
        </ul>
      </nav>

      {/* Content */}
      <div className="content" style={{
        backgroundImage: 'url(Corporate Event Creativity.jpeg)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }}>
        <h2>Enhance Your Business Gatherings</h2>

        <p>
          With our event planning services, we are experts in arranging: Conferences, meetings seminars and corporate events.<br />
          Our strategy merges your brand's values with our planning skills, guaranteeing each event is not just professional but also memorable for your guests. From choosing the ideal venue to liaising with caterers and tech teams, we ensure your corporate events are smooth, interactive and in line with your business goals.
        </p>
        <button className="GetStarted-button">Get Started</button>
      </div>
    </div>
  );
}

export default CorporateEventPage;