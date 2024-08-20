import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const SearchArticle = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const keyword = event.target.keyword.value;
    navigate(`/artikel/keyword/${keyword}`);
  };

  return (
    <div className="card border-0">
      <div className="card-body">
        <h6 className="fw-bold text-center">Cari Artikel</h6>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-sm"
              id="keyword"
              name="keyword"
              placeholder="Cari artikel ..."
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-sm btn-secondary w-100">
              <FontAwesomeIcon icon={faMagnifyingGlass} /> Cari
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchArticle;
