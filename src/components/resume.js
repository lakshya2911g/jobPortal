import React, { useState } from "react";
import "./resume.css";
import {
  Card,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  Menu,
  MenuItem,
  MenuList,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Resume = () => {
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

  // year dropdown
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

              <h2 className="main-title">My Resume</h2>

              <Card style={{ margin: "25px", borderRadius: "25px" }}>
                <div className="bg-white card-box border-20">
                  <h4 className="dash-title-three">Resume Attachment</h4>
                  <div className="dash-input-wrapper mb-20">
                    <label for="">CV Attachment*</label>
                    <div className="attached-file d-flex align-items-center justify-content-between mb-15">
                      <span>MyCvResume.PDF</span>
                      <a href="#" className="remove-btn">
                        <i className="bi bi-x"></i>
                      </a>
                    </div>
                    <div className="attached-file d-flex align-items-center justify-content-between">
                      <span>CandidateCV02.PDF</span>
                      <a href="#" className="remove-btn">
                        <i className="bi bi-x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="dash-btn-one d-inline-block position-relative me-3">
                    <i className="bi bi-plus"></i>Upload CV
                    <input
                      type="file"
                      id="uploadCV"
                      placeholder=""
                      name="uploadCV"
                    />
                  </div>
                  <small>Upload file .pdf, .doc, .docx</small>
                </div>
              </Card>

              <Card style={{ margin: "25px", borderRadius: "25px" }}>
                <div className="bg-white card-box border-20 mt-40">
                  <h4 className="dash-title-three">Brief Summary</h4>
                  <div className="dash-input-wrapper mb-35 md-mb-20">
                    <label for="">Summary*</label>
                    <textarea
                      className="size-lg"
                      placeholder="Write something interesting about you...."
                    ></textarea>
                    <div className="alert-text">
                      Brief description for your resume. URLs are hyperlinked.
                    </div>
                  </div>
                </div>
              </Card>

              <Card style={{ margin: "25px", borderRadius: "25px" }}>
                <div className="bg-white card-box border-20 mt-40">
                  <h4 className="dash-title-three">Education</h4>
                  <div
                    className="accordion dash-accordion-one"
                    id="accordionOne"
                  >
                    <Accordion className="accordion-item">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        className="accordion-header"
                        id="headingOne"
                      >
                        Add Education*
                      </AccordionSummary>

                      <AccordionDetails className="accordion-body">
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label for="">Title*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="dash-input-wrapper mb-30">
                              <input
                                type="text"
                                placeholder="Product Designer (Google)"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label for="">Academy*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="dash-input-wrapper mb-30">
                              <input
                                type="text"
                                placeholder="Google Arts Collage &amp; University"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label for="">Year*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="row">
                              <Box
                                sx={{ minWidth: 120 }}
                                className="dash-input-wrapper mb-25"
                              >
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    From
                                  </InputLabel>

                                  <Select
                                    className="list"
                                    role="menubar"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={content}
                                    label="From"
                                    onChange={handleContentChange}
                                  >
                                    <MenuItem
                                      value={1}
                                      className="option selected focus"
                                      role="menuitem"
                                    >
                                      2024
                                    </MenuItem>
                                    <MenuItem
                                      value={2}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2023
                                    </MenuItem>
                                    <MenuItem
                                      value={3}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2022
                                    </MenuItem>
                                    <MenuItem
                                      value={4}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2021
                                    </MenuItem>
                                    <MenuItem
                                      value={5}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2020
                                    </MenuItem>
                                    <MenuItem
                                      value={6}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2019
                                    </MenuItem>
                                    <MenuItem
                                      dvalue={7}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2018
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                              <Box
                                sx={{ minWidth: 120 }}
                                className="dash-input-wrapper mb-25"
                              >
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    To
                                  </InputLabel>

                                  <Select
                                    className="list"
                                    role="menubar"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={content}
                                    label="To"
                                    onChange={handleContentChange}
                                  >
                                    <MenuItem
                                      value={1}
                                      className="option selected focus"
                                      role="menuitem"
                                    >
                                      2024
                                    </MenuItem>
                                    <MenuItem
                                      value={2}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2023
                                    </MenuItem>
                                    <MenuItem
                                      value={3}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2022
                                    </MenuItem>
                                    <MenuItem
                                      value={4}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2021
                                    </MenuItem>
                                    <MenuItem
                                      value={5}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2020
                                    </MenuItem>
                                    <MenuItem
                                      value={6}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2019
                                    </MenuItem>
                                    <MenuItem
                                      dvalue={7}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2018
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label for="">Description*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="dash-input-wrapper mb-30">
                              <textarea
                                className="size-lg"
                                placeholder="Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam et pulvinar tortor luctus."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion className="accordion-item">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        className="accordion-header"
                        id="headingOne"
                      >
                        Add Education*
                      </AccordionSummary>

                      <AccordionDetails className="accordion-body">
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label for="">Title*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="dash-input-wrapper mb-30">
                              <input
                                type="text"
                                placeholder="Product Designer (Google)"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label for="">Academy*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="dash-input-wrapper mb-30">
                              <input
                                type="text"
                                placeholder="Google Arts Collage &amp; University"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label for="">Year*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="row">
                              <Box
                                sx={{ minWidth: 120 }}
                                className="dash-input-wrapper mb-25"
                              >
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    From
                                  </InputLabel>

                                  <Select
                                    className="list"
                                    role="menubar"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={content}
                                    label="From"
                                    onChange={handleContentChange}
                                  >
                                    <MenuItem
                                      value={1}
                                      className="option selected focus"
                                      role="menuitem"
                                    >
                                      2024
                                    </MenuItem>
                                    <MenuItem
                                      value={2}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2023
                                    </MenuItem>
                                    <MenuItem
                                      value={3}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2022
                                    </MenuItem>
                                    <MenuItem
                                      value={4}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2021
                                    </MenuItem>
                                    <MenuItem
                                      value={5}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2020
                                    </MenuItem>
                                    <MenuItem
                                      value={6}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2019
                                    </MenuItem>
                                    <MenuItem
                                      dvalue={7}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2018
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                              <Box
                                sx={{ minWidth: 120 }}
                                className="dash-input-wrapper mb-25"
                              >
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    To
                                  </InputLabel>

                                  <Select
                                    className="list"
                                    role="menubar"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={content}
                                    label="To"
                                    onChange={handleContentChange}
                                  >
                                    <MenuItem
                                      value={1}
                                      className="option selected focus"
                                      role="menuitem"
                                    >
                                      2024
                                    </MenuItem>
                                    <MenuItem
                                      value={2}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2023
                                    </MenuItem>
                                    <MenuItem
                                      value={3}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2022
                                    </MenuItem>
                                    <MenuItem
                                      value={4}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2021
                                    </MenuItem>
                                    <MenuItem
                                      value={5}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2020
                                    </MenuItem>
                                    <MenuItem
                                      value={6}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2019
                                    </MenuItem>
                                    <MenuItem
                                      dvalue={7}
                                      className="option false"
                                      role="menuitem"
                                    >
                                      2018
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label for="">Description*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="dash-input-wrapper mb-30">
                              <textarea
                                className="size-lg"
                                placeholder="Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam et pulvinar tortor luctus."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <a href="#" className="dash-btn-one">
                    <i className="bi bi-plus"></i> Add more
                  </a>
                </div>
              </Card>

              <Card style={{ margin: "25px", borderRadius: "25px" }}>
                <div className="bg-white card-box border-20 mt-40">
                  <h4 className="dash-title-three">Skills &amp; Experience</h4>
                  <div className="dash-input-wrapper mb-40">
                    <label for="">Add Skills*</label>
                    <div className="skills-wrapper">
                      <ul className="style-none d-flex flex-wrap align-items-center">
                        <li className="is_tag">
                          <button>
                            Figma <i className="bi bi-x"></i>
                          </button>
                        </li>
                        <li className="is_tag">
                          <button>
                            HTML5 <i className="bi bi-x"></i>
                          </button>
                        </li>
                        <li className="is_tag">
                          <button>
                            Illustrator <i className="bi bi-x"></i>
                          </button>
                        </li>
                        <li className="is_tag">
                          <button>
                            Adobe Photoshop <i className="bi bi-x"></i>
                          </button>
                        </li>
                        <li className="is_tag">
                          <button>
                            WordPress <i className="bi bi-x"></i>
                          </button>
                        </li>
                        <li className="is_tag">
                          <button>
                            jQuery <i className="bi bi-x"></i>
                          </button>
                        </li>
                        <li className="is_tag">
                          <button>
                            Web Design <i className="bi bi-x"></i>
                          </button>
                        </li>
                        <li className="is_tag">
                          <button>
                            Adobe XD <i className="bi bi-x"></i>
                          </button>
                        </li>
                        <li className="is_tag">
                          <button>
                            CSS <i className="bi bi-x"></i>
                          </button>
                        </li>
                        <li className="more_tag">
                          <button>+</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dash-input-wrapper mb-15">
                    <label for="">Add Work Experience*</label>
                  </div>
                  <div
                    className="accordion dash-accordion-one"
                    id="accordionTwo"
                  >
                    <Accordion className="accordion-item">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        
                        className="accordion-header"
                        id="headingOne"
                      >
                        Experience 1*
                      </AccordionSummary>
                      
                        <AccordionDetails className="accordion-body">
                          <div className="row">
                            <div className="col-lg-2">
                              <div className="dash-input-wrapper mb-30 md-mb-10">
                                <label for="">Title*</label>
                              </div>
                            </div>
                            <div className="col-lg-10">
                              <div className="dash-input-wrapper mb-30">
                                <input
                                  type="text"
                                  placeholder="Lead Product Designer"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-2">
                              <div className="dash-input-wrapper mb-30 md-mb-10">
                                <label for="">company*</label>
                              </div>
                            </div>
                            <div className="col-lg-10">
                              <div className="dash-input-wrapper mb-30">
                                <input
                                  type="text"
                                  placeholder="Amazon Inc"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-2">
                              <div className="dash-input-wrapper mb-30 md-mb-10">
                                <label for="">Year*</label>
                              </div>
                            </div>
                            <div className="col-lg-10">
                              <div className="row">
                                <Box
                                  sx={{ minWidth: 120 }}
                                  className="dash-input-wrapper mb-25"
                                >
                                  <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                      From
                                    </InputLabel>

                                    <Select
                                      className="list"
                                      role="menubar"
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={content}
                                      label="From"
                                      onChange={handleContentChange}
                                    >
                                      <MenuItem
                                        value={1}
                                        className="option selected focus"
                                        role="menuitem"
                                      >
                                        2024
                                      </MenuItem>
                                      <MenuItem
                                        value={2}
                                        className="option false"
                                        role="menuitem"
                                      >
                                        2023
                                      </MenuItem>
                                      <MenuItem
                                        value={3}
                                        className="option false"
                                        role="menuitem"
                                      >
                                        2022
                                      </MenuItem>
                                      <MenuItem
                                        value={4}
                                        className="option false"
                                        role="menuitem"
                                      >
                                        2021
                                      </MenuItem>
                                      <MenuItem
                                        value={5}
                                        className="option false"
                                        role="menuitem"
                                      >
                                        2020
                                      </MenuItem>
                                      <MenuItem
                                        value={6}
                                        className="option false"
                                        role="menuitem"
                                      >
                                        2019
                                      </MenuItem>
                                      <MenuItem
                                        dvalue={7}
                                        className="option false"
                                        role="menuitem"
                                      >
                                        2018
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Box>
                                <Box
                                  sx={{ minWidth: 120 }}
                                  className="dash-input-wrapper mb-25"
                                >
                                  <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                      To
                                    </InputLabel>

                                    <Select
                                      className="list"
                                      role="menubar"
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={content}
                                      label="To"
                                      onChange={handleContentChange}
                                    >
                                      <MenuItem
                                        value={1}
                                        className="option selected focus"
                                        role="menuitem"
                                      >
                                        2024
                                      </MenuItem>
                                      <MenuItem
                                        value={2}
                                        className="option false"
                                        role="menuitem"
                                      >
                                        2023
                                      </MenuItem>
                                      <MenuItem
                                        value={3}
                                        className="option false"
                                        role="menuitem"
                                      >
                                        2022
                                      </MenuItem>
                                      <MenuItem
                                        value={4}
                                        className="option false"
                                        role="menuitem"
                                      >
                                        2021
                                      </MenuItem>
                                      <MenuItem
                                        value={5}
                                        className="option false"
                                        role="menuitem"
                                      >
                                        2020
                                      </MenuItem>
                                      <MenuItem
                                        value={6}
                                        className="option false"
                                        role="menuitem"
                                      >
                                        2019
                                      </MenuItem>
                                      <MenuItem
                                        dvalue={7}
                                        className="option false"
                                        role="menuitem"
                                      >
                                        2018
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Box>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-2">
                              <div className="dash-input-wrapper mb-30 md-mb-10">
                                <label for="">Description*</label>
                              </div>
                            </div>
                            <div className="col-lg-10">
                              <div className="dash-input-wrapper mb-30">
                                <textarea
                                  className="size-lg"
                                  placeholder="Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam et pulvinar tortor luctus."
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </AccordionDetails>
                      
                    </Accordion>
                  </div>
                  <a style={{marginTop:"10px"}} href="#" className="dash-btn-one">
                    <i className="bi bi-plus"></i> Add more
                  </a>
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

export default Resume;
