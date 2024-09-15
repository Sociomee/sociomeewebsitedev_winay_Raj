import React,{Component, useState} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import GoliveHeader from './GoliveHeader';

export default function CreateGoLive() {  

    return (
      <>
        <Header></Header>
        <div className="page-body container-fluid profile-page">
          <LeftSidebar></LeftSidebar>
          <div className="page-center">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="golive-card-box">
                  <div className="golive-card-head">Live Setting</div>
                  <div className="golive-card-full-body">
                    <div className="golive-streaming-preview-blk">
                      <img src="assets/images/live-streaming.jpg"/>
                      <div className="golive-setting-preview-blk">
                        <h4>Preview</h4>
                        <div className="gl-setting-blk">
                          <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></a>
                          <div className="dropdown-menu dropdown-menu-right custom-dropdown dropdown-blockcust">
                            <h5>Live Video Notification</h5>
                            <div className="golivesetting-toggle-box">
                              <div className="gl-setting-toggle-cont">
                                <h3>Allow video notifications</h3>
                                <p>Control all notifications for videos.</p>
                              </div>
                              <div className="toggle-sec">
                                <div className="button toggle-btn">
                                  <input type="checkbox" className="checkbox"/>
                                  <div className="knobs">
                                    <span></span>
                                  </div>
                                  <div className="layer"></div>
                                </div>
                              </div>
                            </div>
                            <div className="golivesetting-toggle-box">
                              <div className="gl-setting-toggle-cont">
                                <h3>New videos</h3>
                                <p>Be notified when Pages you follow post new videos.</p>
                              </div>
                              <div className="toggle-sec">
                                <div className="button toggle-btn">
                                  <input type="checkbox" className="checkbox"/>
                                  <div className="knobs">
                                    <span></span>
                                  </div>
                                  <div className="layer"></div>
                                </div>
                              </div>
                            </div>
                            <div className="golivesetting-toggle-box">
                              <div className="gl-setting-toggle-cont">
                                <h3>Saved videos</h3>
                                <p>Be notified about videos you've saved.</p>
                              </div>
                              <div className="toggle-sec">
                                <div className="button toggle-btn">
                                  <input type="checkbox" className="checkbox"/>
                                  <div className="knobs">
                                    <span></span>
                                  </div>
                                  <div className="layer"></div>
                                </div>
                              </div>
                            </div>
                            <div className="golivesetting-toggle-box">
                              <div className="gl-setting-toggle-cont">
                                <h3>What's trending</h3>
                                <p>Be notified about trending videos.</p>
                              </div>
                              <div className="toggle-sec">
                                <div className="button toggle-btn">
                                  <input type="checkbox" className="checkbox"/>
                                  <div className="knobs">
                                    <span></span>
                                  </div>
                                  <div className="layer"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="golive-ready-live-streaming-blk">
                        <p><span></span> Ready to start Live Stream</p>
                        <a href="#" className="golive-create-btn disable-btn">Go Live</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="golive-card-box">
                  <div className="golive-card-head">Setup MEDIA</div>
                  <div className="golive-card-body">
                    <div className="setup-media-block">
                      <div className="row">
                        <div className="col-lg-8 col-md-7 col-sm-8 col-7">
                          <div className="set-media-form-blk">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-24 ih-24"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                            <select id="inputState" class="form-control">
                              <option>Webcam</option>
                              <option>Webcam</option>
                              <option>Webcam</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-4 col-5">
                          <a className="gl-test-button">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg> Test video
                          </a>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-8 col-md-7 col-sm-8 col-7">
                          <div className="set-media-form-blk">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-24 ih-24"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                            <select id="inputState" class="form-control">
                              <option>Microphone</option>
                              <option>Microphone</option>
                              <option>Microphone</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-4 col-5">
                          <a className="gl-test-button">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg> Test audio
                          </a>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-8 col-md-7 col-sm-8 col-7">
                          <label className="setmedia-formlabel">Catagories</label>
                          <div className="set-media-form-blk">
                            <select id="inputState" class="form-control">
                              <option>Select Category</option>
                              <option>Education</option>
                              <option>Comedy</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-4 col-5">
                          <label className="setmedia-formlabel">Who Can See</label>
                          <div className="set-media-form-blk">
                            <select id="inputState" class="form-control">
                              <option>Public</option>
                              <option>Connections</option>
                              <option>Colleagues</option>
                              <option>Family</option>
                              <option>Friends</option>
                              <option>Relatives</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center custom-row-golive">
                        <div className="col-lg-8 col-md-7 col-sm-8 col-7">
                          <div className="form-check checkbox_animated">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">I accept the <a href="#"> Privacy Policy</a></label>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-4 col-5">
                          <div className="golive-button-main"><NavLink to="/CreateGoLiveDetail" className="golive-create-btn">Go Live</NavLink></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-12">
                <div className="golive-card-box">
                  <div className="golive-card-head">Viewer Setting (more options to be added)</div>
                  <div className="golive-card-body">
                    <div className="setup-viewer-setting-blk">
                      <div className="golivesetting-toggle-box">
                        <div className="gl-setting-toggle-cont">
                          <h3>Turn on comments</h3>
                          <p>Viewers can rewind any of your live videos started in Live Producer or on a mobile device. Live videos that are longer than eight hours can't be rewound.</p>
                        </div>
                        <div className="toggle-sec">
                          <div className="button toggle-btn">
                            <input type="checkbox" className="checkbox"/>
                            <div className="knobs">
                              <span></span>
                            </div>
                            <div className="layer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="golivesetting-toggle-box">
                        <div className="gl-setting-toggle-cont">
                          <h3>Viewer can see the go live in the scoop (story) section</h3>
                          <p>Only when the user is live and once they end go live it will not be visible in the scoop section.</p>
                        </div>
                        <div className="toggle-sec">
                          <div className="button toggle-btn">
                            <input type="checkbox" className="checkbox"/>
                            <div className="knobs">
                              <span></span>
                            </div>
                            <div className="layer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="golivesetting-toggle-box">
                        <div className="gl-setting-toggle-cont">
                          <h3>Enable notification</h3>
                          <p>Viewers can message you directly through Messenger from your live video.</p>
                        </div>
                        <div className="toggle-sec">
                          <div className="button toggle-btn">
                            <input type="checkbox" className="checkbox"/>
                            <div className="knobs">
                              <span></span>
                            </div>
                            <div className="layer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="golivesetting-toggle-box">
                        <div className="gl-setting-toggle-cont">
                          <h3>Enable chat</h3>
                          <p>Viewers can message you directly through Messenger from your live video.</p>
                        </div>
                        <div className="toggle-sec">
                          <div className="button toggle-btn">
                            <input type="checkbox" className="checkbox"/>
                            <div className="knobs">
                              <span></span>
                            </div>
                            <div className="layer"></div>
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
      </>
    );
} 