import {
  faBellConcierge,
  faPencil,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../services/general_data";
import { useState } from "react";
import DataTable from "react-data-table-component";

const Service = () => {
  const { data, loading, error } = useFetch(
    "https://api.kartadayareksabumi.com/"
  );

  const [search, setSearch] = useState("");

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

  console.log(data.data.products);

  const columns = [
    {
      name: "No.",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "80px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
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
      width: "150px",
    },
  ];

  const products = data.data.products; // Mengambil data articles

  // Filter data berdasarkan kata kunci pencarian
  const filteredProducts = products.filter((products) => {
    return products.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="fw-bold">
          <span className="d-inline-block" style={{ width: "50px" }}>
            <FontAwesomeIcon icon={faBellConcierge} />
          </span>
          Service
        </h3>
        <a href="/kdr-auth/article/create" className="btn btn-primary btn-sm">
          <FontAwesomeIcon icon={faPlus} />{" "}
          <span className="ms-2">Create New Service</span>
        </a>
      </div>
      <hr />
      {/* Input untuk pencarian */}
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <input
            type="text"
            placeholder="Search by service name"
            className="form-control mb-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Mengupdate state pencarian
          />
        </div>
      </div>

      <DataTable
        columns={columns}
        data={filteredProducts} // Gunakan data yang sudah difilter
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default Service;
