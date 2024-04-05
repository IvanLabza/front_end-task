import img from "../../assets/icon/search.png";

const Form = () => {
  return (
    <div className="form">
      <div className="form__text">
        <h2>All Customers</h2>
        <span>Active Members</span>
      </div>
      <form className="form__fields">
        <div className="form__container">
          <label className="form__fields-label">
            <img src={img} alt="Search" />
            <input
              className="form__fields-input"
              type="text"
              placeholder="Search"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;
