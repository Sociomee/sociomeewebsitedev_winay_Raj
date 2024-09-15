import React,{Component} from 'react';
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

export default function  FriendSuggestion() {  
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
              <h3>Suggestion</h3>
              <div className="settings">
                  <div className="seeall-btn">
                      <a href="#" className="d-flex">See All</a>
                  </div>
              </div>
          </div>
          <div className="suggestion-content ratio_115 no-arrow frz-sug-slider-sec">
              <Slider {...FriendSuggestsettings} className="default-space">
                  <div>
                    <div className="friend-sugges-box">
                        <div className="fdimg-blk">
                            <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt=""/>
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-24 ih-24"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </div>
                        <div className="fdcont-blk">
                            <h4>Lina Jimmy</h4>
                            <div className="people-likes matual-friend-sec">
                                <ul className="matual-friend-blk">
                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img="assets/images/story-2.jpg">
                                        <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt=""/>
                                    </li>
                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                        <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                                    </li>
                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                        <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                                    </li>
                                </ul>
                                <h6>+5 mutual</h6>
                            </div>
                            <a href="#" className="d-block btn btn-primary">Send Request</a>
                        </div>
                    </div>
                  </div>
                  <div>
                    <div className="friend-sugges-box">
                        <div className="fdimg-blk">
                            <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-24 ih-24"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </div>
                        <div className="fdcont-blk">
                            <h4>Lina Jimmy</h4>
                            <div className="people-likes matual-friend-sec">
                                <ul className="matual-friend-blk">
                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img="assets/images/story-2.jpg">
                                        <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt=""/>
                                    </li>
                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                        <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                                    </li>
                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                        <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                                    </li>
                                </ul>
                                <h6>+5 mutual</h6>
                            </div>
                            <a href="#" className="d-block btn btn-primary">Send Request</a>
                        </div>
                    </div>
                  </div>
                  <div>
                    <div className="friend-sugges-box">
                        <div className="fdimg-blk">
                            <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-24 ih-24"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </div>
                        <div className="fdcont-blk">
                            <h4>Lina Jimmy</h4>
                            <div className="people-likes matual-friend-sec">
                                <ul className="matual-friend-blk">
                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img="assets/images/story-2.jpg">
                                        <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt=""/>
                                    </li>
                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                        <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                                    </li>
                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                        <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                                    </li>
                                </ul>
                                <h6>+5 mutual</h6>
                            </div>
                            <a href="#" className="d-block btn btn-primary">Send Request</a>
                        </div>
                    </div>
                  </div>
                  <div>
                    <div className="friend-sugges-box">
                        <div className="fdimg-blk">
                            <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt=""/>
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-24 ih-24"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </div>
                        <div className="fdcont-blk">
                            <h4>Lina Jimmy</h4>
                            <div className="people-likes matual-friend-sec">
                                <ul className="matual-friend-blk">
                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img="assets/images/story-2.jpg">
                                        <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt=""/>
                                    </li>
                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                        <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                                    </li>
                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                        <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                                    </li>
                                </ul>
                                <h6>+5 mutual</h6>
                            </div>
                            <a href="#" className="d-block btn btn-primary">Send Request</a>
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