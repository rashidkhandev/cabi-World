import React, { useState } from "react";


const apps = [
  {
    name: "Rides",
    title: "Your ride, whenever you need it.",
    button: "Get Bolt",
    image: "/images/app-phone.png",
  },
  {
    name: "Delivery",
    title: "The food you love, delivered fast!",
    button: "Get Bolt Food",
    image: "/images/app-phone.png",
  },
];

const DownloadApps = () => {
  const [active, setActive] = useState(1);

  const currentApp = apps[active];

  return (
    <section className="download-apps">

      <div className="download-heading">
        <h2>Download our apps</h2>

        <p>
          Available for iOS and Android devices.
        </p>
      </div>

      <div className="download-content">

       <div className="phone-area">
  <img
    src="/images/generic.webp"
    alt="App preview"
    className="phone-image"
  />
</div>

        <div className="app-info">

          <div className="app-tabs">
            {apps.map((app, index) => (
              <button
                key={app.name}
                className={`app-tab ${
                  active === index ? "active" : ""
                }`}
                onClick={() => setActive(index)}
              >
                {app.name}
              </button>
            ))}
          </div>

          <h3>{currentApp.title}</h3>

          <p>
            Available for iOS and Android devices.
          </p>

          <button
            className="app-button"
            onClick={() => alert(`${currentApp.name} selected`)}
          >
            {currentApp.button}
          </button>

        </div>

      </div>

    </section>
  );
};

export default DownloadApps;