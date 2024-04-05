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
          <img src={img1} alt="Dashboard" />
          Dashboard
        </a>
      </li>
      <li className="nav__list-item">
        <a href="/" className="nav__list-link">
          <img src={img2} alt="Product" />
          Product
        </a>
        <img src={img7} alt="" />
      </li>
      <li className="nav__list-item">
        <a href="/" className="nav__list-link">
          <img src={img3} alt="Customers" />
          Customers
        </a>
        <img src={img7} alt="" />
      </li>
      <li className="nav__list-item">
        <a href="/" className="nav__list-link">
          <img src={img4} alt="Income" />
          Income
        </a>
        <img src={img7} alt="" />
      </li>
      <li className="nav__list-item">
        <a href="/" className="nav__list-link">
          <img src={img5} alt="Promote" />
          Promote
        </a>
        <img src={img7} alt="" />
      </li>
      <li className="nav__list-item">
        <a href="/" className="nav__list-link">
          <img src={img6} alt="Help" />
          Help
        </a>
        <img src={img7} alt="" />
      </li>
    </ul>
  );
};

export default SidebarList;