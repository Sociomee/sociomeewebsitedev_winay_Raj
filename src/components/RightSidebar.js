import React,{Component, useRef} from 'react'; 
import { NavLink } from "react-router-dom";

export default function RightSidebar() {  
    //   Side Search 
    const searchRef = useRef(null);
    const onsearchClick = (e) => {
    searchRef.current.classList.add("open-full");
    };
    const onsearchCloseClick = (e) => {
    searchRef.current.classList.remove("open-full");
    };

  return (
    <>
    <div className="conversation-panel xl-light">
        <div className="panel-header">
            <h2>friends</h2>
            <h5>start new conversation</h5>
            <div className="setting">
                <div className="setting-btn setting-dropdown">
                    <div className="btn-group custom-dropdown dropdown-sm">
                        <a href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-theme strokeWidth-3 icon iw-11 ih-11"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                            <ul>
                                <li>
                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>see
                                        all</a>
                                </li>
                                <li>
                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>find
                                        friends</a>
                                </li>
                                <li>
                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>settings</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="search-bar">
            <div className="lg-search">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-theme icon iw-16"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" className="form-control" placeholder="find friends..."/>
            </div>
            <div className="xs-search" ref={searchRef}>
                <div className="icon-search" onClick={onsearchClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark iw-16"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <div className="lg-search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark icon iw-16"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" className="form-control" placeholder="find friends..."/>
                    <div className="icon-close" onClick={onsearchCloseClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark iw-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>
                </div>
            </div>
        </div>
        <div className="friend-section">
            <div className="header-section">
                <a data-bs-toggle="collapse" href="#accordion" aria-expanded="true" className="">close friends
                    <div className="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-theme iw-14 ih-14"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </a>
            </div>
            <div id="accordion" className="friend-list collapse show">
                <ul>
                    <li className="friend-box user1">
                        <div className="media">
                            <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="bottom"
                                data-name="paige turner" data-img="assets/images/story-2.jpg">
                                <img src="assets/images/story-2.jpg" className="img-fluid bg-img"
                                    alt="user"/>
                                <span className="available-stats"></span>
                            </a>
                            <div className="media-body">
                                <h5 className="user-name">Paige Turner</h5>
                                <h6>alabma, USA</h6>
                            </div>
                        </div>
                    </li>
                    <li className="friend-box user2">
                        <div className="media">
                            <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="bottom"
                                data-name="bob frapples" data-img="assets/images/story-3.jpg">
                                <img src="assets/images/story-3.jpg" className="img-fluid bg-img"
                                    alt="user"/>
                                <span className="available-stats online"></span>
                            </a>
                            <div className="media-body">
                                <h5 className="user-name">Bob Frapples</h5>
                                <h6>alabma, USA</h6>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="friend-section">
            <div className="header-section">
                <a data-bs-toggle="collapse" href="#accordion1" role="button" aria-expanded="true" className="">recent
                    chats
                    <div className="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-theme iw-14 ih-14"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </a>
            </div>
            <div id="accordion1" className="friend-list collapse show">
                <ul>
                    <li className="friend-box user3">
                        <div className="media">
                            <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                data-name="josephin water" data-img="assets/images/story-4.jpg">
                                <img src="assets/images/story-4.jpg" className="img-fluid bg-img"
                                    alt="user"/>
                                <span className="available-stats"></span>
                            </a>
                            <div className="media-body">
                                <h5 className="user-name">Josephin water</h5>
                                <h6>alabma, USA</h6>
                            </div>
                        </div>
                    </li>
                    <li className="friend-box user4">
                        <div className="media">
                            <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                data-name="petey Cruiser" data-img="assets/images/story-2.jpg">
                                <img src="assets/images/story-2.jpg" className="img-fluid bg-img"
                                    alt="user"/>
                                <span className="available-stats offline"></span>
                            </a>
                            <div className="media-body">
                                <h5 className="user-name">Petey Cruiser</h5>
                                <h6>alabma, USA</h6>
                            </div>
                        </div>
                    </li>
                    <li className="friend-box user5">
                        <div className="media">
                            <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                data-name="anna Sthesia" data-img="assets/images/story-3.jpg">
                                <img src="assets/images/story-3.jpg" className="img-fluid bg-img"
                                    alt="user"/>
                                <span className="available-stats online"></span>
                            </a>
                            <div className="media-body">
                                <h5 className="user-name">Anna Sthesia</h5>
                                <h6>alabma, USA</h6>
                            </div>
                        </div>
                    </li>
                    <li className="friend-box user6">
                        <div className="media">
                            <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                data-name="paul molive" data-img="assets/images/story-4.jpg">
                                <img src="assets/images/story-4.jpg" className="img-fluid bg-img"
                                    alt="user"/>
                                <span className="available-stats"></span>
                            </a>
                            <div className="media-body">
                                <h5 className="user-name">Paul Molive</h5>
                                <h6>alabma, USA</h6>
                            </div>
                        </div>
                    </li>
                    <li className="friend-box user7">
                        <div className="media">
                            <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                data-name="anna mull" data-img="assets/images/story-2.jpg">
                                <img src="assets/images/story-2.jpg" className="img-fluid bg-img"
                                    alt="user"/>
                                <span className="available-stats away"></span>
                            </a>
                            <div className="media-body">
                                <h5 className="user-name">Anna Mull</h5>
                                <h6>alabma, USA</h6>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  );
} 