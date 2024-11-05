import { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import karir from "../../services/karir";

const Careers = () => {
  //   const [show, setShow] = useState(false); // State untuk modal
  const [modalContent, setModalContent] = useState({ value: "" }); // State untuk konten modal
  const [lgShow, setLgShow] = useState(false);

  // Fungsi untuk menghilangkan karakter HTML dan memotong artikel
  function truncateArticle(body, wordLimit) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(body, "text/html");
    const textContent = doc.body.textContent || "";
    const words = textContent.split(" ").slice(0, wordLimit).join(" ");
    return words + (textContent.split(" ").length > wordLimit ? "..." : "");
  }

  // Fungsi untuk membuka modal dengan konten artikel yang lengkap
  const handleShow = (value) => {
    setModalContent({ value });
    setLgShow(true);
  };

  // Fungsi untuk menutup modal
  const handleClose = () => setLgShow(false);

  return (
    <div className="mt-4">
      <Container>
        <h5 className="fw-bold text-center mb-4">~ We Are Hiring ~</h5>
        <div className="my-3">
          {karir.map((value) => (
            <div key={value.id} className="card border-0 mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <h6 className="fw-semibold">
                    {value.title}{" "}
                    {value.status === "closed" ? (
                      <span class="badge text-bg-danger">Closed</span>
                    ) : (
                      <span class="badge text-bg-primary">Open</span>
                    )}
                  </h6>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleShow(value)} // Ketika tombol diklik, tampilkan modal
                  >
                    Learn More
                  </Button>
                </div>
                <p>
                  <small>
                    <div
                      style={{ textAlign: "justify" }}
                      dangerouslySetInnerHTML={{
                        __html: value.body,
                      }}
                    />
                  </small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Modal untuk menampilkan artikel lengkap */}
      <Modal size="lg" show={lgShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="fw-semibold m-0">{modalContent.value.title}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p className="fw-semibold m-0">Kualifikasi :</p>
            <ul>
              {modalContent.value.qualifications
                ? modalContent.value.qualifications.map((item) => (
                    <li>{item}</li>
                  ))
                : ""}
            </ul>
            <p className="fw-semibold m-0">Benefit :</p>
            <ul>
              {modalContent.value.benefit
                ? modalContent.value.benefit.map((item) => <li>{item}</li>)
                : ""}
            </ul>
            <p className="mt-3 mb-0">
              <span className="fw-semibold d-block">Lokasi Penempatan :</span>
              <span>{modalContent.value.location}</span>
            </p>
            <div className="py-2">
              {modalContent.value.status === "closed" ? (
                <a
                  href="#"
                  className="w-100 btn fw-semibold btn-danger disabled"
                >
                  Closed
                </a>
              ) : (
                <a
                  href="mailto:hrc@arunikacorp.com"
                  className="w-100 btn fw-semibold btn-secondary"
                >
                  Apply
                </a>
              )}
            </div>
            <p className="text-center">
              <span className="d-block">
                Kirimkan Surat Lamaran dan CV/Portofolio Anda ke:
              </span>
              <span className="d-block">
                hrc@arunikacorp.com paling lambat {modalContent.value.dateline}.
              </span>
              <span className="d-block">
                CP: 0813-7070-9790 atau 0821-3232-7990
              </span>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Careers;
