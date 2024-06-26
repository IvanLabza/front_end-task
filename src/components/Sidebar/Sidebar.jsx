import React from "react";
import logo from "../../assets/icon/setting.png";
import item from "../../assets/Ellipse.png";
import SidebarList from "./SidebarList/SidebarList";

const Sidebar = ({ ToggleMenu, setToggleMenu }) => {
  return (
    <nav className={"nav" + `${ToggleMenu ? " is-hidden" : ""}`}>
      <div className="container">
        <button
          type="btn"
          onClick={() => setToggleMenu(false)}
          className="toggle-sidebar"
        >
          x
        </button>
        <div className="nav__logo">
          <a href="/">
            <img src={logo} alt="logo" />
            <div className="nav__logo-text">
              <h2>Dashboard</h2>
              <span>v.01</span>
            </div>
          </a>
        </div>

        <SidebarList />
        <div className="nav__wraps">
          <img src={item} alt="item" />
          <div className="nav__wraps-text">
            <span>Evano</span>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
