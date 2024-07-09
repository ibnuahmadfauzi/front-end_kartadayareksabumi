import { Container } from "react-bootstrap";

// Logo KDR
import kdrLogo from "../assets/images/logo/kdr-logo.png";
import { useEffect, useState } from "react";
import getAboutMe from "../services/about_me_service";

const AboutMe = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    getAboutMe((data) => {
      console.log(data);
    });
  }, []);
  return (
    <div className="about-me-section">
      <Container>
        <h3 className="text-center">Tentang Kami</h3>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <img src={kdrLogo} alt="Logo KDR" />
          </div>
          <div className="col-lg-8">
            <p>
              <b>Karta Daya Reksabumi</b> adalah perusahaan konsultan dibidang
              manajemen data spasial, perencanaan pembangunan wilayah dan
              pengembangan sistem & teknologi informasi.
            </p>
            <p>
              Dari tahun 2013 sampai sekarang secara perorangan maupun tim telah
              banyak pekerjaan - pekerjaan yang dipercayakan pada kami untuk
              pengerjaan Pemetaan, GIS, Feasibility Study, dan Web Development.
            </p>
            <p>
              Kami percaya data geospasial & tata ruang wilayah yang well
              managed, dianalisa secara tepat dan mampu terintegrasi dengan
              teknologi informasi yang dapat diakses seluruh stakeholders, akan
              membantu proses pengambilan keputusan secara komprehensif &
              sustainable di era Industri Digital saat ini.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
