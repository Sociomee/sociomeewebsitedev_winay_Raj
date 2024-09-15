import React,{Component, useState, useRef} from 'react'; 
import { NavLink } from "react-router-dom";

export default function SignupEmail() {  

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
                      <div className="su-progress"></div>
                      <div className="su-progress"></div>
                      <div className="su-progress"></div>
                    </div>
                    <div>
                        <div className="login-title">
                            <h2>What's your email address?</h2>
                        </div>
                        {/* <div className="login-discription">
                            <h4>Please fill the form below.</h4>
                        </div> */}
                        <div className="form-sec">
                            <div>
                                <form className="theme-form">
                                    <div className="form-group">
                                        {/* <label>Enter your Email Address</label> */}
                                        <input type="email" className="form-control" placeholder="Write your email here"/>
                                        <p className="error-input-msg">**Caption text, description, error notification**</p>
                                    </div>
                                    <div className="connect-with">
                                      <h6><span>OR</span></h6>
                                      <ul className="social-login-blk">
                                        <li><a href="#"><img src="assets/images/google-icon.png"/> Continue with Google</a></li>
                                        <li><a href="#"><img src="assets/images/apple-icon.png"/> Continue with Apple</a></li>
                                      </ul>
                                    </div>
                                    {/* <p className="notimsg-blk">Provide your email for better communication. </p> */}
                                    <div className="btn-section">
                                        <NavLink to="/SignupProfile" className="btn btn-solid btn-lg">CONTINUE</NavLink>
                                    </div>
                                    <div className="skip-reg-block">
                                      <NavLink to="/SignupProfile">Skip</NavLink>
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