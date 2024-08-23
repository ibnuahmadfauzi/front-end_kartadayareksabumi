import { faStrikethrough } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const ArticleEdit = (props) => {
  const [content, setContent] = useState("");

  const handleEditorChange = (content, editor) => {
    setContent(content);
    console.log("Content was updated:", content);
  };

  return (
    <div>
      <h3 className="fw-bold">
        <span className="d-inline-block" style={{ width: "50px" }}>
          <FontAwesomeIcon icon={faStrikethrough} />
        </span>
        Article Editor
      </h3>
      <hr />
      <form>
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="title . . ."
              />
            </div>
            <div className="mb-3">
              <Editor
                apiKey="w6tpfwzlhan55099d0w5k02viw05zvhtpow811d9cqjree2v" // Ganti dengan API key yang valid jika diperlukan
                initialValue="" // Konten default
                onEditorChange={handleEditorChange}
                init={{
                  height: 500,
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
          <div className="col-lg-4">
            <div>
              <h6 className="fw-bold text-center">thumbnail</h6>
              <label htmlFor="article-edit-thumbnail">
                <img
                  src="https://demirsondaj.com.tr/wp-content/uploads/demo/placeholder.svg"
                  className="w-100"
                />
                <input
                  type="file"
                  className="form-control mt-3"
                  id="article-edit-thumbnail"
                />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ArticleEdit;
