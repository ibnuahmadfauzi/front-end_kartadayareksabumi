import axios from "axios";

const getAboutMe = (callback) => {
  axios
    .get("http://localhost/kdr-web/api.php")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getAboutMe;
