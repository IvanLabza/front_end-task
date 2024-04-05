import React, { useState } from "react";

const Pagination = ({ totalPages = 40 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPageVisible = 4;

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / maxPageVisible) * maxPageVisible;
    return new Array(maxPageVisible).fill().map((_, idx) => start + idx + 1);
  };

  const next = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };

  const prev = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const paginationGroup = getPaginationGroup();

  return (
    <div className="pagination">
      <p className="pagination-text">Showing data 1 to 8 of 256K entries</p>
      <div className="wraps">
        <button
          onClick={prev}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          {"<"}
        </button>
        {paginationGroup.map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            disabled={currentPage === item}
            className={`pagination-page ${
              currentPage === item ? "active" : null
            }`}
          >
            {item}
          </button>
        ))}
        <span>...</span>
        <button className="pagination-page">{totalPages}</button>
        <button
          onClick={next}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
