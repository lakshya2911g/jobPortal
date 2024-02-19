import React from "react";
import "./settings.css";
import { Card } from "@mui/material";

const Settings = () => {
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
        {/*<script
      src="../../_next/static/chunks/webpack-6a4e5b800bd8a703.js"
      async=""
    ></script>
    <script
      src="../../_next/static/chunks/2443530c-871fd217cb38e8bd.js"
      async=""
    ></script>
    <script
      src="../../_next/static/chunks/6488-0174e9811757ac3e.js"
      async=""
    ></script>
    <script
      src="../../_next/static/chunks/main-app-a671bfc622ba85d3.js"
      async=""
    ></script>
    <script>
      (self.__next_f = self.__next_f || []).push([0]);
    </script>
    <script>
      self.__next_f.push([
        1,
        '1:HL["/_next/static/media/2c5243ddb420350b-s.p.woff2",{"as":"font","type":"font/woff2"}]\n2:HL["/_next/static/media/41d071df82ce7b14-s.p.woff",{"as":"font","type":"font/woff"}]\n3:HL["/_next/static/media/54867ac977eda96b-s.p.woff2",{"as":"font","type":"font/woff2"}]\n4:HL["/_next/static/media/664ad6406ba55027-s.p.woff",{"as":"font","type":"font/woff"}]\n5:HL["/_next/static/media/bdcb71c25532c7a7-s.p.woff2",{"as":"font","type":"font/woff2"}]\n6:HL["/_next/static/css/d6198bcf2c342a81.css",{"as":"style"}]\n0:"$L7"\n',
      ]);
    </script>
    <script>
      self.__next_f.push([
        1,
        '8:I{"id":"38827","chunks":["2272:static/chunks/webpack-6a4e5b800bd8a703.js","2667:static/chunks/2443530c-871fd217cb38e8bd.js","6488:static/chunks/6488-0174e9811757ac3e.js"],"name":"","async":false}\na:I{"id":"9126","chunks":["2272:static/chunks/webpack-6a4e5b800bd8a703.js","2667:static/chunks/2443530c-871fd217cb38e8bd.js","6488:static/chunks/6488-0174e9811757ac3e.js"],"name":"","async":false}\nb:I{"id":"46828","chunks":["1692:static/chunks/1692-dcc4c2fb4e5b7017.js","3185:static/chunks/app/layout-76e490d609218',
      ]);
    </script>
    <script>
      self.__next_f.push([
        1,
        'e02.js"],"name":"Providers","async":false}\nd:I{"id":"11401","chunks":["1692:static/chunks/1692-dcc4c2fb4e5b7017.js","3185:static/chunks/app/layout-76e490d609218e02.js"],"name":"","async":false}\ne:I{"id":"14463","chunks":["2272:static/chunks/webpack-6a4e5b800bd8a703.js","2667:static/chunks/2443530c-871fd217cb38e8bd.js","6488:static/chunks/6488-0174e9811757ac3e.js"],"name":"","async":false}\nf:I{"id":"91010","chunks":["2272:static/chunks/webpack-6a4e5b800bd8a703.js","2667:static/chunks/2443530c-871fd217cb38e8b',
      ]);
    </script>
    <script>
      self.__next_f.push([
        1,
        'd.js","6488:static/chunks/6488-0174e9811757ac3e.js"],"name":"","async":false}\n10:I{"id":"14143","chunks":["2272:static/chunks/webpack-6a4e5b800bd8a703.js","2667:static/chunks/2443530c-871fd217cb38e8bd.js","6488:static/chunks/6488-0174e9811757ac3e.js"],"name":"","async":false}\n11:I{"id":"67","chunks":["1692:static/chunks/1692-dcc4c2fb4e5b7017.js","9962:static/chunks/9962-5dde33761d733d2c.js","967:static/chunks/967-8f45dcb97aef8f68.js","4951:static/chunks/4951-109eaff1aa2aec16.js","6162:static/chunks/app/dash',
      ]);
    </script>
    <script>
      self.__next_f.push([
        1,
        'board/candidate-dashboard/setting/page-fa44e9bbe683d84a.js"],"name":"","async":false}\n',
      ]);
    </script>
    <script>
      self.__next_f.push([
        1,
        '7:[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/d6198bcf2c342a81.css","precedence":"next"}]],["$","$L8",null,{"assetPrefix":"","initialCanonicalUrl":"/dashboard/candidate-dashboard/setting","initialTree":["",{"children":["dashboard",{"children":["candidate-dashboard",{"children":["setting",{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",true],"initialHead":["$L9",["$","meta",null,{"name":"next-size-adjust"}]],"globalErrorComponent":"$a","notFound":["$","html",null,{"lang":"en","children":[["$","head",null,{"children":["$","link",null,{"rel":"icon","href":"/favicon.ico","sizes":"any"}]}],["$","body",null,{"suppressHydrationWarning":true,"classNameName":"__variable_e76efa __variable_95782f","children":[["$","$Lb",null,{"children":["$Lc","$undefined",[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\\"Segoe UI\\",Roboto,Helvetica,Arial,sans-serif,\\"Apple Color Emoji\\",\\"Segoe UI Emoji\\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"classNameName":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]]]}],["$","$Ld",null,{}]]}]]}],"asNotFound":false,"children":[["$","html",null,{"lang":"en","children":[["$","head",null,{"children":["$","link",null,{"rel":"icon","href":"/favicon.ico","sizes":"any"}]}],["$","body",null,{"suppressHydrationWarning":true,"classNameName":"__variable_e76efa __variable_95782f","children":[["$","$Lb",null,{"children":["$","$Le",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","loading":"$undefined","loadingStyles":"$undefined","hasLoading":false,"template":["$","$Lf",null,{}],"templateStyles":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","childProp":{"current":["$","$Le",null,{"parallelRouterKey":"children","segmentPath":["children","dashboard","children"],"error":"$undefined","errorStyles":"$undefined","loading":"$undefined","loadingStyles":"$undefined","hasLoading":false,"template":["$","$Lf",null,{}],"templateStyles":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","childProp":{"current":["$","$Le",null,{"parallelRouterKey":"children","segmentPath":["children","dashboard","children","candidate-dashboard","children"],"error":"$undefined","errorStyles":"$undefined","loading":"$undefined","loadingStyles":"$undefined","hasLoading":false,"template":["$","$Lf",null,{}],"templateStyles":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","childProp":{"current":["$","$Le",null,{"parallelRouterKey":"children","segmentPath":["children","dashboard","children","candidate-dashboard","children","setting","children"],"error":"$undefined","errorStyles":"$undefined","loading":"$undefined","loadingStyles":"$undefined","hasLoading":false,"template":["$","$Lf",null,{}],"templateStyles":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","childProp":{"current":[["$","$L10",null,{"propsForComponent":{"params":{}},"Component":"$11"}],null],"segment":"__PAGE__"},"styles":[]}],"segment":"setting"},"styles":[]}],"segment":"candidate-dashboard"},"styles":[]}],"segment":"dashboard"},"styles":[]}]}],["$","$Ld",null,{}]]}]]}],null]}]]\n',
      ]);
    </script>
    <script>
      self.__next_f.push([
        1,
        'c:[[["$","meta",null,{"charSet":"utf-8"}],null,null,null,null,null,null,null,null,null,null,["$","meta",null,{"name":"viewport","content":"width=device-width, initial-scale=1"}],null,null,null,null,null,null,null,null,null,null,[]],[null,null,null,null],null,null,[null,null,null,null,null],null,null,null,null,null]\n',
      ]);
    </script>
    <script>
      self.__next_f.push([
        1,
        '9:[[["$","meta",null,{"charSet":"utf-8"}],["$","title",null,{"children":"Jobi - Job Portal \u0026 Job Board React NextJS Template"}],["$","meta",null,{"name":"description","content":"Generated by create next app"}],null,null,null,null,null,null,null,null,["$","meta",null,{"name":"viewport","content":"width=device-width, initial-scale=1"}],null,null,null,null,null,null,null,null,null,null,[]],[null,null,null,null],null,null,[null,null,null,null,null],null,null,null,null,[null,[["$","link",null,{"rel":"icon","href":"/favicon.ico","type":"image/x-icon","sizes":"any"}]],[],null]]\n',
      ]);
    </script>*/}
      </div>
    </div>
  );
};

export default Settings;
