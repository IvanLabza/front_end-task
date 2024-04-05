import { ReactSVG } from "react-svg";

import img1 from "../../../assets/icon/icon _ 24 _ outline _ key-square.svg";
import img2 from "../../../assets/icon/3d-square.svg";
import img3 from "../../../assets/icon/item.svg";
import img4 from "../../../assets/icon/wallet-money.svg";
import img5 from "../../../assets/icon/discount-shape.svg";
import img6 from "../../../assets/icon/message-question.svg";
import img7 from "../../../assets/icon/Vector.svg";

const SidebarList = () => {
  return (
    <ul className="nav__list">
      <li className="nav__list-item">
        <a href="/" className="nav__list-link">
          <div className="wraps">
            <ReactSVG
              src={img1}
              beforeInjection={(svg) => {
                svg.classList.add("my-svg");
              }}
            />
            Dashboard
          </div>
        </a>
      </li>
      <li className="nav__list-item">
        <a href="/" className="nav__list-link">
          <div className="wraps">
            <ReactSVG
              src={img2}
              beforeInjection={(svg) => {
                svg.classList.add("my-svg");
              }}
            />
            Product
          </div>

          <div className="wrap">
            <ReactSVG
              src={img7}
              beforeInjection={(svg) => {
                svg.classList.add("my-svg");
              }}
            />
          </div>
        </a>
      </li>
      <li className="nav__list-item">
        <a href="/" className="nav__list-link">
          <div className="wraps">
            <ReactSVG
              src={img3}
              beforeInjection={(svg) => {
                svg.classList.add("my-svg");
              }}
            />
            Customers
          </div>

          <div className="wrap">
            <ReactSVG
              src={img7}
              beforeInjection={(svg) => {
                svg.classList.add("my-svg");
              }}
            />
          </div>
        </a>
      </li>
      <li className="nav__list-item">
        <a href="/" className="nav__list-link">
          <div className="wraps">
            <ReactSVG
              src={img4}
              beforeInjection={(svg) => {
                svg.classList.add("my-svg");
              }}
            />
            Income
          </div>

          <div className="wrap">
            <ReactSVG
              src={img7}
              beforeInjection={(svg) => {
                svg.classList.add("my-svg");
              }}
            />
          </div>
        </a>
      </li>
      <li className="nav__list-item">
        <a href="/" className="nav__list-link">
          <div className="wraps">
            <ReactSVG
              src={img5}
              beforeInjection={(svg) => {
                svg.classList.add("my-svg");
              }}
            />
            Promote
          </div>

          <div className="wrap">
            <ReactSVG
              src={img7}
              beforeInjection={(svg) => {
                svg.classList.add("my-svg");
              }}
            />
          </div>
        </a>
      </li>
      <li className="nav__list-item">
        <a href="/" className="nav__list-link">
          <div className="wraps">
            <ReactSVG
              src={img6}
              beforeInjection={(svg) => {
                svg.classList.add("my-svg");
              }}
            />
            Help
          </div>

          <div className="wrap">
            <ReactSVG
              src={img7}
              beforeInjection={(svg) => {
                svg.classList.add("my-svg");
              }}
            />
          </div>
        </a>
      </li>
    </ul>
  );
};

export default SidebarList;
