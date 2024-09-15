import React,{Component} from 'react';
import { NavLink } from "react-router-dom";

export class Birthday extends Component {  

  render() {
    return (
      <>
        <div className="birthday-section section-b-space">
          <div className="birthday-top">
              <div className="title">
                  <h3>birthday !!!!</h3>
                  <h6>today your collge friend's birthday</h6>
              </div>
              <div className="setting">
                  <div className="setting-btn light-btn">
                      <a href="#" className="d-flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-light strokeWidth-3 iw-11 ih-11"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                      </a>
                  </div>
                  <div className="setting-btn light-btn ms-2 setting-dropdown">
                      <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                          <a className="d-flex" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-light strokeWidth-3 iw-12 ih-12"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                              <ul>
                                <li>
                                    <a href=""><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>Hide</a>
                                </li>
                                <li>
                                    <a href=""><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>Report</a>
                                </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="birthday-content">
              <div className="image-section">
                  <div className="icon">
                      <img src="assets/images/cake.png" className="img-fluid"
                          alt="cake"/>
                  </div>
                  <div className="center-profile">
                      <img src="assets/images/story-3.jpg"
                          className="img-fluid bg-img" alt="user"/>
                  </div>
                  <div className="icon">
                      <h5>20+</h5>
                  </div>
              </div>
              <div className="details">
                  <h3>sufiya elija</h3>
                  <h6>glasgow, scotland</h6>
                  <p>Lorem 5th Sept 2019 dummy text of the printing and typesetting industry.</p>
                  <form>
                      <input type="text" placeholder="wish birthday to your friend"
                          className="form-control"/>
                      <button type="submit">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-light icon strokeWidth-3 iw-13 ih-13"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </button>
                  </form>
              </div>
          </div>
        </div>
      </>
    );
  }
} 
export default Birthday 