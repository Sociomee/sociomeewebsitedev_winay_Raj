import React,{Component} from 'react'; 
import { NavLink } from "react-router-dom";

export default function LeftSidebar() {  

  return (
    <>
    <div className="sidebar-panel panel-lg">
      <ul className="sidebar-icon">
          <li className="active">
              <NavLink to="/Home">
                  <img src="assets/images/left-side-menu-icon/home.svg" className="bar-icon-img" alt="Home"/>
                  <h4>Home</h4>
              </NavLink>
          </li>
          <li>
              <NavLink to="/Favorites">
                  <img src="assets/images/left-side-menu-icon/star.svg" className="bar-icon-img" alt="favourite"/>
                  <h4>favourite</h4>
              </NavLink>
          </li>
          <li>
              <NavLink to="/Group">
                  <img src="assets/images/left-side-menu-icon/users.svg" className="bar-icon-img" alt="Groups"/>
                  <h4>Groups</h4>
              </NavLink>
          </li>
          <li>
              <a href="#">
                  <img src="assets/images/left-side-menu-icon/user-check.svg" className="bar-icon-img" alt="Connections "/>
                  <h4>Connections </h4>
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="assets/images/left-side-menu-icon/headphones.svg" className="bar-icon-img" alt="Podcast"/>
                  <h4>Podcast</h4>
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="assets/images/left-side-menu-icon/calendar.svg" className="bar-icon-img" alt="Shotz"/>
                  <h4>Shotz</h4>
              </a>
          </li>
          <li>
              <NavLink to="/Biz">
                  <img src="assets/images/left-side-menu-icon/briefcase.svg" className="bar-icon-img" alt="Business Page"/>
                  <h4>Business Page</h4>
              </NavLink>
          </li>
          <li>
              <a href="#">
                  <img src="assets/images/left-side-menu-icon/zap.svg" className="bar-icon-img" alt="Events"/>
                  <h4>Events</h4>
              </a>
          </li>
          <li>
              <NavLink to="/Marketplace">
                  <img src="assets/images/left-side-menu-icon/shopping-cart.svg" className="bar-icon-img" alt="MarkrtPlace"/>
                  <h4>MarkrtPlace</h4>
              </NavLink>
          </li>
          <li>
              <NavLink to="/AdManager">
                  <img src="assets/images/left-side-menu-icon/box.svg" className="bar-icon-img" alt="Ad Manager"/>
                  <h4>Ad Manager</h4>
              </NavLink>
          </li>
          <li>
              <a href="#">
                  <img src="assets/images/left-side-menu-icon/power.svg" className="bar-icon-img" alt="logout"/>
                  <h4>logout</h4>
              </a>
          </li>
      </ul>
    </div>
    </>
  );
} 