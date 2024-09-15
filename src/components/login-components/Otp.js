import React,{Component} from 'react'; 
import { NavLink } from "react-router-dom";

export class Otp extends Component {  
  constructor(props) {
    super(props);
    this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", otp6: "", disable: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value1, event) {
    this.setState({ [value1]: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus()
      }
    }
    else {
      console.log("next");
        const next = elmnt.target.tabIndex;
        if (next < 6) {
          elmnt.target.form.elements[next].focus()
        }
    }
  }

  render() {
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
                        <div className="su-progress"></div>
                        <div className="su-progress"></div>
                        <div className="su-progress"></div>
                        <div className="su-progress"></div>
                      </div>
                      <div>
                          <div className="login-title">
                              <h2>Enter OTP</h2>
                          </div>
                          <div className="login-discription">
                              <h4>An OTP has been sent to your phone number ending with<br /><b>XXX XXX 8797</b></h4>
                          </div>
                          <div className="form-sec">
                              <div>
                                  <form className="theme-form">
                                      <div className="form-group">
                                        <div className="otpContainer">
                                          <input
                                            name="otp1"
                                            type="text"
                                            placeholder="-"
                                            autoComplete="off"
                                            className="otpInput form-control"
                                            value={this.state.otp1}
                                            onKeyPress={this.keyPressed}
                                            onChange={e => this.handleChange("otp1", e)}
                                            tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                                          />
                                          <input
                                            name="otp2"
                                            type="text"
                                            placeholder="-"
                                            autoComplete="off"
                                            className="otpInput form-control"
                                            value={this.state.otp2}
                                            onChange={e => this.handleChange("otp2", e)}
                                            tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                                          />
                                          <input
                                            name="otp3"
                                            type="text"
                                            placeholder="-"
                                            autoComplete="off"
                                            className="otpInput form-control"
                                            value={this.state.otp3}
                                            onChange={e => this.handleChange("otp3", e)}
                                            tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                                          />
                                          <input
                                            name="otp4"
                                            type="text"
                                            placeholder="-"
                                            autoComplete="off"
                                            className="otpInput form-control"
                                            value={this.state.otp4}
                                            onChange={e => this.handleChange("otp4", e)}
                                            tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                                          />
                                          <input
                                            name="otp5"
                                            type="text"
                                            placeholder="-"
                                            autoComplete="off"
                                            className="otpInput form-control"
                                            value={this.state.otp5}
                                            onChange={e => this.handleChange("otp5", e)}
                                            tabIndex="5" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                                          />
                                          <input
                                            name="otp6"
                                            type="text"
                                            placeholder="-"
                                            autoComplete="off"
                                            className="otpInput form-control"
                                            value={this.state.otp6}
                                            onChange={e => this.handleChange("otp6", e)}
                                            tabIndex="6" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                                          />
                                        </div>
                                        <p className="error-input-msg d-none">Invalid OTP</p>
                                      </div>
                                      <div className="otp-time-count">00:20 sec</div>
                                      <div className="resendotp-blk">Didn't receive OTP yet? <a href="#" className="color-blue">Resend</a></div>
                                      <div className="btn-section">
                                          <NavLink to="/SignupEmail" className="btn btn-solid btn-lg">CONTINUE</NavLink>
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
} 
export default Otp 