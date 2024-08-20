import React from "react";
import { useParams } from "react-router-dom";
import dataArticles from "../services/articles_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTelegram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import NoPage from "./NoPage"; // Import the NoPage component
import PopularArticle from "../components/PopularArticle";

function Article() {
  const { slug } = useParams();

  let newArticle;

  const articleFound = dataArticles.articles.some((value) => {
    if (slug === value.slug) {
      newArticle = value;
      return true;
    }
    return false;
  });

  if (!articleFound) {
    // If article not found, render NoPage component
    return <NoPage />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="card border-0">
            <div className="card-body">
              <div className="p-4">
                <h3 className="fw-bold">{newArticle.title}</h3>
                <small className="d-block">
                  <FontAwesomeIcon icon={faCalendarDays} />{" "}
                  <span className="ms-1">{newArticle.publication_date}</span>
                </small>
                <div className="mt-3 d-flex align-items-center">
                  <small className="me-2">Share :</small>{" "}
                  <a href="#" className="fs-4 text-dark mx-1">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a href="#" className="fs-4 text-dark mx-1">
                    <FontAwesomeIcon icon={faTelegram} />
                  </a>
                  <a href="#" className="fs-4 text-dark mx-1">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                  <a href="#" className="fs-4 text-dark mx-1">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
                <div className="mb-3">
                  <img src={newArticle.image} className="w-100" />
                </div>
                <div
                  style={{ textAlign: "justify" }}
                  dangerouslySetInnerHTML={{ __html: newArticle.content }}
                />
                <div className="mt-4">
                  <small className="fw-bold">Tag: </small>{" "}
                  <small>
                    {" "}
                    {newArticle.tag.map((value) => (
                      <span
                        key={value}
                        className="bg-secondary rounded text-light px-2 py-1 mx-1"
                      >
                        {value}
                      </span>
                    ))}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <PopularArticle />
        </div>
      </div>
    </div>
  );
}

export default Article;
