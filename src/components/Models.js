import React,{Component} from 'react'; 
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

export  default function Models() {  
    var storyViewSettings = {
        infinite: false,
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    };
    var gallerySettings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <>
    <div className="modal story-model" id="storyModel" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="story-bg">
                        <div className="container-fluid p-0">
                            <div className="row m-0">
                                <div className="left-box col-xl-3 col-lg-4">
                                    <div className="model-title">
                                        <div className="title-main">
                                            <h2>stories</h2>
                                        </div>
                                        <div className="title-setting">
                                            <ul>
                                                <li><a href="#">archive</a></li>
                                                <li><a href="#">settings</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="modal-flex">
                                        <div className="add-story">
                                            <h4 className="story-title">your story</h4>
                                            <div className="media list-media">
                                                <div className="story-img" data-bs-toggle="modal" data-bs-target="#addStory">
                                                    <div className="user-img">
                                                        <img src="assets/images/story-bg.jpg"
                                                            className="img-fluid bg-img" alt="user"/>
                                                    </div>
                                                    <div className="add-icon">
                                                        <div className="icon">
                                                            <img src="assets/images/plus.png"
                                                                className="img-fluid" alt="plus"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <h5>add story</h5>
                                                    <h6>share your photos or video</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="friend-story">
                                            <h4 className="story-title">all stories</h4>
                                            <div className="slider-nav">
                                                <div>
                                                    <div className="media list-media">
                                                        <div className="story-img">
                                                            <div className="user-img">
                                                                <img src="assets/images/story-2.jpg"
                                                                    className="img-fluid bg-img"
                                                                    alt="user"/>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <h5>Petey Cruiser</h5>
                                                            <h6>2 hours ago</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="media list-media">
                                                        <div className="story-img">
                                                            <div className="user-img">
                                                                <img src="assets/images/story-3.jpg"
                                                                    className="img-fluid bg-img"
                                                                    alt="user"/>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <h5>Anna Sthesia</h5>
                                                            <h6>3 hours ago</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="media list-media">
                                                        <div className="story-img">
                                                            <div className="user-img">
                                                                <img src="assets/images/story-4.jpg"
                                                                    className="img-fluid bg-img"
                                                                    alt="user"/>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <h5>Paul Molive</h5>
                                                            <h6>5 hours ago</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="media list-media">
                                                        <div className="story-img">
                                                            <div className="user-img">
                                                                <img src="assets/images/story-2.jpg"
                                                                    className="img-fluid bg-img"
                                                                    alt="user"/>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <h5>Anna Mull</h5>
                                                            <h6>5 hours ago</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="media list-media">
                                                        <div className="story-img">
                                                            <div className="user-img">
                                                                <img src="assets/images/story-3.jpg"
                                                                    className="img-fluid bg-img"
                                                                    alt="user"/>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <h5>Paige Turner</h5>
                                                            <h6>5 hours ago</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="media list-media">
                                                        <div className="story-img">
                                                            <div className="user-img">
                                                                <img src="assets/images/story-4.jpg"
                                                                    className="img-fluid bg-img"
                                                                    alt="user"/>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <h5>Bob Frapples</h5>
                                                            <h6>5 hours ago</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-box col-xl-9 col-lg-8 p-0">
                                    <a href="#" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-light close"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                                    <div className="sliderContainer">
                                        <Slider {...storyViewSettings} className="slider single-item">
                                            <div>
                                                <div className="story-image"><img src="assets/images/post-1.jpg"
                                                        className="img-fluid" alt=""/></div>
                                            </div>
                                            <div>
                                                <div className="story-image"><img src="assets/images/post-2.jpg"
                                                        className="img-fluid" alt=""/></div>
                                            </div>
                                            <div>
                                                <div className="story-image"><img src="assets/images/post-3.jpg"
                                                        className="img-fluid" alt=""/></div>
                                            </div>
                                            <div>
                                                <div className="story-image"><img src="assets/images/post-4.jpg"
                                                        className="img-fluid" alt=""/></div>
                                            </div>
                                            <div>
                                                <div className="story-image"><img src="assets/images/post-5.jpg"
                                                        className="img-fluid" alt=""/></div>
                                            </div>
                                            <div>
                                                <div className="story-image"><img src="assets/images/post-6.jpg"
                                                        className="img-fluid" alt=""/></div>
                                            </div>
                                        </Slider>
                                        <div className="progressBarContainer">
                                            <div className="item">
                                                <span data-slick-index="0" className="progressBar"></span>
                                            </div>
                                            <div className="item">
                                                <span data-slick-index="1" className="progressBar"></span>
                                            </div>
                                            <div className="item">
                                                <span data-slick-index="2" className="progressBar"></span>
                                            </div>
                                            <div className="item">
                                                <span data-slick-index="3" className="progressBar"></span>
                                            </div>
                                            <div className="item">
                                                <span data-slick-index="4" className="progressBar"></span>
                                            </div>
                                            <div className="item">
                                                <span data-slick-index="5" className="progressBar"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reply-section">
                                        <div className="reply-form">
                                            <input className="form-control" placeholder="reply..."/>
                                        </div>
                                        <ul className="emoji icon-xl">
                                            <li><img src="assets/svg/emoji/040.svg"
                                                    className="img-fluid" alt="smile"/>
                                            </li>
                                            <li><img src="assets/svg/emoji/113.svg"
                                                    className="img-fluid" alt="smile"/>
                                            </li>
                                            <li><img src="assets/svg/emoji/027.svg"
                                                    className="img-fluid" alt="smile"/>
                                            </li>
                                            <li><img src="assets/svg/emoji/052.svg"
                                                    className="img-fluid" alt="smile"/>
                                            </li>
                                            <li><img src="assets/svg/emoji/039.svg"
                                                    className="img-fluid" alt="smile"/>
                                            </li>
                                            <li><img src="assets/svg/emoji/042.svg"
                                                    className="img-fluid" alt="smile"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="modal comment-model" id="imageModel" tabIndex="-1" role="dialog"  
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div>
                    <div className="image-gallery">
                        <div className="row m-0">
                            <div className="col-xl-9 col-lg-8 p-0">
                                <a href="#" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-light close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                                <Slider {...gallerySettings} className="default-space">
                                    <div>
                                        <div className="img-part">
                                            <img src="assets/images/post-6.jpg" className="img-fluid" alt=""/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="img-part">
                                            <img src="assets/images/post-7.jpg" className="img-fluid" alt=""/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="img-part">
                                            <img src="assets/images/post-8.jpg" className="img-fluid" alt=""/>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="col-xl-3 col-lg-4 p-0">
                                <div className="comment-part">
                                    <div className="user-detail">
                                        <div className="user-media">
                                            <div className="media">
                                                <a className="user-img">
                                                    <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt="user"/>
                                                    <span className="available-stats"></span>
                                                </a>
                                                <div className="media-body">
                                                    <h5 className="user-name">Paige Turner</h5>
                                                    <h6>alabma, USA</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="setting-btn ms-auto setting-dropdown no-bg">
                                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                <div data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                </div>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                    <ul>
                                                        <li>
                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>save post</a>
                                                        </li>
                                                        <li>
                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>edit post</a>
                                                        </li>
                                                        <li>
                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>hide post</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-panel mb-0">
                                        <div className="post-wrapper">
                                            <div className="post-details">
                                                <div className="like-panel">
                                                    <div className="left-emoji">
                                                        <ul>
                                                            <li>
                                                                <img src="assets/svg/emoji/040.svg" alt="smile"/>
                                                            </li>
                                                            <li>
                                                                <img src="assets/svg/emoji/113.svg" alt="heart"/>
                                                            </li>
                                                        </ul>
                                                        <h6>+75</h6>
                                                    </div>
                                                    <div className="right-stats">
                                                        <ul>
                                                            <li>
                                                                <h5>
                                                                    <i className="iw-16 ih-16"
                                                                        data-feather="message-square"></i>
                                                                    <span>4565</span> comment
                                                                </h5>
                                                            </li>
                                                            <li>
                                                                <h5>
                                                                    <i className="iw-16 ih-16"
                                                                        data-feather="share"></i><span>985</span> share
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
                                                    <div className="comments d-block">
                                                        <div className="main-comment">
                                                            <div className="media">
                                                                <a href="#" className="user-img popover-cls"
                                                                    data-bs-toggle="popover" data-placement="right"
                                                                    data-name="Pabelo mukrani"
                                                                    data-img="assets/images/story-2.jpg">
                                                                    <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt="user"/>
                                                                </a>
                                                                <div className="media-body">
                                                                    <a href="#">
                                                                        <h5>Pabelo Mukrani</h5>
                                                                    </a>
                                                                    <p>Oooo Very Cute and Sweet Dog, happy birthday
                                                                        Cuty.... &#128578;
                                                                    </p>
                                                                    <ul className="comment-option">
                                                                        <li><a href="#">like (5)</a></li>
                                                                        <li><a href="#">reply</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="comment-time">
                                                                    <h6>50 mins ago</h6>
                                                                </div>
                                                            </div>
                                                            <div className="sub-comment">
                                                                <div className="media">
                                                                    <a href="#" className="user-img popover-cls"
                                                                        data-bs-toggle="popover" data-placement="right"
                                                                        data-name="sufiya elija"
                                                                        data-img="assets/images/story-3.jpg">
                                                                        <img src="assets/images/story-3.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="user"/>
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
                                                                    <a href="#" className="user-img popover-cls"
                                                                        data-bs-toggle="popover" data-placement="right"
                                                                        data-name="sufiya eliza"
                                                                        data-img="assets/images/story-4.jpg">
                                                                        <img src="assets/images/story-4.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="user"/>
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
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15 ih-15"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                                                                    load more replies
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="main-comment">
                                                            <div className="media">
                                                                <a href="#" className="user-img popover-cls"
                                                                    data-bs-toggle="popover" data-placement="right"
                                                                    data-name="pabelo mukrani"
                                                                    data-img="assets/images/story-2.jpg">
                                                                    <img src="assets/images/story-2.jpg"
                                                                        className="img-fluid bg-img"
                                                                        alt="user"/>
                                                                </a>
                                                                <div className="media-body">
                                                                    <a href="#">
                                                                        <h5>Pabelo Mukrani</h5>
                                                                    </a>
                                                                    <p>It’s party time, Sufiya..... and happy birthday
                                                                        cuty 🎉🎊
                                                                    </p>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div className="modal fade mobile-full-width" id="shareModal" tabIndex="-1" role="dialog" >
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content share-modal">
                <div className="modal-header">
                    <div className="setting-dropdown">
                        <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                            <h5 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">share as post <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg></h5>
                            <div className="dropdown-menu custom-dropdown">
                                <ul>
                                    <li>
                                        <a href="">share as post</a>
                                    </li>
                                    <li>
                                        <a href="">on friend's feed</a>
                                    </li>
                                    <li>
                                        <a href="">in a group</a>
                                    </li>
                                    <li>
                                        <a href="">share as message</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                </div>
                <div className="modal-body">
                    <div className="user-info">
                        <div className="media">
                            <a href="#" className="user-img">
                                <img src="assets/images/user-sm-2.jpg" className="img-fluid bg-img"
                                    alt="user"/>
                            </a>
                            <div className="media-body">
                                <a href="#">
                                    <h5>Pabelo Mukrani</h5>
                                </a>
                                <div className="setting-dropdown">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                        <h6 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light left-icon iw-12 ih-12"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>public <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg></h6>
                                        <div className="dropdown-menu custom-dropdown">
                                            <ul>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>public</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>friends</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>friends
                                                        except</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>specific
                                                        friends</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>only me</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-section">
                        <input type="text" className="form-control emojiPicker" placeholder="write a comment.."/>
                    </div>
                    <div className="post-section ratio2_1">
                        <div className="post-img">
                            <img src="assets/images/post-2.jpg" className="img-fluid bg-img" alt=""/>
                        </div>
                        <div className="post-content">
                            <h3>Today Our Three Cute Puppy Dog Birthday !!!!</h3>
                            <h5 className="tag"><span>#ourcutepuppy,</span> #puppy, #birthday, #dog</h5>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-solid">share post</button>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade" id="addStory" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body p-0">
                    <div className="create-post">
                        <div className="static-section">
                            <div className="card-title">
                                <h3>create post</h3>
                                <ul className="create-option">
                                    <li className="options">
                                        <div className="setting-dropdown">
                                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                <h5 data-bs-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">public <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg></h5>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                    <ul>
                                                        <li>
                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> public</a>
                                                        </li>
                                                        <li>
                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>friends</a>
                                                        </li>
                                                        <li>
                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>friends
                                                                except</a>
                                                        </li>
                                                        <li>
                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>specific friends</a>
                                                        </li>
                                                        <li>
                                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>only me</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>go live</h5>
                                    </li>
                                </ul>
                                <div className="settings">
                                    <div className="setting-btn ms-2 setting-dropdown no-bg">
                                        <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                            <div role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </div>
                                            <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                <ul>
                                                    <li>
                                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>edit profile</a>
                                                    </li>
                                                    <li>
                                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>view profile</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-input input-style icon-right">
                                <input type="text" className="form-control enable" placeholder="write something here.."/>
                                <a href="#">
                                    <img src="assets/images/translate.png"
                                        className="img-fluid icon" alt="translate"/>
                                </a>
                            </div>
                        </div>
                        <div className="create-bg">
                            <div className="bg-post" id="bg-post">
                                <div className="input-sec">
                                    <input type="text" className="form-control enable"
                                        placeholder="write something here.." />
                                    <div className="close-icon">
                                        <a href="#">
                                            <i className="iw-20 ih-20" data-feather="x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <ul className="gradient-bg">
                                <li onclick={clickGradient('gr-1')} className="gr-1"></li>
                                <li onclick={clickGradient('gr-2')} className="gr-2"></li>
                                <li onclick={clickGradient('gr-3')} className="gr-3"></li>
                                <li onclick={clickGradient('gr-4')} className="gr-4"></li>
                                <li onclick={clickGradient('gr-5')} className="gr-5"></li>
                                <li onclick={clickGradient('gr-6')} className="gr-6"></li>
                                <li onclick={clickGradient('gr-7')} className="gr-7"></li>
                                <li onclick={clickGradient('gr-8')} className="gr-8"></li>
                                <li onclick={clickGradient('gr-9')} className="gr-9"></li>
                                <li onclick={clickGradient('gr-10')} className="gr-10"></li>
                                <li onclick={clickGradient('gr-11')} className="gr-11"></li>
                                <li onclick={clickGradient('gr-12')} className="gr-12"></li>
                                <li onclick={clickGradient('gr-13')} className="gr-13"></li>
                                <li onclick={clickGradient('gr-14')} className="gr-14"></li>
                                <li onclick={clickGradient('gr-15')} className="gr-15"></li>
                            </ul> */}
                        </div>
                        <div className="options-input" id="additional-input">
                            <a id="icon-close" href="#">
                                <i className="iw-15 icon-font-light icon-close" data-feather="x"></i>
                            </a>
                            <div className="search-input feeling-input">
                                <input type="text" className="form-control enable" list="feelings"
                                    placeholder="How Are You Feeling?"/>
                                {/* <datalist id="feelings">
                                    <option value="Happy">
                                    <option value="Sad">
                                    <option value="Angry">
                                    <option value="Worried">
                                    <option value="Shy">
                                    <option value="Excited">
                                    <option value="Surprised">
                                    <option value="Silly">
                                    <option value="Embarrassed">
                                </datalist> */}
                                <a href="#">
                                    <i className="iw-15 icon-left icon-font-light" data-feather="smile"></i>
                                </a>
                            </div>
                            <div className="search-input place-input">
                                <input type="text" className="form-control" placeholder="search for places..."/>
                                <a href="#">
                                    <i className="iw-15 icon-left icon-font-light" data-feather="map-pin"></i>
                                </a>
                            </div>
                            <div className="search-input friend-input">
                                <input type="text" className="form-control" list="friends"
                                    placeholder="search your friends..."/>
                                {/* <datalist id="friends">
                                    <option value="Paige Turner">
                                    <option value="Bob Frapples">
                                    <option value="Josephin water">
                                    <option value="Petey Cruiser">
                                    <option value="Anna Sthesia">
                                    <option value="Paul Molive">
                                    <option value="Anna Mull">
                                </datalist> */}
                                <a href="#">
                                    <i className="iw-15 icon-left icon-font-light" data-feather="tag"></i>
                                </a>
                            </div>
                        </div>
                        <ul className="create-btm-option">
                            <li>
                                <input className="choose-file" type="file"/>
                                <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>album</h5>
                            </li>
                            <li id="feeling-btn">
                                <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>feelings & acitivity</h5>
                            </li>
                            <li id="checkin-btn">
                                <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>check in</h5>
                            </li>
                            <li id="friends-btn">
                                <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>tag friends</h5>
                            </li>
                        </ul>
                        <div id="post-btn" className="post-btn">
                            <button disabled="disabled" className="Disable">post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade bd-example-modal-lg" id="videoPlayer" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-body video-model">
                    <iframe className="video" src="https://www.youtube.com/embed/TKnufs85hXk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade" id="bgColorModel" tabIndex="-1" role="dialog" aria-labelledby="bgColorModelTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Choose Background</h5>
                <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
            </div>
            <div className="modal-body">
                <p>Popular</p>
                <ul className="bg-color-list-block">
                    <li><div className="color-bg-choose" style={{background:"#FF0000"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#70FF00"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#00FFC2"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#D7A2A2"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#FFE600"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#8F00FF"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#0038FF"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#8F00FF"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#FFA800"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#0F8A0D"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#622727"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#00FFC2"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#B0AFAF"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#000000"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#640066"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#101860"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#FFA800"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#0F8A0D"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#D7A2A2"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#FFE600"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#635923"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#FF0000"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#70FF00"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#622727"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#6475B0"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#A165C6"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#91BC81"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#B6B785"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#50466C"}}></div></li>
                    <li><div className="color-bg-choose" style={{background:"#AE7B3F"}}></div></li>
                </ul>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-solid">Done</button>
            </div>
            </div>
        </div>  
    </div>

    
    </>
  );
} 
