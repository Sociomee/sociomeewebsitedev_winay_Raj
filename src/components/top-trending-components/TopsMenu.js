import React,{Component, useState} from 'react'; 
import { NavLink } from "react-router-dom";

export default function TopsMenu() { 
    
    return (
      <>
        <div className="top-trend-menu">
            <ul className="tat-left-menu">
                <li>
                    <NavLink to="/Tops">All</NavLink>
                </li>
                <li>
                    <a hrref="#">People</a>
                </li>
                <li>
                    <a hrref="#">Media</a>
                </li>
                <li>
                    <a hrref="#">Shotz</a>
                </li>
                <li>
                    <a hrref="#">Articles</a>
                </li>
                <li>
                    <a hrref="#">Poscast</a>
                </li>
                <li>
                    <a hrref="#">#Tags</a>
                </li>
                <li>
                    <a hrref="#">MarketPlace</a>
                </li>
                <li>
                    <a hrref="#">BizPage</a>
                </li>
                <li>
                    <a hrref="#">Polls</a>
                </li>
                <li>
                    <a hrref="#">Groups</a>
                </li>
            </ul>
        </div>
      </>
    );
} 