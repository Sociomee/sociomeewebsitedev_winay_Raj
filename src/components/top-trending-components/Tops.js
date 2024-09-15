import React,{Component, useState} from 'react'; 
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import TopsMenu from './TopsMenu';

export default function Tops() {  
    var friendSettings = {
      dots: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      infinite: true,
      centerMode: true,
      centerPadding: '100px',
      responsive: [{
              breakpoint: 1800,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '100px'
              }
          }, {
              breakpoint: 1400,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  centerMode: true,
                  centerPadding: '20px',
                  dots: false
              }
          },
          {
              breakpoint: 460,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  centerMode: true,
                  centerPadding: '30px',
                  dots: false
              }
          }
      ]
    };
    var bizPageSettings = {
      dots: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      infinite: true,
      centerMode: true,
      centerPadding: '80px',
      responsive: [{
              breakpoint: 1800,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '100px'
              }
          }, {
              breakpoint: 1400,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '60px'
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '60px'
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '60px'
              }
          },
          {
              breakpoint: 460,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '60px'
              }
          }
      ]
    };
    var podcastSettings = {
      dots: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      infinite: true,
      centerMode: true,
      centerPadding: '80px',
      responsive: [{
              breakpoint: 1800,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  centerPadding: '60px'
              }
          }, {
              breakpoint: 1400,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  centerPadding: '40px'
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '60px'
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '60px'
              }
          },
          {
              breakpoint: 460,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '60px'
              }
          }
      ]
    };

    return (
      <>
        <Header></Header>
        <div className="page-body container-fluid profile-page">
          <LeftSidebar></LeftSidebar>
          <div className="page-center">
            <TopsMenu></TopsMenu>

            <div className="container-fluid section-t-space px-0">
              <div className="row justify-content-center">
                <div className="col-md-8 col-12">
                    <div className="post-panel top-trend-post-block">
                        <div className="post-wrapper col-grid-box section-b-space">
                            <div className="post-title">
                                <div className="profile">
                                    <div className="media">
                                        <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                            data-name="sufiya eliza" data-img="assets/images/my-profile.jpg">
                                            <img src="assets/images/my-profile.jpg"
                                                className="img-fluid bg-img" alt="user"/>
                                        </a>
                                        <div className="media-body">
                                            <h5>sufiya eliza</h5>
                                            <h6>30 mins ago</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="setting-btn ms-auto setting-dropdown no-bg">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                        <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                        </div>
                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                            <ul>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>save post</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>hide post</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>unfollow sufiya</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-details">
                                <div className="img-wrapper">
                                    <img src="assets/images/post-9.jpg" className="img-fluid"
                                        alt=""/>
                                </div>
                                <div className="detail-box">
                                    <h3>Celebration new album song launched</h3>
                                    <h5 className="tag"><span>#Musiccelebration,</span> #music, #party, #music
                                    </h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                    <div className="bookmark favourite-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                    </div>
                                    <div className="people-likes">
                                        <ul>
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
                                        <h6>+12 people react this post</h6>
                                    </div>
                                </div>
                                <div className="like-panel">
                                    <div className="left-emoji">
                                        <ul>
                                            <li>
                                                <img src="assets/svg/emoji/040.svg" alt="smile"/>
                                            </li>
                                            <li>
                                                <img src="assets/svg/emoji/113.svg" alt="heart"/>
                                            </li>
                                            <li>
                                                <img src="assets/svg/emoji/027.svg" alt="cry"/>
                                            </li>
                                            <li>
                                                <img src="assets/svg/emoji/033.svg" alt="angry"/>
                                            </li>
                                        </ul>
                                        <h6>+75</h6>
                                    </div>
                                    <div className="right-stats">
                                        <ul>
                                            <li>
                                                <h5>
                                                    <i className="iw-16 ih-16" data-feather="message-square"></i>
                                                    <span>4565</span> comment
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className="iw-16 ih-16" data-feather="share"></i><span>985</span>
                                                    share
                                                </h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-react">
                                    <ul>
                                        <li className="react-btn">
                                            <a className="react-click" href="#">
                                                <div className="post-btn-cust selected"><img src="assets/images/like.png"/></div> react
                                            </a>
                                            <div className="react-box">
                                                <ul>
                                                    <li data-title="smile">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/040.svg" alt="smile"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="love">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/113.svg" alt="heart"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="cry">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/027.svg" alt="cry"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="wow">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/052.svg" alt="angry"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="angry">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/039.svg" alt="angry"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="haha">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/042.svg" alt=""/>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="comment-click">
                                            <a href="#">
                                                <div className="post-btn-cust selected"><img src="assets/images/comment.png"/></div> comment
                                            </a>
                                        </li>
                                        <li data-bs-target="#shareModal" data-bs-toggle="modal">
                                            <a href="#">
                                                <div className="post-btn-cust"><img src="assets/images/share.png"/></div> share
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comment-section">
                                    <div className="reply">
                                        <div className="search-input input-style input-lg icon-right">
                                            <input type="text" className="form-control emojiPicker"
                                                placeholder="write a comment.."/>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-2 iw-14 ih-14"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                            </a>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iw-14 ih-14"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-wrapper col-grid-box section-b-space">
                            <div className="post-title">
                                <div className="profile">
                                    <div className="media">
                                        <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                            data-name="sufiya eliza" data-img="assets/images/my-profile.jpg">
                                            <img src="assets/images/my-profile.jpg"
                                                className="img-fluid bg-img" alt="user"/>
                                        </a>
                                        <div className="media-body">
                                            <h5>sufiya eliza</h5>
                                            <h6>30 mins ago</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="setting-btn ms-auto setting-dropdown no-bg">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                        <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                        </div>
                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                            <ul>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>save post</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>hide post</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>unfollow sufiya</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-details">
                                <div className="img-wrapper">
                                    <img src="assets/images/post-2.jpg" className="img-fluid"
                                        alt=""/>
                                    <div className="controler">
                                        <a href="#" className="play" data-bs-toggle="modal" data-bs-target="#videoPlayer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-50 ih-50"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                        </a>
                                        <div className="duration">
                                            <h6>06:20</h6>
                                        </div>
                                        <a href="#" className="volume">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="detail-box">
                                    <h3>Today Our Three Cute Puppy Dog Birthday !!!!</h3>
                                    <h5 className="tag"><span>#ourcutepuppy,</span> #puppy, #birthday, #dog</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        has been the industry's standard dummy text ever since the 1500s</p>
                                    <div className="bookmark favourite-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                    </div>
                                    <div className="people-likes">
                                        <ul>
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
                                        <h6>+12 people react this post</h6>
                                    </div>
                                </div>
                                <div className="like-panel">
                                    <div className="left-emoji">
                                        <ul>
                                            <li>
                                                <img src="assets/svg/emoji/040.svg" alt="smile"/>
                                            </li>
                                            <li>
                                                <img src="assets/svg/emoji/113.svg" alt="heart"/>
                                            </li>
                                            <li>
                                                <img src="assets/svg/emoji/027.svg" alt="cry"/>
                                            </li>
                                            <li>
                                                <img src="assets/svg/emoji/033.svg" alt="angry"/>
                                            </li>
                                        </ul>
                                        <h6>+75</h6>
                                    </div>
                                    <div className="right-stats">
                                        <ul>
                                            <li>
                                                <h5>
                                                    <i className="iw-16 ih-16" data-feather="message-square"></i>
                                                    <span>4565</span> comment
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className="iw-16 ih-16" data-feather="share"></i><span>985</span>
                                                    share
                                                </h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-react">
                                    <ul>
                                        <li className="react-btn">
                                            <a className="react-click" href="#">
                                                <div className="post-btn-cust"><img src="assets/images/like1.png"/></div> react
                                            </a>
                                            <div className="react-box">
                                                <ul>
                                                    <li data-title="smile">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/040.svg" alt="smile"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="love">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/113.svg" alt="heart"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="cry">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/027.svg" alt="cry"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="wow">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/052.svg" alt="angry"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="angry">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/039.svg" alt="angry"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="haha">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/042.svg" alt=""/>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="comment-click">
                                            <a href="#">
                                                <div className="post-btn-cust"><img src="assets/images/comment1.png"/></div> comment
                                            </a>
                                        </li>
                                        <li data-bs-target="#shareModal" data-bs-toggle="modal">
                                            <a href="#">
                                                <div className="post-btn-cust"><img src="assets/images/share.png"/></div> share
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comment-section">
                                    <div className="comments d-block">
                                        <div className="main-comment">
                                            <div className="media">
                                                <a href="#" className="user-img popover-cls" data-bs-toggle="popover"
                                                    data-placement="right" data-name="Pabelo mukrani"
                                                    data-img="assets/images/story-2.jpg">
                                                    <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt="user"/>
                                                </a>
                                                <div className="media-body">
                                                    <a href="#">
                                                        <h5>Pabelo Mukrani</h5>
                                                    </a>
                                                    <p>Oooo Very Cute and Sweet Dog, happy birthday Cuty....
                                                        &#128578;
                                                    </p>
                                                    <ul className="comment-option">
                                                        <li><a href="#"><img src="assets/images/liked-icon.png"/> like (5)</a></li>
                                                        <li><a href="#"><img src="assets/images/chat-icon.png"/> reply (5)</a></li>
                                                    </ul>
                                                </div>
                                                <div className="comment-time">
                                                    <h6>50 mins ago</h6>
                                                </div>
                                            </div>
                                            <div className="sub-comment">
                                                <div className="media">
                                                    <a href="#" className="user-img popover-cls" data-bs-toggle="popover"
                                                        data-placement="right" data-name="sufiya elija"
                                                        data-img="assets/images/story-3.jpg">
                                                        <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt="user"/>
                                                    </a>
                                                    <div className="media-body">
                                                        <a href="#">
                                                            <h5>sufiya elija</h5>
                                                        </a>
                                                        <p>Thank You So Much ❤❤</p>
                                                        <ul className="comment-option">
                                                            <li><a href="#">like</a></li>
                                                            <li><a href="#">reply</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="comment-time">
                                                        <h6>50 mins ago</h6>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <a href="#" className="user-img popover-cls" data-bs-toggle="popover"
                                                        data-placement="right" data-name="sufiya eliza"
                                                        data-img="assets/images/story-4.jpg">
                                                        <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt="user"/>
                                                    </a>
                                                    <div className="media-body">
                                                        <a href="#">
                                                            <h5>sufiya elija</h5>
                                                        </a>
                                                        <p>Thank You So Much ❤❤</p>
                                                        <ul className="comment-option">
                                                            <li><a href="#">like</a></li>
                                                            <li><a href="#">reply</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="comment-time">
                                                        <h6>50 mins ago</h6>
                                                    </div>
                                                </div>
                                                <a href="#" className="loader">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15 ih-15"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg> load more replies
                                                </a>
                                            </div>
                                        </div>
                                        <div className="main-comment">
                                            <div className="media">
                                                <a href="#" className="user-img popover-cls" data-bs-toggle="popover"
                                                    data-placement="right" data-name="pabelo mukrani"
                                                    data-img="assets/images/story-2.jpg">
                                                    <img src="assets/images/story-2.jpg"
                                                        className="img-fluid bg-img" alt="user"/>
                                                </a>
                                                <div className="media-body">
                                                    <a href="#">
                                                        <h5>Pabelo Mukrani</h5>
                                                    </a>
                                                    <p>It’s party time, Sufiya..... and happy birthday cuty 🎉🎊</p>
                                                    <ul className="comment-option">
                                                        <li><a href="#">like</a></li>
                                                        <li><a href="#">reply</a></li>
                                                    </ul>
                                                </div>
                                                <div className="comment-time">
                                                    <h6>50 mins ago</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reply">
                                        <div className="search-input input-style input-lg icon-right">
                                            <input type="text" className="form-control emojiPicker"
                                                placeholder="write a comment.."/>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-2 iw-14 ih-14"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                            </a>
                                            <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iw-14 ih-14"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-wrapper col-grid-box section-b-space no-background">
                            <div className="post-details">
                                <div className="img-wrapper">
                                    <div className="slider-section home-friend-slider-block">
                                        <div className="home-frd-sl-blk">
                                            <h3>Suggested users</h3>
                                            <div className="setting-btn ms-auto setting-dropdown no-bg">
                                                <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                    <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                        <ul>
                                                            <li>
                                                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>save post</a>
                                                            </li>
                                                            <li>
                                                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>hide post</a>
                                                            </li>
                                                            <li>
                                                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>unfollow sufiya</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Slider {...friendSettings} className="ratio_landscape default-space no-arrow">
                                            <div>
                                                <div className="profile-box">
                                                    <div className="profile-setting">
                                                        <div className="setting-btn setting setting-dropdown">
                                                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                                <a href="#" className="d-flex" data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false">
                                                                    <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                                    <ul>
                                                                        <li>
                                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit icon-font-light iw-16 ih-16"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> edit profile</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> view profile</a>
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
                                                            <a href="#" className="btn btn-solid">Add Friend</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="profile-box">
                                                    <div className="profile-setting">
                                                        <div className="setting-btn setting setting-dropdown">
                                                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                                <a href="#" className="d-flex" data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false">
                                                                    <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                                    <ul>
                                                                        <li>
                                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit icon-font-light iw-16 ih-16"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> edit profile</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Add Friend</a>
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
                                                                    <img src="assets/images/story-4.jpg"
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
                                                            <a href="#" className="btn btn-solid">Add Friend</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="profile-box">
                                                    <div className="profile-setting">
                                                        <div className="setting-btn setting setting-dropdown">
                                                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                                <a href="#" className="d-flex" data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false">
                                                                    <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                                    <ul>
                                                                        <li>
                                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit icon-font-light iw-16 ih-16"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> edit profile</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Add Friend</a>
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
                                                                    <img src="assets/images/story-2.jpg"
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
                                                            <a href="#" className="btn btn-solid">Add Friend</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="profile-box">
                                                    <div className="profile-setting">
                                                        <div className="setting-btn setting setting-dropdown">
                                                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                                <a href="#" className="d-flex" data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false">
                                                                    <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                                    <ul>
                                                                        <li>
                                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit icon-font-light iw-16 ih-16"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> edit profile</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Add Friend</a>
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
                                                                    <img src="assets/images/story-3.jpg"
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
                                                            <a href="#" className="btn btn-solid">Add Friend</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                        <div class="seeall-btn viewall-frd-btn">
                                            <a href="#">View All <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="iw-20 ih-20"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-wrapper col-grid-box section-b-space">
                            <div className="post-title">
                                <div className="profile">
                                    <div className="media">
                                        <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                            data-name="sufiya eliza" data-img="assets/images/my-profile.jpg">
                                            <img src="assets/images/my-profile.jpg"
                                                className="img-fluid bg-img" alt="user"/>
                                        </a>
                                        <div className="media-body">
                                            <h5>sufiya eliza</h5>
                                            <h6>30 mins ago</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="setting-btn ms-auto setting-dropdown no-bg">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                        <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                        </div>
                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                            <ul>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>save post</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>hide post</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>unfollow sufiya</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-details">
                                <div className="img-wrapper">
                                    <div className="gallery-section">
                                        <div className="portfolio-section ratio_square">
                                            <div className="container-fluid p-0">
                                                <div className="row">
                                                    <div className="col-8 pt-cls">
                                                        <div className="overlay">
                                                            <div className="portfolio-image">
                                                                <a href="#" data-bs-toggle="modal"
                                                                    data-bs-target="#imageModel">
                                                                    <img src="assets/images/post-3.jpg" alt="" className="img-fluid bg-img"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 row m-0">
                                                        <div className="col-12 pt-cls p-0">
                                                            <div className="overlay">
                                                                <div className="portfolio-image">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#imageModel">
                                                                        <img src="assets/images/post-4.jpg" alt="" className="img-fluid bg-img"/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 pt-cls p-0">
                                                            <div className="overlay image-plus">
                                                                <div className="portfolio-image">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#imageModel">
                                                                        <img src="assets/images/post-5.jpg" alt="" className="img-fluid bg-img"/>
                                                                        <span>+20</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-box">
                                    <h3>Celebration new album song launched</h3>
                                    <h5 className="tag"><span>#Musiccelebration,</span> #music, #party, #music
                                    </h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                    <div className="bookmark favourite-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                    </div>
                                    <div className="people-likes">
                                        <ul>
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
                                        <h6>+12 people react this post</h6>
                                    </div>
                                </div>
                                <div className="like-panel">
                                    <div className="left-emoji">
                                        <ul>
                                            <li>
                                                <img src="assets/svg/emoji/040.svg" alt="smile"/>
                                            </li>
                                            <li>
                                                <img src="assets/svg/emoji/113.svg" alt="heart"/>
                                            </li>
                                            <li>
                                                <img src="assets/svg/emoji/027.svg" alt="cry"/>
                                            </li>
                                            <li>
                                                <img src="assets/svg/emoji/033.svg" alt="angry"/>
                                            </li>
                                        </ul>
                                        <h6>+75</h6>
                                    </div>
                                    <div className="right-stats">
                                        <ul>
                                            <li>
                                                <h5>
                                                    <i className="iw-16 ih-16" data-feather="message-square"></i>
                                                    <span>4565</span> comment
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className="iw-16 ih-16" data-feather="share"></i><span>985</span>
                                                    share
                                                </h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-react">
                                    <ul>
                                        <li className="react-btn">
                                            <a className="react-click" href="#">
                                                <div className="post-btn-cust selected"><img src="assets/images/like.png"/></div> react
                                            </a>
                                            <div className="react-box">
                                                <ul>
                                                    <li data-title="smile">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/040.svg" alt="smile"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="love">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/113.svg" alt="heart"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="cry">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/027.svg" alt="cry"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="wow">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/052.svg" alt="angry"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="angry">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/039.svg" alt="angry"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="haha">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/042.svg" alt=""/>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="comment-click">
                                            <a href="#">
                                                <div className="post-btn-cust selected"><img src="assets/images/comment.png"/></div> comment
                                            </a>
                                        </li>
                                        <li data-bs-target="#shareModal" data-bs-toggle="modal">
                                            <a href="#">
                                                <div className="post-btn-cust"><img src="assets/images/share.png"/></div> share
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comment-section">
                                    <div className="reply">
                                        <div className="search-input input-style input-lg icon-right">
                                            <input type="text" className="form-control emojiPicker"
                                                placeholder="write a comment.."/>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-2 iw-14 ih-14"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                            </a>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iw-14 ih-14"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-wrapper col-grid-box section-b-space">
                            <div className="post-details">
                                <div className="img-wrapper">
                                    <div className="slider-section bizslider-sec">
                                        <h3>BizPages</h3>
                                        <Slider {...bizPageSettings} className="ratio_landscape default-space no-arrow">
                                            <div>
                                                <div className="bizpage-block">
                                                    <img src="assets/images/biz-page-1.jpg"/>
                                                    <h4>Fantasia Water Park</h4>
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
                                                        <h6>+12 Likes</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="bizpage-block">
                                                    <img src="assets/images/biz-page-2.jpg"/>
                                                    <h4>Jeddah Cafe</h4>
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
                                                        <h6>+12 Likes</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="bizpage-block">
                                                    <img src="assets/images/biz-page-1.jpg"/>
                                                    <h4>Fantasia Water Park</h4>
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
                                                        <h6>+12 Likes</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                        <a href="#" className="visit-button-text">Visit All Pages <i className="ti-angle-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-wrapper col-grid-box section-b-space">
                            <div className="post-title">
                                <div className="profile">
                                    <div className="media">
                                        <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                            data-name="sufiya eliza" data-img="assets/images/my-profile.jpg">
                                            <img src="assets/images/my-profile.jpg"
                                                className="img-fluid bg-img" alt="user"/>
                                        </a>
                                        <div className="media-body">
                                            <h5>sufiya eliza</h5>
                                            <h6>30 mins ago</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="setting-btn ms-auto setting-dropdown no-bg">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                        <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                        </div>
                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                            <ul>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>save post</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>hide post</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>unfollow sufiya</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-details">
                                <div className="detail-box">
                                    <h3>Celebration new album song launched</h3>
                                    <h5 className="tag"><span>#Musiccelebration,</span> #music, #party, #music
                                    </h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                    <div className="bookmark favourite-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                    </div>
                                    <div className="people-likes">
                                        <ul>
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
                                        <h6>+12 people react this post</h6>
                                    </div>
                                </div>
                                <div className="like-panel">
                                    <div className="left-emoji">
                                        <ul>
                                            <li>
                                                <img src="assets/svg/emoji/040.svg" alt="smile"/>
                                            </li>
                                            <li>
                                                <img src="assets/svg/emoji/113.svg" alt="heart"/>
                                            </li>
                                            <li>
                                                <img src="assets/svg/emoji/027.svg" alt="cry"/>
                                            </li>
                                            <li>
                                                <img src="assets/svg/emoji/033.svg" alt="angry"/>
                                            </li>
                                        </ul>
                                        <h6>+75</h6>
                                    </div>
                                    <div className="right-stats">
                                        <ul>
                                            <li>
                                                <h5>
                                                    <i className="iw-16 ih-16" data-feather="message-square"></i>
                                                    <span>4565</span> comment
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className="iw-16 ih-16" data-feather="share"></i><span>985</span>
                                                    share
                                                </h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-react">
                                    <ul>
                                        <li className="react-btn">
                                            <a className="react-click" href="#">
                                                <div className="post-btn-cust selected"><img src="assets/images/like.png"/></div> react
                                            </a>
                                            <div className="react-box">
                                                <ul>
                                                    <li data-title="smile">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/040.svg" alt="smile"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="love">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/113.svg" alt="heart"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="cry">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/027.svg" alt="cry"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="wow">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/052.svg" alt="angry"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="angry">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/039.svg" alt="angry"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="haha">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/042.svg" alt=""/>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="comment-click">
                                            <a href="#">
                                                <div className="post-btn-cust selected"><img src="assets/images/comment.png"/></div> comment
                                            </a>
                                        </li>
                                        <li data-bs-target="#shareModal" data-bs-toggle="modal">
                                            <a href="#">
                                                <div className="post-btn-cust"><img src="assets/images/share.png"/></div> share
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comment-section">
                                    <div className="reply">
                                        <div className="search-input input-style input-lg icon-right">
                                            <input type="text" className="form-control emojiPicker"
                                                placeholder="write a comment.."/>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-2 iw-14 ih-14"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                            </a>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iw-14 ih-14"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-wrapper col-grid-box section-b-space">
                            <div className="post-title">
                                <div className="profile">
                                    <div className="media">
                                        <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                            data-name="sufiya eliza" data-img="assets/images/my-profile.jpg">
                                            <img src="assets/images/my-profile.jpg"
                                                className="img-fluid bg-img" alt="user"/>
                                        </a>
                                        <div className="media-body">
                                            <h5>sufiya eliza</h5>
                                            <h6>30 mins ago</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="setting-btn ms-auto setting-dropdown no-bg">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                        <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                        </div>
                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                            <ul>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>save post</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>hide post</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>unfollow sufiya</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-details">
                                <div className="img-wrapper">
                                    <img src="assets/images/post-10.jpg" className="img-fluid" alt=""/>
                                </div>
                                <div className="detail-box">
                                    <h3>Wooden Horse Sculpture on sale</h3>
                                    <h5 className="tag-details-blk">
                                        <span>Home & Decor | Sculpture</span> 
                                        <span><svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Güntherstra, Frankfurt , Germany</span>
                                    </h5>
                                    <div className="post-pricing-block">
                                        <div className="post-price-blk">
                                            <h4>$ 41 (USD)</h4>
                                            <p>In Stock  |  New</p>
                                        </div>
                                        <div className="post-price-btn">
                                            <a href="#" className="ppbtn">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                            </a>
                                            <a href="#" className="ppbtn">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                    <div className="bookmark favourite-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                    </div>
                                    <div className="people-likes">
                                        <ul>
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
                                        <h6>+12 people react this post</h6>
                                    </div>
                                </div>
                                <div className="like-panel">
                                    <div className="left-emoji">
                                        <ul>
                                            <li>
                                                <img src="assets/svg/emoji/040.svg" alt="smile"/>
                                            </li>
                                            <li>
                                                <img src="assets/svg/emoji/113.svg" alt="heart"/>
                                            </li>
                                            <li>
                                                <img src="assets/svg/emoji/027.svg" alt="cry"/>
                                            </li>
                                            <li>
                                                <img src="assets/svg/emoji/033.svg" alt="angry"/>
                                            </li>
                                        </ul>
                                        <h6>+75</h6>
                                    </div>
                                    <div className="right-stats">
                                        <ul>
                                            <li>
                                                <h5>
                                                    <i className="iw-16 ih-16" data-feather="message-square"></i>
                                                    <span>4565</span> comment
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className="iw-16 ih-16" data-feather="share"></i><span>985</span>
                                                    share
                                                </h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-react">
                                    <ul>
                                        <li className="react-btn">
                                            <a className="react-click" href="#">
                                                <div className="post-btn-cust"><img src="assets/images/like1.png"/></div> react
                                            </a>
                                            <div className="react-box">
                                                <ul>
                                                    <li data-title="smile">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/040.svg" alt="smile"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="love">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/113.svg" alt="heart"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="cry">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/027.svg" alt="cry"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="wow">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/052.svg" alt="angry"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="angry">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/039.svg" alt="angry"/>
                                                        </a>
                                                    </li>
                                                    <li data-title="haha">
                                                        <a href="#">
                                                            <img src="assets/svg/emoji/042.svg" alt=""/>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="comment-click">
                                            <a href="#">
                                                <div className="post-btn-cust"><img src="assets/images/comment1.png"/></div> comment
                                            </a>
                                        </li>
                                        <li data-bs-target="#shareModal" data-bs-toggle="modal">
                                            <a href="#">
                                                <div className="post-btn-cust"><img src="assets/images/share.png"/></div> share
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comment-section">
                                    <div className="reply">
                                        <div className="search-input input-style input-lg icon-right">
                                            <input type="text" className="form-control emojiPicker"
                                                placeholder="write a comment.."/>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-2 iw-14 ih-14"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                            </a>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iw-14 ih-14"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-wrapper col-grid-box section-b-space">
                            <div className="post-details">
                                <div className="img-wrapper">
                                    <div className="slider-section bizslider-sec">
                                        <h3>Podcasts</h3>
                                        <Slider {...podcastSettings} className="ratio_landscape default-space no-arrow">
                                            <div>
                                                <div className="bizpage-block podcast-block">
                                                    <img src="assets/images/podcast-1.jpg"/>
                                                    <h4>The world best</h4>
                                                    <p>@Hannaize</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="bizpage-block podcast-block">
                                                    <img src="assets/images/podcast-2.jpg"/>
                                                    <h4>The world best</h4>
                                                    <p>@Hannaize</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="bizpage-block podcast-block">
                                                    <img src="assets/images/podcast-1.jpg"/>
                                                    <h4>The world best</h4>
                                                    <p>@Hannaize</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="bizpage-block podcast-block">
                                                    <img src="assets/images/podcast-2.jpg"/>
                                                    <h4>The world best</h4>
                                                    <p>@Hannaize</p>
                                                </div>
                                            </div>
                                        </Slider>
                                        <a href="#" className="visit-button-text">Visit All Pages <i className="ti-angle-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <RightSidebar></RightSidebar>
        </div>
        {/* <Models></Models> */}
      </>
    );
} 