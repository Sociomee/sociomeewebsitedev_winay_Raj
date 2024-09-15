import React,{Component} from 'react';
import { NavLink } from "react-router-dom";

export class Gallery extends Component {  

  render() {
    return (
      <>
        <div className="gallery-section section-b-space">
          <div className="gallery-top">
              <div className="card-title">
                  <h3>gallery</h3>
                  <h5>156 photos</h5>
                  <div className="settings">
                      <div className="setting-btn">
                          <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                          </a>
                      </div>
                  </div>
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
                                      <img src="assets/images/gallery-1.jpg" alt=""
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
                                      <img src="assets/images/gallery-2.jpg" alt=""
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
                                      <img src="assets/images/gallery-3.jpg" alt=""
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
                                          <img src="assets/images/gallery-4.jpg" alt=""
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
                                          <img src="assets/images/gallery-5.jpg" alt=""
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
                                      <img src="assets/images/gallery-6.jpg" alt=""
                                          className="img-fluid bg-img"/>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </>
    );
  }
} 
export default Gallery 