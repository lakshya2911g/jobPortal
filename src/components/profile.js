import React, { useState } from "react";
import "./profile.css";
import {
  Box,
  Card,
  CardMedia,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  MenuList,
  Typography,
  Select,
} from "@mui/material";

const Profile = () => {
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

  // place dropdown
  const [place, setPlace] = useState("");

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
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

              <h2 className="main-title">My Profile</h2>

              <Card style={{ margin: "25px", borderRadius: "25px" }}>
                <div className="bg-white card-box border-20">
                  <div className="user-avatar-setting d-flex align-items-center mb-30">
                    <img
                      alt="avatar"
                      loading="lazy"
                      width="68"
                      height="68"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img user-img"
                      style={{ color: "transparent" }}
                      src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_02.9163fcfc.jpg&w=96&q=75"
                    />
                    <div className="upload-btn position-relative tran3s ms-4 me-3">
                      Upload new photo
                      <input
                        type="file"
                        id="uploadImg"
                        placeholder=""
                        name="uploadImg"
                      />
                    </div>
                    <button className="delete-btn tran3s">Delete</button>
                  </div>
                  <div className="dash-input-wrapper mb-30">
                    <label for="">First Name*</label>
                    <input type="text" placeholder="Md James" />
                  </div>
                  <div className="dash-input-wrapper mb-30">
                    <label for="">Last Name*</label>
                    <input type="text" placeholder="Brower" />
                  </div>
                  <div className="dash-input-wrapper mb-30">
                    <label for="">Contact No.*</label>
                    <input type="text" placeholder="xxxxxxxxxx" />
                  </div>

                  <div className="dash-input-wrapper">
                    <label for="">Bio*</label>
                    <textarea
                      className="size-lg"
                      placeholder="Write something interesting about you...."
                    ></textarea>
                    <div className="alert-text">
                      Brief description for your profile. URLs are hyperlinked.
                    </div>
                  </div>
                </div>
              </Card>

              <Card style={{ margin: "25px", borderRadius: "25px" }}>
                <div className="bg-white card-box border-20 mt-40">
                  <h4 className="dash-title-three">Social Media</h4>
                  <div className="dash-input-wrapper mb-20">
                    <label for="">Network 1</label>
                    <input type="text" placeholder="#" />
                  </div>
                  <div className="dash-input-wrapper mb-20">
                    <label for="">Network 2</label>
                    <input type="text" placeholder="#" />
                  </div>
                  <a href="#" className="dash-btn-one">
                    <i className="bi bi-plus"></i> Add more link
                  </a>
                </div>
              </Card>

              <Card style={{ margin: "25px", borderRadius: "25px" }}>
                <div className="bg-white card-box border-20 mt-40">
                  <h4 className="dash-title-three">Address &amp; Location</h4>
                  <div className="row">
                    <div className="col-12">
                      <div className="dash-input-wrapper mb-25">
                        <label for="">Address*</label>
                        <input
                          type="text"
                          placeholder="Cowrasta, Chandana, Gazipur Sadar"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <div className="col-lg-3">
                        <Box
                          sx={{ minWidth: 120 }}
                          className="dash-input-wrapper mb-25"
                        >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Country*
                            </InputLabel>

                            <Select
                              className="list"
                              role="menubar"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={place}
                              label="Country"
                              onChange={handlePlaceChange}
                            >
                              <MenuItem
                                value={1}
                                className="option selected focus"
                                role="menuitem"
                              >
                                Afghanistan
                              </MenuItem>
                              <MenuItem
                                value={2}
                                className="option false"
                                role="menuitem"
                              >
                                Albania
                              </MenuItem>
                              <MenuItem
                                value={3}
                                className="option false"
                                role="menuitem"
                              >
                                Belgium
                              </MenuItem>
                              <MenuItem
                                value={4}
                                className="option false"
                                role="menuitem"
                              >
                                Barbados
                              </MenuItem>
                              <MenuItem
                                value={5}
                                className="option false"
                                role="menuitem"
                              >
                                Australia
                              </MenuItem>
                              <MenuItem
                                value={6}
                                className="option false"
                                role="menuitem"
                              >
                                Angola
                              </MenuItem>
                              <MenuItem
                                dvalue={7}
                                className="option false"
                                role="menuitem"
                              >
                                Austria
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                      <div className="col-lg-3">
                        <Box
                          sx={{ minWidth: 120 }}
                          className="dash-input-wrapper mb-25"
                        >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              City*
                            </InputLabel>

                            <Select
                              className="list"
                              role="menubar"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={place}
                              label="Country"
                              onChange={handlePlaceChange}
                            >
                              <MenuItem
                                value={1}
                                className="option selected focus"
                                role="menuitem"
                              >
                                Sydney
                              </MenuItem>
                              <MenuItem
                                value={2}
                                className="option false"
                                role="menuitem"
                              >
                                Tokyo
                              </MenuItem>
                              <MenuItem
                                value={3}
                                className="option false"
                                role="menuitem"
                              >
                                Delhi
                              </MenuItem>
                              <MenuItem
                                value={4}
                                className="option false"
                                role="menuitem"
                              >
                                Shanghai
                              </MenuItem>
                              <MenuItem
                                value={5}
                                className="option false"
                                role="menuitem"
                              >
                                Mumbai
                              </MenuItem>
                              <MenuItem
                                value={6}
                                className="option false"
                                role="menuitem"
                              >
                                Bangalore
                              </MenuItem>
                              <MenuItem
                                dvalue={7}
                                className="option false"
                                role="menuitem"
                              >
                                London
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                      <div className="col-lg-3">
                        <div className="dash-input-wrapper mb-25">
                          <label htmlFor="">Zip Code*</label>
                          <input type="number" placeholder="1708" />
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <Box
                          sx={{ minWidth: 120 }}
                          className="dash-input-wrapper mb-25"
                        >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              State*
                            </InputLabel>

                            <Select
                              className="list"
                              role="menubar"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={place}
                              label="Country"
                              onChange={handlePlaceChange}
                            >
                              <MenuItem
                                value={1}
                                className="option selected focus"
                                role="menuitem"
                              >
                                Sydney
                              </MenuItem>
                              <MenuItem
                                value={2}
                                className="option false"
                                role="menuitem"
                              >
                                Tokyo
                              </MenuItem>
                              <MenuItem
                                value={3}
                                className="option false"
                                role="menuitem"
                              >
                                Delhi
                              </MenuItem>
                              <MenuItem
                                value={4}
                                className="option false"
                                role="menuitem"
                              >
                                Shanghai
                              </MenuItem>
                              <MenuItem
                                value={5}
                                className="option false"
                                role="menuitem"
                              >
                                Mumbai
                              </MenuItem>
                              <MenuItem
                                value={6}
                                className="option false"
                                role="menuitem"
                              >
                                Bangalore
                              </MenuItem>
                              <MenuItem
                                dvalue={7}
                                className="option false"
                                role="menuitem"
                              >
                                London
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="dash-input-wrapper mb-25">
                        <label htmlFor="">Map Location*</label>
                        <div className="position-relative">
                          <input
                            type="text"
                            placeholder="XC23+6XC, Moiran, N105"
                          />
                          <button className="location-pin tran3s">
                            <img
                              alt="icon"
                              loading="lazy"
                              width="17"
                              height="17"
                              decoding="async"
                              data-nimg="1"
                              className="lazy-img m-auto"
                              style={{ color: "transparent" }}
                              src="../../_next/static/media/icon_16.7e4bc712.svg"
                            />
                          </button>
                        </div>
                        <div className="map-frame mt-30">
                          <div className="gmap_canvas h-100 w-100">
                            <iframe
                              className="gmap_iframe h-100 w-100"
                              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=bass%20hill%20plaza%20medical%20centre&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div
                style={{ margin: "25px" }}
                className="button-group d-inline-flex align-items-center mt-30"
              >
                <a href="#" className="dash-btn-two tran3s me-3">
                  Save
                </a>
                <a href="#" className="dash-cancel-btn tran3s">
                  Cancel
                </a>
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

export default Profile;
