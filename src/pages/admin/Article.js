import { useEffect, useState } from "react";
import {
  faBlog,
  faPencil,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataTable from "react-data-table-component";
import axios from "axios";

const AdminArticle = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(""); // State untuk menyimpan kata kunci pencarian

  useEffect(() => {
    // Mengambil data dari API
    axios
      .get("https://api.kartadayareksabumi.com/articles")
      .then((response) => {
        setArticles(response.data.data.articles); // Menyimpan data yang diterima ke dalam state
        setLoading(false); // Menyatakan bahwa loading telah selesai
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error); // Menyimpan error ke dalam state
        setLoading(false);
      });
  }, []); // Kosong array dependency berarti hanya akan dijalankan sekali saat komponen pertama kali dirender

  if (loading) {
    return (
      <div className="load-gif">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/load.gif"}
          alt="Loading..."
        />
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const columns = [
    {
      name: "No.",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "80px",
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      width: "500px",
    },
    {
      name: "Author",
      selector: (row) => row.author,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.publication_date,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <button className="btn btn-sm btn-primary">
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button className="btn btn-sm btn-danger ms-2">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ),
    },
  ];

  // const articles = data.data.articles; // Mengambil data articles

  // Filter data berdasarkan kata kunci pencarian
  const filteredArticles = articles.filter((article) => {
    return (
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.author.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="fw-bold">
          <span className="d-inline-block" style={{ width: "50px" }}>
            <FontAwesomeIcon icon={faBlog} />
          </span>
          Article
        </h3>
        <a href="/kdr-auth/article/create" className="btn btn-primary btn-sm">
          <FontAwesomeIcon icon={faPlus} />{" "}
          <span className="ms-2">Create New Article</span>
        </a>
      </div>
      <hr />

      {/* Input untuk pencarian */}
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <input
            type="text"
            placeholder="Search by title or author"
            className="form-control mb-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Mengupdate state pencarian
          />
        </div>
      </div>

      <DataTable
        columns={columns}
        data={filteredArticles} // Gunakan data yang sudah difilter
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default AdminArticle;
