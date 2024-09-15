import React,{Component, useState, useRef} from 'react'; 
import { NavLink } from "react-router-dom";

export default function Signup() {  
  const [selected, setSelected] = useState("");
  const changeHandler = e => {
    setSelected(e.target.value);
  };

  console.log(selected);
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
                      <div className="su-progress"></div>
                    </div>
                    <div>
                        <div className="login-title">
                            <h2>Enter DOB</h2>
                        </div>
                        {/* <div className="login-discription">
                            <h4>Please enter your details below.</h4>
                        </div> */}
                        <div className="form-sec">
                            <div>
                                <form className="theme-form">
                                    <div className="form-group">
                                        <div className="row dob-cust-blk">
                                          <div className="col-4">
                                            <input type="text" className="form-control" placeholder="10" value={10}/>
                                            <label>Date</label>
                                          </div>
                                          <div className="col-4">
                                            <input type="text" className="form-control" placeholder="Jan" value={"Jan"}/>
                                            <label>Month</label>
                                          </div>
                                          <div className="col-4">
                                            <input type="text" className="form-control" placeholder="" value={1990}/>
                                            <label>Year</label>
                                          </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <h3 className="choose-gender-blk">Choose Gender</h3>
                                        <div className="form-check custom-form-check-login">
                                          <label className="form-check-label font-weight-normal" htmlFor="male">
                                            <p>Male</p>
                                            <input className="form-check-input radio_animated" type="radio" name="gender" id="male" value="male" checked={selected === "male"} onChange={changeHandler}/>
                                          </label>
                                        </div>
                                        <div className="form-check custom-form-check-login">
                                          <label className="form-check-label font-weight-normal" htmlFor="female">
                                            <p>Female</p>
                                            <input className="form-check-input radio_animated" type="radio" name="gender" id="female" value="female" checked={selected === "female"} onChange={changeHandler}/>
                                          </label>
                                        </div>
                                        <div className="form-check custom-form-check-login">
                                          <label className="form-check-label font-weight-normal" htmlFor="special">
                                            <p>I am Special</p>
                                            <input className="form-check-input radio_animated" type="radio" name="gender" id="special" value="special" checked={selected === "special"} onChange={changeHandler}/>
                                          </label>
                                        </div>
                                        <div className="specialgender" aria-hidden={selected !== "special" ? true : false}>
                                          <h3>How should we address you</h3>
                                          <div className="form-check custom-form-check-login">
                                            <label className="form-check-label font-weight-normal" htmlFor="he">
                                              <p>He</p>
                                              <input className="form-check-input radio_animated" type="radio" name="gender-special" id="he" value="he"/>
                                            </label>
                                          </div>
                                          <div className="form-check custom-form-check-login">
                                            <label className="form-check-label font-weight-normal" htmlFor="she">
                                              <p>She</p>
                                              <input className="form-check-input radio_animated" type="radio" name="gender-special" id="she" value="she"/>
                                            </label>
                                          </div>
                                          <div className="form-check custom-form-check-login">
                                            <label className="form-check-label font-weight-normal" htmlFor="notspecify">
                                              <p>Rather not specify</p>
                                              <input className="form-check-input radio_animated" type="radio" name="gender-special" id="notspecify" value="notspecify"/>
                                            </label>
                                          </div>
                                        </div>
                                    </div>
                                    <div className="btn-section">
                                        <NavLink to="/SignupInterest" className="btn btn-solid btn-lg">CONTINUE</NavLink>
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