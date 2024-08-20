import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import dataArticles from "../services/articles_data";

const PopularArticle = () => {
  const popular = dataArticles.articles.sort((a, b) => b.hit - a.hit);
  const top5Articles = popular.slice(0, 5);

  return (
    <div className="card border-0">
      <div className="card-body">
        <h6 className="text-center fw-bold">Artikel Terpopuler</h6>
        <hr />
        {top5Articles.map((value) => (
          <a
            href={"/artikel/" + value.slug}
            className="text-decoration-none text-dark"
          >
            <div className="mb-3 d-flex align-items-center">
              <img
                style={{ width: "30%" }}
                src={value.image}
                className="rounded"
              />
              <div className="ms-2">
                <small className="d-block">{value.title}</small>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularArticle;
