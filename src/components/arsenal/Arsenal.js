import { React, useEffect } from "react";
import "../arsenal/Arsenal.scss";
import arsenalProfile from "../../images/bitmoji-4.png";
import Aos from 'aos';
const Arsenal = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="arsenal" id="arsenal">
      <div className="arsenal__header">
        <h1>My Arsenal</h1>
        <h2>Armories, Artileries and all those cool stuffs</h2>
      </div>

      <img src={arsenalProfile} alt="arsenal profile" data-aos="fade-in"></img>
    </section>
  );
};

export default Arsenal;
