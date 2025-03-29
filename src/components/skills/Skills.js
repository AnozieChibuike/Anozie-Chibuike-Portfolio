import { React, useEffect } from "react";
import "../skills/Skills.scss";
import skillsProfile from "../../images/bitmoji-7.png";
import skillImage1 from "../../icons/ui design.png";
import skillImage2 from "../../icons/ux design.png";
import skillImage3 from "../../icons/graphic design.png";
import skillImage4 from "../../icons/web dev.png";
import skillImage5 from "../../icons/responsive web.png";
import Aos from "aos";

const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const skills = [
    {
      id: 1,
      title: "Blockchain Development",
      image: skillImage1,
      info: `Building decentralized applications (dApps) and smart contracts 
      with Solidity and Web3.js, focusing on security, gas efficiency, 
      and scalability.`,
    },
    {
      id: 2,
      title: "Mobile App Development",
      image: skillImage5,
      info: `Developing cross-platform mobile applications using React Native 
      and Expo, ensuring seamless performance and intuitive user experience.`,
    },
    {
      id: 3,
      title: "Backend Development",
      image: skillImage3,
      info: `Building scalable and efficient backend applications with Flask 
      and Node.js, integrating APIs, databases, and authentication systems.`,
    },
    {
      id: 4,
      title: "Web Development",
      image: skillImage4,
      info: `Building interactive, scalable, and reusable components for web 
      applications using React, Next.js, and Tailwind CSS.`,
    },
    {
      id: 5,
      title: "Python Scripting",
      image: skillImage2,
      info: `Writing automation scripts and utilities in Python for data processing, 
      task automation, and system integrations.`,
    },
    {
      id: 6,
      title: "Bot Development",
      image: skillImage3,
      info: `Creating bots for automation, data scraping, and interaction, including 
      Telegram bots with Python and Node.js.`,
    },
    {
      id: 7,
      title: "Responsive Website Development",
      image: skillImage4,
      info: `Ensuring cross-device compatibility with mobile-first design and 
      media queries for a seamless user experience.`,
    }
  ]
  

  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <h1>My Special Skills</h1>
        <h2>Things I can do that will blow your mind</h2>
      </div>

      <img src={skillsProfile} alt="skills profile" data-aos="fade-in"></img>

      <div className="skills__container">
        {skills.map((skill) => {
          return (
            <div className="skill" key={skill.id}>
              <div className="skill__header">
                <img src={skill.image} alt="skill"></img>
              </div>

              <p>{skill.title}</p>

              <p>{skill.info}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
