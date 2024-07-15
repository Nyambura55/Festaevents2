import React from 'react';


function ServicesPage() {
  return (
    <div>
      {/* Navigation bar */}
      <nav>
        <ul>
          {/* My logo for festaevents will be here */}
          <li><a href="FAQs">FAQs</a></li>
          <li><a href="Testimonials.html">Testimonials</a></li>
          <li><a href="aboutus.html">About</a></li>
          <li className="dropdown">
            <a href="#services" className="dropbtn">Services</a>
            <ul className="dropdown-content">
              <li><a href="partiesPrivate.html" target="_blank">Private Party</a></li>
              <li><a href="Corporate event.html">Corporate Events</a></li>
              <li><a href="wedding.html">Weddings</a></li>
              <li><a href="#">Funerals</a></li>
            </ul>
          </li>
          <li><a href="mainPage.html">Home</a></li>
          <li className="logo">FESTAEVENTS</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Event Planning Services</h1>
        <p>Let us help you plan an unforgettable event!</p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          {/* Service 1: Wedding Planning */}
          <div className="service">
            <i className="fas fa-ring" />
            <h3>Wedding Planning</h3>
            <div className="column">
              <p>From intimate gatherings to grand affairs, we'll help you plan the perfect wedding.</p>
            </div>
            <div className="column">
              <a href="wedding.html">
                <img src="wedding.jpg" width="50" height="50" title="Wedding" />
              </a>
            </div>
            <a href="#" className="learn-more">Learn More</a>
          </div>

          {/* Service 2: Corporate Events */}
          <div className="service">
            <i className="fas fa-briefcase" />
            <h3>Corporate Events</h3>
            <div className="column">
              <p>Impress your clients and colleagues with our expertly planned corporate events.</p>
            </div>
            <div className="column">
              <a href="Corporate event.html">
                <img src="corp2.jpg" width="50" height="50" title="Corporate event" />
              </a>
            </div>
            <a href="#" className="learn-more">Learn More</a>
          </div>

          {/* Service 3: Private Parties */}
          <div className="service">
            <i className="fas fa-party-hat" />
            <h3>Private Party</h3>
            <div className="column">
              <p>Let us help you throw a party that your guests will never forget!</p>
            </div>
            <div className="column">
              <a href="partiesPrivate.html">
                <img src="Corp1.jpg" width="50" height="50" title="Private party" />
              </a>
            </div>
            <a href="#" className="learn-more">Learn More</a>
          </div>

          {/* Service 4: Funeral */}
          <div className="service">
            <i className="fas fa-palette" />
            <h3>Funeral</h3>
            <div className="column">
              <p>Let us be able to give your loved ones a memorable send of to show how much you really loved and treasured them.</p>
            </div>
            <div className="column">
              <a href="funeralsevices.html">
                <img src="corp3.jpg" width="50" height="50" title="funeral" />
              </a>
            </div>
            <a href="#" className="learn-more">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;