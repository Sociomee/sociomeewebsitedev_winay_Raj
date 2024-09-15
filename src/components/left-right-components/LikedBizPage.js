import React,{Component} from 'react';
import { NavLink } from "react-router-dom";

export class LikedBizPage extends Component {  

  render() {
    return (
      <>
        <div className="page-list section-b-space">
          <div className="card-title">
              <h3>Liked Biz Page</h3>
              <div className="settings">
                  <div className="setting-btn">
                      <a href="#" className="d-flex">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                      </a>
                  </div>
              </div>
          </div>
          <div className="list-content">
              <ul>
                  <li>
                      <div className="media">
                          <div className="img-part">
                              <img src="assets/images/pages-logo1.jpg"
                                  className="img-fluid bg-img" alt=""/>
                          </div>
                          <div className="media-body">
                              <h4>chrimson agency</h4>
                              <h6>clothing store
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-color iw-13 ih-13"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>15k</span>
                              </h6>
                          </div>
                      </div>
                      <div className="favourite-btn active">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark iw-14 ih-14"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      </div>
                  </li>
                  <li>
                      <div className="media">
                          <div className="img-part">
                              <img src="assets/images/pages-logo2.jpg"
                                  className="img-fluid bg-img" alt=""/>
                          </div>
                          <div className="media-body">
                              <h4>Digital Pixel</h4>
                              <h6>software company
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-color iw-13 ih-13"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>158k</span>
                              </h6>
                          </div>
                      </div>
                      <div className="favourite-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark iw-14 ih-14"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      </div>
                  </li>
                  <li>
                      <div className="media">
                          <div className="img-part">
                              <img src="assets/images/pages-logo3.jpg"
                                  className="img-fluid bg-img" alt=""/>
                          </div>
                          <div className="media-body">
                              <h4>the angle bar</h4>
                              <h6>disco bar
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-color iw-13 ih-13"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>8k</span>
                              </h6>
                          </div>
                      </div>
                      <div className="favourite-btn active">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark iw-14 ih-14"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      </div>
                  </li>
                  <li>
                      <div className="media">
                          <div className="img-part">
                              <img src="assets/images/pages-logo4.jpg"
                                  className="img-fluid bg-img" alt=""/>
                          </div>
                          <div className="media-body">
                              <h4>fivestar food</h4>
                              <h6>restaurant
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-color iw-13 ih-13"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>186k</span>
                              </h6>
                          </div>
                      </div>
                      <div className="favourite-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark iw-14 ih-14"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      </div>
                  </li>
                  <li>
                      <div className="media">
                          <div className="img-part">
                              <img src="assets/images/pages-logo5.jpg"
                                  className="img-fluid bg-img" alt=""/>
                          </div>
                          <div className="media-body">
                              <h4>royal watch</h4>
                              <h6>watch shop
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-color iw-13 ih-13"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>65k</span>
                              </h6>
                          </div>
                      </div>
                      <div className="favourite-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark iw-14 ih-14"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      </div>
                  </li>
              </ul>
          </div>
        </div>
      </>
    );
  }
} 
export default LikedBizPage 