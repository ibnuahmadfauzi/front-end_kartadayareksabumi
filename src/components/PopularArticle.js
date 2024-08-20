import useFetch from "../services/general_data";

const PopularArticle = () => {
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

  const popular = data.data.articles.sort((a, b) => b.hit - a.hit);
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
