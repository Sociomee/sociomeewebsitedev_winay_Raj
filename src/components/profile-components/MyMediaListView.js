import React,{Component} from 'react';
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ProfileMenu from './ProfileMenu';
import Models from '../Models';


export default function MyMediaListView() {  

    return (
      <>
        <Header></Header>
        <div className="page-body container-fluid profile-page">
          <LeftSidebar></LeftSidebar>
          <div className="page-center">
            <div className="profile-cover">
              <img src="assets/images/user-cover-bg.jpg" className="img-fluid bg-img" alt="cover"/>
              <div className="profile-box d-lg-block d-none">
                <div className="profile-content">
                  <a href="#" className="image-section">
                    <div className="profile-img">
                      <div>
                        <img src="assets/images/my-profile.jpg" className="img-fluid bg-img" alt="profile"/>
                      </div>
                      <span className="stats">
                        <img src="assets/images/verified-1.png" className="img-fluid" alt="verified"/>
                      </span>
                    </div>
                  </a>
                  <div className="profile-detail">
                    <a href="#"><h2>kelin jasen <span>❤</span></h2></a>
                    <h5>Student</h5>
                    <div className="description">
                      <p>Kelin-Jasen123<span>Lives in Milan, Italy</span></p>
                    </div>
                    <div className="counter-stats">
                      <ul id="counter">
                        <li>
                          <h3 className="counter-value" data-count="546">546</h3>
                          <h5>following</h5>
                        </li>
                        <li>
                          <h3 className="counter-value" data-count="26335">845</h3>
                          <h5>likes</h5>
                        </li>
                        <li>
                          <h3 className="counter-value" data-count="6845">965</h3>
                          <h5>followers</h5>
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-solid">Edit profile</a>
                  </div>
                </div>
              </div>
              <div className="setting-dropdown btn-group custom-dropdown arrow-none dropdown-sm">
                  <a className="btn-white btn-cover" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false">
                      edit cover
                  </a>
                  <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                      <ul>
                          <li>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#choosePhoto"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>choose photo</a>
                          </li>
                          <li className="choose-file">
                              <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>upload photo</a>
                              <input type="file"/>
                          </li>
                          <li>
                              <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>remove photo</a>
                          </li>
                      </ul>
                  </div>
              </div>
            </div>
            <div className="d-lg-none d-block">
              <div className="profile-box">
                <div className="profile-content">
                  <div className="image-section">
                    <div className="profile-img">
                      <div>
                        <img src="assets/images/my-profile.jpg" className="img-fluid bg-img" alt="profile"/>
                      </div>
                      <span className="stats">
                        <img src="assets/images/verified-1.png" className="img-fluid" alt="verified"/>
                      </span>
                    </div>
                  </div>
                  <div className="profile-detail">
                    <a href="#"><h2>kelin jasen <span>❤</span></h2></a>
                    <h5>Student</h5>
                    <div className="description">
                      <p>Kelin-Jasen123<span>Lives in Milan, Italy</span></p>
                    </div>
                    <div className="counter-stats">
                      <ul id="counter">
                        <li>
                          <h3 className="counter-value" data-count="546">546</h3>
                          <h5>following</h5>
                        </li>
                        <li>
                          <h3 className="counter-value" data-count="26335">845</h3>
                          <h5>likes</h5>
                        </li>
                        <li>
                          <h3 className="counter-value" data-count="6845">965</h3>
                          <h5>followers</h5>
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-solid">Edit profile</a>
                  </div>
                </div>
              </div>
            </div>

            <ProfileMenu></ProfileMenu>

            <div className="container-fluid section-t-space px-0">
                <div className="page-content">
                    <div className="content-center w-100">
                        <div className="gallery-page-section section-b-space">
                            <div className="card-title">
                                <h3>Media</h3>
                                <div className="right-setting">
                                    {/* <a href="#" className="btn btn-outline-grey"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"  className="iw-13 ih-13"><path d="M12.347 7.5006L13.9624 7.5006M12.347 7.5006C12.347 7.07217 12.1768 6.6613 11.8739 6.35835C11.5709 6.05541 11.1601 5.88522 10.7316 5.88522C10.3032 5.88522 9.89233 6.05541 9.58938 6.35835C9.28644 6.66129 9.11625 7.07217 9.11625 7.5006M12.347 7.5006C12.347 7.92903 12.1768 8.33991 11.8739 8.64285C11.5709 8.94579 11.1601 9.11599 10.7316 9.11599C10.3032 9.11599 9.89233 8.94579 9.58938 8.64285C9.28644 8.33991 9.11625 7.92903 9.11625 7.5006M9.11625 7.5006L1.03932 7.5006M2.65471 2.65445C2.65471 3.08287 2.8249 3.49375 3.12784 3.7967C3.43079 4.09964 3.84167 4.26983 4.27009 4.26983C4.69852 4.26983 5.1094 4.09964 5.41234 3.7967C5.71529 3.49375 5.88548 3.08287 5.88548 2.65445M2.65471 2.65445C2.65471 2.22602 2.8249 1.81514 3.12784 1.5122C3.43079 1.20925 3.84167 1.03906 4.27009 1.03906C4.69852 1.03906 5.1094 1.20925 5.41234 1.5122C5.71529 1.81514 5.88548 2.22602 5.88548 2.65445M2.65471 2.65445L1.03932 2.65445M5.88548 2.65445L13.9624 2.65445M2.65471 12.3468C2.65471 12.7752 2.8249 13.1861 3.12784 13.489C3.43079 13.7919 3.84167 13.9621 4.27009 13.9621C4.69852 13.9621 5.1094 13.7919 5.41234 13.489C5.71529 13.1861 5.88548 12.7752 5.88548 12.3468M2.65471 12.3468C2.65471 11.9183 2.8249 11.5074 3.12784 11.2045C3.43079 10.9016 3.84167 10.7314 4.27009 10.7314C4.69852 10.7314 5.1094 10.9016 5.41234 11.2045C5.71529 11.5074 5.88548 11.9183 5.88548 12.3468M2.65471 12.3468L1.03932 12.3468M5.88548 12.3468L13.9624 12.3468" stroke="#4B4B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Filter</a> */}
                                    <NavLink to="/MyMedia" className="btn btn-outline-grey ms-3"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> Grid view</NavLink>
                                    <a href="#" className="btn btn-outline-green ms-3">Add photo/video</a>
                                </div>
                            </div>
                            <div className="tab-section">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="profile-tab" data-bs-toggle="tab"
                                            href="#gallery-image" role="tab" aria-selected="false">Images (59)</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " id="gallery-video" data-bs-toggle="tab" href="#photo" role="tab"
                                            aria-selected="true">Videos (5)</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active Choose-photo-modal" id="gallery-image"
                                        role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="gallery-meadia-post">
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
                                                <div className="post-wrapper col-grid-box section-t-space">
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
                                            </div>
                                        </div>
                                        <ul className="pagination-block">
                                            <li><a className="prev"><img src="assets/images/prev.png"/></a></li>
                                            <li><a className="active">1</a></li>
                                            <li><a>2</a></li>
                                            <li><a>3</a></li>
                                            <li><a>4</a></li>
                                            <li><a className="next"><img src="assets/images/next.png"/></a></li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade Choose-photo-modal" id="photo" role="tabpanel" aria-labelledby="gallery-video">
                                        <div className="gallery-meadia-post">
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
// export default MyProfile