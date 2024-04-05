import Form from "../Form/Form";
import List from "../List/List";
import Pagination from "../Pagination/Pagination";
import Sidebar from "../Sidebar/Sidebar";
import contact from "../../js/contact";

const Main = ({ setToggleMenu }) => {
  return (
    <div className="main">
      <h1 className="title">Hello Evano 👋🏼,</h1>
      <div className="container">
        <button
          type="btn"
          onClick={() => setToggleMenu(true)}
          className="toggle-sidebar toggle-sidebar__open"
        >
          <span></span>
        </button>
        <Form />
        <List contact={contact} />
        <Pagination />
      </div>
    </div>
  );
};

export default Main;
