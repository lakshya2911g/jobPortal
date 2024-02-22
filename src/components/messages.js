import React from "react";
import "./messages.css";
import { Box } from "@mui/material";

const Messages = () => {
  return (
    <div class="dashboard-body">
      <div class="position-relative">
        <header class="dashboard-header">
          <div class="d-flex align-items-center justify-content-end">
            <button class="dash-mobile-nav-toggler d-block d-md-none me-auto">
              <span></span>
            </button>
            <form action="#" class="search-form">
              <input placeholder="Search here.." type="text" />
              <button>
                <img
                  alt="search"
                  loading="lazy"
                  width="16"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  class="lazy-img m-auto"
                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_10.35c41a63.svg"
                  style={{ color: "transparent" }}
                />
              </button>
            </form>
            <div class="profile-notification ms-2 ms-md-5 me-4">
              <button
                class="noti-btn dropdown-toggle"
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
                  class="lazy-img"
                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_11.32f89e94.svg"
                  style={{ color: "transparent" }}
                />
                <div class="badge-pill"></div>
              </button>
              <ul class="dropdown-menu" aria-labelledby="notification-dropdown">
                <li>
                  <h4>Notification</h4>
                  <ul class="style-none notify-list">
                    <li class="d-flex align-items-center unread">
                      <img
                        alt="icon"
                        loading="lazy"
                        width="36"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        class="lazy-img icon"
                        src="https://jobi-nextjs.vercel.app/_next/static/media/icon_36.d044b698.svg"
                        style={{ color: "transparent" }}
                      />
                      <div class="flex-fill ps-2">
                        <h6>You have 3 new mails</h6>
                        <span class="time">3 hours ago</span>
                      </div>
                    </li>
                    <li class="d-flex align-items-center ">
                      <img
                        alt="icon"
                        loading="lazy"
                        width="36"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        class="lazy-img icon"
                        src="https://jobi-nextjs.vercel.app/_next/static/media/icon_37.34c12156.svg"
                        style={{ color: "transparent" }}
                      />
                      <div class="flex-fill ps-2">
                        <h6>You have 5 new mails</h6>
                        <span class="time">6 hours ago</span>
                      </div>
                    </li>
                    <li class="d-flex align-items-center unread">
                      <img
                        alt="icon"
                        loading="lazy"
                        width="36"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        class="lazy-img icon"
                        src="https://jobi-nextjs.vercel.app/_next/static/media/icon_38.2db06cc7.svg"
                        style={{ color: "transparent" }}
                      />
                      <div class="flex-fill ps-2">
                        <h6>You have 7 new mails</h6>
                        <span class="time">9 hours ago</span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <a
                class="job-post-btn tran3s"
                href="/dashboard/employ-dashboard/submit-job"
              >
                Post a Job
              </a>
            </div>
          </div>
        </header>

        <div class="row gx-0 align-items-center">
          <div
            class="offcanvas compose-mail-offcanvas"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabindex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
          >
            <div class="compose-new-email-container">
              <div class="new-email-header position-relative">
                <div class="btn-group">
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
                <div class="input-group d-flex align-items-center">
                  <div class="text-center" style={{ width: "60px" }}>
                    To
                  </div>
                  <input
                    class="flex-fill"
                    placeholder="payoneer@inquiry.com"
                    type="email"
                  />
                </div>
                <div class="collapse" id="CC-input">
                  <div class="input-group d-flex align-items-center">
                    <div class="text-center" style={{ width: "60px" }}>
                      Cc
                    </div>
                    <input
                      class="flex-fill"
                      placeholder="payoneer@inquiry.com"
                      type="email"
                    />
                  </div>
                </div>
                <div class="collapse" id="BCC-input">
                  <div class="input-group d-flex align-items-center">
                    <div class="text-center" style={{ width: "60px" }}>
                      Bcc
                    </div>
                    <input
                      class="flex-fill"
                      placeholder="payoneer@inquiry.com"
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <div class="compose-body">
                <textarea>
                  Hi, Mary Cooper! Thanks for your invitation for the account
                  manager position for you company. I Will back to you soon with
                  all the require documents.
                </textarea>
              </div>
              <div class="compose-email-footer d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="insert-file position-relative me-3">
                    <img
                      alt="icon"
                      loading="lazy"
                      width="19"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      class="lazy-img"
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_32.b3b58da8.svg"
                      style={{ color: "transparent" }}
                    />
                    <input
                      placeholder=""
                      title="Insert File"
                      type="file"
                      name="uploadImg"
                    />
                  </div>
                  <button class="insert-emoji me-3">
                    <img
                      alt="icon"
                      loading="lazy"
                      width="18"
                      height="18"
                      decoding="async"
                      data-nimg="1"
                      class="lazy-img"
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_33.032d5ffc.svg"
                      style={{ color: "transparent" }}
                    />
                  </button>
                  <div class="insert-file position-relative me-3">
                    <img
                      alt="icon"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      class="lazy-img"
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_34.ff4d5049.svg"
                      style={{ color: "transparent" }}
                    />
                    <input
                      placeholder=""
                      title="Insert Image"
                      type="file"
                      name="uploadImg"
                    />
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <a href="#" class="delete-mail me-3">
                    <img
                      alt="icon"
                      loading="lazy"
                      width="19"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      class="lazy-img"
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_35.98f38e37.svg"
                      style={{ color: "transparent" }}
                    />
                  </a>
                  <a href="#" class="reply-btn tran3s">
                    Reply
                  </a>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="col-lg-4">
            <div class="d-flex align-items-center justify-content-between">
              <h2 class="main-title m0">Messages</h2>
              <a
                class="new-message-compose rounded-circle"
                data-bs-toggle="offcanvas"
                href="#offcanvasScrolling"
                role="button"
                aria-controls="offcanvasScrolling"
              >
                +
              </a>
            </div>
          </div>
          <div class="col-lg-8">
            <Box sx={{  marginTop:"20px", display:"flex", justifyContent:"space-evenly"}} class="message-pagination ps-lg-4 ps-xxl-5 d-flex align-items-center justify-content-between md-mt-40">
              <a href="#" class="prev-msg">
                <img
                  alt="icon"
                  loading="lazy"
                  width="34"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  class="lazy-img"
                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_26.1a9ca54f.svg"
                  style={{ color: "transparent" }}
                />
              </a>
              <div class="d-flex align-items-center">
                <a href="#">
                  <i class="bi bi-chevron-left"></i>
                </a>
                <span>1-5 of 120</span>
                <a href="#">
                  <i class="bi bi-chevron-right"></i>
                </a>
              </div>
              <a href="#" class="next-msg">
                <img
                  alt="icon"
                  loading="lazy"
                  width="34"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  class="lazy-img"
                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_27.69de0fc6.svg"
                  style={{ color: "transparent", marginRight:"25px" }}
                />
              </a>
            </Box>
          </div>
        </div>
        <div class="bg-white card-box border-20 p0 mt-30">
          <div class="message-wrapper">
            <Box style={{ display: "flex", justifyContent:"center", gap:"10px" }} class="row gx-0">
              <Box
                style={{
                  backgroundColor: "white",
                  width: "400px",
                  marginLeft: "20px",
                  marginRight: "20px",
                  borderRadius:"25px"
                }}
                class="col-lg-4"
              >
                <div class="message-sidebar pt-20">
                  <div class="ps-3 pe-3 ps-xxl-4 pe-xxl-4">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="page-title fw-500">Inbox</div>
                      <div class="action-dots float-end">
                        <button
                          class="action-btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span></span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                          <li>
                            <a class="dropdown-item" href="#">
                              Sent
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Important
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Draft
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Trash
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <form action="#" class="search-form mt-20 mb-20">
                      <input placeholder="Search contacts" type="text" />
                      <button>
                        <img
                          alt="icon"
                          loading="lazy"
                          width="16"
                          height="17"
                          decoding="async"
                          data-nimg="1"
                          class="lazy-img m-auto"
                          src="https://jobi-nextjs.vercel.app/_next/static/media/icon_10.35c41a63.svg"
                          style={{ color: "transparent" }}
                        />
                      </button>
                    </form>
                    <div
                      class="message_filter d-flex align-items-center justify-content-between mb-20"
                      id="module_btns"
                    >
                      <button class="filter_btn active">All</button>
                      <button class="filter_btn">
                        <span style={{ background: "rgb(255, 69, 69)" }}></span>{" "}
                        Read
                      </button>
                      <button class="filter_btn">
                        <span
                          style={{ background: "rgb(59, 218, 132)" }}
                        ></span>{" "}
                        Unread
                      </button>
                      <button class="filter_btn">
                        <span
                          style={{ background: "rgb(80, 192, 255)" }}
                        ></span>{" "}
                        Primary
                      </button>
                    </div>
                  </div>
                  <div class="email-read-panel">
                    <div class="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 read">
                      <div class="email-short-preview position-relative">
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="sender-name">Jenny Rio.</div>
                          <div class="date">Aug 22</div>
                        </div>
                        <div class="mail-sub">Work inquiry from google.</div>
                        <div class="mail-text">
                          Hello, This is Jenny from google. We’r the largest
                          online platform offer...
                        </div>
                        <div class="attached-file-preview d-flex align-items-center mt-15">
                          <div class="file d-flex align-items-center me-2">
                            <img
                              alt="icon"
                              loading="lazy"
                              width="12"
                              height="14"
                              decoding="async"
                              data-nimg="1"
                              class="lazy-img me-2"
                              src="https://jobi-nextjs.vercel.app/_next/static/media/icon_28.23ba7560.svg"
                              style={{ color: "transparent" }}
                            />
                            <span>details.pdf</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 primary selected">
                      <div class="email-short-preview position-relative">
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="sender-name">Hasan Islam.</div>
                          <div class="date">May 22</div>
                        </div>
                        <div class="mail-sub">Account Manager</div>
                        <div class="mail-text">
                          Hello, Greeting from Uber. Hope you doing great. I am
                          approcing to you for..
                        </div>
                        <div class="attached-file-preview d-flex align-items-center mt-15">
                          <div class="file d-flex align-items-center me-2">
                            <img
                              alt="icon"
                              loading="lazy"
                              width="12"
                              height="14"
                              decoding="async"
                              data-nimg="1"
                              class="lazy-img me-2"
                              src="https://jobi-nextjs.vercel.app/_next/static/media/icon_28.23ba7560.svg"
                              style={{ color: "transparent" }}
                            />
                            <span>details.pdf</span>
                          </div>
                          <div class="file d-flex align-items-center me-2">
                            <img
                              alt="icon"
                              loading="lazy"
                              width="12"
                              height="14"
                              decoding="async"
                              data-nimg="1"
                              class="lazy-img me-2"
                              src="https://jobi-nextjs.vercel.app/_next/static/media/icon_28.23ba7560.svg"
                              style={{ color: "transparent" }}
                            />
                            <span>form.pdf</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4">
                      <div class="email-short-preview position-relative">
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="sender-name">Jannatul Ferdaus.</div>
                          <div class="date">Jun 22</div>
                        </div>
                        <div class="mail-sub">
                          Product Designer Opportunities
                        </div>
                        <div class="mail-text">
                          Hello, This is Jannat from HuntX. We offer business
                          solution to our client..
                        </div>
                      </div>
                    </div>
                    <div class="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 read">
                      <div class="email-short-preview position-relative">
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="sender-name">Jakie Chan</div>
                          <div class="date">NOV 22</div>
                        </div>
                        <div class="mail-sub">Hunting Marketing Specialist</div>
                        <div class="mail-text">
                          Hello, We’r the well known Real Estate Inc provide
                          best interior/exterior solut...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
              <Box
                style={{
                  backgroundColor: "white",
                  width: "470px",
                  marginLeft: "20px",
                  marginRight: "20px",
                  borderRadius:"25px"
                }}
                class="col-lg-8"
              >
                <div class="open-email-container pb-40">
                  <div class="email-header divider d-flex justify-content-between ps-4 pe-4 ps-xxl-5 pe-xxl-5">
                    <div class="sender-info d-flex align-items-center">
                      <img
                        alt="logo"
                        fetchpriority="high"
                        width="47"
                        height="47"
                        decoding="async"
                        data-nimg="1"
                        class="lazy-img logo"
                        srcset="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_02.26817a33.png&amp;w=48&amp;q=75  1x,https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_02.26817a33.png&amp;w=96&amp;q=75  2x"
                        src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_02.26817a33.png&amp;w=96&amp;q=75"
                        style={{ color: "transparent" }}
                      />
                      <div class="ps-3">
                        <div class="sender-name">Payoneer</div>
                        <div class="sender-email">payoneer@inquiry.com</div>
                      </div>
                    </div>
                    <div class="email-info">
                      <div class="time">4:45AM (3 hours ago)</div>
                      <div class="d-flex align-items-center justify-content-end">
                        <button class="delete-email">
                          <img
                            alt="icon"
                            loading="lazy"
                            width="20"
                            height="21"
                            decoding="async"
                            data-nimg="1"
                            class="lazy-img"
                            src="https://jobi-nextjs.vercel.app/_next/static/media/icon_29.c4a2416d.svg"
                            style={{ color: "transparent" }}
                          />
                        </button>
                        <button class="reply-email ms-3 me-3">
                          <img
                            alt="icon"
                            loading="lazy"
                            width="24"
                            height="18"
                            decoding="async"
                            data-nimg="1"
                            class="lazy-img"
                            src="https://jobi-nextjs.vercel.app/_next/static/media/icon_30.088e4520.svg"
                            style={{ color: "transparent" }}
                          />
                        </button>
                        <div class="action-dots float-end">
                          <button
                            class="action-btn dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span></span>
                          </button>
                          <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                              <a class="dropdown-item" href="#">
                                Reply
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Fowrward
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Block
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="email-body divider">
                    <div class="ps-4 pe-4 ps-xxl-5 pe-xxl-5">
                      <h2>Account Manager.</h2>
                      <p>
                        Hello, Greeting from Uber. Hope you doing great. I am
                        approaching to you for as our company need a great &amp;
                        talented account manager.{" "}
                      </p>
                      <p>What we need from you to start:</p>
                      <ul class="style-none mb-30">
                        <li>- Your CV</li>
                        <li>- Verified Gov ID</li>
                      </ul>
                      <p>
                        After that we need to redesign our landing page because
                        the current one does not carry any information. If you
                        have any question don’t hesitate to contact us.
                      </p>
                      <p>
                        Our Telegram{" "}
                        <a href="#" class="fw-500">
                          @payoneer
                        </a>{" "}
                        <br />
                        Thank you!
                      </p>
                    </div>
                  </div>
                  <div class="email-footer">
                    <div class="ps-4 pe-4 ps-xxl-5 pe-xxl-5">
                      <div class="attachments mb-30">
                        <div class="d-flex justify-content-between mb-5">
                          <h6 class="m0">2 Attachment</h6>
                          <a href="#" class="all-download">
                            Download All
                          </a>
                        </div>
                        <div class="d-flex">
                          <a
                            href="#"
                            class="file tran3s d-flex align-items-center mt-10"
                            download=""
                          >
                            <div class="icon rounded-circle d-flex align-items-center justify-content-center">
                              <img
                                alt="icon"
                                loading="lazy"
                                width="17"
                                height="20"
                                decoding="async"
                                data-nimg="1"
                                class="lazy-img"
                                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_31.ea86013e.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                            <div class="ps-2">
                              <div class="file-name">project-details.pdf</div>
                              <div class="file-size">2.3mb</div>
                            </div>
                          </a>
                          <a
                            href="#"
                            class="file tran3s d-flex align-items-center mt-10"
                            download=""
                          >
                            <div class="icon rounded-circle d-flex align-items-center justify-content-center">
                              <img
                                alt="icon"
                                loading="lazy"
                                width="17"
                                height="20"
                                decoding="async"
                                data-nimg="1"
                                class="lazy-img"
                                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_31.ea86013e.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                            <div class="ps-2">
                              <div class="file-name">form.pdf</div>
                              <div class="file-size">1.3mb</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="compose-new-email-container">
                        <div class="new-email-header position-relative">
                          <div class="btn-group">
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
                          <div class="input-group d-flex align-items-center">
                            <div class="text-center" style={{ width: "60px" }}>
                              To
                            </div>
                            <input
                              class="flex-fill"
                              placeholder="payoneer@inquiry.com"
                              type="email"
                            />
                          </div>
                          <div class="collapse" id="CC-input">
                            <div class="input-group d-flex align-items-center">
                              <div
                                class="text-center"
                                style={{ width: "60px" }}
                              >
                                Cc
                              </div>
                              <input
                                class="flex-fill"
                                placeholder="payoneer@inquiry.com"
                                type="email"
                              />
                            </div>
                          </div>
                          <div class="collapse" id="BCC-input">
                            <div class="input-group d-flex align-items-center">
                              <div
                                class="text-center"
                                style={{ width: "60px" }}
                              >
                                Bcc
                              </div>
                              <input
                                class="flex-fill"
                                placeholder="payoneer@inquiry.com"
                                type="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="compose-body">
                          <textarea>
                            Hi, Mary Cooper! Thanks for your invitation for the
                            account manager position for you company. I Will
                            back to you soon with all the require documents.
                          </textarea>
                        </div>
                        <div class="compose-email-footer d-flex justify-content-between">
                          <div class="d-flex align-items-center">
                            <div class="insert-file position-relative me-3">
                              <img
                                alt="icon"
                                loading="lazy"
                                width="19"
                                height="20"
                                decoding="async"
                                data-nimg="1"
                                class="lazy-img"
                                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_32.b3b58da8.svg"
                                style={{ color: "transparent" }}
                              />
                              <input
                                placeholder=""
                                title="Insert File"
                                type="file"
                                name="uploadImg"
                              />
                            </div>
                            <button class="insert-emoji me-3">
                              <img
                                alt="icon"
                                loading="lazy"
                                width="18"
                                height="18"
                                decoding="async"
                                data-nimg="1"
                                class="lazy-img"
                                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_33.032d5ffc.svg"
                                style={{ color: "transparent" }}
                              />
                            </button>
                            <div class="insert-file position-relative me-3">
                              <img
                                alt="icon"
                                loading="lazy"
                                width="20"
                                height="20"
                                decoding="async"
                                data-nimg="1"
                                class="lazy-img"
                                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_34.ff4d5049.svg"
                                style={{ color: "transparent" }}
                              />
                              <input
                                placeholder=""
                                title="Insert Image"
                                type="file"
                                name="uploadImg"
                              />
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <a href="#" class="delete-mail me-3">
                              <img
                                alt="icon"
                                loading="lazy"
                                width="19"
                                height="20"
                                decoding="async"
                                data-nimg="1"
                                class="lazy-img"
                                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_35.98f38e37.svg"
                                style={{ color: "transparent" }}
                              />
                            </a>
                            <a href="#" class="reply-btn tran3s">
                              Reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
