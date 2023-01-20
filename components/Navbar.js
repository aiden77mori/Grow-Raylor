import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [activeText, setActiveText] = useState("");
  const [activeTextVisible, setActiveTextVisible] = useState(false);
  const toggleVisibility = () => {
    visible ? setVisible(false) : setVisible(true);
    console.log(visible);
  };
  return (
    <>
      <div className="navbar">
        <Link href="/" className="logo">
          <Image
            src="/logo.png"
            width="50"
            height="50"
            alt="Grow Raylor logo"
            className="logo__img"
          />
          <span className="logo__text">Grow Raylor</span>
        </Link>
        <div
          className={`hamburger ${visible ? "cross" : ""}`}
          onClick={toggleVisibility}
        >
          <div className="hamburger__bar" id="bar-1"></div>
          <div className="hamburger__bar" id="bar-2"></div>
          <div className="hamburger__bar" id="bar-3"></div>
          <div className="hamburger__bar" id="bar-4"></div>
          <div className="hamburger__bar" id="bar-5"></div>
          <div className="hamburger__bar" id="bar-6"></div>
          <div className="hamburger__bar" id="bar-7"></div>
          <div className="hamburger__bar" id="bar-8"></div>
          <div className="hamburger__bar" id="bar-9"></div>
        </div>
      </div>
      <div className={`full-screen-nav ${visible ? "visible" : ""}`}>
        <span className={`active-text ${activeTextVisible ? "visible" : ""}`}>
          {activeText}
        </span>
        <ul className="full-screen-nav__list">
          <li className="full-screen-nav__list__item">
            <Link
              className="full-screen-nav__list__item__link"
              href="/about"
              onMouseEnter={() => {
                setActiveText("About us");
                setActiveTextVisible(true);
              }}
              onMouseLeave={() => {
                setActiveTextVisible(false);
              }}
            >
              About us
            </Link>
          </li>
          <li className="full-screen-nav__list__item">
            <Link
              className="full-screen-nav__list__item__link"
              href="/about"
              onMouseEnter={() => {
                setActiveText("Our Services");
                setActiveTextVisible(true);
              }}
              onMouseLeave={() => {
                setActiveTextVisible(false);
              }}
            >
              Our Services
            </Link>
          </li>
          <li className="full-screen-nav__list__item">
            <Link
              className="full-screen-nav__list__item__link"
              href="/about"
              onMouseEnter={() => {
                setActiveText("Pricing");
                setActiveTextVisible(true);
              }}
              onMouseLeave={() => {
                setActiveTextVisible(false);
              }}
            >
              Pricing
            </Link>
          </li>
          <li className="full-screen-nav__list__item">
            <Link
              className="full-screen-nav__list__item__link"
              href="/about"
              onMouseEnter={() => {
                setActiveText("Contact us");
                setActiveTextVisible(true);
              }}
              onMouseLeave={() => {
                setActiveTextVisible(false);
              }}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
