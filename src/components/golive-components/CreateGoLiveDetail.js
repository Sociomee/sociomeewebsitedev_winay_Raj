import React,{Component, useRef, useState } from 'react'; 
import { NavLink } from "react-router-dom";

function CreateGoLiveDetail() {  
  const commentBlk = useRef(null);
  const FullcommentSec = useRef(null);
  const ButtonHalf = useRef(null);
  const ButtonFull = useRef(null);
  const AddWidth = useRef(null);
  const ClickFullCom = (e) => {
    commentBlk.current.classList.remove("d-none");
    ButtonFull.current.classList.add("d-none");
    ButtonHalf.current.classList.remove("d-none");
    FullcommentSec.current.classList.add("golive-fullcomment");
    AddWidth.current.classList.add("liveandclose-block-width-change");
  };
  const ClickHalfCom = (e) => {
    commentBlk.current.classList.add("d-none");
    ButtonFull.current.classList.remove("d-none");
    ButtonHalf.current.classList.add("d-none");
    FullcommentSec.current.classList.remove("golive-fullcomment");
    AddWidth.current.classList.remove("liveandclose-block-width-change");
  };

  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      var vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);

  return (
    <>
      <div className="golive-video-section">
        {/* <video id="video1" className="video" ref={videoRef}>
          <source src="assets/images/video/golive-video.mp4" type="video/mp4"/>
        </video> */}
        <div className="golive-createstreem">
          <img src="assets/images/golive-ban.jpg"/>
        </div>

        <div className="liveandclose-block" ref={AddWidth}>
          <div className="live-comment-view-block">
            <div className="livestatus-con">Live</div>
            <div className="gl-view-cont">
              <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 8k Watching
              </a>
              <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-golive">
                <h4 className="watchlive-heading">8k People watching Live</h4>
                <ul>
                    <li>
                      <div className="watchlive-block">
                        <div className="watchliver-user">
                          <img src="assets/images/story-2.jpg"/>
                          <div className="watchlive-user-cont">
                            <h5>Darrell Steward</h5>
                            <p>Joined on 23 Mar 2021</p>
                          </div>
                        </div>
                        <a href="#" className="watchlive-button">SocioMate</a>
                      </div>
                    </li>
                    <li>
                      <div className="watchlive-block">
                        <div className="watchliver-user">
                          <img src="assets/images/story-2.jpg"/>
                          <div className="watchlive-user-cont">
                            <h5>Devon Lane</h5>
                            <p>Joined on 23 Mar 2021</p>
                          </div>
                        </div>
                        <a href="#" className="watchlive-button">Follow</a>
                      </div>
                    </li>
                    <li>
                      <div className="watchlive-block">
                        <div className="watchliver-user">
                          <img src="assets/images/story-2.jpg"/>
                          <div className="watchlive-user-cont">
                            <h5>Darrell Steward</h5>
                            <p>Joined on 23 Mar 2021</p>
                          </div>
                        </div>
                        <a href="#" className="watchlive-button">SocioMate</a>
                      </div>
                    </li>
                    <li>
                      <div className="watchlive-block">
                        <div className="watchliver-user">
                          <img src="assets/images/story-2.jpg"/>
                          <div className="watchlive-user-cont">
                            <h5>Kristin Watson</h5>
                            <p>Joined on 23 Mar 2021</p>
                          </div>
                        </div>
                        <a href="#" className="watchlive-button">Follow</a>
                      </div>
                    </li>
                    <li>
                      <div className="watchlive-block">
                        <div className="watchliver-user">
                          <img src="assets/images/story-2.jpg"/>
                          <div className="watchlive-user-cont">
                            <h5>Marvin McKinney</h5>
                            <p>Joined on 23 Mar 2021</p>
                          </div>
                        </div>
                        <a href="#" className="watchlive-button">Follow</a>
                      </div>
                    </li>
                    <li>
                      <div className="watchlive-block">
                        <div className="watchliver-user">
                          <img src="assets/images/story-2.jpg"/>
                          <div className="watchlive-user-cont">
                            <h5>Darrell Steward</h5>
                            <p>Joined on 23 Mar 2021</p>
                          </div>
                        </div>
                        <a href="#" className="watchlive-button">SocioMate</a>
                      </div>
                    </li>
                    <li>
                      <div className="watchlive-block">
                        <div className="watchliver-user">
                          <img src="assets/images/story-2.jpg"/>
                          <div className="watchlive-user-cont">
                            <h5>Devon Lane</h5>
                            <p>Joined on 23 Mar 2021</p>
                          </div>
                        </div>
                        <a href="#" className="watchlive-button">Follow</a>
                      </div>
                    </li>
                    <li>
                      <div className="watchlive-block">
                        <div className="watchliver-user">
                          <img src="assets/images/story-2.jpg"/>
                          <div className="watchlive-user-cont">
                            <h5>Darrell Steward</h5>
                            <p>Joined on 23 Mar 2021</p>
                          </div>
                        </div>
                        <a href="#" className="watchlive-button">SocioMate</a>
                      </div>
                    </li>
                    <li>
                      <div className="watchlive-block">
                        <div className="watchliver-user">
                          <img src="assets/images/story-2.jpg"/>
                          <div className="watchlive-user-cont">
                            <h5>Kristin Watson</h5>
                            <p>Joined on 23 Mar 2021</p>
                          </div>
                        </div>
                        <a href="#" className="watchlive-button">Follow</a>
                      </div>
                    </li>
                    <li>
                      <div className="watchlive-block">
                        <div className="watchliver-user">
                          <img src="assets/images/story-2.jpg"/>
                          <div className="watchlive-user-cont">
                            <h5>Marvin McKinney</h5>
                            <p>Joined on 23 Mar 2021</p>
                          </div>
                        </div>
                        <a href="#" className="watchlive-button">Follow</a>
                      </div>
                    </li>
                </ul>
              </div>
            </div>
            <h4>#Entertainment</h4>
          </div>
          <div className="golive-close-details-blk">
            <a href="#" className="share-details-golive-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg></a>

            <a href="#" className="share-details-golive-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg></a>

            <a href="#" className="share-details-golive-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a>

            <div className="golive-3dot-blk">
              <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></a>
              <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-golive">
                <ul>
                    <li><a href="#">Enable Chat</a></li>
                    <li><a href="#">Copy Link</a></li>
                    <li><a href="#">Turn on notifications for this post</a></li>
                </ul>
              </div>
            </div>

            <NavLink to="/CreateGoLive" className="close-golive-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></NavLink>
          </div>
        </div>

        <div className="watchgolive-bottom-section">
          <div className="watchgolive-timmer-blk">
            <div className="wgl-timmer-blk">13:08:52</div>
          </div>
          <div className="watchgolive-pausestop-blk">
            <a href="#" className="wgl-pausestop-blk" data-bs-toggle="modal" data-bs-target="#videoClose">
              <div className="wglpausecircle"><span></span></div>
            </a>
          </div>
          <div className="watchgolive-likeemogi-blk">
            <a href="#" className="wgl-like-blk">81</a>
            <a href="#" className="wgl-emogi-blk">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"  className="iw-24 ih-24">
                <path d="M5.06428 1.03227C4.48069 1.1286 4.01108 1.27998 3.49133 1.53227C2.28768 2.11943 1.4123 2.99099 0.824154 4.19741C0.53236 4.78915 0.404701 5.19282 0.299837 5.84879C0.199533 6.46805 0.199533 23.1653 0.299837 23.7846C0.400141 24.4176 0.53236 24.8396 0.796798 25.3901C1.21625 26.257 1.76792 26.9451 2.50652 27.5047C2.96245 27.8534 3.84695 28.3075 4.33479 28.4405C5.16458 28.6699 5.17826 28.6699 10.2163 28.6699C15.3363 28.6699 15.1357 28.6791 15.6828 28.413C15.9746 28.2708 16.3576 27.8947 20.2284 23.9222C21.5324 22.5827 23.616 20.4451 24.8652 19.1699C26.1099 17.8901 27.195 16.7662 27.2725 16.6699C27.464 16.4268 27.619 16.1103 27.7011 15.7937C27.8014 15.4038 27.8014 6.46805 27.7011 5.84879C27.4959 4.59191 26.9625 3.54145 26.0871 2.66071C25.198 1.77081 24.1585 1.2387 22.9138 1.03227C22.5628 0.97264 21.2862 0.963466 13.9549 0.968053C7.28464 0.97264 5.33327 0.986402 5.06428 1.03227ZM23.1418 2.85796C24.5141 3.28915 25.4761 4.27539 25.9093 5.69741C26.0096 6.03227 26.0096 6.03227 26.0278 10.0644C26.0369 12.8029 26.0232 14.1745 25.9913 14.335C25.8272 15.124 25.2163 15.8075 24.4457 16.0644C24.1631 16.1561 24.0308 16.1653 22.1388 16.1928C19.9594 16.2295 19.8682 16.2387 19.0886 16.5323C17.5202 17.1286 16.2299 18.4405 15.6828 20.0002C15.6281 20.1653 15.578 20.3029 15.5734 20.3121C15.5688 20.3167 15.3819 20.358 15.1585 20.3992C14.5384 20.5093 13.3895 20.4956 12.7011 20.3717C11.6342 20.1745 10.5308 19.7158 9.68282 19.1148C9.29984 18.8396 8.59315 18.1699 8.0734 17.5827C7.87735 17.3625 7.77704 17.2892 7.62203 17.2479C6.93814 17.069 6.32264 17.7616 6.59163 18.4084C6.67826 18.6194 7.23905 19.2937 7.64938 19.6791C8.36519 20.3625 9.09923 20.8671 10.002 21.3075C11.4336 22.0093 13.084 22.3258 14.6296 22.2066C14.9761 22.1791 15.2862 22.1561 15.3181 22.1561C15.3637 22.1561 15.3728 22.4405 15.3591 23.5919C15.3409 24.9084 15.3318 25.046 15.2406 25.3258C15.122 25.6928 14.8394 26.1286 14.584 26.3488C14.3378 26.5644 13.8454 26.8121 13.5536 26.8763C13.2345 26.9451 5.76185 26.9451 5.33783 26.8809C3.64178 26.6103 2.27856 25.2387 2.00956 23.5323C1.94573 23.1194 1.94573 6.51392 2.00956 6.10108C2.23753 4.64695 3.2588 3.42218 4.65394 2.92677C5.26488 2.70658 5.00957 2.71576 14.1372 2.72035L22.7315 2.72952L23.1418 2.85796Z" fill="white"/>
                <path d="M8.13271 8.73479C7.65855 8.89075 7.20262 9.29901 6.98833 9.76231C6.88347 9.99167 6.86523 10.0834 6.86523 10.4825C6.86523 10.9045 6.87891 10.9641 7.01113 11.2531C7.18894 11.6293 7.49441 11.9412 7.87283 12.1339C8.12359 12.2623 8.1783 12.2715 8.64335 12.2715C9.09472 12.2715 9.17222 12.2577 9.40931 12.1476C9.74669 11.9871 10.1388 11.5926 10.2984 11.2531C10.4078 11.0146 10.4215 10.9366 10.4215 10.4825C10.4215 10.0192 10.4123 9.95497 10.2938 9.71185C10.1114 9.34488 9.78317 9.01919 9.40931 8.84488C9.15399 8.72102 9.03545 8.6935 8.71174 8.68433C8.4701 8.67515 8.25125 8.6935 8.13271 8.73479Z" fill="white"/>
                <path d="M18.8567 8.7302C18.3415 8.90451 17.9357 9.25314 17.7077 9.71185C17.5892 9.95497 17.5801 10.0192 17.5801 10.4825C17.5801 10.9366 17.5938 11.0146 17.7032 11.2531C17.8628 11.5926 18.2548 11.9871 18.5922 12.1476C18.8293 12.2577 18.9068 12.2715 19.3582 12.2715C19.8232 12.2715 19.8779 12.2623 20.1287 12.1339C20.5071 11.9412 20.8126 11.6293 20.9904 11.2531C21.1226 10.9641 21.1363 10.9045 21.1363 10.4825C21.1363 10.0834 21.1181 9.99167 21.0132 9.75772C20.8445 9.39534 20.4798 9.02378 20.1196 8.84488C19.8688 8.72103 19.7685 8.69809 19.4311 8.68433C19.1941 8.67515 18.9661 8.6935 18.8567 8.7302Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="golive-comment-block" ref={FullcommentSec}>
          <a className="golive-comment-updown-button d-none" onClick={ClickHalfCom} ref={ButtonHalf}><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg></a>
          <a className="golive-comment-updown-button" onClick={ClickFullCom} ref={ButtonFull}><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline></svg></a>
          <div className="goliveuser-blk">
            <img src="assets/images/story-2.jpg"/>
            <div className="goliveuser-cont-blk">
              <h4>Paige Turner</h4>
              <p>Alamba, USA</p>
            </div>
          </div>

          <div className="golive-user-comment-blk d-none" ref={commentBlk}>
            <div className="gl-com-like-share-blk">
              <div className="gl-heartlist"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="#FF5B96" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="#FF5B96" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> <span>+75</span></div>
              <div className="comment-share-goliveblk">
                <span><b>4565</b> Comment</span>
                <span><b>985</b> Share</span>
              </div>
            </div>
            
            <div className="comment-section golive-comment-section">
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
                              <div className="comment-time">
                                  <h6>50 mins ago</h6>
                              </div>
                              <p>Oooo Very Cute and Sweet Dog, happy birthday
                                  Cuty.... &#128578;
                              </p>
                              <ul className="comment-option">
                                  <li><a href="#">like (5)</a></li>
                                  <li><a href="#">reply</a></li>
                              </ul>
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
                                  <div className="comment-time">
                                      <h6>50 mins ago</h6>
                                  </div>
                                  <p>Thank You So Much ❤❤</p>
                                  <ul className="comment-option">
                                      <li><a href="#">like</a></li>
                                      <li><a href="#">reply</a></li>
                                  </ul>
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
                                  <div className="comment-time">
                                      <h6>50 mins ago</h6>
                                  </div>
                                  <p>Thank You So Much ❤❤</p>
                                  <ul className="comment-option">
                                      <li><a href="#">like</a></li>
                                      <li><a href="#">reply</a></li>
                                  </ul>
                              </div>
                          </div>
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
                                  <div className="comment-time">
                                      <h6>50 mins ago</h6>
                                  </div>
                                  <p>Thank You So Much ❤❤</p>
                                  <ul className="comment-option">
                                      <li><a href="#">like</a></li>
                                      <li><a href="#">reply</a></li>
                                  </ul>
                              </div>
                          </div>
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
                              <div className="comment-time">
                                  <h6>50 mins ago</h6>
                              </div>
                              <p>It’s party time, Sufiya..... and happy birthday
                                  cuty 🎉🎊
                              </p>
                              <ul className="comment-option">
                                  <li><a href="#">like</a></li>
                                  <li><a href="#">reply</a></li>
                              </ul>
                          </div>
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
                              <div className="comment-time">
                                  <h6>50 mins ago</h6>
                              </div>
                              <p>It’s party time, Sufiya..... and happy birthday
                                  cuty 🎉🎊
                              </p>
                              <ul className="comment-option">
                                  <li><a href="#">like</a></li>
                                  <li><a href="#">reply</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>

          <div className="golive-commentinput-block">
            <input type="text" className="form-control" placeholder="Comment..."/>
            <div className="golive-com-buttons">
              <a className="glcom-emoji-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg></a>
              <a className="glcom-send-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a>
            </div>
          </div>
        </div>
      </div>

      <div className="modal custom-gl-model fade" id="videoClose" tabIndex="-1" role="dialog" aria-labelledby="videoCloseTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body custom-gl-body">
                    <p>Do you really want to end your live session?</p>
                    <div className="gl-model-buttons">
                      <a href="#" data-bs-dismiss="modal" aria-label="Close" className="btn btn-default">Cancel</a>
                      <a href="#" data-bs-dismiss="modal" className="btn btn-primary">Proceed</a>
                    </div>
                    <a href="#">Learn More...</a>
                </div>
            </div>
        </div>
      </div>
    </>
  );
} 
export default CreateGoLiveDetail 