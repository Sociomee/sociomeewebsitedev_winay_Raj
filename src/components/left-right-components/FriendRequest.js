import React,{Component} from 'react';
import { NavLink } from "react-router-dom";

export class FriendRequest extends Component {  

  render() {
    return (
      <>
        <div className="suggestion-box section-b-space">
          <div className="card-title">
              <h3 className="fr-head">Follow Requests <small>15 Request</small></h3>
              <div className="settings">
                  <div className="setting-btn">
                      <a href="#" className="d-flex">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-theme strokeWidth-3 iw-11 ih-11"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                      </a>
                  </div>
              </div>
          </div>
          <div className="suggestion-content ratio_115">
          <div className="list-content">
              <ul className="friend-request-block">
                  <li>
                      <div className="media">
                          <div className="img-part">
                              <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt=""/>
                          </div>
                          <div className="media-body">
                              <h4>chrimson agency</h4>
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
                                  </ul>
                                  <h6>+5 Common</h6>
                              </div>
                              <div className="friend-request-btn">
                                  <a href="#" className="fr-btn confirm-btn">Confirm</a>
                                  <a href="#" className="fr-btn reject-btn">Reject</a>
                              </div>
                          </div>
                      </div>
                      <div className="time-hours-blk">2 h</div>
                  </li>
                  <li>
                      <div className="media">
                          <div className="img-part">
                              <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                          </div>
                          <div className="media-body">
                              <h4>chrimson agency</h4>
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
                                  </ul>
                                  <h6>+5 Common</h6>
                              </div>
                              <div className="friend-request-btn">
                                  <a href="#" className="fr-btn confirm-btn">Confirm</a>
                                  <a href="#" className="fr-btn reject-btn">Reject</a>
                              </div>
                          </div>
                      </div>
                      <div className="time-hours-blk">2 h</div>
                  </li>
                  <li>
                      <div className="media">
                          <div className="img-part">
                              <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                          </div>
                          <div className="media-body">
                              <h4>chrimson agency</h4>
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
                                  </ul>
                                  <h6>+5 Common</h6>
                              </div>
                              <div className="friend-request-btn">
                                  <a href="#" className="fr-btn confirm-btn">Confirm</a>
                                  <a href="#" className="fr-btn reject-btn">Reject</a>
                              </div>
                          </div>
                      </div>
                      <div className="time-hours-blk">2 h</div>
                  </li>
              </ul>
          </div>
          </div>
        </div>
      </>
    );
  }
} 
export default FriendRequest 