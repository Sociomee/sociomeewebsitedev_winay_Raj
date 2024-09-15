import React,{Component, useState} from 'react'; 
import { NavLink } from "react-router-dom";

export default function GroupMenu() { 
    
    return (
      <>
        <div className="profile-menu section-t-space">
            <ul>
                <li>
                    <NavLink to="/GroupDetail">
                    <h6>Discussion</h6>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/GroupMember">
                        <h6>Members</h6>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/GdAbout">
                        <h6>About</h6>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/GdPostRequest">
                        <h6>Post Request</h6>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/GdBlockedPeople">
                        <h6>Blocked People</h6>
                    </NavLink>
                </li>
            </ul>
            <ul className="right-menu d-xl-flex d-none">
                {/* <li>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#createGroup">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        <h6>Create Group</h6>
                    </a>
                </li> */}
                <li>
                    <NavLink to="/GdSetting">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" class="iw-14 ih-14"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        <h6>Setting</h6>
                    </NavLink>
                </li>
            </ul>
        </div>
      </>
    );
} 