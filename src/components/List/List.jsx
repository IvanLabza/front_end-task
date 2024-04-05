import React from "react";

const List = ({ contact }) => {
  return (
    <table className="contact-list">
      <thead>
        <tr className="contact-list__row row-header">
          <th className="contact-list__header">Customer Name</th>
          <th className="contact-list__header company">Company</th>
          <th className="contact-list__header phone">Phone Number</th>
          <th className="contact-list__header email">Email</th>
          <th className="contact-list__header country">Country</th>
          <th className="contact-list__header">Status</th>
        </tr>
      </thead>
      <tbody>
        {contact.map((item) => (
          <tr key={item.name} className="contact-list__row row-cell">
            <td className="contact-list__cell">{item.name}</td>
            <td className="contact-list__cell company">{item.company}</td>
            <td className="contact-list__cell phone">{item.phone}</td>
            <td className="contact-list__cell email">{item.email}</td>
            <td className="contact-list__cell country">{item.country}</td>
            <td className="contact-list__cell">
              <span className={item.status ? "Active" : "Inactive"}>
                {item.status ? "Active" : "Inactive"}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
