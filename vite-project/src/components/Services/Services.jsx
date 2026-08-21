import React from "react";
import { useServices } from "../../context/ServicesContext";

const services = [
  {
    title: "Rides",
    description: "Request in seconds, ride in minutes.",
    button: "Get started",
    image: "/images/rides.jpg",
  },

  {
    title: "Delivery",
    description: "Your favourite food, delivered fast.",
    button: "Go to Food",
    image: "/images/delivery.jpg",
  },

  {
    title: "Car-sharing",
    description: "High-quality car rental made easy.",
    button: "Go to Drive",
    image: "/images/car-sharing.jpg",
  },

  {
    title: "Groceries",
    description: "All the essentials whenever you need them.",
    button: "Go to Market",
    image: "/images/groceries.jpg",
  },

  {
    title: "Business",
    description: "Manage business travel for your team and clients.",
    button: "For Business",
    image: "/images/business.jpg",
  },

  {
    title: "Micromobility",
    description: "2-wheel ride rental at your fingertips.",
    button: "Learn more",
    image: "/images/micromobility.jpg",
  },

  {
    title: "Food",
    description: "Order your favourite meals quickly and easily.",
    button: "Order now",
    image: "/images/food.jpg",
  },

  {
    title: "Travel",
    description: "Move around the city comfortably and safely.",
    button: "Explore",
    image: "/images/travel.jpg",
  },
];

const Services = () => {
  const { currentIndex, nextSlide, prevSlide } = useServices();

  return (
    <section className="services-section">

      <div className="services-heading">
        <h2>Our services</h2>

        <p>
          Products and features vary
          <br />
          by country. Some features
          <br />
          listed here may not be
          <br />
          available in your app.
        </p>
      </div>

      <div className="services-right">

        
        <div className="services-slider">

          <div
            className="services-track"
            style={{
              transform: `translateX(calc(-${currentIndex} * (50% + 10px)))`,
            }}
          >

            {services.map((service, index) => (
              <div
                className="service-card"
                key={index}
              >

                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />

                <div className="service-overlay"></div>

                <div className="service-content">

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <button
                    className="service-btn"
                    onClick={() => {
                      alert(`${service.title} selected`);
                    }}
                  >
                    {service.button}
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="slider-controls">

          <span className="slider-dot"></span>

          <button
            className="slider-btn"
            onClick={prevSlide}
            aria-label="Previous"
          >
            &lt;
          </button>

          <button
            className="slider-btn"
            onClick={nextSlide}
            aria-label="Next"
          >
            &gt;
          </button>

        </div>

      </div>

    </section>
  );
};

export default Services;


