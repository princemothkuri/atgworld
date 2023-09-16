import React, { useEffect, useState } from "react";
// import Feed from "./Feed";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Modal from "./Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const [property, setProperty] = useState(true);

  useEffect(() => {
    function handleResize() {
      // Update the state or perform any other actions when the
      // browser is resized
      if (window.innerWidth) {
        let size = window.innerWidth;
        if (size <= 414) {
          setProperty(false);
        } else {
          setProperty(true);
        }
      }
    }

    // Attach the event listener to the window object
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bgImage">
        <div
          className="mask"
          id="mask"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            height: property ? "440px" : "236px",
            transition: "2s all",
          }}
        >
          <div className="d-block d-sm-block d-lg-none d-md-none d-xxl-none d-xl-none">
            <div
              className="back-btn"
              style={{
                color: "white",
                position: "absolute",
                // border: "1px solid red",
              }}
            >
              <ArrowBackOutlinedIcon
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
            </div>

            <div className="join-btn">
              <button
                className="btn btn-outline-light"
                onClick={() => setShowModal(true)}
              >
                Join Group
              </button>
              {showModal && <Modal closeModal={closeModal} />}
            </div>
          </div>
          <div className="text-white">
            <h1>Computer Engineering</h1>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </div>
      </div>
      {/* <Feed /> */}
    </>
  );
};

export default Home;
