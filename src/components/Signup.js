import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

const Signup = () => {
  return (
    <div id="modalIndex">
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column gap-3">
            <div
              className="d-flex justify-content-end"
              style={{ marginRight: "-10px" }}
            >
              <div data-bs-dismiss="modal" aria-label="Close">
                <CancelIcon
                  style={{
                    cursor: "pointer",
                    color: "#FFFFFF",
                  }}
                />
              </div>
            </div>
            <div
              className="modal-content"
              style={{ width: "736px", height: "513px" }}
            >
              <div
                className="modal-header d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#effff4",
                  width: "730px",
                  height: "50px",
                  borderRadius: "8px, 8px, 0px, 0px",
                  borderBottom: "#effff4",
                }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#008a45",
                    marginTop: "15px",
                  }}
                >
                  Let's learn, share & inspire each other with our passion for
                  computer engineering. Sign up now &#129311;
                </p>
              </div>
              <div className="row">
                <div className="col-6 p-5 pt-4">
                  <p
                    style={{
                      width: "173px",
                      height: "31px",
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "31.2px",
                    }}
                  >
                    Create Account
                  </p>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        style={{
                          width: "160px",
                          height: "46px",
                          backgroundColor: "#f7f8fa",
                          color: "#868686",
                          borderTopLeftRadius: "2px",
                          border: "solid 1px #d9d9db",
                          padding: "15px",
                        }}
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        style={{
                          width: "166px",
                          height: "46px",
                          backgroundColor: "#f7f8fa",
                          color: "#868686",
                          borderTopRightRadius: "2px",
                          border: "solid 1px #d9d9db",

                          padding: "15px",
                        }}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <input
                    type="email"
                    style={{
                      width: "320px",
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
                      width: "320px",
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
                      width: "320px",
                      height: "46px",
                      backgroundColor: "#f7f8fa",
                      color: "#868686",
                      border: "solid 1px #d9d9db",
                      padding: "15px",
                    }}
                    placeholder="Confirm Password"
                  />
                  <input
                    className="mt-3"
                    type="submit"
                    value="Create Account"
                    style={{
                      width: "320px",
                      height: "40px",
                      borderRadius: "20p",
                      backgroundColor: "#2f6ce5",
                      border: "none",
                      color: "#ffffff",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "16px",
                      textAlign: "center",
                    }}
                  />
                  <p
                    style={{
                      width: "320px",
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
                      width: "320px",
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
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center flex-column">
                  <div
                    style={{
                      marginLeft: "80px",
                      fontWeight: "600",
                      fontSize: "13px",
                      color: "#3d3d3d",
                    }}
                  >
                    Already have an account?{" "}
                    <button
                      style={{
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#2f6ce5",
                        background: "transparent",
                        border: "none",
                        marginLeft: "-6px",
                      }}
                      data-bs-target="#exampleModalToggle2"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                    >
                      Sign In
                    </button>
                  </div>
                  <img src="./images/Group.png" alt="" />
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: "400",
                      marginLeft: "-20px",
                      color: "#3d3d3d",
                    }}
                  >
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column gap-3">
            <div
              className="d-flex justify-content-end"
              style={{ marginRight: "-10px" }}
            >
              <div data-bs-dismiss="modal" aria-label="Close">
                <CancelIcon
                  style={{
                    cursor: "pointer",
                    color: "#FFFFFF",
                  }}
                />
              </div>
            </div>
            <div
              className="modal-content"
              style={{
                maxWidth: "736px",
                maxHeight: "455px",
              }}
            >
              <div
                className="modal-header d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#effff4",
                  width: "730px",
                  height: "50px",
                  borderRadius: "8px, 8px, 0px, 0px",
                  borderBottom: "#effff4",
                }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#008a45",
                    marginTop: "15px",
                  }}
                >
                  Let's learn, share & inspire each other with our passion for
                  computer engineering. Sign up now &#129311;
                </p>
              </div>
              <div className="row">
                <div className="col-6 p-5 pt-4">
                  <p
                    style={{
                      width: "173px",
                      height: "31px",
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "31.2px",
                    }}
                  >
                    Sign In
                  </p>

                  <input
                    type="email"
                    style={{
                      width: "320px",
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
                      width: "320px",
                      height: "46px",
                      backgroundColor: "#f7f8fa",
                      color: "#868686",
                      border: "solid 1px #d9d9db",
                      padding: "15px",
                    }}
                    placeholder="Password"
                  />

                  <input
                    className="mt-3"
                    type="submit"
                    value="Sign In"
                    style={{
                      width: "320px",
                      height: "40px",
                      borderRadius: "20px",
                      backgroundColor: "#2f6ce5",
                      border: "none",
                      color: "#ffffff",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "16px",
                      textAlign: "center",
                    }}
                  />
                  <p
                    style={{
                      width: "320px",
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
                      width: "320px",
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
                  <p
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      fontWeight: "500",
                      fontSize: "12px",
                      letterSpacing: "-0.8%",
                      lineHeight: "16px",
                      color: "#000000",
                      marginTop: "30px",
                    }}
                  >
                    Forgot Password?
                  </p>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center flex-column">
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "13px",
                      color: "#3d3d3d",
                    }}
                  >
                    Don't have an account yet?{" "}
                    <button
                      style={{
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#2f6ce5",
                        background: "transparent",
                        border: "none",
                        marginLeft: "-6px",
                      }}
                      data-bs-target="#exampleModalToggle"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                    >
                      Create new for free!
                    </button>
                  </div>
                  <img src="./images/Group.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
