import React from "react";

function Funeral() {
    return (
      <div>
        <nav>
          <ul>
            <li><a href="FAQs">FAQs</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#home">Home</a></li>
            <li className="logo">FESTAEVENTS</li>
          </ul>
        </nav>
  
        <div id="body2">
          <h1>It is not the length,<br /> But the depth of life<br /></h1>
          <p>Choose us to walk with you as you commemorate a loved one.</p>
          <p>In conjunction with your desired funeral home we endeavor to ease some of your burdens as you go through this difficult time.</p>
          <button className="GetStarted-button">Get Started</button>
        </div>
    </div>
  );
}
export default Funeral;