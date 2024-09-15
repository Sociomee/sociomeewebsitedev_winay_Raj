import React,{Component, useState, useRef} from 'react'; 
import { NavLink } from "react-router-dom";
import LoginLanguage from './LoginLanguage';

export default function Login() {  
  const eyeOpenRef = useRef(null);
  const eyeCloseRef = useRef(null);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    eyeOpenRef.current.classList.add("d-none");
    eyeCloseRef.current.classList.remove("d-none");
  };
  const toggleHidePassword = () => {
    setPasswordShown(!passwordShown);
    eyeOpenRef.current.classList.remove("d-none");
    eyeCloseRef.current.classList.add("d-none");
  };

  return (
    <>
      <section className="login-section">
        {/* <div className="header-section">
          <div className="logo-sec">
            <a href="index.html">
              <img src="assets/images/logo.png" alt="logo" className="img-fluid"/>
            </a>
          </div>
        </div> */}
        <div className="container">
          <div className="row">
            {/* <div className="col-xl-6 col-lg-5 d-none d-lg-block">
              <div className="login-welcome">
                <div>
                  <img src="assets/images/login-left.png" className="img-fluid"/>
                </div>
              </div>
            </div> */}
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 m-auto">
                <div className="login-header-section">
                  <div className="logo-sec">
                    <NavLink to="/">
                      <img src="assets/images/logo.png" alt="logo" className="img-fluid"/>
                    </NavLink>
                  </div>
                </div>
                <div className="login-form">
                    <div>
                        <div className="login-title">
                            <h2>Welcome</h2>
                        </div>
                        <div className="login-discription">
                            <h4>Please Login to your account.</h4>
                        </div>
                        <div className="form-sec">
                            <div>
                                <form className="theme-form">
                                    <div className="form-group">
                                        {/* <label>Enter your Mobile Number</label> */}
                                        <div className="input-block">
                                          <input type="text" className="form-control" placeholder="Enter your mobile number"/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        </div>
                                        <p className="error-input-msg">*Mobile number does not register with us.</p>
                                    </div>
                                    <div className="form-group">
                                        {/* <label>Enter your password</label> */}
                                        <div className="input-block">
                                          <input type={passwordShown ? "text" : "password"} className="form-control" placeholder="Enter your Password"/>
                                          <svg onClick={togglePassword} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20 d-none"  ref={eyeOpenRef}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                          <svg onClick={toggleHidePassword} viewBox="0 0 24 24" width="16" height="16" stroke="#B9B9C3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20" ref={eyeCloseRef}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                        </div>
                                    </div>
                                    <div className="bottom-sec">
                                        <div className="form-check checkbox_animated">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                        </div>
                                        <NavLink to="/ForgotPassword" className="ms-auto forget-password">forgot password?</NavLink>
                                    </div>
                                    <div className="btn-section">
                                        <NavLink to="/Home" className="btn btn-solid btn-lg without-input-fill">login</NavLink>
                                    </div>
                                </form>
                                <div className="connect-with">
                                    {/* <h6><span>OR Connect With</span></h6>
                                    <ul className="social-login-blk">
                                      <li><a href="#"><img src="assets/images/google-icon.png"/> Continue with Google</a></li>
                                      <li><a href="#"><img src="assets/images/apple-icon.png"/> Continue with Apple</a></li>
                                    </ul> */}
                                    <div className="no-account-blk"><p>Don't have an account? <NavLink to="/Signup">Get Started</NavLink></p></div>
                                    <div className="privacy-usernoti-blk"><a href="#">Privacy Policy</a> • <a href="#">User Notice</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="language-selection-blk">
                  <div className="langauge-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none" className="iw-14 globe-svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589"></path></svg>
                    <select className="form-select">
                      <option value="">Select Language</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Dutch">Dutch</option>
                      <option value="Arabic">Arabic</option>
                      <option value="Arawak">Arawak</option>
                      <option value="Chinese">Chinese</option>
                    </select>
                  </div>
                </div> */}
            </div>
          </div>
          <LoginLanguage></LoginLanguage>
        </div>
    </section>
    </>
  );
} 