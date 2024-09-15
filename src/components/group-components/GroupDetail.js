import React,{Component, useState} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import GroupDetailMenu from './GroupDetailMenu';
import FriendSuggestion from '../left-right-components/FriendSuggestion';
import FriendRequest from '../left-right-components/FriendRequest';
import LikedBizPage from '../left-right-components/LikedBizPage';
import Gallery from '../left-right-components/Gallery';
import Event from '../left-right-components/Event';
import CreatePost from '../CreatePost';
import Models from './Models';

export default function GroupDetail() {  

    return (
      <>
        <Header></Header>
        <div className="page-body container-fluid profile-page">
          <LeftSidebar></LeftSidebar>
          <div className="page-center">
            <div className="group-details-top">
                <div className="gd-top-block" style={{background:"url(assets/images/gd-banner.jpg)"}}>
                    <div className="gd-top-btns">
                        <a href="#" className="grey-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" class="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                        <a href="#" className="grey-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" class="iw-13 ih-13"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit </a>
                    </div>
                </div>
                <div className="heading-title-blk">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
                            <h3>Holland Night Club</h3>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
                            <ul className="followlist-blk">
                                <li>4k<span>Likes</span></li>
                                <li>52<span>Posts</span></li>
                                <li>524<span>Followers</span></li>
                                <li>502<span>Follow</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="gd-content-area-top-blk">
                    <div className="groupmember-blk">
                        <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span>  ●  <span>Catagory 1</span>  ●  <span>Admin 12</span>  ●  <span>Mordreater 45</span>
                    </div>
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
                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                            </li>
                            <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                            </li>
                        </ul>
                        <h6>+75 members</h6>
                    </div>
                    <p>The #1 Platform for Virtual Sales Teams. Get visibility into your conversations and deals with Revenue...</p>
                </div>
            </div>
            <GroupDetailMenu></GroupDetailMenu>

            <div className="container-fluid section-t-space px-0">
                <div className="page-content">
                    <div className="content-left">
                        <FriendSuggestion></FriendSuggestion>
                        <FriendRequest></FriendRequest>
                        <LikedBizPage></LikedBizPage>
                    </div>
                    <div className="content-center">
                        <CreatePost></CreatePost>
                        <div className="overlay-bg"></div>
                        <div className="post-panel section-t-space">
                            <div className="post-wrapper col-grid-box">
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
                        </div>
                    </div>
                    <div className="content-right">
                        <Gallery></Gallery>
                        <Event></Event>
                    </div>
                </div>
            </div>
          </div>
          <RightSidebar></RightSidebar>
        </div>
          <Models></Models>
      </>
    );
} 