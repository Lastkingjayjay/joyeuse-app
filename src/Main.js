import React from "react";
import vid1 from "./videoBg.mp4";
const Main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={vid1} autoPlay loop muted></video>
      <div className="Container">
        <h1>Welome to the Best Haitina Resturant in Town!!</h1>
        <p>
          <em>Weclome</em>
        </p>
        <div className="">
          <h2>
            <em>Store Location</em>
          </h2>
          <br />
          <iframe
            title="My Daily Marathon Tracker"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.8845988262233!2d-75.11833048564542!3d40.03335588679184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7a9d6185ced%3A0x8aa1795656f9e8ee!2sJoyeuse%20Bakery%20%26%20Restaurant!5e0!3m2!1sen!2sus!4v1656032085964!5m2!1sen!2sus"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <h1>menue</h1>
          <h1>menue</h1>
          <h1>menue</h1>
          <h1>menue</h1>
          <h1>menue</h1>
          <h1>menue</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
