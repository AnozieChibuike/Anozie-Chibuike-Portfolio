import { React, useState } from "react";
import "./Nav.scss";
import logo from "../../logo.svg";

const Nav = () => {
  const [goTo, setGoTo] = useState("#");
  const [openHamburger, setOpenHamburger] = useState("nav__hamburger");
  const [openMenu, setOpenMenu] = useState("mobileMenu");
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClick = () => {
    setOpenMenu("mobileMenu");
  };

  const updateMenu = () => {
    if (!isHamburgerOpen) {
      setOpenHamburger("nav__hamburger hamburgerOpen");
      setOpenMenu("mobileMenu openMobileMenu");
    } else {
      setOpenHamburger("nav__hamburger");
      setOpenMenu("mobileMenu");
    }

    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const updateMenuClick = () => {
    if (!menuOpen) {
      setOpenMenu("mobileMenu");
      setOpenHamburger("nav__hamburger");
    } else {
      setOpenMenu("mobileMenu openMobileMenu");
      setOpenHamburger("nav__hamburger hamburgerOpen");
    }

    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <div className={openHamburger} onClick={updateMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="nav__link">
        <a href={goTo} onClick={() => setGoTo("#")}>
          Home
        </a>
        <a href={goTo} onClick={() => setGoTo("#portfolio")}>
          Portfolio
        </a>
        <a href={goTo} onClick={() => setGoTo("#bio")}>
          Bio
        </a>
        <a href={goTo} onClick={() => setGoTo("#arsenal")}>
          Arsenal
        </a>
      </div>

      <a className="nav__logo" href="/#">
        <img src={logo} alt="logo"></img>
      </a>

      <div className="nav__link">
        <a href={goTo} onClick={() => setGoTo("#skills")}>
          Skills
        </a>
        <a href={goTo} onClick={() => setGoTo("#vouchers")}>
          Testimonials
        </a>
        <a href={goTo} onClick={() => setGoTo("#contact")}>
          Contact Me
        </a>
      </div>

      <div className={openMenu} onClick={updateMenuClick}>
        <div className="mobileMenu__container">
          <ul onClick={linkClick}>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#bio">Bio</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#arsenal">Arsenal</a>
            </li>
            <li>
              <a href="#vouchers">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
