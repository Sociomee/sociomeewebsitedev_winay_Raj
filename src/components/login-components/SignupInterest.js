import React,{Component, useState, useRef} from 'react'; 
import { NavLink } from "react-router-dom";

export default function Signup() {  

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
                      <div className="su-progress active"></div>
                      <div className="su-progress active"></div>
                    </div>
                    <div>
                        <div className="login-title">
                            <h2>Choose your Interests</h2>
                        </div>
                        <div className="login-discription">
                            <h4>Please select <b>at least 3 interests</b> for a better in-app experience</h4>
                        </div>
                        <div className="form-sec">
                            <div>
                                <form className="theme-form">
                                    <div className="form-group search-group-box">
                                        {/* <label>Select Your Interests</label> */}
                                        <input type="text" className="form-control" placeholder="Search..."/>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="#B9B9C3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="input-icon iw-20 ih-20"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </div>
                                    <div className="interest-list-blk">
                                      <ul>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Photography"/><label className="form-check-label" htmlFor="Photography">Photography <i className="ti-camera"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Books"/><label className="form-check-label" htmlFor="Books">Books <i className="ti-book"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Song"/><label className="form-check-label" htmlFor="Song">Song <i className="ti-music"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Movies"/><label className="form-check-label" htmlFor="Movies">Movies <i className="ti-video-camera"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Travelling"/><label className="form-check-label" htmlFor="Travelling">Travelling <i className="ti-car"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Writing"/><label className="form-check-label" htmlFor="Writing">Writing <i className="ti-pencil"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Philosophy"/><label className="form-check-label" htmlFor="Philosophy">Philosophy <i className="ti-thought"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Astrology"/><label className="form-check-label" htmlFor="Astrology">Astrology <i className="ti-basketball"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Reading"/><label className="form-check-label" htmlFor="Reading">Reading <i className="ti-camera"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Animator"/><label className="form-check-label" htmlFor="Animator">Animator <i className="ti-camera"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Animals"/><label className="form-check-label" htmlFor="Animals">Animals <i className="ti-camera"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Acting"/><label className="form-check-label" htmlFor="Acting">Acting <i className="ti-camera"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Sleeping"/><label className="form-check-label" htmlFor="Sleeping">Sleeping <i className="ti-camera"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Dancing"/><label className="form-check-label" htmlFor="Dancing">Dancing <i className="ti-camera"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Story"/><label className="form-check-label" htmlFor="Story">Story <i className="ti-camera"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Food"/><label className="form-check-label" htmlFor="Food">Food <i className="ti-camera"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Gaming"/><label className="form-check-label" htmlFor="Gaming">Gaming <i className="ti-camera"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Health"/><label className="form-check-label" htmlFor="Health">Health <i className="ti-camera"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Fashion"/><label className="form-check-label" htmlFor="Fashion">Fashion <i className="ti-camera"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Cooking"/><label className="form-check-label" htmlFor="Cooking">Cooking <i className="ti-camera"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Director"/><label className="form-check-label" htmlFor="Director">Director <i className="ti-camera"></i></label></div></li>
                                        <li><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="Architect"/><label className="form-check-label" htmlFor="Architect">Architect <i className="ti-camera"></i></label></div></li>
                                      </ul>
                                      <p>Select at least three Interests</p>
                                    </div>
                                    <div className="btn-section">
                                        <NavLink to="/Home" className="btn btn-solid btn-lg">CONTINUE</NavLink>
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