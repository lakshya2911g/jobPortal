import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";
import "./dashboard.css";

const Dashboard = () => {
  // notifiacation dropdown

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

  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <header className="dashboard-header">
          <div className="d-flex align-items-center justify-content-end">
            <button className="dash-mobile-nav-toggler d-block d-md-none me-auto">
              <span></span>
            </button>
            <form action="#" className="search-form">
              <input placeholder="Search here.." type="text" />
              <button>
                <img
                  alt="search"
                  loading="lazy"
                  width="16"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  className="lazy-img m-auto"
                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_10.35c41a63.svg"
                  style={{ color: "transparent" }}
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
                <MenuItem sx={{ display: "flex", flexDirection: "column" }}>
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
                href="/dashboard/employ-dashboard/submit-job"
              >
                Post a Job
              </a>
            </div>
          </div>
        </header>
        <h2 className="main-title">Dashboard</h2>

        <div className="row">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",

                  height: "75%",
                  padding: "0 20px 0 20px",
                  marginLeft: "18px",
                  borderRadius: "25px",
                }}
              >
                <div className="col-lg-3 col-6">
                  <div className="dash-card-one bg-white border-30 position-relative mb-15">
                    <div className="d-sm-flex align-items-center justify-content-between">
                      {
                        <CardContent>
                          <div className="order-sm-0">
                            <div className="value fw-500">
                              <Typography
                                variant="inherit"
                                color="textSecondary"
                                component="h2"
                              >
                                1.7k+
                              </Typography>
                            </div>
                            <span>
                              <Typography
                                gutterBottom
                                variant="inherit"
                                component="h9"
                              >
                                Total Visitor
                              </Typography>
                            </span>
                          </div>
                        </CardContent>
                      }

                      <CardMedia>
                        <div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1">
                          <img
                            alt="icon"
                            loading="lazy"
                            width="21"
                            height="26"
                            decoding="async"
                            data-nimg="1"
                            className="lazy-img"
                            src="https://jobi-nextjs.vercel.app/_next/static/media/icon_12.7f76845e.svg"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </CardMedia>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "75%",
                  padding: "0 20px 0 20px",
                  marginLeft: "18px",
                  borderRadius: "25px",
                }}
              >
                <div className="col-lg-3 col-6">
                  <div className="dash-card-one bg-white border-30 position-relative mb-15">
                    <div className="d-sm-flex align-items-center justify-content-between">
                      <CardContent>
                        <div className="order-sm-0">
                          <div className="value fw-500">
                            <Typography
                              variant="inherit"
                              color="textSecondary"
                              component="h2"
                            >
                              03
                            </Typography>
                          </div>
                          <span>
                            <Typography
                              gutterBottom
                              variant="inherit"
                              component="h9"
                            >
                              Shortlisted
                            </Typography>
                          </span>
                        </div>
                      </CardContent>

                      <CardMedia>
                        <div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1">
                          <img
                            alt="icon"
                            loading="lazy"
                            width="20"
                            height="24"
                            decoding="async"
                            data-nimg="1"
                            className="lazy-img"
                            src="https://jobi-nextjs.vercel.app/_next/static/media/icon_13.d248bf19.svg"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </CardMedia>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "75%",
                  padding: "0 20px 0 20px",
                  marginLeft: "18px",
                  borderRadius: "25px",
                }}
              >
                <div className="col-lg-3 col-6">
                  <div className="dash-card-one bg-white border-30 position-relative mb-15">
                    <div className="d-sm-flex align-items-center justify-content-between">
                      <CardContent>
                        <div className="order-sm-0">
                          <div className="value fw-500">
                            <Typography
                              variant="inherit"
                              color="textSecondary"
                              component="h2"
                            >
                              2.1k
                            </Typography>
                          </div>
                          <span>
                            <Typography
                              gutterBottom
                              variant="inherit"
                              component="h9"
                            >
                              Views
                            </Typography>
                          </span>
                        </div>
                      </CardContent>

                      <CardMedia>
                        <div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1">
                          <img
                            alt="icon"
                            loading="lazy"
                            width="24"
                            height="16"
                            decoding="async"
                            data-nimg="1"
                            className="lazy-img"
                            src="https://jobi-nextjs.vercel.app/_next/static/media/icon_14.5854971b.svg"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </CardMedia>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "75%",
                  padding: "0px 20px 0 20px",
                  marginLeft: "18px",
                  borderRadius: "25px",
                }}
              >
                <div className="col-lg-3 col-6">
                  <div className="dash-card-one bg-white border-30 position-relative mb-15">
                    <div className="d-sm-flex align-items-center justify-content-between">
                      <CardContent>
                        <div className="order-sm-0">
                          <div className="value fw-500">
                            <Typography
                              variant="inherit"
                              color="textSecondary"
                              component="h2"
                            >
                              07
                            </Typography>
                          </div>
                          <span>
                            <Typography
                              gutterBottom
                              variant="inherit"
                              component="h9"
                            >
                              Applied Job
                            </Typography>
                          </span>
                        </div>
                      </CardContent>

                      <CardMedia>
                        <div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1">
                          <img
                            alt="icon"
                            loading="lazy"
                            width="25"
                            height="24"
                            decoding="async"
                            data-nimg="1"
                            className="lazy-img"
                            src="https://jobi-nextjs.vercel.app/_next/static/media/icon_15.0025ba7e.svg"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </CardMedia>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="row d-flex pt-50 lg-pt-10"
        >
          <Box
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              margin: "30px",
              width: "400px",
            }}
            className="col-xl-7 col-lg-6 d-flex flex-column"
          >
            <div className="user-activity-chart bg-white border-20 mt-30 h-100">
              <h4 className="dash-title-two">Profile Views</h4>
              <div className="ps-5 pe-5 mt-50">
                <img
                  alt="main-graph"
                  loading="lazy"
                  width="608"
                  height="375"
                  decoding="async"
                  data-nimg="1"
                  className="lazy-img m-auto"
                  /*srcset="
                https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-graph.52916fa8.png&amp;w=640&amp;q=75  1x,
                https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-graph.52916fa8.png&amp;w=1920&amp;q=75 2x
              "*/
                  src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-graph.52916fa8.png&amp;w=1920&amp;q=75"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </Box>

          <Box
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              margin: "30px",
              width: "400px",
            }}
            className="col-xl-5 col-lg-6 d-flex"
          >
            <div className="recent-job-tab bg-white border-20 mt-30 w-100">
              <h4 className="dash-title-two">Recent Applied Job</h4>
              <div className="wrapper">
                <div className="job-item-list d-flex align-items-center">
                  <div>
                    <img
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img logo"
                      s /*rcset="
                    https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_61.b310a81c.png&amp;w=48&amp;q=75 1x,
                    https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_61.b310a81c.png&amp;w=96&amp;q=75 2x
                  "*/
                      src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_61.b310a81c.png&amp;w=96&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="job-title">
                    <h6 className="mb-5">
                      <a href="#">Fixed-Price</a>
                    </h6>
                    <div className="meta">
                      <span>Fulltime</span> . <span>USA, Palo Alto</span>
                    </div>
                  </div>
                  <div className="job-action">
                    <button
                      className="action-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          View Job
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Archive
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job-item-list d-flex align-items-center">
                  <div>
                    <img
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img logo"
                      /*srcset="
                    https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_60.fc342855.png&amp;w=48&amp;q=75 1x,
                    https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_60.fc342855.png&amp;w=96&amp;q=75 2x
                  "*/
                      src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_60.fc342855.png&amp;w=96&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="job-title">
                    <h6 className="mb-5">
                      <a href="#">Fulltime</a>
                    </h6>
                    <div className="meta">
                      <span>Fulltime</span> . <span>USA, New York</span>
                    </div>
                  </div>
                  <div className="job-action">
                    <button
                      className="action-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          View Job
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Archive
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job-item-list d-flex align-items-center">
                  <div>
                    <img
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img logo"
                      /*srcset="
                    https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_59.4deaf874.png&amp;w=48&amp;q=75 1x,
                    https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_59.4deaf874.png&amp;w=96&amp;q=75 2x
                  "*/
                      src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_59.4deaf874.png&amp;w=96&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="job-title">
                    <h6 className="mb-5">
                      <a href="#">Part time</a>
                    </h6>
                    <div className="meta">
                      <span>Fulltime</span> . <span>USA, San Jose</span>
                    </div>
                  </div>
                  <div className="job-action">
                    <button
                      className="action-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          View Job
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Archive
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job-item-list d-flex align-items-center">
                  <div>
                    <img
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img logo"
                      /*srcset="
                    https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_58.3df6f969.png&amp;w=48&amp;q=75 1x,
                    https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_58.3df6f969.png&amp;w=96&amp;q=75 2x
                  "*/
                      src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_58.3df6f969.png&amp;w=96&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="job-title">
                    <h6 className="mb-5">
                      <a href="#">Freelance</a>
                    </h6>
                    <div className="meta">
                      <span>Fulltime</span> . <span>UK, Cupertino</span>
                    </div>
                  </div>
                  <div className="job-action">
                    <button
                      className="action-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          View Job
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Archive
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job-item-list d-flex align-items-center">
                  <div>
                    <img
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img logo"
                      /*srcset="
                    https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_57.429e6d57.png&amp;w=48&amp;q=75 1x,
                    https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_57.429e6d57.png&amp;w=96&amp;q=75 2x
                  "*/
                      src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_57.429e6d57.png&amp;w=96&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="job-title">
                    <h6 className="mb-5">
                      <a href="#">Part time</a>
                    </h6>
                    <div className="meta">
                      <span>Fulltime</span> . <span>USA, Redmond</span>
                    </div>
                  </div>
                  <div className="job-action">
                    <button
                      className="action-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          View Job
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Archive
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
