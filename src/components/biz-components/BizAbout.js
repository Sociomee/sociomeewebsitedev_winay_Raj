import React, { Component, useState } from 'react';
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import BizTopBanner from './BizTopBanner';
import BizDetailMenu from './BizDetailMenu';
import BizComponent from '../../components/biz-components/Components/BizComponent'
import AboutBiz from './Components/AboutBiz';

export default function GroupDetail() {

    return (
        <>
            <Header></Header>
            <div className="page-body container-fluid profile-page">
                <LeftSidebar></LeftSidebar>
                <div className="page-center">
                    <BizTopBanner></BizTopBanner>
                    <BizDetailMenu></BizDetailMenu>

                    {/* <div className="container-fluid section-t-space px-0">
                        <div className="page-content">
                            <div className="content-center w-100">
                                <div className="gdpost-about-blk">
                                    <div className="row">
                                        <div className="col-md-4 col-12">
                                            <div className="custom-card-block">
                                                <div className="custom-card-head biz-carddetail-blk">
                                                    <h4>About <small>Intro my self</small></h4>
                                                    <div className="settings">
                                                        <div className="setting-btn">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#editbizaboutmodel">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="biz-about-cont">
                                                    <ul>
                                                        <li>
                                                            <div className="bizabout-location">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2266.133469088304!2d10.344347315868879!3d55.39057698045794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cdfc6c8acf0bd%3A0xc9e5ab1219682ea!2sDybdevej%2010%2C%205200%20Odense%2C%20Denmark!5e0!3m2!1sen!2sin!4v1656575287386!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                                <div className="biz-icon-cont-blk">
                                                                    <div className="icon">
                                                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                                    </div>
                                                                    <div className="details">
                                                                        <h5>Address 1</h5>
                                                                        <h6>Dybdevej 10, 5200 Odense, Denmark</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bizabout-location">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2266.133469088304!2d10.344347315868879!3d55.39057698045794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cdfc6c8acf0bd%3A0xc9e5ab1219682ea!2sDybdevej%2010%2C%205200%20Odense%2C%20Denmark!5e0!3m2!1sen!2sin!4v1656575287386!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                                <div className="biz-icon-cont-blk">
                                                                    <div className="icon">
                                                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                                    </div>
                                                                    <div className="details">
                                                                        <h5>Address 2</h5>
                                                                        <h6>Dybdevej 10, 5200 Odense, Denmark</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="biz-icon-cont-blk">
                                                                <div className="icon">
                                                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                                </div>
                                                                <div className="details">
                                                                    <h5>Timing</h5>
                                                                    <h6><span className="green">Open now</span> 9:00AM - 6:00PM</h6>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="biz-icon-cont-blk">
                                                                <div className="icon">
                                                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                                                </div>
                                                                <div className="details">
                                                                    <h5>Website</h5>
                                                                    <h6><a href="www.behance.net">www.behance.net</a> <br /> <a href="www.gihub.net">www.gihub.net</a></h6>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="biz-icon-cont-blk">
                                                                <div className="icon">
                                                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                                </div>
                                                                <div className="details">
                                                                    <h5>Email</h5>
                                                                    <h6><a href="mailto:email@gmail.com">email@gmail.com</a> <br /> <a href="mailto:info@sociomee.com">info@sociomee.com</a></h6>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="biz-icon-cont-blk">
                                                                <div className="icon">
                                                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                                                </div>
                                                                <div className="details">
                                                                    <h5>Contact</h5>
                                                                    <h6>+91 987 654 3210</h6>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-12">
                                            <div className="custom-card-block">
                                                <div className="custom-card-head"><h4>About</h4></div>
                                                <div className="custom-card-body">
                                                    <div className="biz-main-about-blk">
                                                        <h4>Summary</h4>
                                                        <p>The #1 Platform for Virtual Sales Teams. Get visibility into your conversations and deals with Revenue Intelligence.</p>
                                                    </div>
                                                    <div className="biz-main-about-blk">
                                                        <h4>What we do</h4>
                                                        <p>Gong.io enables revenue teams to realize their fullest potential by unveiling customer reality.</p>
                                                        <p>The patented Gong Revenue Intelligence Platform captures and understands every customer interaction then delivers insights at scale, empowering revenue teams to make decisions based on data instead of opinions.</p>
                                                    </div>
                                                    <div className="biz-main-about-blk">
                                                        <h4>Service Option</h4>
                                                        <div className="service-list-blk">
                                                            <span>Ad managment</span>
                                                            <span>Branding</span>
                                                            <span>App deveploment</span>
                                                            <span>Ad campaign</span>
                                                            <span>Digital solutions</span>
                                                            <span>Branding</span>
                                                        </div>
                                                    </div>
                                                    <div className="biz-main-about-blk">
                                                        <h4>Offerings</h4>
                                                        <div className="service-list-blk">
                                                            <span>Facebook Ads</span>
                                                            <span>Print media</span>
                                                            <span>Web design</span>
                                                            <span>E-commerce</span>
                                                            <span>iOS deveploment</span>
                                                            <span>Android deveploment</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <AboutBiz />
                </div>
                <RightSidebar></RightSidebar>
            </div>
            <div className="modal fade" id="editbizaboutmodel" tabIndex="-1" role="dialog" aria-labelledby="editbizaboutmodelTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered editbizabout-model" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit About</h5>
                            <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                        </div>
                        <div className="modal-body">
                            <div className="searchfilter-blk">
                                <form className="theme-form form-sm">
                                    <div className="row">
                                        <div className="form-group col-md-3">
                                            <label>Address 1</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label>Address 1 Link</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label>Address 2</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label>Address 2 Link</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label>Timing</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label>Website 1</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label>Website 2</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label>Email 1</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label>Email 2</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label>Contact</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Summary</label>
                                            <textarea rows="2" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>What we do</label>
                                            <textarea rows="2" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label>Service Option</label>
                                            <select id="inputState" className="form-control">
                                                <option>Ad managment</option>
                                                <option>Branding</option>
                                                <option>App deveploment</option>
                                                <option>Ad campaign</option>
                                                <option>Digital solutions</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label>Offerings</label>
                                            <select id="inputState" className="form-control">
                                                <option>Facebook Ads</option>
                                                <option>Print media</option>
                                                <option>Web design</option>
                                                <option>E-commerce</option>
                                                <option>iOS deveploment</option>
                                                <option>Android deveploment</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="bizcreate-btns">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#createbizmodel" className="btn btn-primary mr-3">Edit About</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <div className="modal-footer">
                    <button type="button" className="btn btn-solid" data-bs-dismiss="modal" aria-label="Close">OK</button>
                </div> */}
                    </div>
                </div>
            </div>
        </>
    );
} 