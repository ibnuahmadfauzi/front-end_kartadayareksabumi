import React, { useState } from "react";
import dataArticles from "../services/articles_data";

// Komponen Pagination
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button
        className="btn btn-primary btn-sm me-2"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="btn btn-primary btn-sm ms-2"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const totalArticles = dataArticles.articles.length;
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  // Hitung artikel yang ditampilkan di halaman saat ini
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = dataArticles.articles.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {currentArticles.map((value) => (
              <div className="col-lg-6" key={value.id}>
                <div className="p-3">
                  <div>
                    <img
                      src={value.image}
                      className="img-fluid mb-3"
                      alt={value.title}
                    />
                    <h6 className="fw-bold">{value.title}</h6>
                    <p>{value.excerpt}</p>
                    <a href={"/article/" + value.slug}>Read more ...</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default Articles;
