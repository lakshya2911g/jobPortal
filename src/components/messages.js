import React from "react";
import "./messages.css";

const Messages = () => {
  return (
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
            
            <div className="row gx-0 align-items-center">
              <div
                className="offcanvas compose-mail-offcanvas"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabindex="-1"
                id="offcanvasScrolling"
                aria-labelledby="offcanvasScrollingLabel"
              >
                <div className="compose-new-email-container">
                  <div className="new-email-header position-relative">
                    <div className="btn-group">
                      <a
                        data-bs-toggle="collapse"
                        href="#CC-input"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Cc
                      </a>
                      <a
                        data-bs-toggle="collapse"
                        href="#BCC-input"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Bcc
                      </a>
                    </div>
                    <div className="input-group d-flex align-items-center">
                      <div className="text-center" style={{ width: "60px" }}>
                        To
                      </div>
                      <input
                        type="email"
                        className="flex-fill"
                        placeholder="payoneer@inquiry.com"
                      />
                    </div>
                    <div className="collapse" id="CC-input">
                      <div className="input-group d-flex align-items-center">
                        <div className="text-center" style={{ width: "60px" }}>
                          Cc
                        </div>
                        <input
                          type="email"
                          className="flex-fill"
                          placeholder="payoneer@inquiry.com"
                        />
                      </div>
                    </div>
                    <div className="collapse" id="BCC-input">
                      <div className="input-group d-flex align-items-center">
                        <div className="text-center" style={{ width: "60px" }}>
                          Bcc
                        </div>
                        <input
                          type="email"
                          className="flex-fill"
                          placeholder="payoneer@inquiry.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="compose-body">
                    <textarea>
                      Hi, Mary Cooper! Thanks for your invitation for the
                      account manager position for you company. I Will back to
                      you soon with all the require documents.
                    </textarea>
                  </div>
                  <div className="compose-email-footer d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="insert-file position-relative me-3">
                        <img
                          alt="icon"
                          loading="lazy"
                          width="19"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          className="lazy-img"
                          style={{ color: "transparent" }}
                          src="../../_next/static/media/icon_32.b3b58da8.svg"
                        />
                        <input
                          type="file"
                          placeholder=""
                          title="Insert File"
                          name="uploadImg"
                        />
                      </div>
                      <button className="insert-emoji me-3">
                        <img
                          alt="icon"
                          loading="lazy"
                          width="18"
                          height="18"
                          decoding="async"
                          data-nimg="1"
                          className="lazy-img"
                          style={{ color: "transparent" }}
                          src="../../_next/static/media/icon_33.032d5ffc.svg"
                        />
                      </button>
                      <div className="insert-file position-relative me-3">
                        <img
                          alt="icon"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          className="lazy-img"
                          style={{ color: "transparent" }}
                          src="../../_next/static/media/icon_34.ff4d5049.svg"
                        />
                        <input
                          type="file"
                          placeholder=""
                          title="Insert Image"
                          name="uploadImg"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <a href="#" className="delete-mail me-3">
                        <img
                          alt="icon"
                          loading="lazy"
                          width="19"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          className="lazy-img"
                          style={{ color: "transparent" }}
                          src="../../_next/static/media/icon_35.98f38e37.svg"
                        />
                      </a>
                      <a href="#" className="reply-btn tran3s">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="col-lg-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="main-title m0">Messages</h2>
                  <a
                    className="new-message-compose rounded-circle"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasScrolling"
                    role="button"
                    aria-controls="offcanvasScrolling"
                  >
                    +
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="message-pagination ps-lg-4 ps-xxl-5 d-flex align-items-center justify-content-between md-mt-40">
                  <a href="#" className="prev-msg">
                    <img
                      alt="icon"
                      loading="lazy"
                      width="34"
                      height="17"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: "transparent" }}
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_26.1a9ca54f.svg"
                    />
                  </a>
                  <div className="d-flex align-items-center">
                    <a href="#">
                      <i className="bi bi-chevron-left"></i>
                    </a>
                    <span>1-5 of 120</span>
                    <a href="#">
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                  <a href="#" className="next-msg">
                    <img
                      alt="icon"
                      loading="lazy"
                      width="34"
                      height="17"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: "transparent" }}
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_27.69de0fc6.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white card-box border-20 p0 mt-30">
              <div className="message-wrapper">
                <div className="row gx-0">
                  <div className="col-lg-4">
                    <div className="message-sidebar pt-20">
                      <div className="ps-3 pe-3 ps-xxl-4 pe-xxl-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="page-title fw-500">Inbox</div>
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
                                  Sent
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Important
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Draft
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Trash
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <form className="search-form mt-20 mb-20" action="#">
                          <input type="text" placeholder="Search contacts" />
                          <button>
                            <img
                              alt="icon"
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
                        <div
                          className="message_filter d-flex align-items-center justify-content-between mb-20"
                          id="module_btns"
                        >
                          <button className="filter_btn active">All</button>
                          <button className="filter_btn">
                            <span style={{ background: "#ff4545" }}></span> Read
                          </button>
                          <button className="filter_btn">
                            <span style={{ background: "#3bda84" }}></span>
                            Unread
                          </button>
                          <button className="filter_btn">
                            <span style={{ background: "#50c0ff" }}></span>{" "}
                            Primary
                          </button>
                        </div>
                      </div>
                      <div className="email-read-panel">
                        <div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 read">
                          <div className="email-short-preview position-relative">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="sender-name">Jenny Rio.</div>
                              <div className="date">Aug 22</div>
                            </div>
                            <div className="mail-sub">
                              Work inquiry from google.
                            </div>
                            <div className="mail-text">
                              Hello, This is Jenny from google. We’r the largest
                              online platform offer...
                            </div>
                            <div className="attached-file-preview d-flex align-items-center mt-15">
                              <div className="file d-flex align-items-center me-2">
                                <img
                                  alt="icon"
                                  loading="lazy"
                                  width="12"
                                  height="14"
                                  decoding="async"
                                  data-nimg="1"
                                  className="lazy-img me-2"
                                  style={{ color: "transparent" }}
                                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_28.23ba7560.svg"
                                />
                                <span>details.pdf</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 primary selected">
                          <div className="email-short-preview position-relative">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="sender-name">Hasan Islam.</div>
                              <div className="date">May 22</div>
                            </div>
                            <div className="mail-sub">Account Manager</div>
                            <div className="mail-text">
                              Hello, Greeting from Uber. Hope you doing great. I
                              am approcing to you for..
                            </div>
                            <div className="attached-file-preview d-flex align-items-center mt-15">
                              <div className="file d-flex align-items-center me-2">
                                <img
                                  alt="icon"
                                  loading="lazy"
                                  width="12"
                                  height="14"
                                  decoding="async"
                                  data-nimg="1"
                                  className="lazy-img me-2"
                                  style={{ color: "transparent" }}
                                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_28.23ba7560.svg"
                                />
                                <span>details.pdf</span>
                              </div>
                              <div className="file d-flex align-items-center me-2">
                                <img
                                  alt="icon"
                                  loading="lazy"
                                  width="12"
                                  height="14"
                                  decoding="async"
                                  data-nimg="1"
                                  className="lazy-img me-2"
                                  style={{ color: "transparent" }}
                                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_28.23ba7560.svg"
                                />
                                <span>form.pdf</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4">
                          <div className="email-short-preview position-relative">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="sender-name">
                                Jannatul Ferdaus.
                              </div>
                              <div className="date">Jun 22</div>
                            </div>
                            <div className="mail-sub">
                              Product Designer Opportunities
                            </div>
                            <div className="mail-text">
                              Hello, This is Jannat from HuntX. We offer
                              business solution to our client..
                            </div>
                          </div>
                        </div>
                        <div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 read">
                          <div className="email-short-preview position-relative">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="sender-name">Jakie Chan</div>
                              <div className="date">NOV 22</div>
                            </div>
                            <div className="mail-sub">
                              Hunting Marketing Specialist
                            </div>
                            <div className="mail-text">
                              Hello, We’r the well known Real Estate Inc provide
                              best interior/exterior solut...
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="open-email-container pb-40">
                      <div className="email-header divider d-flex justify-content-between ps-4 pe-4 ps-xxl-5 pe-xxl-5">
                        <div className="sender-info d-flex align-items-center">
                          <img
                            alt="logo"
                            fetchPriority="high"
                            width="47"
                            height="47"
                            decoding="async"
                            data-nimg="1"
                            className="lazy-img logo"
                            style={{ color: "transparent" }}
                            /*srcset="
                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_02.26817a33.png&amp;w=48&amp;q=75 1x,
                            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_02.26817a33.png&amp;w=96&amp;q=75 2x
                          "*/
                            src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_02.26817a33.png&w=48&q=75"
                          />
                          <div className="ps-3">
                            <div className="sender-name">Payoneer</div>
                            <div className="sender-email">
                              payoneer@inquiry.com
                            </div>
                          </div>
                        </div>
                        <div className="email-info">
                          <div className="time">4:45AM (3 hours ago)</div>
                          <div className="d-flex align-items-center justify-content-end">
                            <button className="delete-email">
                              <img
                                alt="icon"
                                loading="lazy"
                                width="20"
                                height="21"
                                decoding="async"
                                data-nimg="1"
                                className="lazy-img"
                                style={{ color: "transparent" }}
                                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_29.c4a2416d.svg"
                              />
                            </button>
                            <button className="reply-email ms-3 me-3">
                              <img
                                alt="icon"
                                loading="lazy"
                                width="24"
                                height="18"
                                decoding="async"
                                data-nimg="1"
                                className="lazy-img"
                                style={{ color: "transparent" }}
                                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_30.088e4520.svg"
                              />
                            </button>
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
                                    Reply
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Fowrward
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Block
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
                      <div className="email-body divider">
                        <div className="ps-4 pe-4 ps-xxl-5 pe-xxl-5">
                          <h2>Account Manager.</h2>
                          <p>
                            Hello, Greeting from Uber. Hope you doing great. I
                            am approaching to you for as our company need a
                            great &amp; talented account manager.
                          </p>
                          <p>What we need from you to start:</p>
                          <ul className="style-none mb-30">
                            <li>- Your CV</li>
                            <li>- Verified Gov ID</li>
                          </ul>
                          <p>
                            After that we need to redesign our landing page
                            because the current one does not carry any
                            information. If you have any question don’t hesitate
                            to contact us.
                          </p>
                          <p>
                            Our Telegram{" "}
                            <a href="#" className="fw-500">
                              @payoneer
                            </a>
                            <br />
                            Thank you!
                          </p>
                        </div>
                      </div>
                      <div className="email-footer">
                        <div className="ps-4 pe-4 ps-xxl-5 pe-xxl-5">
                          <div className="attachments mb-30">
                            <div className="d-flex justify-content-between mb-5">
                              <h6 className="m0">2 Attachment</h6>
                              <a href="#" className="all-download">
                                Download All
                              </a>
                            </div>
                            <div className="d-flex">
                              <a
                                href="#"
                                className="file tran3s d-flex align-items-center mt-10"
                                download=""
                              >
                                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                                  <img
                                    alt="icon"
                                    loading="lazy"
                                    width="17"
                                    height="20"
                                    decoding="async"
                                    data-nimg="1"
                                    className="lazy-img"
                                    style={{ color: "transparent" }}
                                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_31.ea86013e.svg"
                                  />
                                </div>
                                <div className="ps-2">
                                  <div className="file-name">
                                    project-details.pdf
                                  </div>
                                  <div className="file-size">2.3mb</div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="file tran3s d-flex align-items-center mt-10"
                                download=""
                              >
                                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                                  <img
                                    alt="icon"
                                    loading="lazy"
                                    width="17"
                                    height="20"
                                    decoding="async"
                                    data-nimg="1"
                                    className="lazy-img"
                                    style={{ color: "transparent" }}
                                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_31.ea86013e.svg"
                                  />
                                </div>
                                <div className="ps-2">
                                  <div className="file-name">form.pdf</div>
                                  <div className="file-size">1.3mb</div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="compose-new-email-container">
                            <div className="new-email-header position-relative">
                              <div className="btn-group">
                                <a
                                  data-bs-toggle="collapse"
                                  href="#CC-input"
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls="collapseExample"
                                >
                                  Cc
                                </a>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#BCC-input"
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls="collapseExample"
                                >
                                  Bcc
                                </a>
                              </div>
                              <div className="input-group d-flex align-items-center">
                                <div
                                  className="text-center"
                                  style={{ width: "60px" }}
                                >
                                  To
                                </div>
                                <input
                                  type="email"
                                  className="flex-fill"
                                  placeholder="payoneer@inquiry.com"
                                />
                              </div>
                              <div className="collapse" id="CC-input">
                                <div className="input-group d-flex align-items-center">
                                  <div
                                    className="text-center"
                                    style={{ width: "60px" }}
                                  >
                                    Cc
                                  </div>
                                  <input
                                    type="email"
                                    className="flex-fill"
                                    placeholder="payoneer@inquiry.com"
                                  />
                                </div>
                              </div>
                              <div className="collapse" id="BCC-input">
                                <div className="input-group d-flex align-items-center">
                                  <div
                                    className="text-center"
                                    style={{ width: "60px" }}
                                  >
                                    Bcc
                                  </div>
                                  <input
                                    type="email"
                                    className="flex-fill"
                                    placeholder="payoneer@inquiry.com"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="compose-body">
                              <textarea>
                                Hi, Mary Cooper! Thanks for your invitation for
                                the account manager position for you company. I
                                Will back to you soon with all the require
                                documents.
                              </textarea>
                            </div>
                            <div className="compose-email-footer d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="insert-file position-relative me-3">
                                  <img
                                    alt="icon"
                                    loading="lazy"
                                    width="19"
                                    height="20"
                                    decoding="async"
                                    data-nimg="1"
                                    className="lazy-img"
                                    style={{ color: "transparent" }}
                                    src="../../_next/static/media/icon_32.b3b58da8.svg"
                                  />
                                  <input
                                    type="file"
                                    placeholder=""
                                    title="Insert File"
                                    name="uploadImg"
                                  />
                                </div>
                                <button className="insert-emoji me-3">
                                  <img
                                    alt="icon"
                                    loading="lazy"
                                    width="18"
                                    height="18"
                                    decoding="async"
                                    data-nimg="1"
                                    className="lazy-img"
                                    style={{ color: "transparent" }}
                                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_33.032d5ffc.svg"
                                  />
                                </button>
                                <div className="insert-file position-relative me-3">
                                  <img
                                    alt="icon"
                                    loading="lazy"
                                    width="20"
                                    height="20"
                                    decoding="async"
                                    data-nimg="1"
                                    className="lazy-img"
                                    style={{ color: "transparent" }}
                                    src="../../_next/static/media/icon_34.ff4d5049.svg"
                                  />
                                  <input
                                    type="file"
                                    placeholder=""
                                    title="Insert Image"
                                    name="uploadImg"
                                  />
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <a href="#" className="delete-mail me-3">
                                  <img
                                    alt="icon"
                                    loading="lazy"
                                    width="19"
                                    height="20"
                                    decoding="async"
                                    data-nimg="1"
                                    className="lazy-img"
                                    style={{ color: "transparent" }}
                                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_35.98f38e37.svg"
                                  />
                                </a>
                                <a href="#" className="reply-btn tran3s">
                                  Reply
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
  );
};

export default Messages;
