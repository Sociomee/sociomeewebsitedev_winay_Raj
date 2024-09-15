import React,{Component, useState} from 'react'; 
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ProfileMenu from './ProfileMenu';

let names = [
    "Sr. PHP developer",
    "Dot Net developer",
    "Doctor",
    "Teacher",
    "Professor",
    "Engineer",
    "Worker",
    "Frontend Developer",
    "IAS",
    "PCS",
    "Software Engineer",
    "Developer",
]

let hobbies = [
    "Reading",
    "Walking",
    "Running",
    "Joking",
    "Travel",
    "Movies",
    "Fly",
    "Painting",
    "Cycling",
    "Gaming",
    "Hobbie",
    "Gardening",
]

let interestes = [
    "Photography",
    "Videography",
    "Watching",
    "Video Making",
    "World Tour",
    "New Movies",
    "Reading Books",
    "Travelling ",
    "Song",
    "Games",
    "Technology",
]

export default function MyProfile() {  
    var sportSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [ 
          { 
            breakpoint: 768, 
            settings: { 
              slidesToShow: 2 
            } 
          }, 
          { 
            breakpoint: 1024, 
            settings: { 
              slidesToShow: 3 
            } 
          }
        ]
    };
    var movieSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [ 
          { 
            breakpoint: 768, 
            settings: { 
              slidesToShow: 2 
            } 
          }, 
          { 
            breakpoint: 1024, 
            settings: { 
              slidesToShow: 3 
            } 
          }
        ]
    };
    var musicSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [ 
          { 
            breakpoint: 768, 
            settings: { 
              slidesToShow: 2 
            } 
          }, 
          { 
            breakpoint: 1024, 
            settings: { 
              slidesToShow: 3 
            } 
          }
        ]
    };
    var bookSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [ 
          { 
            breakpoint: 768, 
            settings: { 
              slidesToShow: 2 
            } 
          }, 
          { 
            breakpoint: 1024, 
            settings: { 
              slidesToShow: 3 
            } 
          }
        ]
    };
    var groupSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [ 
          { 
            breakpoint: 768, 
            settings: { 
              slidesToShow: 2 
            } 
          }, 
          { 
            breakpoint: 1024, 
            settings: { 
              slidesToShow: 3 
            } 
          }
        ]
    };
    var bizSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [ 
          { 
            breakpoint: 768, 
            settings: { 
              slidesToShow: 2 
            } 
          }, 
          { 
            breakpoint: 1024, 
            settings: { 
              slidesToShow: 3 
            } 
          }
        ]
    };

    const [searchValue, setSearchValue] = useState("")

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
                        <img src="assets/images/profile-icon.png" className="img-fluid" alt="verified"/>
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
                <div className="row">
                    <div className="content-left col-4 res-full-width order-1">
                        <div className="profile-about">
                            <div className="card-main-title">
                                <h3>about</h3>
                            </div>
                            <div className="card-title-cont-block">
                                <div className="card-title">
                                    <h3>Profession</h3>
                                    <div className="settings">
                                        <div className="setting-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#professionModel">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-content">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Sr. PHP Developer</h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-title-cont-block">
                                <div className="card-title">
                                    <h3>Education</h3>
                                    <div className="settings">
                                        <div className="setting-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#educationModel">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-content">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" stroke="#81C14B" fill="none" className="iw-18 ih-18"><path d="M5.66667 14.6668V8.41683L9 6.56516M9 9.66683L16.5 5.50016L9 1.3335L1.5 5.50016L9 9.66683ZM9 9.66683L14.1333 6.81516C14.8088 8.53024 15.0005 10.3978 14.6875 12.2143C12.5738 12.4195 10.581 13.2948 9 14.7127C7.41921 13.295 5.42674 12.4197 3.31333 12.2143C3.00017 10.3978 3.19186 8.53018 3.8675 6.81516L9 9.66683Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Studied at Symbiosis University</h5>
                                                <h6>Batch 2010 to 2014<br/>Gurgaon, Delhi NCR<br/><small>Gong.io enables revenue teams to realize their fullest potential by unveiling customer reality. </small></h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-title-cont-block">
                                <div className="card-title">
                                    <h3>Basic info</h3>
                                    <div className="settings">
                                        <div className="setting-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#basicModel">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-content">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Name</h5>
                                                <h6>Fadishwar Nath Chakradhar</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none" className="iw-18 ih-18"><path d="M8 12H6.5V10.9047C9.05937 10.4344 11 8.19687 11 5.5C11 2.4625 8.5375 0 5.5 0C2.4625 0 0 2.4625 0 5.5C0 8.19563 1.94062 10.4344 4.5 10.8781V11.9734H3C2.72388 11.9734 2.5 12.1972 2.5 12.4734V13.4734C2.5 13.7496 2.72388 13.9734 3 13.9734H4.5V15.4734C4.5 15.7496 4.72388 15.9734 5 15.9734H6C6.27619 15.9734 6.5 15.7496 6.5 15.4734V13.9734H8C8.27619 13.9734 8.5 13.7496 8.5 13.4734V12.4734C8.5 12.225 8.275 12 8 12ZM5.5 8.5C3.84594 8.5 2.5 7.15406 2.5 5.5C2.5 3.84562 3.84594 2.5 5.5 2.5C7.15438 2.5 8.5 3.84562 8.5 5.5C8.5 7.15312 7.15312 8.5 5.5 8.5ZM19.5 0H15.9875C15.3194 0 14.9847 0.807813 15.4572 1.28031L16.3809 2.20406L15.6138 2.97125C14.6772 2.32562 13.5884 2.00094 12.4969 2.00094C12.0225 2.00094 11.5462 2.07047 11.0847 2.19256C11.5081 2.90506 11.7978 3.70381 11.9228 4.55725C12.1131 4.52025 12.3063 4.50147 12.4994 4.50147C13.2675 4.50147 14.0359 4.79388 14.6206 5.37866C15.7903 6.54834 15.7903 8.45147 14.6206 9.62241C14.0359 10.2071 13.2675 10.4996 12.4994 10.4996C11.7634 10.4996 11.0319 10.2236 10.4572 9.68678C9.95969 10.2755 9.36563 10.7837 8.68375 11.1665C9.04156 11.3508 9.31406 11.6758 9.43281 12.0671C10.3594 12.6875 11.4281 13 12.5 13C13.9075 13 15.315 12.4631 16.3906 11.3891C18.2966 9.48313 18.5072 6.52656 17.0303 4.38594L17.7975 3.61875L18.7213 4.5425C18.874 4.69528 19.0619 4.76369 19.2463 4.76369C19.6313 4.7625 20 4.4625 20 4.0125V0.5C20 0.223875 19.775 0 19.5 0Z" fill="#81C14B" strokeWidth="0.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            </div>
                                            <div className="details">
                                                <h5>gender</h5>
                                                <h6>men</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="iw-18 ih-18"><path d="M16.5 11.955C16.0642 11.955 15.6283 12.0808 15.25 12.3333C14.8798 12.5801 14.4449 12.7118 14 12.7118C13.5551 12.7118 13.1202 12.5801 12.75 12.3333C12.3798 12.0865 11.9449 11.9548 11.5 11.9548C11.0551 11.9548 10.6202 12.0865 10.25 12.3333C9.87983 12.5801 9.4449 12.7118 9 12.7118C8.5551 12.7118 8.12017 12.5801 7.75 12.3333C7.37983 12.0865 6.9449 11.9548 6.5 11.9548C6.0551 11.9548 5.62017 12.0865 5.25 12.3333C4.87983 12.5801 4.4449 12.7118 4 12.7118C3.5551 12.7118 3.12017 12.5801 2.75 12.3333C2.37988 12.0865 1.9449 11.9548 1.5 11.955H16.5ZM6.5 4V5.66667V4ZM9 4V5.66667V4ZM11.5 4V5.66667V4ZM6.5 1.5H6.50833H6.5ZM9 1.5H9.00833H9ZM11.5 1.5H11.5083H11.5ZM16.5 16.5V10.6667C16.5 10.2246 16.3244 9.80072 16.0118 9.48816C15.6993 9.17559 15.2754 9 14.8333 9H3.16667C2.72464 9 2.30072 9.17559 1.98816 9.48816C1.67559 9.80072 1.5 10.2246 1.5 10.6667V16.5H16.5ZM14 9V7.33333C14 6.89131 13.8244 6.46738 13.5118 6.15482C13.1993 5.84226 12.7754 5.66667 12.3333 5.66667H5.66667C5.22464 5.66667 4.80072 5.84226 4.48816 6.15482C4.17559 6.46738 4 6.89131 4 7.33333V9H14Z" stroke="#81C14B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Birthday</h5>
                                                <h6>27th Aug, 1994</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="iw-18 ih-18"><path d="M9.62583 3.16667C8.81917 7.975 5.725 12.0083 1.5 14.1075M1.5 3.16667H11.5H1.5ZM6.5 1.5V3.16667V1.5ZM7.37333 11.0833C6.09009 9.75488 5.0629 8.2011 4.34333 6.5L7.37333 11.0833ZM9.41667 14H15.25H9.41667ZM8.16667 16.5L12.3333 8.16667L16.5 16.5H8.16667Z" stroke="#81C14B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Language</h5>
                                                <h6>English, Hindi, Gujrati</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Relationship</h5>
                                                <h6>single</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Current Residence</h5>
                                                <h6>Gurgaon, Delhi NCR, INDIA</h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-title-cont-block">
                                <div className="card-title">
                                    <h3>Bio</h3>
                                    <div className="settings">
                                        <div className="setting-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#bioModel">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-content">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                            </div>
                                            <div className="details">
                                                <h6>Gong.io enables revenue teams to realize their fullest potential by unveiling customer reality.  The patented Gong Revenue Intelligence Platform captures and understands every customer interaction then delivers insights at scale, empowering revenue teams to make decisions based on data instead of opinions. </h6>
                                                <p>Joined on 16 Feb 2022</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-title-cont-block">
                                <div className="card-title">
                                    <h3>Contact Detail</h3>
                                    <div className="settings">
                                        <div className="setting-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#contactInfoModel">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-content">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Mobile Number</h5>
                                                <h6>9876543210<br/>9876543210</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                            </div>
                                            <div className="details">
                                                <h5>Email Address</h5>
                                                <h6>email@gmail.com<br/>info@Sociomee.co.uk</h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-center col-xl-8">
                        <div className="about-profile section-b-space">
                            <div className="about-profile-box-blk">
                                <div className="card-title">
                                    <h3>Hobbies</h3>
                                    <div className="settings">
                                        <div className="setting-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#hobbiesModel">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-block-box">
                                    <ul className="aboutlist-blk">
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> Reading</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg> Travel</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg> Movies</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg> Gaming</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Fly</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Painting</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Cycling</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Gaming</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Hobbie</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Gardening</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="about-profile-box-blk">
                                <div className="card-title">
                                    <h3>My Interestes</h3>
                                    <div className="settings">
                                        <div className="setting-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#interestesModel">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-block-box">
                                    <ul className="aboutlist-blk interest-list-blk">
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> Photography</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg> Book</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg> Reading</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg> Movies</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Travelling</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Writing</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Song</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Gaming</li>
                                        <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Technology</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="about-profile-box-blk">
                                <div className="card-title">
                                    <h3>Sports</h3>
                                    <div className="settings">
                                        <div className="setting-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#sportsModel">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-block-box">
                                    <Slider {...sportSettings} className="default-space">
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/sport-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Footboll</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/sport-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Footboll</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/sport-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Footboll</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/sport-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Footboll</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/sport-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Footboll</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/sport-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Footboll</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="about-profile-box-blk">
                                <div className="card-title">
                                    <h3>Movies</h3>
                                    <div className="settings">
                                        <div className="setting-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#editProfile">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-block-box">
                                    <Slider {...movieSettings} className="default-space">
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/movie-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Singham</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/movie-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Singham</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/movie-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Singham</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/movie-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Singham</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/movie-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Singham</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/movie-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Singham</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="about-profile-box-blk">
                                <div className="card-title">
                                    <h3>Music</h3>
                                    <div className="settings">
                                        <div className="setting-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#editProfile">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-block-box">
                                    <Slider {...musicSettings} className="default-space">
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/music-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>A. R. Rahman</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/music-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>A. R. Rahman</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/music-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>A. R. Rahman</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/music-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>A. R. Rahman</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/music-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>A. R. Rahman</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/music-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>A. R. Rahman</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="about-profile-box-blk">
                                <div className="card-title">
                                    <h3>Book</h3>
                                    <div className="settings">
                                        <div className="setting-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#editProfile">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-block-box">
                                    <Slider {...bookSettings} className="default-space">
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/book-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Wings of Fire</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/book-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Wings of Fire</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/book-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Wings of Fire</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/book-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Wings of Fire</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/book-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Wings of Fire</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/book-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Wings of Fire</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="about-profile-box-blk">
                                <div className="card-title">
                                    <h3>Group</h3>
                                    <div className="settings">
                                        <div className="setting-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#editProfile">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-block-box">
                                    <Slider {...groupSettings} className="default-space">
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/group-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>College Group</h6>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/group-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>College Group</h6>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/group-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>College Group</h6>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/group-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>College Group</h6>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/group-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>College Group</h6>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/group-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>College Group</h6>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="about-profile-box-blk">
                                <div className="card-title">
                                    <h3>Biz Page</h3>
                                    <div className="settings">
                                        <div className="setting-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#editProfile">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-block-box">
                                    <Slider {...bizSettings} className="default-space">
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/bizpage-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Havells</h6>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/bizpage-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Havells</h6>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/bizpage-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Havells</h6>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/bizpage-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Havells</h6>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/bizpage-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Havells</h6>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="profile-slide-box">
                                                <div className="adaptive-overlay"></div>
                                                <div className="story-bg">
                                                    <img src="assets/images/bizpage-1.jpg" className="img-fluid bg-img"/>
                                                </div>
                                                <div className="story-content">
                                                    <h6>Havells</h6>
                                                    <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-11 ih-11"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 150</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <RightSidebar></RightSidebar>
        </div>

        {/* Models */}

        <div className="modal fade" id="professionModel" tabIndex="-1" role="dialog" aria-labelledby="professionModelTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Add Profession</h5>
                    <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                </div>
                <div className="modal-body">
                    <div className="searchfilter-blk">
                        <div className="input-search-blk">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input type="text" className="form-control" name="search" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
                        </div>
                        <ul className="searchfiler-list">
                            {names
                            .filter(name => name.match(new RegExp(searchValue, "i")))
                            .map(name => {
                                return <li key={name}><div><input class="radio_animated" type="radio" name="gender" id={name}
                                value={name}/><label htmlFor={name}>{name}</label></div></li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-solid">Save</button>
                </div>
                </div>
            </div>  
        </div>

        <div className="modal fade" id="educationModel" tabIndex="-1" role="dialog" aria-labelledby="educationModelTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Add Education</h5>
                    <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                </div>
                <div className="modal-body">
                    <div className="ed-model-block">
                        <form className="theme-form">
                            <div className="form-group">
                                <label>Institution name</label>
                                <input type="text" className="form-control" placeholder="Institution name"/>
                            </div>
                            <div className="form-group">
                                <label>Batch Year</label>
                                <input type="text" className="form-control" placeholder="Eg. 2010 to 2014"/>
                            </div>
                            <div className="form-group">
                                <label>University Address</label>
                                <input type="text" className="form-control" placeholder="University Address"/>
                            </div>
                            <div className="form-group">
                                <label>Comments</label>
                                <textarea className="form-control" placeholder="Comments"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-solid">Save</button>
                </div>
                </div>
            </div>  
        </div>

        <div className="modal fade" id="basicModel" tabIndex="-1" role="dialog" aria-labelledby="basicModelTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Basic Info</h5>
                    <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                </div>
                <div className="modal-body">
                    <div className="ed-model-block">
                        <form className="theme-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <label>Gender</label>
                                <select id="inputState" className="form-control">
                                    <option>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Birthday</label>
                                <input type="text" className="form-control" placeholder="Birthday"/>
                            </div>
                            <div className="form-group">
                                <label>Language</label>
                                <select id="inputState" className="form-control">
                                    <option>Select Language</option>
                                    <option>English</option>
                                    <option>Hindi</option>
                                    <option>Dutch</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Relationship</label>
                                <select id="inputState" className="form-control">
                                    <option>Select Relationship</option>
                                    <option>Single</option>
                                    <option>In Relationship</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Current Residence</label>
                                <input type="text" className="form-control" placeholder="Current Residence"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-solid">Save</button>
                </div>
                </div>
            </div>  
        </div>

        <div className="modal fade" id="bioModel" tabIndex="-1" role="dialog" aria-labelledby="bioModelTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Bio</h5>
                    <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                </div>
                <div className="modal-body">
                    <form className="theme-form">
                        <div className="form-group">
                            <label>Bio</label>
                            <textarea className="form-control" placeholder="Bio"></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-solid">Save</button>
                </div>
                </div>
            </div>  
        </div>

        <div className="modal fade" id="contactInfoModel" tabIndex="-1" role="dialog" aria-labelledby="contactInfoModelTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Contact Info</h5>
                    <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                </div>
                <div className="modal-body">
                    <div className="ed-model-block">
                        <form className="theme-form">
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input type="text" className="form-control" placeholder="Mobile Number"/>
                            </div>
                            <div className="form-group">
                                <label>Secondary Number</label>
                                <input type="text" className="form-control" placeholder="Secondary Number"/>
                            </div>
                            <div className="form-group">
                                <label>Email Id</label>
                                <input type="text" className="form-control" placeholder="Email Id"/>
                            </div>
                            <div className="form-group">
                                <label>Secondary Email Id</label>
                                <input type="text" className="form-control" placeholder="Secondary Email Id"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-solid">Save</button>
                </div>
                </div>
            </div>  
        </div>

        <div className="modal fade" id="hobbiesModel" tabIndex="-1" role="dialog" aria-labelledby="hobbiesModelTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Hobbies</h5>
                    <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                </div>
                <div className="modal-body">
                    <div className="searchfilter-blk">
                        <div className="input-search-blk">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input type="text" className="form-control" name="search" placeholder="Find Hobbies..." value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
                        </div>
                        <ul className="searchfiler-list">
                            {hobbies
                            .filter(hobbies => hobbies.match(new RegExp(searchValue, "i")))
                            .map(hobbies => {
                                return <li key={hobbies}><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id={hobbies}/><label className="form-check-label" htmlFor={hobbies}>{hobbies}</label></div></li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-solid">Save</button>
                </div>
                </div>
            </div>  
        </div>

        <div className="modal fade" id="interestesModel" tabIndex="-1" role="dialog" aria-labelledby="interestesModelTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Interestes</h5>
                    <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                </div>
                <div className="modal-body">
                    <div className="searchfilter-blk">
                        <div className="input-search-blk">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input type="text" className="form-control" name="search" placeholder="Find Interest..." value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
                        </div>
                        <ul className="searchfiler-list">
                            {interestes
                            .filter(interestes => interestes.match(new RegExp(searchValue, "i")))
                            .map(interestes => {
                                return <li key={interestes}><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id={interestes}/><label className="form-check-label" htmlFor={interestes}>{interestes}</label></div></li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-solid">Save</button>
                </div>
                </div>
            </div>  
        </div>

        <div className="modal fade" id="sportsModel" tabIndex="-1" role="dialog" aria-labelledby="sportsModelTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Sports</h5>
                    <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                </div>
                <div className="modal-body">
                    <div className="searchfilter-blk">
                        <div className="input-search-blk">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input type="text" className="form-control" name="search" placeholder="Find Sports..."/>
                        </div>
                        <ul className="sportfiler-list">
                            <li>
                                <div className="form-check checkbox_animated">
                                    <input type="checkbox" className="form-check-input" id="Mughal-e-Aazam"/>
                                    <label className="form-check-label" htmlFor="Mughal-e-Aazam">
                                        <div className="sport-blk"><img src="assets/images/sport-1.jpg"/> Mughal-e-Aazam</div>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check checkbox_animated">
                                    <input type="checkbox" className="form-check-input" id="Shole"/>
                                    <label className="form-check-label" htmlFor="Shole">
                                        <div className="sport-blk"><img src="assets/images/sport-1.jpg"/> Shole</div>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check checkbox_animated">
                                    <input type="checkbox" className="form-check-input" id="PK"/>
                                    <label className="form-check-label" htmlFor="PK">
                                        <div className="sport-blk"><img src="assets/images/sport-1.jpg"/> PK</div>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check checkbox_animated">
                                    <input type="checkbox" className="form-check-input" id="Shaun of the Dead"/>
                                    <label className="form-check-label" htmlFor="Shaun of the Dead">
                                        <div className="sport-blk"><img src="assets/images/sport-1.jpg"/> Shaun of the Dead</div>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check checkbox_animated">
                                    <input type="checkbox" className="form-check-input" id="Raees"/>
                                    <label className="form-check-label" htmlFor="Raees">
                                        <div className="sport-blk"><img src="assets/images/sport-1.jpg"/> Raees</div>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check checkbox_animated">
                                    <input type="checkbox" className="form-check-input" id="Dil Wale Dulhaniya le jaye ge"/>
                                    <label className="form-check-label" htmlFor="Dil Wale Dulhaniya le jaye ge">
                                        <div className="sport-blk"><img src="assets/images/sport-1.jpg"/> Dil Wale Dulhaniya le jaye ge</div>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check checkbox_animated">
                                    <input type="checkbox" className="form-check-input" id="Don"/>
                                    <label className="form-check-label" htmlFor="Don">
                                        <div className="sport-blk"><img src="assets/images/sport-1.jpg"/> Don</div>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-solid">Save</button>
                </div>
                </div>
            </div>  
        </div>
      </>
    );
} 
// export default MyProfile