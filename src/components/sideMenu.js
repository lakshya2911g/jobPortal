import React, { useState } from "react";

import { Link } from "react-router-dom";





const SideMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (itemName) => {
    setActiveMenu(itemName);
  };

  //let content;

  {/*switch (activeMenu) {
    case "dashboard":
      content = <Dashboard />;
      break;
    case "profile":
      content = <Profile />;
      break;
    case "resume":
      content = <Resume />;
      break;
    case "messages":
      content = <Messages />;
      break;
    case "jobAlert":
      content = <JobAlert />;
      break;
    case "jobSaved":
      content = <JobSaved />;
      break;
    case "settings":
      content = <Settings />;
      break;
    case "delete":
        content=<Delete/>;
        break;  
    default:
      content = null;
  }*/}

  return (
    <div className="__variable_e76efa __variable_95782f">
      <div className="main-page-wrapper">
        <aside className="dash-aside-navbar">
          <div className="position-relative">
            <div className="logo text-md-center d-md-block d-flex align-items-center justify-content-between">
              <a href="candidate-dashboard.html">
                <img
                  alt="logo"
                  fetchpriority="high"
                  width="119"
                  height="42"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  /*srcSet="
                    /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_01ceed.png&amp;w=128&amp;q=75 1x,
                    /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_01ceed.png&amp;w=256&amp;q=75 2x
                  "*/
                  src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_01.64e60fc1.png&w=128&q=75"
                />
              </a>
              <button className="close-btn d-block d-md-none">
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="user-data">
              <div className="user-avatar online position-relative rounded-circle">
                <img
                  alt="avatar"
                  loading="lazy"
                  width="75"
                  height="75"
                  decoding="async"
                  data-nimg="1"
                  className="lazy-img"
                  style={{ color: "transparent", height: "auto" }}
                  /*srcSet="
                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_01bdd1.jpg&amp;w=96&amp;q=75  1x,
                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_01bdd1.jpg&amp;w=256&amp;q=75 2x
                            "*/
                  src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_01.2651497f.jpg&w=96&q=75"
                />
              </div>
              <div className="user-name-data">
                <button
                  className="user-name dropdown-toggle"
                  type="button"
                  id="profile-dropdown"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  James Brower
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="profile-dropdown"
                >
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="candidate-dashboard/profile.html"
                    >
                      <img
                        alt="icon"
                        loading="lazy"
                        width="18"
                        height="22"
                        decoding="async"
                        data-nimg="1"
                        className="lazy-img"
                        style={{ color: "transparent" }}
                        src="https://jobi-nextjs.vercel.app/_next/static/media/icon_23.569a9456.svg"
                      />
                      <span className="ms-2 ps-1">Profile</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="candidate-dashboard/profile.html"
                    >
                      <img
                        alt="icon"
                        loading="lazy"
                        width="21"
                        height="22"
                        decoding="async"
                        data-nimg="1"
                        className="lazy-img"
                        style={{ color: "transparent" }}
                        src="https://jobi-nextjs.vercel.app/_next/static/media/icon_24.0ace9f1a.svg"
                      />
                      <span className="ms-2 ps-1">Account Settings</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <img
                        alt="icon"
                        loading="lazy"
                        width="19"
                        height="23"
                        decoding="async"
                        data-nimg="1"
                        className="lazy-img"
                        style={{ color: "transparent" }}
                        src="https://jobi-nextjs.vercel.app/_next/static/media/icon_25.b0559e8f.svg"
                      />
                      <span className="ms-2 ps-1">Notification</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <nav className="dasboard-main-nav">
              <ul className="style-none">
                <li
                  className={activeMenu === "dashboard" ? "active" : ""}
                  onClick={() => handleMenuClick("dashbord")}
                >
                  <a
                    className="d-flex w-100 align-items-center active"
                    href="candidate-dashboard.html"
                  >
                    <img
                      alt="icon"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: "transparent" }}
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_1_active.77c90d6f.svg"
                    />
                    <Link to="/dashboard"><span>Dashboard</span></Link>
                  </a>
                </li>
                <li className={activeMenu === "profile" ? "active" : ""}
                  onClick={() => handleMenuClick("profile")}>
                  
                    <img
                      alt="icon"
                      loading="lazy"
                      width="20"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: "transparent" }}
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_2.bb2a8c78.svg"
                    />
                    <Link to="/profile">My Profile</Link>
                 
                </li>
                <li className={activeMenu === "resume" ? "active" : ""}
                  onClick={() => handleMenuClick("resume")}>
                  
                    <img
                      alt="icon"
                      loading="lazy"
                      width="20"
                      height="22"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: "transparent" }}
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_3.1dfe15d1.svg"
                    />
                    <Link to="/resume"><span>Resume</span></Link>
                  
                </li>
                <li>
                  
                    <img
                      alt="icon"
                      loading="lazy"
                      width="21"
                      height="19"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: "transparent" }}
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_4.7fb6e150.svg"
                    />
                    <Link to="/messages"><span>Messages</span></Link>
                  
                </li>
                <li className={activeMenu === "jobAlert" ? "active" : ""}
                  onClick={() => handleMenuClick("jobAlert")}>
                  
                    <img
                      alt="icon"
                      loading="lazy"
                      width="21"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: "transparent" }}
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_5.7bc7faef.svg"
                    />
                    <Link to="/jobalert"><span>Job Alert</span></Link>
                  
                </li>
                <li className={activeMenu === "jobSaved" ? "active" : ""}
                  onClick={() => handleMenuClick("jobSaved")}>
                  
                    <img
                      alt="icon"
                      loading="lazy"
                      width="18"
                      height="22"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: "transparent" }}
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_6.70ec5244.svg"
                    />
                    <Link to="/jobsaved"><span>Job Saved</span></Link>
                  
                </li>
                <li className={activeMenu === "settings" ? "active" : ""}
                  onClick={() => handleMenuClick("settings")}>
                  
                    <img
                      alt="icon"
                      loading="lazy"
                      width="23"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: "transparent" }}
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_7.9db14e45.svg"
                    />
                    <Link to="/settings"><span>Account Settings</span></Link>
                  
                </li>
                <li className={activeMenu === "delete" ? "active" : ""}
                  onClick={() => handleMenuClick("delete")}>
                  <a
                    href="#"
                    className="d-flex w-100 align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    <img
                      alt="icon"
                      loading="lazy"
                      width="21"
                      height="23"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: "transparent" }}
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_8.1d18804d.svg"
                    />
                    <span>Delete Account</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="profile-complete-status">
              <div className="progress-value fw-500">87%</div>
              <div className="progress-line position-relative">
                <div className="inner-line" style={{ width: "80%" }}></div>
              </div>
              <p>Profile Complete</p>
            </div>
            <a href="#" className="d-flex w-100 align-items-center logout-btn">
              <img
                alt="icon"
                loading="lazy"
                width="23"
                height="22"
                decoding="async"
                data-nimg="1"
                className="lazy-img"
                style={{ color: "transparent" }}
                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_9.69f19313.svg"
              />
              <span>Logout</span>
            </a>
          </div>
        </aside>
        <div
          className="modal fade"
          id="deleteModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen modal-dialog-centered">
            <div className="container">
              <div className="remove-account-popup text-center modal-content">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <img
                  alt="icon"
                  loading="lazy"
                  width="80"
                  height="80"
                  decoding="async"
                  data-nimg="1"
                  className="lazy-img m-auto"
                  style={{ color: "transparent" }}
                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_22.2b286d7d.svg"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;