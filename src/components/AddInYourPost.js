import React,{Component, useRef, useState} from 'react'; 
import { NavLink } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";

export  default function AddInYourPost() {   
    const [value, onChange] = useState(new Date());
    // Model nav menu
    const modelNavRef = useRef(null);
    const modelOnhashtagClick = (e) => {
    modelNavRef.current.classList.add("hashtag");
    modelNavRef.current.classList.remove("place");
    modelNavRef.current.classList.remove("friends");
    modelNavRef.current.classList.remove("schedule");
    modelNavRef.current.classList.remove("comment");
    };
    const modelOnplaceClick = (e) => {
    modelNavRef.current.classList.add("place");
    modelNavRef.current.classList.remove("hashtag");
    modelNavRef.current.classList.remove("friends");
    modelNavRef.current.classList.remove("schedule");
    modelNavRef.current.classList.remove("comment");
    };
    const modelOnfriendClick = (e) => {
    modelNavRef.current.classList.add("friends");
    modelNavRef.current.classList.remove("hashtag");
    modelNavRef.current.classList.remove("place");
    modelNavRef.current.classList.remove("schedule");
    modelNavRef.current.classList.remove("comment");
    };
    const modelOnscheduleClick = (e) => {
    modelNavRef.current.classList.add("schedule");
    modelNavRef.current.classList.remove("friends");
    modelNavRef.current.classList.remove("hashtag");
    modelNavRef.current.classList.remove("place");
    modelNavRef.current.classList.remove("comment");
    };
    const modelOncommentClick = (e) => {
    modelNavRef.current.classList.add("comment");
    modelNavRef.current.classList.remove("schedule");
    modelNavRef.current.classList.remove("friends");
    modelNavRef.current.classList.remove("hashtag");
    modelNavRef.current.classList.remove("place");
    };
    const modelOncloseClick = (e) => {
    modelNavRef.current.classList.remove("place");
    modelNavRef.current.classList.remove("friends");
    modelNavRef.current.classList.remove("hashtag");
    modelNavRef.current.classList.remove("schedule");
    modelNavRef.current.classList.remove("comment");
    };

  return (
    <>
        <div className="options-input" ref={modelNavRef} id="additional-input">
            <a id="icon-close" href="#" onClick={modelOncloseClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15 icon-font-light icon-close"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </a>
            <div className="search-input hashtag-input" >
                <input type="text" className="form-control" placeholder="Hashtag..."/>
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="iw-15 icon-left" width="16" height="16" viewBox="0 0 16 16" fill="#afb8c2" ><path d="M15.8754 8.77081C15.6635 8.1214 14.956 7.77619 14.3032 7.9881L12.7514 8.50421L11.7158 5.42804L13.2675 4.91193C13.9204 4.70001 14.2622 3.99591 14.0537 3.34308C13.8417 2.69367 13.1342 2.34845 12.4814 2.56036L10.9296 3.07648L10.393 1.47003C10.1811 0.820618 9.47358 0.475403 8.82075 0.687317C8.16792 0.899231 7.82612 1.60333 8.03461 2.25617L8.57124 3.86261L5.37885 4.92902L4.84223 3.32257C4.63032 2.67316 3.9228 2.32794 3.26997 2.53986C2.61714 2.75177 2.27534 3.45587 2.48383 4.1087L3.02046 5.71515L1.47212 6.22785C0.819284 6.43976 0.477487 7.14386 0.685983 7.79669C0.856881 8.2923 1.33881 8.61701 1.83442 8.63751C2.06684 8.67169 2.24458 8.58283 3.80659 8.06329L4.84223 11.1395L3.29047 11.6556C2.64106 11.8675 2.29585 12.575 2.50434 13.2244C2.67524 13.72 3.15717 14.0447 3.65278 14.0652C3.8852 14.0994 4.06294 14.0106 5.62495 13.491L6.16157 15.0975C6.36323 15.6751 7.00581 16.0887 7.73383 15.8802C8.38667 15.6683 8.72846 14.9642 8.51997 14.3113L7.98335 12.7049L11.1826 11.6351L11.7192 13.2415C11.9208 13.8192 12.5634 14.2327 13.2915 14.0242C13.9443 13.8123 14.2861 13.1082 14.0776 12.4554L13.541 10.8489L15.0927 10.3328C15.7421 10.1277 16.0873 9.42023 15.8754 8.77081ZM7.19038 10.3841L6.15473 7.30109L9.35053 6.23126L10.3862 9.31427L7.19038 10.3841Z"/></svg>
                </a>
            </div>
            <div className="search-input place-input">
                <input type="text" className="form-control" placeholder="search for places..."/>
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15 icon-left icon-font-light"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </a>
            </div>
            <div className="search-input friend-input">
                <input type="text" className="form-control" list="friends"
                    placeholder="search your friends..."/>
                <datalist id="friends">
                    <option value="Paige Turner"/>
                    <option value="Bob Frapples"/>
                    <option value="Josephin water"/>
                    <option value="Petey Cruiser"/>
                    <option value="Anna Sthesia"/>
                    <option value="Paul Molive"/>
                    <option value="Anna Mull"/>
                </datalist>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15 icon-left icon-font-light"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                </a>
            </div>
            <div className="search-input schedule-input" >
                {/* <input type="text" className="form-control" placeholder="Schedule your post..."/> */}
                <DateTimePicker  onChange={onChange} value={value} className="form-control" />
                <a href="#">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"  className="iw-15 icon-left icon-font-light"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </a>
            </div>
            <div className="search-input comment-input" >
                {/* <input type="text" className="form-control" placeholder="Allow Comments..."/> */}
                <div className="allowcomment-box">
                    <h4>Allow Comments</h4>
                    <div className="toggle-sec">
                        <div className="button toggle-btn">
                            <input type="checkbox" className="checkbox"/>
                            <div className="knobs">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <a href="#">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-15 icon-left icon-font-light"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a> */}
            </div>
        </div>
        <div className="create-btn-cust-option">
            <h4>Add to your post</h4>
            <ul className="create-btn-list tooltip-sec">
                <li id="hashtag-btn" onClick={modelOnhashtagClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="16" height="16" viewBox="0 0 16 16" fill="#A6A6A6" ><path d="M15.8754 8.77081C15.6635 8.1214 14.956 7.77619 14.3032 7.9881L12.7514 8.50421L11.7158 5.42804L13.2675 4.91193C13.9204 4.70001 14.2622 3.99591 14.0537 3.34308C13.8417 2.69367 13.1342 2.34845 12.4814 2.56036L10.9296 3.07648L10.393 1.47003C10.1811 0.820618 9.47358 0.475403 8.82075 0.687317C8.16792 0.899231 7.82612 1.60333 8.03461 2.25617L8.57124 3.86261L5.37885 4.92902L4.84223 3.32257C4.63032 2.67316 3.9228 2.32794 3.26997 2.53986C2.61714 2.75177 2.27534 3.45587 2.48383 4.1087L3.02046 5.71515L1.47212 6.22785C0.819284 6.43976 0.477487 7.14386 0.685983 7.79669C0.856881 8.2923 1.33881 8.61701 1.83442 8.63751C2.06684 8.67169 2.24458 8.58283 3.80659 8.06329L4.84223 11.1395L3.29047 11.6556C2.64106 11.8675 2.29585 12.575 2.50434 13.2244C2.67524 13.72 3.15717 14.0447 3.65278 14.0652C3.8852 14.0994 4.06294 14.0106 5.62495 13.491L6.16157 15.0975C6.36323 15.6751 7.00581 16.0887 7.73383 15.8802C8.38667 15.6683 8.72846 14.9642 8.51997 14.3113L7.98335 12.7049L11.1826 11.6351L11.7192 13.2415C11.9208 13.8192 12.5634 14.2327 13.2915 14.0242C13.9443 13.8123 14.2861 13.1082 14.0776 12.4554L13.541 10.8489L15.0927 10.3328C15.7421 10.1277 16.0873 9.42023 15.8754 8.77081ZM7.19038 10.3841L6.15473 7.30109L9.35053 6.23126L10.3862 9.31427L7.19038 10.3841Z"/></svg>
                    <div className="tooltip-cls">
                        <span>Hashtag</span>
                    </div>
                </li>
                <li id="checkin-btn" onClick={modelOnplaceClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="13" height="21" viewBox="0 0 13 21" fill="#A6A6A6"><path d="M6.5 0C2.90643 0 0 3.28666 0 7.35036C0 11.7291 4.10429 17.7669 5.79429 20.0665C6.16571 20.5705 6.84357 20.5705 7.215 20.0665C8.89571 17.7669 13 11.7291 13 7.35036C13 3.28666 10.0936 0 6.5 0ZM6.5 9.97548C5.88432 9.97548 5.29385 9.69891 4.8585 9.2066C4.42315 8.71429 4.17857 8.04658 4.17857 7.35036C4.17857 6.65413 4.42315 5.98642 4.8585 5.49411C5.29385 5.0018 5.88432 4.72523 6.5 4.72523C7.11568 4.72523 7.70615 5.0018 8.1415 5.49411C8.57685 5.98642 8.82143 6.65413 8.82143 7.35036C8.82143 8.04658 8.57685 8.71429 8.1415 9.2066C7.70615 9.69891 7.11568 9.97548 6.5 9.97548Z"/></svg>
                    <div className="tooltip-cls">
                        <span>Check In</span>
                    </div>
                </li>
                <li id="friends-btn" onClick={modelOnfriendClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="25" height="21" viewBox="0 0 25 21" fill="#A6A6A6"><path d="M24.634 14.5714L21.1065 10.9695C20.6377 10.4903 20.001 10.2227 19.3369 10.2227H16.2391C15.5476 10.2227 14.989 10.7938 14.989 11.5006V14.6632C14.989 15.3421 15.2507 15.989 15.7195 16.4682L19.247 20.0701C19.7353 20.5692 20.5283 20.5692 21.0167 20.0701L24.6301 16.3763C25.1223 15.8772 25.1223 15.0705 24.634 14.5714ZM17.493 13.7328C16.9735 13.7328 16.5555 13.3055 16.5555 12.7744C16.5555 12.2433 16.9735 11.816 17.493 11.816C18.0126 11.816 18.4306 12.2433 18.4306 12.7744C18.4306 13.3015 18.0126 13.7328 17.493 13.7328ZM8.75043 10.2187C11.5123 10.2187 13.7507 7.9306 13.7507 5.10737C13.7507 2.28813 11.5123 0 8.75043 0C5.98857 0 3.75018 2.28813 3.75018 5.11136C3.75018 7.9306 5.98857 10.2187 8.75043 10.2187ZM13.7429 14.6592V11.7402C13.2663 11.5964 12.7702 11.4926 12.2506 11.4926H11.5982C10.731 11.8999 9.7661 12.1315 8.75043 12.1315C7.73475 12.1315 6.77377 11.8999 5.90263 11.4926H5.25026C2.35168 11.4966 0 13.9005 0 16.8635V18.5247C0 19.5829 0.839885 20.4415 1.87509 20.4415H15.6258C16.2313 20.4415 16.7625 20.142 17.1063 19.6867L14.8406 17.3706C14.1335 16.6479 13.7429 15.6855 13.7429 14.6592Z"/></svg>
                    <div className="tooltip-cls">
                        <span>People Tag</span>
                    </div>
                </li>
                <li id="schedule-btn" onClick={modelOnscheduleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="24" height="24" viewBox="0 0 24 24"  fill="#A6A6A6"><path d="M20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442Z"/><path d="M12 8V12L15 15M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#A6A6A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8V12L16 16" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                    <div className="tooltip-cls">
                        <span>Schedule Your Post</span>
                    </div>
                </li>
                <li id="comment-btn" onClick={modelOncommentClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="24" height="24" viewBox="0 0 24 24" fill="#A6A6A6"><path d="M12 20.9999C16.97 20.9999 21 16.9702 21 12C21 7.02974 16.97 3 12 3C7.03 3 3 7.02974 3 12C3 13.7707 3.512 15.4222 4.395 16.815L3 20.9999L7.745 19.9323C9.07479 20.6408 10.5286 21.0056 12 20.9999Z"/><line x1="7" y1="9" x2="17" y2="9" stroke="white" strokeLinecap="round"/><line x1="7" y1="12" x2="17" y2="12" stroke="white" strokeLinecap="round"/><line x1="7" y1="15" x2="17" y2="15" stroke="white" strokeLinecap="round"/></svg>
                    <div className="tooltip-cls">
                        <span>Allow Comments</span>
                    </div>
                </li>
            </ul>
        </div>
    </>
  );
} 
