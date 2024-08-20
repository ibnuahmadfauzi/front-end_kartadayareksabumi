import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTelegram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import NoPage from "./NoPage"; // Import the NoPage component
import PopularArticle from "../../components/PopularArticle";
import SearchArticle from "../../components/SearchArticle";
import useFetch from "../../services/general_data";

function Article() {
  const { slug } = useParams();

  const { data, loading, error } = useFetch(
    "https://api.kartadayareksabumi.com/articles/" + slug
  );

  if (loading) {
    return (
      <div className="load-gif">
        <img src={process.env.PUBLIC_URL + "/assets/images/load.gif"} />
      </div>
    );
  }

  if (error) {
    return <NoPage />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="card border-0">
            <div className="card-body">
              <div className="p-4">
                <h3 className="fw-bold">{data.data.title}</h3>
                <small className="d-block">
                  <FontAwesomeIcon icon={faCalendarDays} />{" "}
                  <span className="ms-1">{data.data.publication_date}</span>
                </small>
                <div className="mt-3 d-flex align-items-center">
                  <small className="me-2">Share :</small>{" "}
                  <a
                    href={
                      "https://api.whatsapp.com/send?text=" +
                      window.location.href
                    }
                    target="_blank"
                    className="fs-4 text-dark mx-1"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a href="#" className="fs-4 text-dark mx-1">
                    <FontAwesomeIcon icon={faTelegram} />
                  </a>
                  <a
                    href={
                      "https://twitter.com/intent/tweet?text=Your%20Text%20Here&url=YourURLHere" +
                      window.location.href
                    }
                    className="fs-4 text-dark mx-1"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                  <a href="#" className="fs-4 text-dark mx-1">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
                <div className="mb-3">
                  <img src={data.data.image} className="w-100" />
                </div>
                <div
                  style={{ textAlign: "justify" }}
                  dangerouslySetInnerHTML={{ __html: data.data.content }}
                />
                <div className="mt-4">
                  <small className="fw-bold">Tag: </small>{" "}
                  <small>
                    {" "}
                    {data.data.tag.map((value) => (
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
          <SearchArticle />
          <br />
          <PopularArticle />
        </div>
      </div>
    </div>
  );
}

export default Article;
