import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "../components/DashboardSideBar";
import ProtectedRoute from "../components/ProtectedRoute";
// import CryptoJS from "crypto-js";

// const secretKey = "your-secret-key";
// console.log(CryptoJS.AES.encrypt("password", secretKey).toString());
// console.log(
//   CryptoJS.AES.decrypt(
//     "U2FsdGVkX19fWs2pSlyM1ShpRjFCuDqwJMBKkHFdyEg=",
//     secretKey
//   ).toString(CryptoJS.enc.Utf8)
// );

const ThirdLayout = () => {
  return (
    <ProtectedRoute>
      <Container fluid>
        <div className="row mt-3">
          <div className="col-lg-3">
            <DashboardSideBar />
          </div>
          <div className="col-lg-9">
            <Container fluid>
              <div className="card border-0">
                <div className="card-body">
                  <Outlet />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </ProtectedRoute>
  );
};

export default ThirdLayout;
