import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EditIcon from "@mui/icons-material/Edit";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Home from "./Home";
import Modal from "./Modal";

const Feed = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <Home />
      <div
        className="container-md container-fluid mt-5"
        style={{ color: "#f1f3f5" }}
      >
        <div className="d-none d-sm-none d-lg-block d-md-block d-xxl-block d-xl-block">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "-8px",
            }}
          >
            <div
              style={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "20.8px",
                color: "#8a8a8a",
                width: "358px",
                height: "21px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  style={{
                    paddingBottom: "16.5px",
                    borderBottom: "1px solid",
                    color: "#000000",
                  }}
                >
                  All Posts(32)
                </p>
                <p>Article</p>
                <p>Event</p>
                <p>Education</p>
                <p>Job</p>
              </div>
            </div>
            <div className="d-flex gap-3">
              <button
                style={{
                  backgroundColor: "#edeef0",
                  color: "black",
                  width: "133px",
                  height: "36px",
                  borderRadius: "4px",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "19.5px",
                  border: "none",
                }}
              >
                Write a Post
              </button>
              <button
                style={{
                  backgroundColor: "#2f6ce5",
                  color: "#ffff",
                  width: "125px",
                  height: "36px",
                  borderRadius: "4px",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "19.5px",
                  border: "none",
                }}
                className="d-flex justify-content-center align-items-center gap-1"
                onClick={() => setShowModal(true)}
              >
                <GroupAddIcon style={{ width: "22px", height: "22px" }} />
                Join Group
              </button>
              {showModal && <Modal closeModal={closeModal} />}
            </div>
          </div>
          <hr style={{ color: "#e0e0e0", border: "#e0e0e0 1px solid" }} />
        </div>
        <div className="row mb-5">
          <div className="col-xl-8 col-md-12 col-12">
            <div className="d-block d-sm-block d-lg-none d-md-none d-xxl-none d-xl-none">
              <div className="container d-flex justify-content-between justify-content-center align-items-center overflow-hidden">
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "18.2px",
                    color: "#212529",
                    marginLeft: "4%",
                    marginTop: "10px",
                  }}
                >
                  Posts(368)
                </p>
                <div style={{ marginRight: "4%" }}>
                  <button
                    style={{
                      backgroundColor: "#f1f3f5",
                      width: "106px",
                      height: "32px",
                      borderRadius: "4px",
                      color: "#000000",
                      border: "none",
                    }}
                  >
                    <p className="d-flex justify-content-center align-items-center gap-2">
                      Filter: All <ArrowDropDownIcon />
                    </p>
                  </button>
                </div>
              </div>
            </div>
            {/* cards start */}
            {/* <div className="mt-3" style={{border: red solid"> */}
            <div className="card mb-3 p-sm-0 p-0" style={{ width: "auto" }}>
              <img
                src="../images/snow.png"
                className="card-img-top"
                alt="image"
              />
              <div className="card-body overflow-hidden">
                <h5 className="card-title">
                  <span>✍️</span>
                  <span style={{ marginTop: "4px" }}> Article</span>
                </h5>
                <div className="d-flex justify-content-between">
                  <p className="card-text">
                    What if famous brands had regular fonts? Meet RegulaBrands!
                  </p>
                  <div
                    className="dots"
                    style={{ width: "28px", height: "28px", color: "#000000" }}
                  >
                    <MoreHorizIcon />
                  </div>
                </div>
                <p className="card-text2">
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div className="d-flex justify-content-between">
                  <div className="profile-text">
                    <img src="./images/person1.png" alt="image" />
                    <div className="d-flex flex-column">
                      <p className="pt-lg-2 pt-md-3 pt-3">Sarthak Kamra</p>
                      <p
                        style={{
                          color: "#525252",
                          fontWeight: "500",
                          fontSize: "14px",
                          lineHeight: "18.2px",
                          marginTop: "-5px",
                        }}
                        className="d-block d-sm-block d-lg-none d-md-block d-xxl-none d-xl-none"
                      >
                        1.4k views
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-5">
                    <div
                      style={{
                        color: "#525252",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "18.2px",
                      }}
                      className="d-none d-sm-none d-lg-block d-md-none d-xxl-block d-xl-block mt-2"
                    >
                      <div
                        className="d-flex justify-content-center align-items-center gap-1"
                        // style={{ border: "solid 1px" }}
                      >
                        <VisibilityOutlinedIcon
                          style={{
                            marginTop: "-6px",
                            width: "20.5px",
                            height: "15.25px",
                            color: "#525252",
                          }}
                        />
                        <p style={{ marginTop: "8px" }}> 1.4k views</p>
                      </div>
                    </div>
                    <div
                      className="share-btn d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#f1f3f5",
                        width: "70px",
                        height: "36px",
                        borderRadius: "4px",
                        // border: "1px solid red",
                      }}
                    >
                      <ShareIcon
                        style={{
                          width: "13.5px",
                          height: "14.94",
                          color: "#2d2d2d",
                        }}
                      />
                      <p
                        className="d-block d-sm-block d-lg-none d-md-block d-xxl-none d-xl-none"
                        style={{
                          color: "#212529",
                          fontWeight: "400",
                          fontSize: "12px",
                          //   border: "1px solid red",
                          marginTop: "15px",
                        }}
                      >
                        Share
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 p-sm-0 p-0" style={{ width: "auto" }}>
              <img src="./images/door.png" className="card-img-top" alt="..." />
              <div className="card-body overflow-hidden">
                <h5 className="card-title">
                  <span>🔬️</span>
                  <span> Education</span>
                </h5>
                <div className="d-flex justify-content-between">
                  <p className="card-text">
                    Tax Benefits for Investment under National Pension Scheme
                    launched by Government
                  </p>
                  <div
                    className="dots"
                    style={{ width: "28px", height: "28px", color: "#000000" }}
                  >
                    <MoreHorizIcon />
                  </div>
                </div>
                <p className="card-text2">
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div className="d-flex justify-content-between">
                  <div className="profile-text">
                    <img src="./images/person2.png" alt="image" />
                    <div className="d-flex flex-column">
                      <p className="pt-lg-2 pt-md-3 pt-3">Sarah West</p>
                      <p
                        style={{
                          color: "#525252",
                          fontWeight: "500",
                          fontSize: "14px",
                          lineHeight: "18.2px",
                          marginTop: "-5px",
                        }}
                        className="d-block d-sm-block d-lg-none d-md-block d-xxl-none d-xl-none"
                      >
                        1.4k views
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-5">
                    <div
                      style={{
                        color: "#525252",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "18.2px",
                      }}
                      className="d-none d-sm-none d-lg-block d-md-none d-xxl-block d-xl-block"
                    >
                      <div
                        className="d-flex justify-content-center align-items-center gap-1"
                        // style={{ border: "solid 1px" }}
                      >
                        <VisibilityOutlinedIcon
                          style={{
                            marginTop: "-6px",
                            width: "20.5px",
                            height: "15.25px",
                            color: "#525252",
                          }}
                        />
                        <p style={{ marginTop: "8px" }}> 1.4k views</p>
                      </div>
                    </div>
                    <div
                      className="share-btn d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#f1f3f5",
                        width: "70px",
                        height: "36px",
                        borderRadius: "4px",
                        // border: "1px solid red",
                      }}
                    >
                      <ShareIcon
                        style={{
                          width: "13.5px",
                          height: "14.94",
                          color: "#2d2d2d",
                        }}
                      />
                      <p
                        className="d-block d-sm-block d-lg-none d-md-block d-xxl-none d-xl-none"
                        style={{
                          color: "#212529",
                          fontWeight: "400",
                          fontSize: "12px",
                          //   border: "1px solid red",
                          marginTop: "15px",
                        }}
                      >
                        Share
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 p-sm-0 p-0" style={{ width: "auto" }}>
              <img
                src="./images/car.png"
                className="card-img-top"
                alt="image"
              />
              <div className="card-body overflow-hidden">
                <h5 className="card-title">
                  <span>🗓️</span>
                  <span> Meetup</span>
                </h5>
                <div className="d-flex justify-content-between">
                  <p className="card-text">
                    Finance & Investment Elite Social Mixer @Lujiazui
                  </p>
                  <div
                    className="dots"
                    style={{ width: "28px", height: "28px", color: "#000000" }}
                  >
                    <MoreHorizIcon />
                  </div>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    color: "#000000",
                    width: "358px",
                  }}
                >
                  <div className="d-flex justify-content-center gap-1">
                    <TodayOutlinedIcon
                      style={{ width: "20px", height: "20px", margin: "1px" }}
                    />
                    <p>Fri, 12 Oct, 2018</p>
                  </div>
                  <div className="d-flex justify-content-center gap-1">
                    <LocationOnOutlinedIcon
                      style={{ width: "20px", height: "20px", margin: "1px" }}
                    />
                    <p>Ahmedabad, India</p>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-center align-items-center mb-5"
                  style={{
                    width: "auto",
                    height: "36px",
                    borderRadius: "10px",
                    border: "0.7px #a9aeb8 solid",
                  }}
                >
                  <button
                    style={{
                      fontWeight: "600",
                      fontSize: "13px",
                      lineHeight: "18.25px",
                      color: "#e56135",
                      width: "218px",
                      height: "18px",
                      background: "transparent",
                      border: "none",
                    }}
                  >
                    Visit Website
                  </button>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "-20px" }}
                >
                  <div className="profile-text">
                    <img src="./images/person3.png" alt="image" />
                    <div className="d-flex flex-column">
                      <p className="pt-lg-2 pt-md-3 pt-3">Ronal Jones</p>
                      <p
                        style={{
                          color: "#525252",
                          fontWeight: "500",
                          fontSize: "14px",
                          lineHeight: "18.2px",
                          marginTop: "-5px",
                        }}
                        className="d-block d-sm-block d-lg-none d-md-block d-xxl-none d-xl-none"
                      >
                        1.4k views
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-5">
                    <div
                      style={{
                        color: "#525252",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "18.2px",
                      }}
                      className="d-none d-sm-none d-lg-block d-md-none d-xxl-block d-xl-block"
                    >
                      <div
                        className="d-flex justify-content-center align-items-center gap-1"
                        // style={{ border: "solid 1px" }}
                      >
                        <VisibilityOutlinedIcon
                          style={{
                            marginTop: "-6px",
                            width: "20.5px",
                            height: "15.25px",
                            color: "#525252",
                          }}
                        />
                        <p style={{ marginTop: "8px" }}> 1.4k views</p>
                      </div>
                    </div>
                    <div
                      className="share-btn d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#f1f3f5",
                        width: "70px",
                        height: "36px",
                        borderRadius: "4px",
                        // border: "1px solid red",
                      }}
                    >
                      <ShareIcon
                        style={{
                          width: "13.5px",
                          height: "14.94",
                          color: "#2d2d2d",
                        }}
                      />
                      <p
                        className="d-block d-sm-block d-lg-none d-md-block d-xxl-none d-xl-none"
                        style={{
                          color: "#212529",
                          fontWeight: "400",
                          fontSize: "12px",
                          //   border: "1px solid red",
                          marginTop: "15px",
                        }}
                      >
                        Share
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-sm-0 p-0" style={{ width: "auto" }}>
              <div className="card-body overflow-hidden">
                <h5 className="card-title">
                  <span>💼️</span>
                  <span> Job</span>
                </h5>
                <div className="d-flex justify-content-between">
                  <p className="card-text" style={{ maxWidth: "600px" }}>
                    Software Developer
                  </p>
                  <div
                    className="dots"
                    style={{ width: "28px", height: "28px", color: "#000000" }}
                  >
                    <MoreHorizIcon />
                  </div>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    color: "#000000",
                    width: "399px",
                  }}
                >
                  <div className="d-flex gap-1">
                    <div>
                      <WorkOutlineOutlinedIcon
                        style={{
                          width: "16px",
                          height: "16px",
                          marginTop: "-2px",
                        }}
                      />
                    </div>
                    <p>Innovaccer Analytics Private Ltd.</p>
                  </div>
                  <div className="d-flex gap-1">
                    <div>
                      <LocationOnOutlinedIcon
                        style={{
                          width: "16px",
                          height: "16px",
                          marginTop: "-4px",
                        }}
                      />
                    </div>
                    <p>Noida, India</p>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-center align-items-center mb-5"
                  style={{
                    width: "auto",
                    height: "36px",
                    borderRadius: "10px",
                    border: "0.7px #a9aeb8 solid",
                  }}
                >
                  <button
                    style={{
                      fontWeight: "600",
                      fontSize: "13px",
                      lineHeight: "18.25px",
                      color: "#02b875",
                      width: "218px",
                      height: "18px",
                      background: "transparent",
                      border: "none",
                    }}
                  >
                    Apply on Timesjobs
                  </button>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="profile-text">
                    <img src="./images/person4.png" alt="image" />
                    <div className="d-flex flex-column">
                      <p className="pt-lg-2 pt-md-3 pt-3">Joseph Gray</p>
                      <p
                        style={{
                          color: "#525252",
                          fontWeight: "500",
                          fontSize: "14px",
                          lineHeight: "18.2px",
                          marginTop: "-5px",
                        }}
                        className="d-block d-sm-block d-lg-none d-md-block d-xxl-none d-xl-none"
                      >
                        1.4k views
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-5">
                    <div
                      style={{
                        color: "#525252",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "18.2px",
                      }}
                      className="d-none d-sm-none d-lg-block d-md-none d-xxl-block d-xl-block"
                    >
                      <div
                        className="d-flex justify-content-center align-items-center gap-1"
                        // style={{ border: "solid 1px" }}
                      >
                        <VisibilityOutlinedIcon
                          style={{
                            marginTop: "-6px",
                            width: "20.5px",
                            height: "15.25px",
                            color: "#525252",
                          }}
                        />
                        <p style={{ marginTop: "8px" }}> 1.4k views</p>
                      </div>
                    </div>
                    <div
                      className="share-btn d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#f1f3f5",
                        width: "70px",
                        height: "36px",
                        borderRadius: "4px",
                        // border: "1px solid red",
                      }}
                    >
                      <ShareIcon
                        style={{
                          width: "13.5px",
                          height: "14.94",
                          color: "#2d2d2d",
                        }}
                      />
                      <p
                        className="d-block d-sm-block d-lg-none d-md-block d-xxl-none d-xl-none"
                        style={{
                          color: "#212529",
                          fontWeight: "400",
                          fontSize: "12px",
                          //   border: "1px solid red",
                          marginTop: "15px",
                        }}
                      >
                        Share
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* cards end */}
          </div>
          <div className="col-xl-4 d-flex flex-column d-none d-sm-none d-lg-none d-md-none d-xxl-block d-xl-block">
            <div
              className=""
              style={{
                marginTop: "15%",
                marginLeft: "25%",
              }}
            >
              <div
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "18.2px",
                  color: "#000000",
                  width: "77px",
                  height: "18px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "243px",
                    // border: "solid 1px red",
                  }}
                >
                  <div className="d-flex mt-1">
                    <LocationOnOutlinedIcon
                      style={{ width: "18px", height: "18px" }}
                    />
                    <p>Nodia, India</p>
                  </div>
                  <EditIcon />
                </div>
              </div>
              <hr
                style={{
                  color: "#b8b8b8",
                  border: "#b8b8b8 0.4px solid",
                  width: "auto",
                }}
              />
              <div
                className="mt-3 d-flex gap-1"
                style={{ width: "243px", height: "32px" }}
              >
                <InfoOutlinedIcon
                  style={{ widows: "16px", height: "16px", color: "#8a8a8a" }}
                />
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "15.6px",
                    height: "32px",
                    color: "#8a8a8a",
                  }}
                >
                  {" "}
                  Your location will help us serve better and extend a
                  personalised experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
