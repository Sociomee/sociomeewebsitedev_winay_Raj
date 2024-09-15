import React,{Component, useState} from 'react'; 
import { NavLink } from "react-router-dom";

export default function MarketplaceMenu() { 
    
    return (
      <>
        <div className="golive-menu">
            <div className="row align-items-center">
                <div className="col-md-7">
                    <h3>Golive</h3>
                </div>
                <div className="col-md-5">
                    <ul className="mp-right-btns">
                        <li>
                        <div className="search-box-mp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iw-16 icon-light"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input type="text" className="form-control search-type" placeholder="Search..." />
                        </div>
                        </li>
                        <li>
                            <div className="golive-filter">
                                <a href="#" className="dropbtn-filter" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="filter-icon iw-16 ih-16"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg> All (143) <i class="ti-angle-down"></i></a>
                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-filter">
                                <ul>
                                    <li><a href="#">Comedy</a></li>
                                    <li><a href="#">TV & Film</a></li>
                                    <li><a href="#">Religion & Sprituality</a></li>
                                    <li><a href="#">Health & Filtness</a></li>
                                    <li><a href="#">News & Politcs</a></li>
                                    <li><a href="#">Socity & Culture</a></li>
                                    <li><a href="#">Sport & Game</a></li>
                                    <li><a href="#">Business & Finance</a></li>
                                    <li><a href="#">Kids & Familty</a></li>
                                    <li><a href="#">Art & Craft</a></li>
                                    <li><a href="#">Education</a></li>
                                    <li><a href="#">Science & Tecnology</a></li>
                                    <li><a href="#">Game & Hobbies</a></li>
                                    <li><a href="#">Government</a></li>
                                </ul>
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