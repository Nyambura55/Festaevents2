import React from "react";

const testimonialsData = [
    {
      imgSrc: "corporate-events-500x500.webp",
      altText: "Mike Oxlong",
      name: "Mike Oxlong",
      title: "CEO, Elegant Events",
      quote: "Our company has relied on FestaEvents for multiple corporate events, and each time, they have exceeded our expectations. From meticulous planning to flawless execution, their team handles everything with utmost professionalism. Highly recommended!",
      rating: "★★★★★"
    },
    {
      imgSrc: "Annual_Conference.jpeg",
      altText: "Peter File",
      name: "Peter File",
      title: "Founder, Tech Innovators Conference",
      quote: "Partnering with FestaEvents was the best decision we made for our annual conference. Their attention to detail and creative approach made our event a huge success. We look forward to working with them again next year!",
      rating: "★★★★★"
    },
    {
      imgSrc: "wedding.jpeg",
      altText: "Anita Hanjaab",
      name: "Anita Hanjaab",
      title: "Bride",
      quote: "Planning a wedding can be overwhelming, but FestaEvents made it a breeze. They took care of every detail, allowing us to enjoy our special day without any stress. Our guests were impressed, and so were we. Thank you for making our dream wedding come true!",
      rating: "★★★★★"
    },
    {
      imgSrc: "Funeral.jpeg",
      altText: "Ray Peest",
      name: "Jefferey Epstein",
      title: "Head Funeral Manager, Gentle Farewells",
      quote: "Organizing a funeral was overwhelming, but FestaEvents handled everything with care and precision. Their professional team ensured everything went smoothly, allowing us to focus on remembering our loved one. We are deeply grateful. Thank you, FestaEvents.",
      rating: "★★★★★"
    }
  ];
  
  const Testimonials = () => {
    return (
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.imgSrc} alt={testimonial.altText} />
            <div className="testimonial-content">
              <h3>{testimonial.name}</h3>
              <em>{testimonial.title}</em>
              <blockquote>
                {testimonial.quote} {testimonial.rating}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Testimonials;
  