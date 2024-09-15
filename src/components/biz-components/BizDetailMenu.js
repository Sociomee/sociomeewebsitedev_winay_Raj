import React, { Component, useState } from 'react';
import { NavLink } from "react-router-dom";

export default function GroupMenu() {

    return (
        <>
            <div className="profile-menu section-t-space">
                <ul>
                    <li>
                        <NavLink to="/BizDetail">
                            <h6>Overview</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/BizPost">
                            <h6>Post</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/BizReview">
                            <h6>Review</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/BizPhotos">
                            <h6>Catalogues and Photos</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/BizAbout">
                            <h6>About</h6>
                        </NavLink>
                    </li>
                </ul>

                <ul className="right-menu d-xl-flex d-none">
                    {/* <li>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#postoffermodel">
                        <h6>Post an offer</h6>
                    </a>
                </li> */}
                    <li>
                        <NavLink to="/BizSetting">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                            <h6>Setting</h6>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Models */}

            <div className="modal fade" id="postoffermodel" tabIndex="-1" role="dialog" aria-labelledby="postoffermodelTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Add BizPage Action Button</h5>
                            <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                        </div>
                        <div className="modal-body">
                            <div className="postoffer-blk">
                                <div className="follow-chat">
                                    <div className="radio-blk">
                                        <label htmlFor="follow">
                                            <h4>Follow Us</h4>
                                            <p>Make it easy for people to follow your page.</p>
                                        </label>
                                        <input className="radio_animated" type="radio" name="followchat" id="follow" value="follow" />
                                    </div>
                                    <div className="radio-blk">
                                        <label htmlFor="chat">
                                            <h4>Chat with Us</h4>
                                            <p>Choose the number associated with your WhatsApp account so that people can contact you.</p>
                                        </label>
                                        <input className="radio_animated" type="radio" name="followchat" id="chat" value="chat" />
                                    </div>
                                </div>
                                <div className="accordion accordion-post-offer" id="accordionOffer">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="headingOne">
                                            <div className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <h4>Call Me</h4>
                                                <p>Choose where you'd like to receive calls.</p>
                                            </div>
                                        </div>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionOffer">
                                            <div className="accordion-body">
                                                <h5>What's the best phone number for people to contact you on?</h5>
                                                <div className="postoffer-acc">
                                                    <div className="input-block">
                                                        <div className="phone-with-code">
                                                            <select className="form-select" value="" name="phone_code">
                                                                <option value="">Code</option>
                                                                <option value="91">91</option>
                                                                <option value="92">92</option>
                                                                <option value="93">93</option>
                                                                <option value="94">94</option>
                                                            </select>
                                                            <input type="text" className="form-control" placeholder="Enter Mobile Number" name="phone" />
                                                        </div>
                                                    </div>
                                                    <div className="post-offer-buttons">
                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                        <a href="#" className="btn btn-primary">Save</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="headingTwo">
                                            <div className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <h4>Send Email</h4>
                                                <p>Choose an email address where people can contact you.</p>
                                            </div>
                                        </div>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionOffer">
                                            <div className="accordion-body">
                                                <h5>What's the best email address for people to contact you on?</h5>
                                                <div className="postoffer-acc">
                                                    <div className="input-block">
                                                        <input type="text" className="form-control" placeholder="Enter Email Id" name="email" />
                                                    </div>
                                                    <div className="post-offer-buttons">
                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                        <a href="#" className="btn btn-primary">Save</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="headingThree">
                                            <div className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <h4>Learn More</h4>
                                                <p>Choose a website where people can learn more about what you do.</p>
                                            </div>
                                        </div>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionOffer">
                                            <div className="accordion-body">
                                                <h5>What's the best place for people to find more info?</h5>
                                                <div className="postoffer-acc">
                                                    <div className="input-block">
                                                        <input type="text" className="form-control" placeholder="Enter your website link" name="website" />
                                                    </div>
                                                    <div className="post-offer-buttons">
                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                        <a href="#" className="btn btn-primary">Save</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="headingFour">
                                            <div className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <h4>Use App</h4>
                                                <p>Create a new offer to reach your potential audience.</p>
                                            </div>
                                        </div>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionOffer">
                                            <div className="accordion-body">
                                                <h5>Where can people download your app?</h5>
                                                <div className="postoffer-acc">
                                                    <div className="input-block">
                                                        <input type="text" className="form-control" placeholder="Enter your website link" name="website" />
                                                    </div>
                                                    <div className="post-offer-buttons">
                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                        <a href="#" className="btn btn-primary">Save</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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