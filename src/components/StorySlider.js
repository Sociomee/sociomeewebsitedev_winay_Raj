import React,{Component} from 'react'; 
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

export default function StorySlider() {  
  var storySettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [ 
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 3 
        } 
      }, 
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 5 
        } 
      }
    ]
  };

  return (
    <>
    <div className="story-section ratio_115">
      <Slider {...storySettings} className="default-space">
          <div>
              <div className="story-box add-box">
                  <div>
                      <img src="assets/images/story-1.png" className="img-fluid bg-img"
                          alt=""/>
                      <div className="add-icon">
                          <div className="icon">
                              <img src="assets/images/plus.png" className="img-fluid"
                                  alt="plus"/>
                          </div>
                          <h6>add stories</h6>
                      </div>
                  </div>
              </div>
          </div>
          <div>
              <div className="story-box" data-bs-toggle="modal" data-bs-target="#storyModel">
                  <div className="live-block"><span></span> Live</div>
                  <div className="adaptive-overlay"></div>
                  <div className="story-bg">
                      <img src="assets/images/story-2.jpg" className="img-fluid bg-img"
                          data-adaptive-background='1' alt=""/>
                  </div>
                  <div className="story-content">
                      <h6>Petey Cruiser</h6>
                      <span>active now</span>
                  </div>
              </div>
          </div>
          <div>
              <div className="story-box" data-bs-toggle="modal" data-bs-target="#storyModel">
                  <div className="adaptive-overlay"></div>
                  <div className="story-bg">
                      <img src="assets/images/story-3.jpg" className="img-fluid bg-img"
                          data-adaptive-background='1' alt=""/>
                  </div>
                  <div className="story-content">
                      <h6>Paul Molive</h6>
                      <span>active now</span>
                  </div>
              </div>
          </div>
          <div>
              <div className="story-box" data-bs-toggle="modal" data-bs-target="#storyModel">
                  <div className="live-block"><span></span> Live</div>
                  <div className="adaptive-overlay"></div>
                  <div className="story-bg">
                      <img src="assets/images/story-4.jpg" className="img-fluid bg-img"
                          data-adaptive-background='1' alt=""/>
                  </div>
                  <div className="story-content">
                      <h6>Anna Sthesia</h6>
                      <span>active now</span>
                  </div>
              </div>
          </div>
          <div>
              <div className="story-box" data-bs-toggle="modal" data-bs-target="#storyModel">
                  <div className="adaptive-overlay"></div>
                  <div className="story-bg">
                      <img src="assets/images/story-2.jpg" className="img-fluid bg-img"
                          data-adaptive-background='1' alt=""/>
                  </div>
                  <div className="story-content">
                      <h6>Paige Turner</h6>
                      <span>active now</span>
                  </div>
              </div>
          </div>
          <div>
              <div className="story-box" data-bs-toggle="modal" data-bs-target="#storyModel">
                  <div className="adaptive-overlay"></div>
                  <div className="story-bg">
                      <img src="assets/images/story-3.jpg" className="img-fluid bg-img"
                          data-adaptive-background='1' alt=""/>
                  </div>
                  <div className="story-content">
                      <h6>Anna Mull</h6>
                      <span>active now</span>
                  </div>
              </div>
          </div>
          <div>
              <div className="story-box" data-bs-toggle="modal" data-bs-target="#storyModel">
                  <div className="adaptive-overlay"></div>
                  <div className="story-bg">
                      <img src="assets/images/story-4.jpg" className="img-fluid bg-img"
                          data-adaptive-background='1' alt=""/>
                  </div>
                  <div className="story-content">
                      <h6>josephin water</h6>
                      <span>active now</span>
                  </div>
              </div>
          </div>
          <div>
              <div className="story-box" data-bs-toggle="modal" data-bs-target="#storyModel">
                  <div className="adaptive-overlay"></div>
                  <div className="story-bg">
                      <img src="assets/images/story-2.jpg" className="img-fluid bg-img"
                          data-adaptive-background='1' alt=""/>
                  </div>
                  <div className="story-content">
                      <h6>josephin water</h6>
                      <span>active now</span>
                  </div>
              </div>
          </div>
          <div>
              <div className="story-box" data-bs-toggle="modal" data-bs-target="#storyModel">
                  <div className="adaptive-overlay"></div>
                  <div className="story-bg">
                      <img src="assets/images/story-3.jpg" className="img-fluid bg-img"
                          data-adaptive-background='1' alt=""/>
                  </div>
                  <div className="story-content">
                      <h6>Bob Frapples</h6>
                      <span>active now</span>
                  </div>
              </div>
          </div>
      </Slider>
    </div>
    </>
  );
} 
