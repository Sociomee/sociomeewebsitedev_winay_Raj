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
                        <div className="gdpost-about-blk">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="custom-card-block">
                                        <div className="custom-card-head"><h4>About this group</h4></div>
                                        <div className="custom-card-body">
                                            <div className="gd-abt-text">The #1 Platform for Virtual Sales Teams. Get visibility into your conversations and deals with Revenue Intelligence.</div>
                                            <div className="gd-about-blk">
                                                <div className="gd-abt-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
                                                <div className="gd-abt-cont">
                                                    <h4>Group privacy</h4>
                                                    <p>Public</p>
                                                </div>
                                            </div>
                                            <div className="gd-about-blk">
                                                <div className="gd-abt-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg></div>
                                                <div className="gd-abt-cont">
                                                    <h4>Group privacy</h4>
                                                    <p>Public</p>
                                                </div>
                                            </div>
                                            <div className="gd-about-blk">
                                                <div className="gd-abt-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
                                                <div className="gd-abt-cont">
                                                    <h4>Group privacy</h4>
                                                    <p>Public</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="custom-card-block">
                                        <div className="custom-card-head"><h4>About this group</h4></div>
                                        <div className="custom-card-body">
                                            <div className="gt-abt-member-bk">
                                                <ul className="abt-member-list">
                                                    <li>
                                                        <div className="about-member-pic">
                                                            <img src="assets/images/story-2.jpg"/>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="about-member-pic">
                                                            <img src="assets/images/story-3.jpg"/>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="about-member-pic">
                                                            <img src="assets/images/story-4.jpg"/>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="about-member-pic">
                                                            <img src="assets/images/story-3.jpg"/>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="about-member-pic abt-img-count">
                                                            +13
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="gd-abt-text">The #1 Platform for Virtual Sales Teams. Get visibility into your conversations and deals with Revenue Intelligence.</div>
                                            </div>
                                            <div className="gt-abt-member-bk">
                                                <ul className="abt-member-list">
                                                    <li>
                                                        <div className="about-member-pic">
                                                            <img src="assets/images/story-2.jpg"/>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="about-member-pic">
                                                            <img src="assets/images/story-3.jpg"/>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="about-member-pic">
                                                            <img src="assets/images/story-4.jpg"/>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="gd-abt-text">Anurag Saini is an admin. Razdar is a moderator</div>
                                                <div className="abt-mm-btns">
                                                    <NavLink to="/GroupMember" className="btn btn-default">See all members</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
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