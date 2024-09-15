import React,{Component, useState} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import MarketplaceMenu from './MarketplaceMenu';

export default function MpDetail() {  

    return (
      <>
        <Header></Header>
        <div className="page-body container-fluid profile-page">
          <LeftSidebar></LeftSidebar>
          <div className="page-center">
            <MarketplaceMenu></MarketplaceMenu>
            <div className="mppage-heading">
              <div className="row">
                <div className="col-md-6">
                  <div className="mp-head-blk">
                    <h3>Market Place</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid section-t-space px-0">
              <div className="mpdetails-block">
                <div className="row">
                    <div className="col-md-8">
                        <div className="post-panel mp-detail-post-block">
                            <div className="post-wrapper col-grid-box section-b-space">
                                <div className="mp-main-details-blk">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mp-details-img-blk">
                                                <img src="assets/images/mp-3.jpg"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mp-details-cont-blk">
                                                <h4>Glass Suitable For Drinking Water, Juice, Cocktail, Bourbon, Wine, Soda, Sharbat, Mocktail, Whisky</h4>
                                                <h5><span className="green">Home Decoration</span></h5>
                                                <h3>$75</h3>
                                                <div className="sellbuybtn onsell-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg> On Sell</div>
                                                <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street, Oswego, NY 13126, USA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-details">
                                    <div className="detail-box">
                                        <h3>Product Description</h3>
                                        <p>What are features and benefits? Think about what gets you excited about your product that makes it different from your competitors' products. It might be careful construction, ethically sourced materials, or all the bells and whistles you dreamed up over drinks one night. Those are features.</p>
                                        <p>Now, think about what those things do for your customer. Does careful construction mean that your product is safe for children? Do ethically sourced materials make the buyer feel good about purchasing your product? Do those bells and whistles make everyone who sees your customer with your product weep with envy? Those are benefits.</p>
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
                                                        <i className="iw-16 ih-16" data-feather="share"></i><span>985</span> share
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
                    <div className="col-md-4">
                        <div className="mp-releted-block">
                            <h3>Related Product</h3>
                            <div className="mp-releted-pro-blk">
                                <img src="assets/images/mp-3.jpg"/>
                                <div className="content-mp-block">
                                    <h4><NavLink to="/MpDetail">SAF Love Couple Valentine Love Couple</NavLink></h4>
                                    <h5><span className="green">Architect</span> <b>$3000</b></h5>
                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street Oswego NY 131, London, UK</p>
                                </div>
                            </div>
                            <div className="mp-releted-pro-blk">
                                <img src="assets/images/mp-3.jpg"/>
                                <div className="content-mp-block">
                                    <h4><NavLink to="/MpDetail">SAF Love Couple Valentine Love Couple</NavLink></h4>
                                    <h5><span className="green">Architect</span> <b>$3000</b></h5>
                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street Oswego NY 131, London, UK</p>
                                </div>
                            </div>
                            <div className="mp-releted-pro-blk">
                                <img src="assets/images/mp-3.jpg"/>
                                <div className="content-mp-block">
                                    <h4><NavLink to="/MpDetail">SAF Love Couple Valentine Love Couple</NavLink></h4>
                                    <h5><span className="green">Architect</span> <b>$3000</b></h5>
                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street Oswego NY 131, London, UK</p>
                                </div>
                            </div>
                            <div className="mp-releted-pro-blk">
                                <img src="assets/images/mp-3.jpg"/>
                                <div className="content-mp-block">
                                    <h4><NavLink to="/MpDetail">SAF Love Couple Valentine Love Couple</NavLink></h4>
                                    <h5><span className="green">Architect</span> <b>$3000</b></h5>
                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street Oswego NY 131, London, UK</p>
                                </div>
                            </div>
                            <div className="mp-releted-pro-blk">
                                <img src="assets/images/mp-3.jpg"/>
                                <div className="content-mp-block">
                                    <h4><NavLink to="/MpDetail">SAF Love Couple Valentine Love Couple</NavLink></h4>
                                    <h5><span className="green">Architect</span> <b>$3000</b></h5>
                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street Oswego NY 131, London, UK</p>
                                </div>
                            </div>
                            <div className="mp-releted-pro-blk">
                                <img src="assets/images/mp-3.jpg"/>
                                <div className="content-mp-block">
                                    <h4><NavLink to="/MpDetail">SAF Love Couple Valentine Love Couple</NavLink></h4>
                                    <h5><span className="green">Architect</span> <b>$3000</b></h5>
                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street Oswego NY 131, London, UK</p>
                                </div>
                            </div>
                            <div className="mp-releted-pro-blk">
                                <img src="assets/images/mp-3.jpg"/>
                                <div className="content-mp-block">
                                    <h4><NavLink to="/MpDetail">SAF Love Couple Valentine Love Couple</NavLink></h4>
                                    <h5><span className="green">Architect</span> <b>$3000</b></h5>
                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 813 Howard Street Oswego NY 131, London, UK</p>
                                </div>
                            </div>
                            <div className="seeall-btn">
                                <a href="#">See All <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg></a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <RightSidebar></RightSidebar>
        </div>
        {/* <Models></Models> */}
      </>
    );
} 