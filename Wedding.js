import React from "react";

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
  
export default WeddingPage;  