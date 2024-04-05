import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleButtonClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    if (!isValid) {
      setIsValidEmail(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logos">
          <div className="footer__logos-skilline">
            <Logo />
          </div>
          <div className="footer__virtual-class">Virtual Class for Zoom</div>
        </div>

        <div className="footer__forma">
          <div className="footer__forma-title">
            Subscribe to get our Newsletter
          </div>

          <div className="footer__forma-input-container">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`footer__input ${
                !isValidEmail ? "invalid-email" : ""
              }`}
            />

            <button
              type="submit"
              onClick={handleButtonClick}
              className={`footer__btn btn ${
                isValidEmail ? "send-button" : "invalid-button"
              }`}
            >
              Відправити
            </button>
          </div>
          <div className="footer__ul">
            <div className="footer__li">
              <NavLink
                activeClassName="is-active"
                to="/careers"
                onClick={() => setIsHiden(false)}
              >
                Careers
              </NavLink>
            </div>
            <div className="footer__li">
              <NavLink
                activeClassName="is-active"
                to="/privacypolicy"
                onClick={() => setIsHiden(false)}
              >
                Privacy Policy
              </NavLink>
            </div>
            <div className="footer__li">
              <NavLink
                activeClassName="is-active"
                to="/termsandconditions"
                onClick={() => setIsHiden(false)}
              >
                Terms & Conditions
              </NavLink>
            </div>
          </div>

          <div className="footer__about">© 2021 Class Technologies Inc.</div>
        </div>
      </div>
    </footer>
  );
};
