import React,{Component, useState} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import Slider from "react-slick";

export default function GroupDetail() {  
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
        <Header></Header>
        <div className="page-body container-fluid profile-page">
          <LeftSidebar></LeftSidebar>
          <div className="page-center">
            <div className="row">
                <div className="col-md-12">
                    <div className="createbizpage-block">
                        <h3>Create BizPage</h3>
                        <form className="theme-form form-sm">
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>BizPage Name</label>
                                    <input type="text" className="form-control" required/>
                                    <p className="input-hints">Max 60 charectors</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <label>Biz Catagory</label>
                                    <select id="inputState" className="form-control">
                                        <option>Marketting Agency</option>
                                        <option>Apartment & Building </option>
                                        <option>Visual Arts</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label>Sub Catagory</label>
                                    <select id="inputState" className="form-control">
                                        <option>Electronic</option>
                                        <option>Grocery</option>
                                        <option>Video Game </option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label>Biz Page Privacy</label>
                                    <select id="inputState" className="form-control">
                                        <option>Public</option>
                                        <option>Private</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label>Biz Page URL</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div className="form-group col-md-3">
                                    <label>Add your biz logo</label>
                                    <input type="file" className="form-control" required/>
                                </div>
                                <div className="form-group col-md-3">
                                    <label>Add your cover image</label>
                                    <input type="file" className="form-control" required/>
                                </div>
                                <div className="form-group col-md-12">
                                    <label>Summery</label>
                                    <textarea rows="2" className="form-control"></textarea>
                                    <p className="input-hints">Max 180 Characters</p>
                                </div>
                            </div>
                            {/* <hr/>
                            <h4>Details</h4>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Add your biz logo</label>
                                    <input type="file" className="form-control" required/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label>Add your cover image</label>
                                    <input type="file" className="form-control" required/>
                                </div>
                            </div> */}
                            <div className="bizcreate-btns">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#createbizmodel" className="btn btn-primary mr-3">Creat BizPage</a>
                                <a href="#" className="btn btn-default">Cancel</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="group-details-top biz-details-top biz-cration-preview">
                        <div className="gd-top-block" style={{background:"url(assets/images/demo-banner-1.jpg)"}}>
                        </div>
                        <div className="heading-title-blk head-title-biz">
                            <div className="row align-items-center">
                                <div className="col-xl-4 col-lg-4 col-12 order-lg-2">
                                    <div className="biz-user-pro-blk">
                                        <img src="assets/images/demo-1.jpg"/>
                                        <h5>PAGE NAME</h5>
                                        <p><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Addess</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-12 order-lg-1">
                                    <div className="gd-content-area-top-blk">
                                        <div className="groupmember-blk">
                                            <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Privacy group</span> • <span>Catagory</span> 
                                        </div>
                                        <div className="people-likes matual-friend-sec">
                                            <ul className="matual-friend-blk">
                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                </li>
                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                </li>
                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                </li>
                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                </li>
                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                </li>
                                            </ul>
                                            <h6>Visited Person</h6>
                                        </div>
                                        <div className="people-likes matual-friend-sec">
                                            <ul className="matual-friend-blk">
                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                </li>
                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                </li>
                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                </li>
                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                </li>
                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                </li>
                                            </ul>
                                            <h6>Members</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-12 order-lg-3">
                                    <ul className="followlist-blk">
                                        <li>0<span>Rating</span></li>
                                        <li>0<span>Likes</span></li>
                                        <li>0<span>Posts</span></li>
                                        <li>0<span>Followers</span></li>
                                        <li>0<span>Follow</span></li>
                                    </ul>
                                    <div className="create-biz-btn"><a href="#" className="btn btn-primary green-clr-btn">Create Biz Page</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-menu section-t-space biz-cration-menu-preview">
                        <ul>
                            <li>
                                <a href="#" className="active-disable">
                                <h6>Overview</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h6>Post</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h6>Review</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h6>Photos</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h6>About</h6>
                                </a>
                            </li>
                        </ul>
                        <ul className="right-menu d-xl-flex d-none biz-cration-menu-preview">
                            <li>
                                <a href="#">
                                    <h6>Post an offer</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                    <h6>Setting</h6>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="container-fluid section-t-space px-0">
                        <div className="page-content">
                            <div className="content-left">
                                <div className="suggestion-box section-b-space">
                                    <div className="card-title">
                                        <h3>friend suggestion</h3>
                                    </div>
                                    <div className="suggestion-content ratio_115 no-arrow frz-sug-slider-sec  biz-cration-fsslide-preview">
                                        <Slider {...FriendSuggestsettings} className="default-space">
                                            <div>
                                                <div className="friend-sugges-box">
                                                    <div className="fdimg-blk">
                                                        <img src="assets/images/demo-2.jpg" className="img-fluid bg-img" alt=""/>
                                                        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-24 ih-24"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                                    </div>
                                                    <div className="fdcont-blk">
                                                        <h4>User Name</h4>
                                                        <div className="people-likes matual-friend-sec">
                                                            <ul className="matual-friend-blk">
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                            </ul>
                                                            <h6>mutual</h6>
                                                        </div>
                                                        <a href="#" className="d-block btn btn-primary">Send Request</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="friend-sugges-box">
                                                    <div className="fdimg-blk">
                                                        <img src="assets/images/demo-2.jpg" className="img-fluid bg-img" alt=""/>
                                                        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-24 ih-24"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                                    </div>
                                                    <div className="fdcont-blk">
                                                        <h4>User Name</h4>
                                                        <div className="people-likes matual-friend-sec">
                                                            <ul className="matual-friend-blk">
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                                                    data-name="User Name" data-img="assets/images/user-sm-1.jpg">
                                                                    <img src="assets/images/user-sm-1.jpg" className="img-fluid bg-img" alt=""/>
                                                                </li>
                                                            </ul>
                                                            <h6>mutual</h6>
                                                        </div>
                                                        <a href="#" className="d-block btn btn-primary">Send Request</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                    </div>
                            </div>
                            <div className="content-center">
                                <div className="create-post-demo">
                                   <img src="assets/images/demo-3.png"/>
                                </div>
                            </div>
                            <div className="content-right">
                                <div className="gallery-section section-b-space">
                                    <div className="gallery-top">
                                        <div className="card-title">
                                            <h3>gallery</h3>
                                        </div>
                                    </div>
                                    <div className="portfolio-section ratio_square">
                                        <div className="container-fluid p-0">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="overlay">
                                                        <div className="portfolio-image">
                                                            <a href="#" data-bs-toggle="modal"
                                                                data-bs-target="#imageModel">
                                                                <img src="assets/images/event-bg.jpg" alt=""
                                                                    className="img-fluid bg-img"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="overlay">
                                                        <div className="portfolio-image">
                                                            <a href="#" data-bs-toggle="modal"
                                                                data-bs-target="#imageModel">
                                                                <img src="assets/images/event-bg.jpg" alt=""
                                                                    className="img-fluid bg-img"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="overlay">
                                                        <div className="portfolio-image">
                                                            <a href="#" data-bs-toggle="modal"
                                                                data-bs-target="#imageModel">
                                                                <img src="assets/images/event-bg.jpg" alt=""
                                                                    className="img-fluid bg-img"/>
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
                                                                    <img src="assets/images/event-bg.jpg" alt=""
                                                                        className="img-fluid bg-img"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 pt-cls p-0">
                                                        <div className="overlay">
                                                            <div className="portfolio-image">
                                                                <a href="#" data-bs-toggle="modal"
                                                                    data-bs-target="#imageModel">
                                                                    <img src="assets/images/event-bg.jpg" alt=""
                                                                        className="img-fluid bg-img"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-8 pt-cls">
                                                    <div className="overlay">
                                                        <div className="portfolio-image">
                                                            <a href="#" data-bs-toggle="modal"
                                                                data-bs-target="#imageModel">
                                                                <img src="assets/images/event-bg.jpg" alt=""
                                                                    className="img-fluid bg-img"/>
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
          <RightSidebar></RightSidebar>
        </div>
        <div className="modal fade" id="createbizmodel" tabIndex="-1" role="dialog" aria-labelledby="createbizmodelTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered createbizpageModel" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <img src="assets/images/Star1.png"/>
                    <h5 className="modal-title" id="exampleModalLongTitle">BizPage Created Successfully!</h5>
                    {/* <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a> */}
                </div>
                <div className="modal-body">
                    <div className="searchfilter-blk">
                        <p>Connections list</p>
                        <div className="input-search-blk">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input type="text" className="form-control" name="search" placeholder="Find Connections..."/>
                        </div>
                        <ul className="connection-list">
                            <li>
                                <div className="connection-member">
                                    <img src="assets/images/story-3.jpg"/>
                                    <h5>Emilly Watsonr<br/><small>amaze_amilly</small></h5>
                                </div>
                                <a href="#" className="btn btn-primary">Send invite</a>
                            </li>
                            <li>
                                <div className="connection-member">
                                    <img src="assets/images/story-3.jpg"/>
                                    <h5>Emilly Watsonr<br/><small>amaze_amilly</small></h5>
                                </div>
                                <a href="#" className="btn btn-primary">invited</a>
                            </li>
                            <li>
                                <div className="connection-member">
                                    <img src="assets/images/story-3.jpg"/>
                                    <h5>Emilly Watsonr<br/><small>amaze_amilly</small></h5>
                                </div>
                                <a href="#" className="btn btn-primary">Send invite</a>
                            </li>
                            <li>
                                <div className="connection-member">
                                    <img src="assets/images/story-3.jpg"/>
                                    <h5>Emilly Watsonr<br/><small>amaze_amilly</small></h5>
                                </div>
                                <a href="#" className="btn btn-primary">invited</a>
                            </li>
                            <li>
                                <div className="connection-member">
                                    <img src="assets/images/story-3.jpg"/>
                                    <h5>Emilly Watsonr<br/><small>amaze_amilly</small></h5>
                                </div>
                                <a href="#" className="btn btn-primary">Send invite</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-solid" data-bs-dismiss="modal" aria-label="Close">OK</button>
                </div>
                </div>
            </div>  
        </div>
      </>
    );
} 