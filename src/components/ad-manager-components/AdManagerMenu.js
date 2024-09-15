import React, { Component, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";


export default function AdManagerMenu() {

    return (
        <>
            <div className="profile-menu profile-menu-new section-t-space m-0">
                <ul>
                    <li>
                        <NavLink to="/AdManager">
                            <h6>Running (27)</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/AdPausd">
                            <h6>Paused (05)</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/AdDrafted">
                            <h6>Drafted (08)</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/AdApprovalPending">
                            <h6>Approval Pending (13)</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/AdCompleted">
                            <h6>Completed (46)</h6>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
} 