import React,{Component, useState} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import GroupDetailMenu from './GroupDetailMenu';
import Models from './Models';

export default function GdPostRequest() {  

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
                        <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span> • <span>Friend</span> 
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
                    <div className="content-center w-100">
                        <div className="gdpost-request-blk">
                            <div className="row justify-content-center">
                                <div className="col-md-8 col-12">
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
                                                </div>
                                                <div className="gd-post-act-re-btn">
                                                    <div className="row">
                                                        <div className="col-6"><a href="#" className="d-block btn btn-primary">Accept</a></div>
                                                        <div className="col-6"><a href="#" className="d-block btn btn-default">Decline</a></div>
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
          <RightSidebar></RightSidebar>
        </div>
          <Models></Models>
      </>
    );
} 