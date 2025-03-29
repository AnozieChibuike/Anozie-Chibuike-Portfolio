import { React, useState, useEffect } from "react";
import "../bio/Bio.scss";
import github from "../../icons/github.png";
import excellencePerk from "../../icons/excellence.png";
import speedPerk from "../../icons/speed.png";
import qualityPerk from "../../icons/quality.png";
import teamPlayPerk from "../../icons/team.png";
import resumeFile from "../../files/Anozie.pdf";
import { MdOutlineQrCode2 } from "react-icons/md";
import Aos from "aos";

/* import QrCode Modal */
import QrCode from "../qrCode/QrCode";

const Bio = () => {
  const [qrCode, setQrCode] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out"
    });
  }, []);

  return (
    <section id="bio" className="bio">
      <article className="bio__header">
        <div className="bio__header__details">
          <div
            className="bio__header__details__image"
            data-aos="fade-right"
            data-aos-once="true"
          ></div>
          <a
            href="https://github.com/AnozieChibuike"
            rel="noreferrer"
            target="_blank"
          >
            Visit my Github Profile
            <img src={github} alt="github"></img>
          </a>
        </div>

        <ul className="bio__header__perks">
          <li
            className="perks__details"
            data-aos="fade-right"
            data-aos-delay="1200"
          >
            <div>
              <img src={excellencePerk} alt="excellence"></img>
            </div>
            <div>#Excellence</div>
          </li>

          <li
            className="perks__details"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <div>
              <img src={speedPerk} alt="excellence"></img>
            </div>
            <div>#Speed</div>
          </li>

          <li
            className="perks__details"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div>
              <img src={qualityPerk} alt="excellence"></img>
            </div>
            <div>#Quality</div>
          </li>

          <li
            className="perks__details"
            data-aos="fade-right"
          >
            <div>
              <img src={teamPlayPerk} alt="excellence"></img>
            </div>
            <div>#Team Player</div>
          </li>
        </ul>

        <div className="bio__header__text">
          <h1
            data-aos="fade-up"
            data-aos-once="true"
          >
            “I Am A Very Skilled Software <span className="fade">Developer</span> Coversant {" "}
            <span className="fade">With </span> Solidity,Vyper,React JS, React Native, Python {" "}
            <span className="fade">And </span> Many More.&nbsp;
            <span className="fade">I Am </span> Open For Jobs also ”
          </h1>
          <p>
            Anozie Joel &emsp;
            <span className="fade small">Software Developer</span>
          </p>
        </div>
      </article>

      <article className="bio__text">
        <h1>My Bio</h1>

        <ul>
          <li
            data-aos="fade-up"
          >
            I am a Software Engineer with knowledge in using the core technologies
            of the web - <span className="fade">React Native, Tailwind CSS and React JavaScript</span> - in
            building maintable, scalable and accessible software.
          </li>
          <li
            data-aos="fade-up"
          >
            Proficient in Web3 development, {" "}
             <span className="fade">Solidity, Vyper, and smart contracts security</span> with expertise in building{" "}
            <span className="fade">decentralized applications (dApps) </span> and integrating  <span className="fade">blockchain technology</span>.
          </li>
          <li
            data-aos="fade-up"
          >
            Using CSS libraries and JavaScript frameworks in building functional websites,
            which includes but is not limited to using tools like{" "}
            <span className="fade"> Tailwind CSS</span> and{" "}
            <span className="fade">ShadCn Libraries</span>.
          </li>
          <li
            data-aos="fade-up"
          >
            Collaborating with team members using Version Control Systems (VCS)
            like <span className="fade">Git</span> and{" "}
            <span className="fade">GitHub</span>, and writing{" "}
            <span className="fade">clean code</span> for readability and code
            debugging.
          </li>
          <li
            data-aos="fade-up"
          >
            Designing for <span className="fade">Accessibility</span> and{" "}
            <span className="fade">Inclusivity</span> to ensure all users’ needs
            are considered during the design process and keeping it in mind
            through the development and production stage.
          </li>
        </ul>
      </article>

      <article className="bio__file">
        <p>Download my CV here</p>

        <div className="bio__file__details">
          <a href={resumeFile} rel="noreferrer" download>
            CV (PDF)
          </a>
          <button onClick={() => setQrCode(true)}>
            SCAN CODE
            <MdOutlineQrCode2 />
          </button>
        </div>
      </article>

      {qrCode && <QrCode closeQrCode={setQrCode} />}
    </section>
  );
};

export default Bio;
