import React,{Component} from 'react';
import { NavLink } from "react-router-dom";

export class Weather extends Component {  

  render() {
    return (
      <>
        <div className="weather-section section-b-space">
          <div className="card-title light-version">
              <h3>weather</h3>
              <div className="settings">
                  <div className="setting-btn light-btn">
                      <a href="#" className="d-flex">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-light strokeWidth-3 iw-11 ih-11"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                      </a>
                  </div>
                  <div className="setting-btn light-btn ms-2 setting-dropdown">
                      <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                          <a className="d-flex" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-light strokeWidth-3 iw-12 ih-12"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                              <ul>
                                  <li>
                                      <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>change city</a>
                                  </li>
                                  <li>
                                      <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>setting</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="weather-content">
              <div className="top-title">
                  <h2>28°C</h2>
                  <h5>4.45 pm</h5>
              </div>
              <h5>sunny day</h5>
              <h6>21 march 2021 (monday) <span>denmark</span></h6>
          </div>
          <div className="flaks-img">
              <img src="assets/images/snow-flaks.png" className="img-fluid"
                  alt="snow"/>
          </div>
          <div className="snowflakes" aria-hidden="true">
              <div className="snowflake">
                  ❅
              </div>
              <div className="snowflake">
                  ❆
              </div>
              <div className="snowflake">
                  ❅
              </div>
              <div className="snowflake">
                  ❆
              </div>
              <div className="snowflake">
                  ❅
              </div>
              <div className="snowflake">
                  ❆
              </div>
              <div className="snowflake">
                  ❅
              </div>
              <div className="snowflake">
                  ❆
              </div>
              <div className="snowflake">
                  ❅
              </div>
              <div className="snowflake">
                  ❆
              </div>
              <div className="snowflake">
                  ❅
              </div>
              <div className="snowflake">
                  ❆
              </div>
          </div>
        </div>
      </>
    );
  }
} 
export default Weather 