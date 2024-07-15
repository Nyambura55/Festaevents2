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

{/*Corporateeventspart*/}

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

{/*Private parties part */}

const PrivateParties = () => {
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
{/*wedding part*/}
function WeddingPage() {
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
      <nav>
        <ul>
          {/* My logo for festaevents will be here */}
          <li><a href="FAQs">FAQs</a></li>
          <li><a href="Testimonials.html">Testimonials</a></li>
          <li><a href="#about">About</a></li>
          <li className="dropdown">
            <a href="#services" className="dropbtn">
              Services
            </a>
            <ul className="dropdown-content">
              <li><a href="partiesPrivate.html" target="_blank">Private Party</a></li>
              <li><a href="#">Corporate Events</a></li>
              <li><a href="#">Weddings</a></li>
              <li><a href="#">Funerals</a></li>
            </ul>
          </li>
          <li><a href="mainPage.html">Home</a></li>
          <li className="logo">FESTAEVENTS</li>
        </ul>
      </nav>
      <div className="container">
        <h1>"Two souls with but a single thought; two hearts that beat as one."</h1>
        <p>
          Welcome to our wedding page! We are thrilled to celebrate our special day with you. Here you'll find all the details about the ceremony, reception, and everything in between. Thank you for being a part of our journey and sharing in our joy.
        </p>
        <button className="GetStarted-button">Get Started</button>
      </div>
    </div>
  );
}

