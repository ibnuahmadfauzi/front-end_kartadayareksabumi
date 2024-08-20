import React, { useState } from "react";
import PopularArticle from "../../components/PopularArticle";
import SearchArticle from "../../components/SearchArticle";
import { useParams } from "react-router-dom";
import useFetch from "../../services/general_data";

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

const Articles = (props) => {
  const { keyword } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = useFetch(
    "https://api.kartadayareksabumi.com/articles"
  );

  if (loading) {
    return (
      <div className="load-gif">
        <img src={process.env.PUBLIC_URL + "/assets/images/load.gif"} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  let articlesList;

  if (props.type === "general") {
    articlesList = data.data.articles;
  }

  if (props.type === "search") {
    if (keyword.length !== 0) {
      const lowerCaseKeyword = keyword.toLowerCase();
      const findArticles = data.data.articles.filter((value) =>
        value.title.toLowerCase().includes(lowerCaseKeyword)
      );

      articlesList = findArticles;
    }
  }

  const articlesPerPage = 6;
  const totalArticles = articlesList.length;
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  // Hitung artikel yang ditampilkan di halaman saat ini
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = articlesList.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  let titleList = "";

  if (props.type === "general") {
    titleList = "Semua Artikel";
  } else if (props.type === "search") {
    titleList = "Cari : " + keyword;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h5 className="fw-bold text-center">~ {titleList} ~</h5>
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
                    <a href={"/artikel/" + value.slug}>Read more ...</a>
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
        <div className="col-lg-4">
          <SearchArticle />
          <br />
          <PopularArticle />
        </div>
      </div>
    </div>
  );
};

export default Articles;
