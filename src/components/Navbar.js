import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Signup from "./Signup";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div
          className="container-fluid"
          style={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            // border: "1px solid",
          }}
        >
          <a className="navbar-brand" href="#">
            <img src="./images/whole.png" alt="LOGO" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            tabindex="-1"
            id="navbarSupportedContent"
            style={{ zIndex: "1" }}
          >
            <div className="ms-auto mt-5 mt-lg-0 mb-2 mb-lg-0">
              <div
                className="navSearch"
                // className=" d-flex justify-content-center align-items-center"
                style={{
                  width: "360px",
                  height: "42px",
                  top: "16px",
                  borderRadius: "21px",
                  backgroundColor: "#F2F2F2",
                }}
              >
                <i
                  className="fa fa-search"
                  style={{
                    color: "#7A7A7A",
                    width: "22px",
                    height: "22px",
                    top: "26px",
                    left: "2.75px",
                    // border: "solid 1px",
                    marginTop: "12.5px",
                    marginLeft: "20px",
                  }}
                  aria-hidden="true"
                ></i>
                <input
                  type="text"
                  style={{
                    textDecoration: "none",
                    background: "transparent",
                    height: "19px",
                    width: "242px",
                    fontSize: "14px",
                    marginTop: "12.5px",
                    marginLeft: "0px",
                    border: "none",
                    color: "#5C5C5C",
                  }}
                  placeholder="Search for your favorite groups in ATG"
                />
              </div>
            </div>
            <div
              className="navbar-nav mb-2 mb-lg-0 d-flex ms-auto"
              style={{
                fontSize: "16px",
                lineHeight: "20.8px",
                fontWeight: "700",
              }}
            >
              <button
                type="button"
                className="d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalToggle"
                style={{
                  color: "#2E2E2E",
                  textDecoration: "none",
                  border: "none",
                  background: "transparent",
                }}
              >
                Create account.{" "}
                <span
                  style={{
                    color: "#2F6CE5",
                    marginTop: "3px",
                    marginLeft: "3px",
                  }}
                >
                  It's free!{" "}
                  <span
                    style={{
                      color: "#2E2E2E",
                      width: "24px",
                      height: "24px",
                      marginLeft: "-6px",
                    }}
                  >
                    <ArrowDropDownIcon />
                  </span>
                </span>
              </button>
              <Signup />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
