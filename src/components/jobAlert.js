import React from "react";
import "./jobalert.css";
import { Card } from "@mui/material";

const JobAlert = () => {
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
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <img
                        alt="Notification"
                        loading="lazy"
                        width="21"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        className="lazy-img"
                        style={{ color: "transparent" }}
                        src="https://jobi-nextjs.vercel.app/_next/static/media/icon_11.32f89e94.svg"
                      />
                      <div className="badge-pill"></div>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="notification-dropdown"
                    >
                      <li>
                        <h4>Notification</h4>
                        <ul className="style-none notify-list">
                          <li className="d-flex align-items-center unread">
                            <img
                              alt="icon"
                              loading="lazy"
                              width="36"
                              height="36"
                              decoding="async"
                              data-nimg="1"
                              className="lazy-img icon"
                              style={{ color: "transparent" }}
                              src="../../_next/static/media/icon_36.d044b698.svg"
                            />
                            <div className="flex-fill ps-2">
                              <h6>You have 3 new mails</h6>
                              <span className="time">3 hours ago</span>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <img
                              alt="icon"
                              loading="lazy"
                              width="36"
                              height="36"
                              decoding="async"
                              data-nimg="1"
                              className="lazy-img icon"
                              style={{ color: "transparent" }}
                              src="../../_next/static/media/icon_37.34c12156.svg"
                            />
                            <div className="flex-fill ps-2">
                              <h6>You have 5 new mails</h6>
                              <span className="time">6 hours ago</span>
                            </div>
                          </li>
                          <li className="d-flex align-items-center unread">
                            <img
                              alt="icon"
                              loading="lazy"
                              width="36"
                              height="36"
                              decoding="async"
                              data-nimg="1"
                              className="lazy-img icon"
                              style={{ color: "transparent" }}
                              src="../../_next/static/media/icon_38.2db06cc7.svg"
                            />
                            <div className="flex-fill ps-2">
                              <h6>You have 7 new mails</h6>
                              <span className="time">9 hours ago</span>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
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

              <div className="d-flex align-items-center justify-content-between mb-40 lg-mb-30">
                <h2 className="main-title m0">Job Alerts</h2>
                <div className="short-filter d-flex align-items-center">
                  <div className="text-dark fw-500 me-2">Sort by:</div>
                  <div className="nice-select false" role="button" tabindex="0">
                    <span className="current">New</span>
                    <ul className="list" role="menubar">
                      <li
                        data-value="New"
                        className="option selected focus"
                        role="menuitem"
                      >
                        New
                      </li>
                      <li
                        data-value="Category"
                        className="option false"
                        role="menuitem"
                      >
                        Category
                      </li>
                      <li
                        data-value="Job Type"
                        className="option false"
                        role="menuitem"
                      >
                        Job Type
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Card style={{ margin: "25px", borderRadius: "25px" }}>
                <div className="bg-white card-box border-20">
                  <div className="table-responsive">
                    <table className="table job-alert-table">
                      <thead>
                        <tr>
                          <th scope="col">Title</th>
                          <th scope="col">Alert</th>
                          <th scope="col">Job</th>
                          <th scope="col">Time</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="border-0">
                        <tr>
                          <td>Product Designer</td>
                          <td>
                            <div className="job-type fw-500">Fulltime</div>
                            <div>Yearly Salary . Germany</div>
                            <div>Design, Product</div>
                          </td>
                          <td>Jobs found 2</td>
                          <td>Weekly</td>
                          <td>
                            <div className="action-dots float-end">
                              <button
                                className="action-btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span></span>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="17"
                                      height="14"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_18.0f7046f3.svg"
                                    />
                                    View
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="16"
                                      height="13"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_19.b2f1576b.svg"
                                    />
                                    Share
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="14"
                                      height="14"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_20.e619462a.svg"
                                    />
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="14"
                                      height="16"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_21.1bede725.svg"
                                    />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Marketing</td>
                          <td>
                            <div className="job-type fw-500 part-time">
                              Part-Time
                            </div>
                            <div>Weekly Salary . United kingdom</div>
                            <div>Account, Marketing</div>
                          </td>
                          <td>Jobs found 13</td>
                          <td>Monthly</td>
                          <td>
                            <div className="action-dots float-end">
                              <button
                                className="action-btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span></span>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="17"
                                      height="14"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_18.0f7046f3.svg"
                                    />
                                    View
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="16"
                                      height="13"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_19.b2f1576b.svg"
                                    />
                                    Share
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="14"
                                      height="14"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_20.e619462a.svg"
                                    />
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="14"
                                      height="16"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_21.1bede725.svg"
                                    />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Hotel Manager</td>
                          <td>
                            <div className="job-type fw-500">Fulltime</div>
                            <div>Yearly Salary . Germany</div>
                            <div>Design, Product</div>
                          </td>
                          <td>Jobs found 7</td>
                          <td>Daily</td>
                          <td>
                            <div className="action-dots float-end">
                              <button
                                className="action-btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span></span>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="17"
                                      height="14"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_18.0f7046f3.svg"
                                    />
                                    View
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="16"
                                      height="13"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_19.b2f1576b.svg"
                                    />
                                    Share
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="14"
                                      height="14"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_20.e619462a.svg"
                                    />
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="14"
                                      height="16"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_21.1bede725.svg"
                                    />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Developer</td>
                          <td>
                            <div className="job-type fw-500">Fulltime</div>
                            <div>Monthly Salary . United States</div>
                            <div>Account, Finance</div>
                          </td>
                          <td>Jobs found 3</td>
                          <td>Weekly</td>
                          <td>
                            <div className="action-dots float-end">
                              <button
                                className="action-btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span></span>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="17"
                                      height="14"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_18.0f7046f3.svg"
                                    />
                                    View
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="16"
                                      height="13"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_19.b2f1576b.svg"
                                    />
                                    Share
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="14"
                                      height="14"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_20.e619462a.svg"
                                    />
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="14"
                                      height="16"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_21.1bede725.svg"
                                    />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Account Manager</td>
                          <td>
                            <div className="job-type fw-500 part-time">
                              Part-Time
                            </div>
                            <div>Hourly Salary . Spain</div>
                            <div>Account, Finance</div>
                          </td>
                          <td>Jobs found 9</td>
                          <td>Monthly</td>
                          <td>
                            <div className="action-dots float-end">
                              <button
                                className="action-btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span></span>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="17"
                                      height="14"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_18.0f7046f3.svg"
                                    />
                                    View
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="16"
                                      height="13"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_19.b2f1576b.svg"
                                    />
                                    Share
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="14"
                                      height="14"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_20.e619462a.svg"
                                    />
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      alt="icon"
                                      loading="lazy"
                                      width="14"
                                      height="16"
                                      decoding="async"
                                      data-nimg="1"
                                      className="lazy-img"
                                      style={{ color: "transparent" }}
                                      src="../../_next/static/media/icon_21.1bede725.svg"
                                    />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>

              <div style={{margin:"25px"}} className="dash-pagination d-flex justify-content-end mt-30">
                <ul className="style-none d-flex align-items-center">
                  <li>
                    <a href="#" className="active">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>..</li>
                  <li>
                    <a href="#">7</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </li>
                </ul>
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

export default JobAlert;
