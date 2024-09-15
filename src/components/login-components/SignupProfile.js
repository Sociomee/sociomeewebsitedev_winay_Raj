import React,{Component, useState, useRef} from 'react'; 
import { NavLink } from "react-router-dom";

export default function Signup() {  
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
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 m-auto">
                <div className="login-header-section">
                  <div className="logo-sec">
                    <NavLink to="/">
                      <img src="assets/images/logo.png" alt="logo" className="img-fluid"/>
                    </NavLink>
                  </div>
                </div>
                <div className="login-form">
                    <div className="signup-progress-bar">
                      <div className="su-progress active"></div>
                      <div className="su-progress active"></div>
                      <div className="su-progress active"></div>
                      <div className="su-progress"></div>
                      <div className="su-progress"></div>
                    </div>
                    <div>
                        <div className="login-title">
                            <h2>What's your name?</h2>
                        </div>
                        {/* <div className="login-discription">
                            <h4>Please enter your details below.</h4>
                        </div> */}
                        <div className="form-sec">
                            <div>
                                <form className="theme-form">
                                    <div className="form-group">
                                        {/* <label>What's your name?</label> */}
                                        <input type="text" className="form-control" placeholder="Write your full name here"/>
                                        {/* <p className="instruction-msg">Max 64 Characters</p> */}
                                    </div>
                                    <div className="form-group">
                                        <h3 className="choose-gender-blk">Pick a username</h3>
                                        {/* <label>Pick a username</label> */}
                                        <p className="label-descrip-blk">Help your friends to find you on SocioMee with a unique Username</p>
                                        <input type="text" className="form-control" placeholder="Pick a username"/>
                                        <p className="error-input-msg">* Username not available</p>
                                        <div className="username-suggestion">
                                          <h4>Suggestions: <a href="#">Next suggestions</a></h4>
                                          <ul>
                                            <li><span>@anurag_saini012</span></li>
                                            <li><span>@anuragSaini148</span></li>
                                            <li><span>@anurag_saini013</span></li>
                                            <li><span>@anurag_saini012</span></li>
                                            <li><span>@anurag_saini012</span></li>
                                            <li><span>@anurag_saini013</span></li>
                                          </ul>
                                        </div>
                                    </div>
                                    {/* <p className="notimsg-blk">When you will click on continue,  you will receive a verification code on the mobile number that you have entered.</p> */}
                                    <div className="form-group">
                                        <h3 className="choose-gender-blk">Create password?</h3>
                                        {/* <label>Create password</label> */}
                                        <p className="label-descrip-blk">Enter password of minimum 8 character with atleast one lowercase, uppercase, number and special character</p>
                                        <div className="input-block">
                                          <input type={passwordShown ? "text" : "password"} className="form-control" placeholder="Create Password"/>
                                          <svg onClick={togglePassword} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20 d-none"  ref={eyeOpenRef}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                          <svg onClick={toggleHidePassword} viewBox="0 0 24 24" width="16" height="16" stroke="#B9B9C3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20" ref={eyeCloseRef}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                        </div>
                                        <p className="instruction-msg">Min 8 Characters</p>
                                    </div>
                                    <div className="bottom-sec">
                                        <div className="form-check checkbox_animated">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label" htmlFor="exampleCheck1">I accept the &nbsp;<a href="#">Terms & Conditions</a></label>
                                        </div>
                                    </div>
                                    <div className="btn-section">
                                        <NavLink to="/SignupDetail" className="btn btn-solid btn-lg">CONTINUE</NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </section>
    </>
  );
} 