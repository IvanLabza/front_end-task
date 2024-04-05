import Form from "../Form/Form";
import List from "../List/List";
import Pagination from "../Pagination/Pagination";
import Sidebar from "../Sidebar/Sidebar";
import contact from "../../js/contact";

const Main = () => {
  return (
    <div className="main">
      <Form />
      <List contact={contact} />
      <Pagination />
    </div>
  );
};

export default Main;
