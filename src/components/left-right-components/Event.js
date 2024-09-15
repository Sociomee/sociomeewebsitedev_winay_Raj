import React,{Component} from 'react';
import { NavLink } from "react-router-dom";

export class Event extends Component {  

  render() {
    return (
      <>
        <div className="event-box section-b-space ratio2_3">
          <div className="image-section">
              <img src="assets/images/event-1.jpg" className="img-fluid bg-img"
                  alt="event"/>
              <div className="card-title">
                  <h3>event</h3>
                  <div className="settings">
                      <div className="setting-btn">
                          <a href="#" className="d-flex">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="play-btn" data-bs-toggle="modal" data-bs-target="#videoPlayer">
                  <img src="assets/images/play.png" className="img-fluid"
                      alt="play"/>
              </div>
          </div>
          <div className="event-content">
              <h3>christmas 2021</h3>
              <h6>26 january 2021</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry <span>15256 People Going</span></p>
              <div className="bottom-part">
                  <a href="#" className="event-btn">going / not going</a>
              </div>
              <a href="#" className="share-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark strokeWidth-3 iw-14 ih-14"><polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path></svg>
              </a>
          </div>
        </div>
      </>
    );
  }
} 
export default Event 