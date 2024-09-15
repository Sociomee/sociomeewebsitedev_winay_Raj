import React,{Component} from 'react';
import { NavLink } from "react-router-dom";

export class ProfileBox extends Component {  

  render() {
    return (
      <>
        <div className="profile-box section-b-space">
          <div className="profile-setting">
              <div className="setting-btn refresh">
                  <a href="#" className="d-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-theme strokeWidth-3 iw-11 ih-11"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                  </a>
              </div>
              <div className="setting-btn setting setting-dropdown">
                  <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                      <a href="#" className="d-flex" data-bs-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-theme strokeWidth-3 iw-11 ih-11"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                          <ul>
                              <li>
                                  <NavLink to="/MyProfile"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit icon-font-light iw-16 ih-16"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> edit profile</NavLink>
                              </li>
                              <li>
                                  <NavLink to="/MyTimeline"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> view profile</NavLink>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div className="profile-content">
              <a href="#" className="image-section">
                  <div className="profile-img">
                      <div>
                          <img src="assets/images/my-profile.jpg"
                              className="img-fluid bg-img" alt="profile"/>
                      </div>
                      <span className="stats">
                          <img src="assets/images/verified-1.png"
                              className="img-fluid" alt="verified"/>
                      </span>
                  </div>
              </a>
              <div className="profile-detail">
                  <a href="#"><h2>kelin jasen <span>❤</span></h2></a>
                  <h5>Student</h5>
                  <div className="description">
                      <p>Kelin-Jasen123<span>Lives in Milan, Italy</span></p>
                  </div>
                  <div className="counter-stats">
                      <ul id="counter">
                          <li>
                              <h3 className="counter-value" data-count="546">546</h3>
                              <h5>following</h5>
                          </li>
                          <li>
                              <h3 className="counter-value" data-count="26335">845</h3>
                              <h5>likes</h5>
                          </li>
                          <li>
                              <h3 className="counter-value" data-count="6845">965</h3>
                              <h5>followers</h5>
                          </li>
                      </ul>
                  </div>
                  <a href="#" className="btn btn-solid">view profile</a>
              </div>
          </div>
        </div>
      </>
    );
  }
} 
export default ProfileBox 