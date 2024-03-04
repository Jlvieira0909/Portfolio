import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="./img/logo.png" />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-mdftt"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-mdftt"
              >
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MySkills"
                className="text-mdftt"
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-mdftt"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/joaoluizzv"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="data:image/png;base64,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"
                  width="38"
                  height="38"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                </img>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/joaoluizv/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABS0lEQVR4nO2ZO0oEQRRFnyhmOoKmgoHuwD0oOI2GomBm6BZMZMCFuAYzx1EXYqb4YUB7IpMjJR01U3a1HXhreAcqu13F4dXr6o+Z4zh/AtgHRsCE/2cC3AJFW4lLdBm0qYQ6/RSRsJ3UGaaIlOjzmSKSBeYiM1aRZ+AQWK3GMfBKhiI7Krdr6yiyPCXfI0ORYkq+T4Yib8AJsFaN0CMvZCgig7nILFXEEq5JyDxUZ9E6sAgsAdvAOfCeg0g4OHcb1l4BrtVFNhsXt5/cAnAvK9IGYAP4khcB5hMyV7IiwBnwVEUfgdNfskeSIsBBm/dvYEtV5C4y7SiS76mKjCPTjiP5OVWRTvPWcZGAV8R8a0XxHgl4j5j3SBTvETWsyyNKbiIl+nykiIS/p+rcpIgU6LPXKFLJDNDlIkmi9pV9KNIzZdhOyZVwHMfqfANKiIQn/4RZwwAAAABJRU5ErkJggg=="
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                </img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;