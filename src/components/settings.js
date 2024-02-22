import React, { useState } from "react";
import "./settings.css";
import {
  Button,
  Card,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";

const Settings = () => {
  // notification dropdown

  const [anchorEl, setAnchorEl] = useState(null);
  const [drop, setDrop] = useState(false);
  const handleDropClick = (e) => {
    setAnchorEl(e.currentTarget);
    setDrop(true);
  };
  const handleDropClose = () => {
    setAnchorEl(null);
    setDrop(false);
  };

  const [content, setContent] = useState("");

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <div className="__variable_e76efa __variable_95782f">
        <div className="main-page-wrapper">
          <div className="dashboard-body">
            <div className="position-relative">
              <header className="dashboard-header">
                <div className="d-flex align-items-center justify-content-end">
                  <button className="dash-mobile-nav-toggler d-block d-md-none me-auto">
                    <span></span>
                  </button>
                  <form className="search-form" action="#">
                    <input type="text" placeholder="Search here.." />
                    <button>
                      <img
                        alt="search"
                        loading="lazy"
                        width="16"
                        height="17"
                        decoding="async"
                        data-nimg="1"
                        className="lazy-img m-auto"
                        style={{ color: "transparent" }}
                        src="https://jobi-nextjs.vercel.app/_next/static/media/icon_10.35c41a63.svg"
                      />
                    </button>
                  </form>
                  <div className="profile-notification ms-2 ms-md-5 me-4">
                    <button
                      className="noti-btn dropdown-toggle"
                      type="button"
                      id="notification-dropdown"
                      aria-controls={drop ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={drop ? "true" : undefined}
                      onClick={handleDropClick}
                    >
                      <img
                        alt="Notification"
                        loading="lazy"
                        width="21"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        className="lazy-img"
                        src="https://jobi-nextjs.vercel.app/_next/static/media/icon_11.32f89e94.svg"
                        style={{ color: "transparent" }}
                      />
                      <div className="badge-pill"></div>
                    </button>
                    <Menu
                      //className="dropdown-menu"
                      //aria-labelledby="notification-dropdown"
                      anchorEl={anchorEl}
                      open={drop}
                      onClose={handleDropClose}
                    >
                      <MenuItem
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        <MenuList className="style-none notify-list">
                          <MenuItem
                            sx={{ gap: "15px" }}
                            className="d-flex align-items-center unread"
                          >
                            <img
                              alt="icon"
                              loading="lazy"
                              width="36"
                              height="36"
                              decoding="async"
                              data-nimg="1"
                              className="lazy-img icon"
                              src="https://jobi-nextjs.vercel.app/_next/static/media/icon_36.d044b698.svg"
                              style={{ color: "transparent" }}
                            />
                            <div className="flex-fill ps-2">
                              <Typography variant="inherit">
                                You have 3 new mails
                              </Typography>
                              <span className="time">3 hours ago</span>
                            </div>
                          </MenuItem>
                          <MenuItem
                            sx={{ gap: "15px" }}
                            className="d-flex align-items-center"
                          >
                            <img
                              alt="icon"
                              loading="lazy"
                              width="36"
                              height="36"
                              decoding="async"
                              data-nimg="1"
                              className="lazy-img icon"
                              src="https://jobi-nextjs.vercel.app/_next/static/media/icon_37.34c12156.svg"
                              style={{ color: "transparent" }}
                            />
                            <div className="flex-fill ps-2">
                              <Typography variant="inherit">
                                You have 5 new mails
                              </Typography>
                              <span className="time">6 hours ago</span>
                            </div>
                          </MenuItem>
                          <MenuItem
                            sx={{ gap: "15px" }}
                            className="d-flex align-items-center unread"
                          >
                            <img
                              alt="icon"
                              loading="lazy"
                              width="36"
                              height="36"
                              decoding="async"
                              data-nimg="1"
                              className="lazy-img icon"
                              src="https://jobi-nextjs.vercel.app/_next/static/media/icon_38.2db06cc7.svg"
                              style={{ color: "transparent" }}
                            />
                            <div className="flex-fill ps-2">
                              <Typography variant="inherit">
                                You have 7 new mails
                              </Typography>
                              <span className="time">9 hours ago</span>
                            </div>
                          </MenuItem>
                        </MenuList>
                      </MenuItem>
                    </Menu>
                  </div>
                  <div>
                    <a
                      className="job-post-btn tran3s"
                      href="../employ-dashboard/submit-job.html"
                    >
                      Post a Job
                    </a>
                  </div>
                </div>
              </header>

              <h2 className="main-title">Account Settings</h2>

              <Card style={{ margin: "25px", borderRadius: "25px" }}>
                <div className="bg-white card-box border-20">
                  <h4 className="dash-title-three">Edit &amp; Update</h4>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="dash-input-wrapper mb-20">
                          <label for="">First Name</label>
                          <input type="text" placeholder="John Doe" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="dash-input-wrapper mb-20">
                          <label for="">Last Name</label>
                          <input type="text" placeholder="Kabir" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="dash-input-wrapper mb-20">
                          <label for="">Email</label>
                          <input
                            type="email"
                            placeholder="johndoe@example.com"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="dash-input-wrapper mb-20">
                          <label for="">Phone Number</label>
                          <input type="tel" placeholder="+810 321 889 021" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="dash-input-wrapper mb-20">
                          <label for="">Password</label>
                          <input type="password" />
                        </div>
                      </div>
                    </div>
                    <div className="button-group d-inline-flex align-items-center mt-30">
                      <a
                        href="#"
                        className="dash-btn-two tran3s me-3 rounded-3"
                      >
                        Save
                      </a>
                      <a href="#" className="dash-cancel-btn tran3s">
                        Cancel
                      </a>
                    </div>
                  </form>
                </div>
              </Card>

              <div className="mt-45">
                <div className="position-relative">
                  <h2 className="main-title">Change Password</h2>
                  <Card style={{ margin: "25px", borderRadius: "25px" }}>
                    <div className="bg-white card-box border-20">
                      <form action="#">
                        <div className="row">
                          <div className="col-12">
                            <div className="dash-input-wrapper mb-20">
                              <label for="">Old Password*</label>
                              <input type="password" />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="dash-input-wrapper mb-20">
                              <label for="">New Password*</label>
                              <input type="password" />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="dash-input-wrapper mb-20">
                              <label for="">Confirm Password*</label>
                              <input type="password" />
                            </div>
                          </div>
                        </div>
                        <div className="button-group d-inline-flex align-items-center">
                          <a href="#" className="dash-btn-two tran3s rounded-3">
                            Save &amp; Updated
                          </a>
                        </div>
                      </form>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Toastify"></div>
        <button className="scroll-top">
          <i className="bi bi-arrow-up-short"></i>
        </button>
      </div>
    </div>
  );
};

export default Settings;
