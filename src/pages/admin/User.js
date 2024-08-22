import {
  faFaceSmileWink,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataTable from "react-data-table-component";
import users from "../../services/user_service";
import { useState } from "react";

const User = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(users);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div>
          <button className="btn btn-sm btn-warning text-light me-2">
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button className="btn btn-sm btn-danger text-light">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ),
      sortable: false,
    },
  ];

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);

    const filteredUsers = users.filter(
      (user) =>
        (user.name && user.name.toLowerCase().includes(value)) ||
        (user.username && user.username.toLowerCase().includes(value))
    );

    setFilteredData(filteredUsers);
  };

  return (
    <div>
      <h3 className="fw-bold">
        <span className="d-inline-block" style={{ width: "50px" }}>
          <FontAwesomeIcon icon={faFaceSmileWink} />
        </span>
        User
      </h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-lg-3">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
        </div>
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default User;
