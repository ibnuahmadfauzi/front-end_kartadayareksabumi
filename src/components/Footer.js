import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="kdr-footer-section" id="contact">
        <Container>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="text-center mt-5">Hubungi Kami</h3>
              <div className="p-5 kdr-footer-section-box-item">
                <h4>Main Office</h4>
                <p>
                  Dk. Kramatsari 05/05. Karanggeneng, Boyolali, Jawa Tengah,
                  Indonesia, 57312
                </p>
                <h4>Workshop</h4>
                <p>
                  Jl. Sermata, Rembang, Kec. Sananwetan, Kota Blitar, Jawa Timur
                  66131
                </p>
                <h4>Kontak</h4>
                <p>
                  +6281-232-743474
                  <br />
                  admin@kartadayareksabumi.com
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="text-center mt-5">Tinggalkan Pesan</h3>
              <form className="p-5 kdr-footer-section-box-item">
                <div className="row mb-3">
                  <div className="col-lg-6">
                    <label className="form-label">Nama :</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Nama ..."
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">Email :</label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      placeholder="Email ..."
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Subjek :</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Subjek Pesan ..."
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Pesan :</label>
                  <textarea
                    className="form-control"
                    placeholder="Pesan ..."
                    rows="5"
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="w-100 btn btn-secondary">
                    Kirim
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <p className="text-center">Karta Daya Reksabumi | 2024</p>
      </div>
    </>
  );
};

export default Footer;
