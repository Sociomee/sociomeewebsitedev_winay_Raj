import React,{Component, useState} from 'react'; 
import { NavLink } from "react-router-dom";

export default function BizMenu() { 
    
    return (
      <>
        <div className="profile-menu section-t-space">
            <ul>
                <li>
                    <NavLink to="/Biz">
                    <h6>All Biz Pages (56)</h6>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/OwnedBiz">
                        <h6>Owned (23)</h6>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/JoinedBiz">
                        <h6>Liked Pages (18)</h6>
                    </NavLink>
                </li>
            </ul>
            <ul className="right-menu d-xl-flex d-none">
                <li>
                    <NavLink to="/CreateBiz">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        <h6>Create Biz Page</h6>
                    </NavLink>
                </li>
            </ul>
        </div>
      </>
    );
} 