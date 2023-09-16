import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import CancelIcon from "@mui/icons-material/Cancel";

const Modal = ({ closeModal }) => {
  const [loginPage, setLoginPage] = useState(true);
  const formHandler = (e) => {
    e.preventDefault();
    if (loginPage) {
      setLoginPage(false);
    } else {
      setLoginPage(true);
    }
  };
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper " onClick={closeModal}></div>
      <div className="modal-container">
        <div className="d-flex justify-content-between">
          <p
            style={{
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "23.4px",
            }}
          >
            {loginPage ? "Create Account" : "Welcome back!"}
          </p>
          <CancelIcon onClick={closeModal} />
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <div>
              <input
                type="text"
                style={{
                  width: "50%",
                  height: "46px",
                  backgroundColor: "#f7f8fa",
                  color: "#868686",
                  borderTopLeftRadius: "2px",
                  border: "solid 1px #d9d9db",
                  padding: "15px",
                }}
                placeholder="First Name"
                hidden={!loginPage}
              />

              <input
                type="text"
                style={{
                  width: "50%",
                  height: "46px",
                  backgroundColor: "#f7f8fa",
                  color: "#868686",
                  borderTopRightRadius: "2px",
                  border: "solid 1px #d9d9db",

                  padding: "15px",
                }}
                placeholder="Last Name"
                hidden={!loginPage}
              />
              <input
                type="email"
                style={{
                  width: "100%",
                  height: "46px",
                  backgroundColor: "#f7f8fa",
                  color: "#868686",
                  border: "solid 1px #d9d9db",
                  padding: "15px",
                }}
                placeholder="Email"
              />
              <input
                type="password"
                style={{
                  width: "100%",
                  height: "46px",
                  backgroundColor: "#f7f8fa",
                  color: "#868686",
                  border: "solid 1px #d9d9db",
                  padding: "15px",
                }}
                placeholder="Password"
              />
              <input
                type="password"
                style={{
                  width: "100%",
                  height: "46px",
                  backgroundColor: "#f7f8fa",
                  color: "#868686",
                  border: "solid 1px #d9d9db",
                  padding: "15px",
                }}
                placeholder="Confirm Password"
                hidden={!loginPage}
              />
              <div className="mt-4 d-flex justify-content-between">
                <input
                  type="submit"
                  value={loginPage ? "Create Account" : "Sign In"}
                  style={{
                    width: "150px",
                    height: "36px",
                    borderRadius: "20px",
                    backgroundColor: "#2f6ce5",
                    border: "none",
                    color: "#ffffff",
                    fontWeight: "600",
                    fontSize: "13px",
                    lineHeight: "16px",
                    textAlign: "center",
                  }}
                />
                <a
                  href="/"
                  style={{
                    color: "#495057",
                    fontWeight: "500",
                    fontSize: "13px",
                    lineHeight: "16.9px",
                  }}
                  onClick={formHandler}
                >
                  {loginPage ? "or, Sign In" : "or, Create Account"}
                </a>
              </div>
              <p
                style={{
                  width: "100%",
                  height: "38px",
                  borderRadius: "2px",
                  backgroundColor: "#f7f8fa",
                  border: "solid 0.6px #d9d9db",
                  cursor: "pointer",
                }}
                className="d-flex justify-content-center align-items-center gap-2 mt-4"
              >
                <img src="./images/facebook.png" alt="" />
                <a
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  Sign up with Facebook
                </a>
              </p>
              <p
                style={{
                  width: "100%",
                  height: "38px",
                  borderRadius: "2px",
                  backgroundColor: "#f7f8fa",
                  border: "solid 0.6px #d9d9db",
                  cursor: "pointer",
                  marginTop: "-7px",
                }}
                className="d-flex justify-content-center align-items-center gap-2"
              >
                <img src="./images/google.png" alt="" />
                <a
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  Sign up with Google
                </a>
              </p>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  textAlign: "center",
                  width: "100%",
                  height: "32px",
                  letterSpacing: "-0.8%",
                  lineHeight: "16px",
                  fontWeight: "400",
                  fontSize: "11px",
                }}
              >
                <p
                  className="mt-3"
                  style={{ width: "240px" }}
                  hidden={!loginPage}
                >
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
                <a
                  href="/"
                  style={{
                    fontWeight: "500",
                    letterSpacing: "-0.8%",
                    color: "#212529",
                    textDecoration: "none",
                  }}
                  hidden={loginPage}
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.querySelector(".registrationModal")
  );
};
{
  /* <button className="btn-cancel" onClick={closeModal}>
  CANCEL
</button>; */
}
export default Modal;
