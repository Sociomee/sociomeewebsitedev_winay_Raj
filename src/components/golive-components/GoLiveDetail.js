import React,{Component, useRef, useState } from 'react'; 
import { NavLink } from "react-router-dom";

function GoLiveDetail() {  
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
        <video id="video1" className="video" ref={videoRef}>
          <source src="assets/images/video/golive-video.mp4" type="video/mp4"/>
        </video>
        
        <div className="controlsContainer">
          <div className="controls">
            <div className="controlsIcon" onClick={revert}><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-24 ih-24"><polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon></svg></div>

            {playing ? (
              <div className="controlsIcon--small" onClick={() => videoHandler("pause")}><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-24 ih-24"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg></div>
            ) : (
              <div className="controlsIcon--small" onClick={() => videoHandler("play")}><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWdth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-24 ih-24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></div>
            )}

            <div className="controlsIcon" onClick={fastForward}><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-24 ih-24"><polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon></svg></div>
          </div>
        </div>
        <div className="timecontrols">
          <p className="controlsTime">
            {Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}<span> / </span> 
            {Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}
          </p>
          <div className="time_progressbarContainer">
            <div
              style={{ width: `${progress}%` }}
              className="time_progressBar"
            ></div>
          </div>
          <div className="userlikeshare-block">
            <div className="user-emozi-blk">
              👍 😀 😁 😍 😗 😜
            </div>
            <div className="fav-share-block">
              <div className="customfavshareblk">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="#fff" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> 357
              </div>
              <div className="customfavshareblk">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="#fff" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-20 ih-20"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 35
              </div>
            </div>
          </div>
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
                    <li><a href="#">Save Video</a></li>
                    <li><a href="#">Copy Link</a></li>
                    <li><a href="#">Report Video</a></li>
                    <li><a href="#">Not Interested</a></li>
                    <li><a href="#">Hide</a></li>
                </ul>
              </div>
            </div>

            <NavLink to="/GoLive" className="close-golive-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></NavLink>
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
    </>
  );
} 
export default GoLiveDetail 