import React,{Component, useRef} from 'react'; 
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import ReactReadMoreReadLess from "react-read-more-read-less";
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import CreatePost from './CreatePost';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import Models from './Models';
import RightSidebar from './RightSidebar';
import StorySlider from './StorySlider';

export  default function Home({user}) {  
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
        <div className="page-body container-fluid newsfeed-style1">
            <LeftSidebar></LeftSidebar>
            <div className="page-center">
                <StorySlider></StorySlider>
                <div className="container-fluid section-t-space px-0">
                    <div className="page-content">
                        <ContentLeft></ContentLeft>
                        <div className="content-center">
                            <CreatePost></CreatePost>
                            <div className="overlay-bg"></div>
                            {/* <div className="post-panel infinite-loader-sec section-t-space"></div> */}
                            <div className="post-panel section-t-space">
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
                                                                        <a href=""><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>View All</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>Setting</a>
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
                                                                        <a href="#" className="d-flex">
                                                                            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                                                        </a>
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
                                                                        <a href="#" className="d-flex">
                                                                            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                                                        </a>
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
                                                                        <a href="#" className="d-flex">
                                                                            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                                                        </a>
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
                                                                        <a href="#" className="d-flex">
                                                                            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                                                        </a>
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
                                                <div className="seeall-btn viewall-frd-btn">
                                                    <a href="#">View All <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg></a>
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
                                                <div className="home-frd-sl-blk">
                                                    <h3>Suggested BizPages</h3>
                                                    <div className="setting-btn ms-auto setting-dropdown no-bg">
                                                        <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                            <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                            </div>
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
                                                <div className="home-frd-sl-blk">
                                                    <h3>Suggested Podcasts</h3>
                                                    <div className="setting-btn ms-auto setting-dropdown no-bg">
                                                        <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                            <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                            </div>
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
                                                                    <div className="portfolio-image videogallery-port">
                                                                        <a href="#" data-bs-toggle="modal"
                                                                            data-bs-target="#imageModel">
                                                                            <img src="assets/images/videomulti-3.jpg" alt="" className="img-fluid bg-img"/>
                                                                            <img className="playbuttonimg" src="assets/images/play-btn.png" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-4 row m-0">
                                                                <div className="col-12 pt-cls p-0">
                                                                    <div className="overlay">
                                                                        <div className="portfolio-image videogallery-port">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#imageModel">
                                                                                <img src="assets/images/videomulti-2.jpg" alt="" className="img-fluid bg-img"/>
                                                                                <img className="playbuttonimg" src="assets/images/play-btn.png" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 pt-cls p-0">
                                                                    <div className="overlay image-plus">
                                                                        <div className="portfolio-image videogallery-port">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#imageModel">
                                                                                <img src="assets/images/videomulti-1.jpg" alt="" className="img-fluid bg-img"/>
                                                                                <span>+7</span>
                                                                                <img className="playbuttonimg" src="assets/images/play-btn.png" />
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
                                            <h3>Celebration new Video</h3>
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
                                                    <h6>Sponsored</h6>
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
                                        <div className="sponser-slider-block">
                                            <Slider {...bizPageSettings} className="ratio_landscape default-space no-arrow">
                                                <div>
                                                    <div className="sponsor-slides-blk">
                                                        <img src="assets/images/group-img-6.jpg"/>
                                                        <div className="sponsor-cont-btn-blk">
                                                            <div className="sponsor-cont-blk">
                                                                <h4>Build your personal blog post</h4>
                                                                <p>From on Sociomee</p>
                                                            </div>
                                                            <div className="sponsor-btn-blk">
                                                                <a href="#" className="btn btn-primary">Get Quote</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="sponsor-slides-blk">
                                                        <img src="assets/images/group-img-7.jpg"/>
                                                        <div className="sponsor-cont-btn-blk">
                                                            <div className="sponsor-cont-blk">
                                                                <h4>Build your personal blog post</h4>
                                                                <p>From on Sociomee</p>
                                                            </div>
                                                            <div className="sponsor-btn-blk">
                                                                <a href="#" className="btn btn-primary">Get Quote</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="sponsor-slides-blk">
                                                        <img src="assets/images/group-img-8.jpg"/>
                                                        <div className="sponsor-cont-btn-blk">
                                                            <div className="sponsor-cont-blk">
                                                                <h4>Build your personal blog post</h4>
                                                                <p>From on Sociomee</p>
                                                            </div>
                                                            <div className="sponsor-btn-blk">
                                                                <a href="#" className="btn btn-primary">Get Quote</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                        <div className="detail-box">
                                            <h5 className="tag"><span>#birthday</span> <span>#celebration</span></h5>
                                            <h5 className="tag">Happy brirthday <span>@DwyaneJhonson</span></h5>
                                            <p>Hi this is my cool dad. Today was his birthday and I gifted him this amazing mobile and headphone...<a href="#">more</a></p>
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
                                                    <h6>20 Min Ago</h6>
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
                                        <div className="poll-display-block">
                                            <h3>Which is the best car of 2022?</h3>
                                            <p>Total Participant: 234y</p>
                                            <div className="poll-homeoption-blk">
                                                <div className="poll-radio-blk">
                                                    <input className="radio_animated" type="radio" name="poll" id="option1" value="option1"/>
                                                    <label htmlFor="option1">Audi A6</label>
                                                </div>
                                                <div className="poll-radio-blk">
                                                    <input className="radio_animated" type="radio" name="poll" id="option1" value="option1"/>
                                                    <label htmlFor="option1">BMW 5 Series</label>
                                                </div>
                                                <div className="poll-radio-blk">
                                                    <input className="radio_animated" type="radio" name="poll" id="option1" value="option1"/>
                                                    <label htmlFor="option1">Lexus ES 200</label>
                                                </div>
                                                <div className="poll-radio-blk">
                                                    <input className="radio_animated" type="radio" name="poll" id="option1" value="option1"/>
                                                    <label htmlFor="option1">Volvo Hatchback</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detail-box">
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
                                                    <h6>20 Min Ago</h6>
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
                                        <div className="thought-display-block" style={{background:"linear-gradient(112.85deg, #D93B6B 23.22%, #9732C6 70.56%)", color:"#fff"}}>
                                            <span className="ti-quote-left"></span> 
                                            Fire is spreading in the Amazon forests 
                                            <span className="ti-quote-right"></span>
                                        </div>
                                        <div className="detail-box">
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
                                                <div className="home-frd-sl-blk">
                                                    <h3>Suggested Product</h3>
                                                    <div className="setting-btn ms-auto setting-dropdown no-bg">
                                                        <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                            <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                            </div>
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
                                                <Slider {...podcastSettings} className="ratio_landscape default-space no-arrow">
                                                    <div>
                                                        <div className="productsec-block">
                                                            <img src="assets/images/product-1.jpg"/>
                                                            <div className="prodetails-blk">
                                                                <h4>The world best</h4>
                                                                <p>@Hannaize</p>
                                                                <div className="btnprice-blk">
                                                                    <h3>$220.00</h3>
                                                                    <a href="#" className="btn btn-light btn-medium">Shop Now</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="productsec-block">
                                                            <img src="assets/images/product-2.jpg"/>
                                                            <div className="prodetails-blk">
                                                                <h4>The world best</h4>
                                                                <p>@Hannaize</p>
                                                                <div className="btnprice-blk">
                                                                    <h3>$220.00</h3>
                                                                    <a href="#" className="btn btn-light btn-medium">Shop Now</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="productsec-block">
                                                            <img src="assets/images/product-1.jpg"/>
                                                            <div className="prodetails-blk">
                                                                <h4>The world best</h4>
                                                                <p>@Hannaize</p>
                                                                <div className="btnprice-blk">
                                                                    <h3>$220.00</h3>
                                                                    <a href="#" className="btn btn-light btn-medium">Shop Now</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="productsec-block">
                                                            <img src="assets/images/product-3.jpg"/>
                                                            <div className="prodetails-blk">
                                                                <h4>The world best</h4>
                                                                <p>@Hannaize</p>
                                                                <div className="btnprice-blk">
                                                                    <h3>$220.00</h3>
                                                                    <a href="#" className="btn btn-light btn-medium">Shop Now</a>
                                                                </div>
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
                                    <div className="trending-heading-blk">
                                        <h3>#2 Trending in <span className="light-green">#Traveling</span></h3>
                                    </div>
                                    <div className="trending-style-blk">
                                        <div className="trending-top-head-display">
                                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>
                                            <div className="trend-live-blk"><span></span> Live</div>
                                        </div>
                                        <img src="assets/images/trend-1.jpg"/>
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
                                                        <h6>20 Min Ago</h6>
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
                                    </div>
                                    <div className="post-details">
                                        <div className="detail-box">
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
                                                    <h6>20 Min Ago</h6>
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
                                        <div className="double-img-block">
                                            <img src="assets/images/media-4.jpg"/>
                                            <img src="assets/images/mp-1.jpg"/>
                                        </div>
                                        <div className="detail-box">
                                            <h3>Celebration new album song launched</h3>
                                            <h5 className="tag"><span>#Musiccelebration</span>, #Musiccelebration, #music, #party, #music</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s</p>
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
                                                    <h6><span className="color-orange">Recommendation</span> • 20 Min Ago</h6>
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
                                        <div className="recomandation-display-block">
                                            <img src="assets/images/trend-1.jpg"/>
                                            <div className="recom-btn-cont-blk">
                                                <h4>25 Recommendations</h4>
                                                <a href="#" className="btn btn-outline">Recommend</a>
                                            </div>
                                        </div>
                                        <div className="detail-box">
                                            <h3>I am seeking recommendation for buying a car</h3>
                                            <h5 className="tag"><span>#Musiccelebration</span>, #Musiccelebration, #music, #party, #music</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s</p>
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
                                                    <h6><span className="color-orange">Recommendation</span> • 20 Min Ago</h6>
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
                                        <div className="recomandation-display-block">
                                            <div className="recom-btn-cont-blk">
                                                <h4>25 Recommendations</h4>
                                                <a href="#" className="btn btn-outline">Recommend</a>
                                            </div>
                                        </div>
                                        <div className="detail-box">
                                            <h3>I am seeking recommendation for buying a car</h3>
                                            <h5 className="tag"><span>#Musiccelebration</span>, #Musiccelebration, #music, #party, #music</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s</p>
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
                                                    <h6>20 Min Ago</h6>
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
                                        <div className="podcast-display-block">
                                            <img className="podicon-cen-blk" src="assets/images/hpod-icon.png"/>
                                            <div className="podmain-imgblk">
                                                <img src="assets/images/h-podcast-1.jpg"/>
                                            </div>
                                            <div className="podcont-blk">
                                                <h4>Emotional speech of speaker </h4>
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                                            </div>
                                        </div>
                                        <div className="podcont-display-blk">
                                            <audio controls controlsList="nodownload noplaybackrate">
                                                <source src="assets/images/audio/audio-file.mp3" type="audio/mpeg"/>
                                            </audio>
                                            <p>Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk) I mean we had Long lines of prisoners fist fighting to use them.</p>
                                        </div>
                                        <div className="detail-box">
                                            {/* <h3>Celebration new album song launched</h3>
                                            <h5 className="tag"><span>#Musiccelebration</span>, #Musiccelebration, #music, #party, #music</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s</p> */}
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
                                                <a className="user-img">
                                                    <img src="assets/images/sponser-user.jpg"
                                                        className="img-fluid bg-img" alt="user"/>
                                                </a>
                                                <div className="media-body">
                                                    <h5>Gibraltar Group of Company</h5>
                                                    <h6>Sponsored</h6>
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
                                        <div className="gibrelter-ads-block">
                                            <div className="gibrelter-ads-cont">
                                                <p>Become a Certified Video Editor and Motion Graphic Artist and kick start your freelance career or get a job.</p>
                                                <p>Course Completion Certificate Included. Free eBook Included with 7 Projects Lifetime Access To Courses and Materials… <a href="#" className="color-green">See more</a></p>
                                            </div>
                                            <img className="ads-image-blk" src="assets/images/ads-1.jpg"/>
                                            <div className="gibrelter-ads-btn-cont-blk">
                                                <div className="gibrelter-ads-btn-cont">
                                                    <h4>Ready to develop your idea?</h4>
                                                    <p>Turn any idea into tailor-made apps, website</p>
                                                </div>
                                                <a href="#" className="btn btn-primary">Know More</a>
                                            </div>
                                            <div className="share-whythisads-blk">
                                                <a href="#" className="whythisads-btn">Why this ad?</a>
                                                <a href="#" className="adsshare-btn">
                                                    <div className="post-btn-cust"><img src="assets/images/share.png"/></div>
                                                    Share
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-wrapper col-grid-box section-b-space">
                                    <div className="post-title">
                                        <div className="profile">
                                            <div className="media">
                                                <a className="user-img">
                                                    <img src="assets/images/sponser-user.jpg"
                                                        className="img-fluid bg-img" alt="user"/>
                                                </a>
                                                <div className="media-body">
                                                    <h5>Gibraltar Group of Company</h5>
                                                    <h6>Sponsored</h6>
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
                                        <div className="gibrelter-ads-block">
                                            <img className="ads-image-blk" src="assets/images/ads-1.jpg"/>
                                            <div className="gibrelter-ads-btn-cont-blk">
                                                <div className="gibrelter-ads-btn-cont">
                                                    <h4>Ready to develop your idea?</h4>
                                                    <p>Turn any idea into tailor-made apps, website</p>
                                                </div>
                                                <a href="#" className="btn btn-primary">Know More</a>
                                            </div>
                                            <div className="share-whythisads-blk">
                                                <a href="#" className="whythisads-btn">Why this ad?</a>
                                                <a href="#" className="adsshare-btn">
                                                    <div className="post-btn-cust"><img src="assets/images/share.png"/></div>
                                                    Share
                                                </a>
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
                                                    <h5><b>Event</b> posted by <b>Sufiya Eliza</b></h5>
                                                    <h6>20 Min Ago</h6>
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
                                        <div className="event-display-block">
                                            <div className="event-cont-top-blk">
                                                <p>Events, by their very nature, are about connections. Through your bright event description, you can boost attendance, sponsorship, or hosting of an event; make new c... <a href="#" className="color-green">See more</a></p>
                                            </div>
                                            <div className="event-imgdis-blk">
                                                <img src="assets/images/event-home-1.jpg"/>
                                            </div>
                                            <div className="event-main-homecont-blk">
                                                <h3>Get started with live music near you</h3>
                                                <h5>Entertainment</h5>
                                                <div className="event-date-time-home-blk"><span>Sat, 20th to Sun, 21st Feb, 2021.</span> <span>11:00 AM - 08:00 PM</span></div>
                                                <div className="event-home-locblk"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Clarendon Park Road, Leicester, LE2 3, United Kingdom</div>
                                            </div>
                                        </div>
                                        <div className="detail-box">
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
                                                <div className="home-frd-sl-blk">
                                                    <h3>Suggested Groups</h3>
                                                    <div className="setting-btn ms-auto setting-dropdown no-bg">
                                                        <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                            <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                            </div>
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
                                                <Slider {...bizPageSettings} className="ratio_landscape default-space no-arrow">
                                                    <div>
                                                        <div className="bizpage-block">
                                                            <img src="assets/images/group-img-1.jpg"/>
                                                            <h4>Rolex Business Group</h4>
                                                            <div className="group-public-private-blk"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"  className="iw-12 ih-12"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public</div>
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
                                                            <img src="assets/images/group-img-2.jpg"/>
                                                            <h4>Fun & Enjoy Grous </h4>
                                                            <div className="group-public-private-blk"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"  className="iw-12 ih-12"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public</div>
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
                                                            <img src="assets/images/group-img-3.jpg"/>
                                                            <h4>Fantasia Water Park Group</h4>
                                                            <div className="group-public-private-blk"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"  className="iw-12 ih-12"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public</div>
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
                                                <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right" data-name="Gibraltar Group of Company" data-img="assets/images/sponser-user.jpg">
                                                    <img src="assets/images/sponser-user.jpg" className="img-fluid bg-img" alt="user"/>
                                                </a>
                                                <div className="media-body">
                                                    <h5>Gibraltar Group of Company</h5>
                                                    <h6>20 Min Ago</h6>
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
                                        <div className="event-display-block">
                                            <div className="event-cont-top-blk">
                                                <p>Gibraltar is a British Overseas Territory and headland, on Spain's south coast. It’s dominated by the Rock of Gibraltar, a 426m-high limestone ridge. First settled by the... <a href="#" className="color-green">See more</a></p>
                                            </div>
                                            <div className="event-imgdis-blk">
                                                <img src="assets/images/event-home-1.jpg"/>
                                            </div>
                                        </div>
                                        <div className="detail-box">
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
                                                <div className="home-frd-sl-blk">
                                                    <h3>Suggested Shotz</h3>
                                                    <div className="setting-btn ms-auto setting-dropdown no-bg">
                                                        <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                            <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                            </div>
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
                                                <Slider {...podcastSettings} className="ratio_landscape default-space no-arrow">
                                                    <div>
                                                        <div className="sugestshortsec-block">
                                                            <img src="assets/images/h-shotz-1.jpg"/>
                                                            <div className="hshotz-view-blk"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 854</div>
                                                            <div className="hshotz-user-details-blk">
                                                                <div className="hshots-user-blk">
                                                                    <img src="assets/images/story-3.jpg"/>
                                                                    1 day ago
                                                                </div>
                                                                <p>Cameron Williamson</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="sugestshortsec-block">
                                                            <img src="assets/images/h-shotz-2.jpg"/>
                                                            <div className="hshotz-view-blk"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 854</div>
                                                            <div className="hshotz-user-details-blk">
                                                                <div className="hshots-user-blk">
                                                                    <img src="assets/images/story-3.jpg"/>
                                                                    1 day ago
                                                                </div>
                                                                <p>Cameron Williamson</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="sugestshortsec-block">
                                                            <img src="assets/images/h-shotz-3.jpg"/>
                                                            <div className="hshotz-view-blk"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 854</div>
                                                            <div className="hshotz-user-details-blk">
                                                                <div className="hshots-user-blk">
                                                                    <img src="assets/images/story-3.jpg"/>
                                                                    1 day ago
                                                                </div>
                                                                <p>Cameron Williamson</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="sugestshortsec-block">
                                                            <img src="assets/images/h-shotz-2.jpg"/>
                                                            <div className="hshotz-view-blk"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 854</div>
                                                            <div className="hshotz-user-details-blk">
                                                                <div className="hshots-user-blk">
                                                                    <img src="assets/images/story-3.jpg"/>
                                                                    1 day ago
                                                                </div>
                                                                <p>Cameron Williamson</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Slider>
                                                <a href="#" className="visit-button-text">Visit all Shotz <i className="ti-angle-double-right"></i></a>
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
                                                    <h5><b>Sufiya Eliza</b> creat a public event. </h5>
                                                    <h6>20 Min Ago</h6>
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
                                        <div className="private-event-display-block">
                                            <div className="pvt-event-cont-blk">
                                                <div className="pvt-eventcont">#Severe</div>
                                                <span className="ti-quote-left"></span>
                                                <p>🌧🌧 Today is havy rainy day  🌧🌧</p>
                                                <span className="ti-quote-right"></span>
                                            </div>
                                        </div>
                                        <div className="detail-box">
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
                                                    <h5><b>Sufiya Eliza</b> was Live - <b>Birmingham City Council, Birmingham, England UK</b></h5>
                                                    <h6>20 Min Ago</h6>
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
                                        <div className="waslive-display-block">
                                            <div className="waslive-cont-blk">
                                                <img src="assets/images/h-shotz-3.jpg"/>
                                                <div className="waslive-view-blk"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 854</div>
                                            </div>
                                        </div>
                                        <div className="detail-box">
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
                                                    <h5>Sufiya Eliza</h5>
                                                    <h6>20 Min Ago</h6>
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
                                        <div className="showcont-display-block">
                                        <ReactReadMoreReadLess
                                            charLimit={200}
                                            readMoreText={"See more"}
                                            readLessText={"See less"}
                                        >
                                            Birmingham City Football Club is a professional football club in Birmingham, England. Formed in 1875 as Small Heath Alliance, it was renamed Small Heath in 1888, Birmingham in 1905, and Birmingham City in 1943. Since 2011, the first team have competed in the EFL Championship, the second tier of English football. 
                                            As Small Heath, they played in the Football Alliance before becoming founder members and first champions of the Football League Second Division. The most successful period in their history was in the 1950s and early 1960s. They achieved their highest finishing position of sixth in the First Division in the 1955–56 season and reached the 1956 FA Cup Final. Birmingham played in two Inter-Cities Fairs Cup finals, in 1960, as the first English club side to reach a major European final, and again the following year. They won the League Cup in 1963 and again in 2011. Birmingham have played in the top tier of English football for around half of their history:[8] the longest period spent outside the top division, between 1986 and 2002, included two brief spells in the third tier of English football, during which time they won the Football League Trophy twice. 
                                            St Andrew's has been their home ground since 1906. They have a long-standing and fierce rivalry with Aston Villa, their nearest neighbours, with whom they play the Second City derby. The club's nickname is Blues, after the colour of their kit, and the fans are known as Bluenoses.
                                        </ReactReadMoreReadLess>
                                        </div>
                                        <div className="detail-box">
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
                                                    <h5>Sufiya Eliza</h5>
                                                    <h6>20 Min Ago</h6>
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
                                        <div className="showcont-display-block">
                                        <ReactReadMoreReadLess
                                            charLimit={200}
                                            readMoreText={"See more"}
                                            readLessText={"See less"}
                                        >
                                            Birmingham City Football Club is a professional football club in Birmingham, England. Formed in 1875 as Small Heath Alliance, it was renamed Small Heath in 1888, Birmingham in 1905, and Birmingham City in 1943. Since 2011, the first team have competed in the EFL Championship, the second tier of English football. 
                                            As Small Heath, they played in the Football Alliance before becoming founder members and first champions of the Football League Second Division. The most successful period in their history was in the 1950s and early 1960s. They achieved their highest finishing position of sixth in the First Division in the 1955–56 season and reached the 1956 FA Cup Final. Birmingham played in two Inter-Cities Fairs Cup finals, in 1960, as the first English club side to reach a major European final, and again the following year. They won the League Cup in 1963 and again in 2011. Birmingham have played in the top tier of English football for around half of their history:[8] the longest period spent outside the top division, between 1986 and 2002, included two brief spells in the third tier of English football, during which time they won the Football League Trophy twice. 
                                            St Andrew's has been their home ground since 1906. They have a long-standing and fierce rivalry with Aston Villa, their nearest neighbours, with whom they play the Second City derby. The club's nickname is Blues, after the colour of their kit, and the fans are known as Bluenoses.
                                        </ReactReadMoreReadLess>
                                        </div>
                                        <div className="subpostinner-block">
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
                                                                <h5>Sufiya Eliza</h5>
                                                                <h6>20 Min Ago</h6>
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
                                                    <div className="subpost-imgblk">
                                                        <img src="assets/images/subpost-1.jpg"/>
                                                        <h4>Liverpool Win Champions League For 6th Time</h4>
                                                        <p>01 July, 2021 <span>•</span> Sports</p>
                                                    </div>
                                                    <div className="showcont-display-block">
                                                    <ReactReadMoreReadLess
                                                        charLimit={200}
                                                        readMoreText={"See more"}
                                                        readLessText={"See less"}
                                                    >
                                                        Denmark is a Scandinavian country comprising the Jutland Peninsula and numerous islands. It's linked to nearby Sweden via the Öresund bridge. Copenhagen, its capital, is home to royal palaces and colorful Nyhavn harbor, plus the Tivoli amusement park Denmark is a Scandinavian country comprising the Jutland Peninsula and numerous islands. It's linked to nearby Sweden via the Öresund bridge. Copenhagen, its capital, is home to royal palaces and colorful Nyhavn harbor, plus the Tivoli amusement park
                                                    </ReactReadMoreReadLess>
                                                    </div>
                                                    {/* <div className="detail-box">
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
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detail-box">
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
                            </div>
                            <div id="load-more" className="post-loader">
                                <div className="loader-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-theme iw-25 ih-25"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
                                </div>
                                <div className="no-more-text">
                                    <p>no more post</p>
                                </div>
                            </div>
                        </div>
                        <ContentRight></ContentRight>
                    </div>
                </div>
            </div>
            <RightSidebar></RightSidebar>
        </div>
        <Models></Models>
    </>
    );
} 
// export default Home 