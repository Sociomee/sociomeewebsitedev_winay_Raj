import React, { Component, useRef, useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import UserContext from '../Context/userContext';

// MUI Dialog box
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function Header() {

    const [userProfile, setUserProfile] = useState('');

    // MUI State
    const [open, setOpen] = useState(false);
    let navigate=useNavigate();

    // Mobile Menu Button 
    const olRef = useRef(null);
    const menuRef = useRef(null);
    const [userData, setUserData] = useState();
    const menuBtnClick = (e) => {
        olRef.current.classList.add("show");
        menuRef.current.classList.add("show");
    };
    const closeMenuBtnClick = (e) => {
        olRef.current.classList.remove("show");
        menuRef.current.classList.remove("show");
    };

    const logoutUser = () => {
        setOpen(false)
        const config = {
            headers: { Authorization: `Bearer ${userProfile.token}` }
        };
        const logoutBody={userId:userProfile.id}
        console.log(logoutBody)

        axios.post('https://apiserver.msgmee.com/user/logOut/', logoutBody, config)
        .then((respo)=>{
            if(respo.data.data?.successResult)
            {
                localStorage.removeItem('user');
                navigate('/');
                console.log(respo)
            } 
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(()=>{
        setUserProfile(JSON.parse(localStorage.getItem('user')));
    },[])


    return (
        <>
            <header className="header-light">
                <div className="mobile-fix-menu"></div>
                <div className="container-fluid custom-padding">
                    <div className="header-section">
                        <div className="header-left">
                            <div className="brand-logo">
                                <NavLink to="/Home">
                                    <img src="assets/images/logo.png" alt="logo" className="img-fluid" />
                                </NavLink>
                            </div>
                            <div className="search-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iw-16 icon-light"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <input type="text" className="form-control search-type" placeholder="find friends..." />
                                <div className="icon-close">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-16 icon-light"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </div>
                                <div className="search-suggestion">
                                    <span className="recent">recent search</span>
                                    <ul className="friend-list">
                                        <li>
                                            <div className="media">
                                                <img src="assets/images/user-sm-9.jpg" alt="user" />
                                                <div className="media-body">
                                                    <div>
                                                        <h5 className="mt-0">Paige Turner</h5>
                                                        <h6> 1 mutual friend</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <img src="assets/images/user-sm-12.jpg" alt="user" />
                                                <div className="media-body">
                                                    <div>
                                                        <h5 className="mt-0">Paige Turner</h5>
                                                        <h6> 1 mutual friend</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <img src="assets/images/user-sm-15.jpg" alt="user" />
                                                <div className="media-body">
                                                    <div>
                                                        <h5 className="mt-0">Paige Turner</h5>
                                                        <h6> 1 mutual friend</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ul className="btn-group menu-btn-group">
                                <li className="header-btn home-btn cust-home-btn">
                                    <NavLink className="main-link" to="/Home">
                                        <img src="assets/images/home-menu.svg" />
                                    </NavLink>
                                </li>
                                <li className="header-btn home-btn cust-video-btn">
                                    <NavLink className="main-link" to="/GoLive">
                                        <img src="assets/images/video.svg" />
                                    </NavLink>
                                </li>
                                <li className="header-btn home-btn cust-group-btn">
                                    <NavLink className="main-link" to="/#">
                                        <img src="assets/images/group.svg" />
                                    </NavLink>
                                </li>
                                <li className="header-btn custom-dropdown dropdown-lg add-friend">
                                    <a className="main-link" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="assets/images/users.svg" />
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-header">
                                            <span>friend request</span>
                                            <div className="mobile-close">
                                                <h5>close</h5>
                                            </div>
                                        </div>
                                        <div className="dropdown-content">
                                            <ul className="friend-list">
                                                <li>
                                                    <div className="media">
                                                        <img src="assets/images/user-sm-5.jpg" alt="user" />
                                                        <div className="media-body">
                                                            <div>
                                                                <h5 className="mt-0">Paige Turner</h5>
                                                                <h6> 1 mutual friend</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="action-btns">
                                                        <button type="button" className="btn btn-solid">confirm</button>
                                                        <button type="button" className="btn btn-outline ms-1">delete</button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <img src="assets/images/user-sm-6.jpg" alt="user" />
                                                        <div className="media-body">
                                                            <div>
                                                                <h5 className="mt-0">Paige Turner</h5>
                                                                <h6> 1 mutual friend</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="action-btns">
                                                        <button type="button" className="btn btn-solid">confirm</button>
                                                        <button type="button" className="btn btn-outline ms-1">delete</button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <img src="assets/images/user-sm-7.jpg" alt="user" />
                                                        <div className="media-body">
                                                            <div>
                                                                <h5 className="mt-0">Paige Turner</h5>
                                                                <h6> 1 mutual friend</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="action-btns">
                                                        <button type="button" className="btn btn-solid">confirm</button>
                                                        <button type="button" className="btn btn-outline ms-1">delete</button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <img src="assets/images/user-sm-2.jpg" alt="user" />
                                                        <div className="media-body">
                                                            <div>
                                                                <h5 className="mt-0">Paige Turner</h5>
                                                                <h6> 1 mutual friend</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="action-btns">
                                                        <button type="button" className="btn btn-solid">confirm</button>
                                                        <button type="button" className="btn btn-outline ms-1">delete</button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="header-btn home-btn cust-pen-btn">
                                    <a className="main-link" href="#">
                                        <img src="assets/images/pen.svg" />
                                    </a>
                                </li>
                                <li className="header-btn home-btn cust-union-btn">
                                    <NavLink className="main-link" to="/Tops">
                                        <img src="assets/images/Union1.svg" />
                                    </NavLink>
                                </li>
                                <li className="header-btn home-btn cust-union-btn">
                                    <NavLink className="main-link" to="/Trending">
                                        <img src="assets/images/Union.svg" />
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="header-right">
                            <ul className="option-list">
                                <li className="header-btn custom-dropdown dropdown-lg btn-group message-btn">
                                    <a className="main-link" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-light strokeWidth-3 iw-16 ih-16"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                        <span className="count success">2</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <div className="dropdown-header">
                                            <div className="left-title">
                                                <span>messages</span>
                                            </div>
                                            <div className="right-option">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mobile-close">
                                                <h5>close</h5>
                                            </div>
                                        </div>
                                        <div className="search-bar input-style icon-left">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16 icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                            <input type="text" className="form-control" placeholder="search messages..." />
                                        </div>
                                        <div className="dropdown-content">
                                            <ul className="friend-list">
                                                <li>
                                                    <a href="#">
                                                        <div className="media">
                                                            <img src="assets/images/user-sm-1.jpg" alt="user" />
                                                            <div className="media-body">
                                                                <div>
                                                                    <h5 className="mt-0">Paige Turner</h5>
                                                                    <h6>Are you there ?</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="active-status">
                                                            <span className="active"></span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="media">
                                                            <img src="assets/images/user-sm-2.jpg" alt="user" />
                                                            <div className="media-body">
                                                                <div>
                                                                    <h5 className="mt-0">Paige Turner</h5>
                                                                    <h6>Are you there ?</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="media">
                                                            <img src="assets/images/user-sm-3.jpg" alt="user" />
                                                            <div className="media-body">
                                                                <div>
                                                                    <h5 className="mt-0">Bob Frapples</h5>
                                                                    <h6>hello ! how are you ?</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="active-status">
                                                            <span className="offline"></span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="header-btn custom-dropdown d-md-none d-block app-btn">
                                    <a className="main-link" href="#" onClick={menuBtnClick}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-light strokeWidth-3 iw-16 ih-16"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                    </a>
                                    <div className="overlay-bg app-overlay" ref={olRef} onClick={closeMenuBtnClick}></div>
                                    <div className="app-box" ref={menuRef}>
                                        <ul className="sidebar-icon">
                                            <li className="active">
                                                <NavLink to="/">
                                                    <img src="assets/images/home.png" className="bar-icon-img" alt="Home" />
                                                    <h4>Home</h4>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="assets/images/star.png" className="bar-icon-img" alt="favourite" />
                                                    <h4>favourite</h4>
                                                </a>
                                            </li>
                                            <li>
                                                <NavLink to="/Group">
                                                    <img src="assets/images/users.png" className="bar-icon-img" alt="Groups" />
                                                    <h4>Groups</h4>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="assets/images/user-check.png" className="bar-icon-img" alt="Connections " />
                                                    <h4>Connections </h4>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="assets/images/headphones.png" className="bar-icon-img" alt="Podcast" />
                                                    <h4>Podcast</h4>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="assets/images/calendar.png" className="bar-icon-img" alt="Shotz" />
                                                    <h4>Shotz</h4>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="assets/images/briefcase.png" className="bar-icon-img" alt="Business Page" />
                                                    <h4>Business Page</h4>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="assets/images/zap.png" className="bar-icon-img" alt="Events" />
                                                    <h4>Events</h4>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="assets/images/shopping-cart.png" className="bar-icon-img" alt="MarkrtPlace" />
                                                    <h4>MarkrtPlace</h4>
                                                </a>
                                            </li>
                                            <li>
                                                <NavLink to="/AdManager">
                                                    <img src="assets/images/box.png" className="bar-icon-img" alt="Ad Manager" />
                                                    <h4>Ad Manager</h4>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <a onClick={()=>setOpen(true)}>
                                                    <img src="assets/images/power.png" className="bar-icon-img" alt="logout" />
                                                    <h4>logout</h4>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-btn custom-dropdown dropdown-lg btn-group notification-btn">
                                    <a className="main-link" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-light strokeWidth-3 iw-16 ih-16"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                        <span className="count warning">2</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <div className="dropdown-header">
                                            <span>Notification</span>
                                            <div className="mobile-close">
                                                <h5>close</h5>
                                            </div>
                                        </div>
                                        <div className="dropdown-content">
                                            <ul className="friend-list">
                                                <li className="d-block">
                                                    <div>
                                                        <div className="media">
                                                            <img src="assets/images/user-sm-5.jpg" alt="user" />
                                                            <div className="media-body">
                                                                <div>
                                                                    <h5 className="mt-0"><span>Paige Turner</span> send you a friend
                                                                        request
                                                                    </h5>
                                                                    <h6> 1 mutual friend</h6>
                                                                    <div className="action-btns">
                                                                        <button type="button" className="btn btn-solid">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                                        </button>
                                                                        <button type="button" className="btn btn-solid ms-1">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="media">
                                                            <img src="assets/images/user-sm-6.jpg" alt="user" />
                                                            <div className="media-body">
                                                                <div>
                                                                    <h5 className="mt-0"><span>Bob Frapples</span> add their stories
                                                                    </h5>
                                                                    <h6>8 hour ago</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="media">
                                                            <img src="assets/images/user-sm-7.jpg" alt="user" />
                                                            <div className="media-body">
                                                                <div>
                                                                    <h5 className="mt-0"><span>Josephin water</span> have birthday
                                                                        today
                                                                    </h5>
                                                                    <h6>sun at 5.55 AM</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="media">
                                                            <img src="assets/images/user-sm-2.jpg" alt="user" />
                                                            <div className="media-body">
                                                                <div>
                                                                    <h5 className="mt-0"><span>Petey Cruiser</span> added a new
                                                                        photo
                                                                    </h5>
                                                                    <h6>sun at 5.40 AM</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="header-btn custom-dropdown profile-btn btn-group">
                                    <a className="main-link" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-light strokeWidth-3 d-sm-none d-block iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <div className="media d-none d-sm-flex">
                                            <div className="user-img">
                                                <img src="assets/images/my-profile.jpg"
                                                    className="img-fluid bg-img" alt="user" />
                                                <span className="available-stats online"></span>
                                            </div>
                                            <div className="media-body d-none d-md-block">
                                                <h4>kelin jasen</h4>
                                                <span>active now</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <div className="dropdown-header">
                                            <span>profile</span>
                                            <div className="mobile-close">
                                                <h5>close</h5>
                                            </div>
                                        </div>
                                        <div className="dropdown-content">
                                            <ul className="friend-list">
                                                <li>
                                                    <NavLink to="/MyProfile">
                                                        <div className="media">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                            <div className="media-body">
                                                                <div>
                                                                    <h5 className="mt-0">Profile</h5>
                                                                    <h6>Profile preview & settings</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="media">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                                            <div className="media-body">
                                                                <div>
                                                                    <h5 className="mt-0">setting & privacy</h5>
                                                                    <h6>all settings & privacy</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="media">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                                            <div className="media-body">
                                                                <div>
                                                                    <h5 className="mt-0">help & support</h5>
                                                                    <h6>browse help here</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a onClick={()=>setOpen(true)}>
                                                        <div className="media">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                                            <div className="media-body">
                                                                <div>
                                                                    <h5 className="mt-0">log out</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            {/* MUI Dialog Box  */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are You Sure, you want to logout ?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                       
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={logoutUser}>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
// export default Header 