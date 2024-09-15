import React, { Component, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";


export default function AdTransactionSummaryMenu() {

    return (
        <>
            <div className="profile-menu profile-menu-new section-t-space m-0">
                <ul>
                    <li>
                        <NavLink className='ts-padding' to="/AllTransactionSummary">
                            <h6>All</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='ts-padding' to="/TransactionSummary">
                            <h6>Spent</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='ts-padding' to="/TransactionSummary">
                            <h6>Top up</h6>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
} 