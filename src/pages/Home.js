/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
// import data_product
import dataProduct from "../services/product_service";

// import data_characteristic
import dataCharacteristic from "../services/general_service";

// import data about
import data from "../services/about_me_service";

// import data general
import general_data from "../services/general_service";

// import data partner
import partner_data from "../services/partner_service";

// import Bootstrap Component
import { Container } from "react-bootstrap";

// Import jQuery
import $ from "jquery";

const Header = () => {
  return (
    <Container>
      <div className="row align-items-center kdr-hero-section">
        <div className="col-lg-6 py-5">
          <h1>{general_data[0].title}</h1>
          <h3>{general_data[0].description}</h3>
          <p>
            <a href="#product">Layanan Kami</a>
          </p>
        </div>
        <div className="col-lg-6 py-5 kdr-hero-section-image-container">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/" +
              general_data[0].heroImage
            }
            alt="Hero Image"
            className="img-fluid"
          />
        </div>
      </div>
    </Container>
  );
};

const AboutMe = () => {
  return (
    <div className="about-me-section" id="about-me">
      <Container>
        <h3 className="text-center">Tentang Kami</h3>
        <div className="row align-items-center">
          <div className="col-lg-4 about-me-section-image-container">
            <img
              src={process.env.PUBLIC_URL + "/assets/logo/" + data[0].image}
              alt="Logo KDR"
            />
          </div>
          <div
            className="col-lg-8"
            dangerouslySetInnerHTML={{ __html: data[0].description }}
          />
        </div>
      </Container>
    </div>
  );
};

const Characteristic = () => {
  return (
    <Container>
      <div className="kdr-characteristic-group">
        {dataCharacteristic[0].characteristic.map((value) => (
          <div key={value.id} className="kdr-characteristic-item">
            <div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/characteristic/" +
                  value.characteristicImage
                }
              />
            </div>
            <h5>{value.characteristicName}</h5>
            <p>{value.characteristicDescription}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Product = () => {
  return (
    <div className="kdr-product-section" id="product">
      <Container>
        <h3 className="text-center">Layanan Kami</h3>
        {dataProduct.map((value, index) =>
          (index + 1) % 2 != 0 ? (
            <div key={value.id} className="row align-items-center">
              <div className="col-lg-6 kdr-product-section-img-container">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/product/" +
                    value.image
                  }
                />
              </div>
              <div
                className="col-lg-6 kdr-product-section-description-container"
                dangerouslySetInnerHTML={{ __html: value.description }}
              />
            </div>
          ) : (
            <div
              key={value.id}
              className="row align-items-center kdr-product-section-reverse"
            >
              <div
                className="col-lg-6 kdr-product-section-description-container"
                dangerouslySetInnerHTML={{ __html: value.description }}
              />
              <div className="col-lg-6 kdr-product-section-img-container">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/product/" +
                    value.image
                  }
                />
              </div>
            </div>
          )
        )}
      </Container>
    </div>
  );
};

const Partner = () => {
  return (
    <div className="kdr-partner-section">
      <Container>
        <h3>Partner Kami</h3>
        <div className="row">
          <div className="col-lg-4">
            <div className="kdr-partner-box" id="kdr-partner-box-1">
              <img />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="kdr-partner-box" id="kdr-partner-box-2">
              <img />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="kdr-partner-box" id="kdr-partner-box-3">
              <img />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Characteristic />
      <Product />
      <Partner />
    </>
  );
};

$(document).ready(function () {
  let partner1 = 0;
  let partner2 = 1;
  let partner3 = 2;
  let dataPartnerLength = partner_data.length;

  $("#kdr-partner-box-1 img").hide();
  $("#kdr-partner-box-2 img").hide();
  $("#kdr-partner-box-3 img").hide();
  $("#kdr-partner-box-1 img").attr(
    "src",
    process.env.PUBLIC_URL + "/assets/images/partner/" + partner_data[0].image
  );
  $("#kdr-partner-box-2 img").attr(
    "src",
    process.env.PUBLIC_URL + "/assets/images/partner/" + partner_data[1].image
  );
  $("#kdr-partner-box-3 img").attr(
    "src",
    process.env.PUBLIC_URL + "/assets/images/partner/" + partner_data[2].image
  );
  $("#kdr-partner-box-1 img").fadeIn();
  $("#kdr-partner-box-2 img").fadeIn();
  $("#kdr-partner-box-3 img").fadeIn();
  partner1++;
  partner2++;
  partner3++;

  setInterval(function () {
    if (partner1 >= dataPartnerLength) {
      partner1 = 0;
      $("#kdr-partner-box-1 img").fadeOut(function () {
        $("#kdr-partner-box-1 img").attr(
          "src",
          process.env.PUBLIC_URL +
            "/assets/images/partner/" +
            partner_data[partner1].image
        );
        partner1++;
      });
      $("#kdr-partner-box-1 img").fadeIn();
    } else {
      $("#kdr-partner-box-1 img").fadeOut(function () {
        $("#kdr-partner-box-1 img").attr(
          "src",
          process.env.PUBLIC_URL +
            "/assets/images/partner/" +
            partner_data[partner1].image
        );
        partner1++;
      });
      $("#kdr-partner-box-1 img").fadeIn();
    }
  }, 4000);

  setInterval(function () {
    if (partner2 >= dataPartnerLength) {
      partner2 = 0;
      $("#kdr-partner-box-2 img").fadeOut(function () {
        $("#kdr-partner-box-2 img").attr(
          "src",
          process.env.PUBLIC_URL +
            "/assets/images/partner/" +
            partner_data[partner2].image
        );
        partner2++;
      });
      $("#kdr-partner-box-2 img").fadeIn();
    } else {
      $("#kdr-partner-box-2 img").fadeOut(function () {
        $("#kdr-partner-box-2 img").attr(
          "src",
          process.env.PUBLIC_URL +
            "/assets/images/partner/" +
            partner_data[partner2].image
        );
        partner2++;
      });
      $("#kdr-partner-box-2 img").fadeIn();
    }
  }, 4000);

  setInterval(function () {
    if (partner3 >= dataPartnerLength) {
      partner3 = 0;
      $("#kdr-partner-box-3 img").fadeOut(function () {
        $("#kdr-partner-box-3 img").attr(
          "src",
          process.env.PUBLIC_URL +
            "/assets/images/partner/" +
            partner_data[partner3].image
        );
        partner3++;
      });
      $("#kdr-partner-box-3 img").fadeIn();
    } else {
      $("#kdr-partner-box-3 img").fadeOut(function () {
        $("#kdr-partner-box-3 img").attr(
          "src",
          process.env.PUBLIC_URL +
            "/assets/images/partner/" +
            partner_data[partner3].image
        );
        partner3++;
      });
      $("#kdr-partner-box-3 img").fadeIn();
    }
  }, 4000);

  // Fade In Scroll
  $(window).scroll(function () {
    $(".about-me-section").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1" }, 1000);
      }
    });
  });
  $(window).scroll(function () {
    $(".kdr-characteristic-group").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1" }, 1000);
      }
    });
  });
  $(window).scroll(function () {
    $(".kdr-product-section").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1" }, 1000);
      }
    });
  });
  $(window).scroll(function () {
    $(".kdr-partner-section").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1" }, 1000);
      }
    });
  });
});

export default Home;
