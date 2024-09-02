import { faFloppyDisk, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../services/general_data";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const General = () => {
  const [aboutDescription, setAboutDescription] = useState("");
  const [content, setContent] = useState("");

  const handleEditorChange = (content, editor) => {
    setContent(content);
    console.log("Content was updated:", content);
  };

  //   console.log(dataArticles.articles);
  const { data, loading, error } = useFetch(
    "https://api.kartadayareksabumi.com/"
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

  return (
    <div className="container">
      <h3 className="fw-bold">
        <span className="d-inline-block" style={{ width: "50px" }}>
          <FontAwesomeIcon icon={faGear} />
        </span>
        General
      </h3>
      <hr />
      <form>
        <div className="mb-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="general-title" className="form-label">
                  Title :
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={data.data.general.title}
                  id="general-title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="general-description" className="form-label">
                  Subtitle :
                </label>
                <textarea className="form-control" rows={5}>
                  {data.data.general.description}
                </textarea>
              </div>
              <div className="mb-3">
                <label className="form-label"> About Description :</label>
                <Editor
                  apiKey="w6tpfwzlhan55099d0w5k02viw05zvhtpow811d9cqjree2v" // Ganti dengan API key yang valid jika diperlukan
                  initialValue="" // Konten default
                  onEditorChange={handleEditorChange}
                  init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row mb-3">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Logo :</label>
                    <label htmlFor="general-logo">
                      <div className="d-flex justify-content-center">
                        <img
                          src={data.data.general.logoImage}
                          className="w-50"
                        />
                      </div>
                    </label>
                    <input
                      type="file"
                      id="general-logo"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Banner :</label>
                    <label htmlFor="general-hero" className="mb-3">
                      <img
                        src={data.data.general.heroImage}
                        className="w-100"
                      />
                    </label>
                    <input
                      type="file"
                      id="general-hero"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">About Image :</label>
                <label
                  htmlFor="general-about-image"
                  className="mb-3 d-block text-center"
                >
                  <img
                    src={data.data.general.logoImage}
                    style={{ maxHeight: "200px" }}
                  />
                </label>
                <input
                  type="file"
                  id="general-about-image"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-secondary btn-sm">
            <FontAwesomeIcon icon={faFloppyDisk} />
            <span className="ms-2">Simpan</span>
          </button>
        </div>
      </form>
      {/* <form>
        <div className="mb-4">
          <h5>General</h5>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="general-title" className="form-label">
                  Title :
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={data.data.general.title}
                  id="general-title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="general-description" className="form-label">
                  Description :
                </label>
                <textarea className="form-control" rows={5}>
                  {data.data.general.description}
                </textarea>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Logo :</label>
                    <label htmlFor="general-logo">
                      <div className="d-flex justify-content-center">
                        <img
                          src={data.data.general.logoImage}
                          className="w-50"
                        />
                      </div>
                    </label>
                    <input type="file" id="general-logo" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Banner :</label>
                    <label htmlFor="general-hero" className="mb-3">
                      <img
                        src={data.data.general.heroImage}
                        className="w-100"
                      />
                    </label>
                    <input type="file" id="general-hero" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form> */}
    </div>
  );
};

export default General;
