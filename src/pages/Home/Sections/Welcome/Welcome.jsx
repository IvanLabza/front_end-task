import { Link } from "react-router-dom";
import Teenager from "../../../../assets/welcome/teenager.png";
import Icon1 from "../../../../assets/welcome/screen1.png";
import Icon2 from "../../../../assets/welcome/screen2.png";
import Icon3 from "../../../../assets/welcome/screen3.png";
import Icon4 from "../../../../assets/welcome/screen4.png";
import Done from "../../../../assets/welcome/done.png";

export const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome__container">
        <div className="welcome__info">
          <h1 className="title welcome__title">
            <span>Studying</span> Online is now much easier
          </h1>
          <p className="desc welcome__desc">
            Skilline is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="welcome__buttons">
            <Link to="/join" className="btn welcome__btn-join">
              Join for free
            </Link>
            <a href="/" className="btn welcome__btn-play">
              {/* <img src={Play} alt="Play" /> */}
              <span className="play"></span>
              Watch how it works
            </a>
          </div>
        </div>
        <div className="welcome__images">
          <img className="welcome__img" src={Teenager} alt="Teenager" />
          <img className="welcome__icon" src={Icon1} alt="Icon" />
          <img className="welcome__icon" src={Icon2} alt="Icon" />
          <img className="welcome__icon" src={Icon3} alt="Icon" />
          <img className="welcome__icon" src={Icon4} alt="Icon" />
          <img className="welcome__icon" src={Done} alt="Done" />
        </div>
      </div>
    </section>
  );
};