import React,{Component} from 'react';
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

export default function FriendSuggestion() {  
    var FriendSuggestsettings = {
        dots: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        centerMode: true,
        centerPadding: '30px',
        responsive: [{
                breakpoint: 1800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '40px'
                }
            }, {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '40px'
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '40px'
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '40px'
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '40px'
                }
            }
        ]
    };
    return (
      <>
        <div className="suggestion-box section-b-space">
          <div className="card-title">
              <h3>friend suggestion</h3>
              <div className="settings">
                  <div className="setting-btn">
                      <a href="#" className="d-flex">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-theme strokeWidth-3 iw-11 ih-11"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                      </a>
                  </div>
                  <div className="setting-btn setting-dropdown ms-2">
                      <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                          <a href="#" className="d-flex" data-bs-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-theme strokeWidth-3 iw-11 ih-11"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                              <ul>
                                  <li>
                                      <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>see all</a>
                                  </li>
                                  <li>
                                      <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>find friends</a>
                                  </li>
                                  <li>
                                      <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>settings</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="suggestion-content ratio_115 no-arrow frz-sug-slider-sec">
              <Slider {...FriendSuggestsettings} className="default-space">
                  <div>
                      <div className="story-box">
                          {/* <div className="adaptive-overlay"></div> */}
                          <div className="story-bg">
                              <img src="assets/images/story-0.jpg" className="img-fluid bg-img"
                                  data-adaptive-background='1' alt=""/>
                          </div>
                          <div className="story-content addnew-story-blk">
                              <img src="assets/images/add-new.png"/>
                              <h6>Add New</h6>
                          </div>
                      </div>
                  </div>
                  <div>
                      <div className="story-box">
                          <div className="adaptive-overlay"></div>
                          <div className="story-bg">
                              <img src="assets/images/story-3.jpg" className="img-fluid bg-img"
                                  data-adaptive-background='1' alt=""/>
                          </div>
                          <div className="story-content">
                              <h6>josephin water</h6>
                              <span>active now</span>
                          </div>
                      </div>
                  </div>
                  <div>
                      <div className="story-box">
                          <div className="adaptive-overlay"></div>
                          <div className="story-bg">
                              <img src="assets/images/story-4.jpg" className="img-fluid bg-img"
                                  data-adaptive-background='1' alt=""/>
                          </div>
                          <div className="story-content">
                              <h6>josephin water</h6>
                              <span>active now</span>
                          </div>
                      </div>
                  </div>
                  <div>
                      <div className="story-box">
                          <div className="adaptive-overlay"></div>
                          <div className="story-bg">
                              <img src="assets/images/story-2.jpg" className="img-fluid bg-img"
                                  data-adaptive-background='1' alt=""/>
                          </div>
                          <div className="story-content">
                              <h6>josephin water</h6>
                              <span>active now</span>
                          </div>
                      </div>
                  </div>
              </Slider>
          </div>
        </div>
      </>
    );
} 
// export default FriendSuggestion 