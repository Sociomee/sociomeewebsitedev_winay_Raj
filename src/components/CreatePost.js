import React,{Component, useRef, useState} from 'react'; 
import { NavLink } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import AddInYourPost from './AddInYourPost';

export  default function CreatePost() {   
    const [value, onChange] = useState(new Date());
    //   Create Post button 
    const navRef = useRef(null);
    const onhashtagClick = (e) => {
    navRef.current.classList.add("hashtag");
    navRef.current.classList.remove("place");
    navRef.current.classList.remove("friends");
    navRef.current.classList.remove("schedule");
    navRef.current.classList.remove("comment");
    };
    const onplaceClick = (e) => {
    navRef.current.classList.add("place");
    navRef.current.classList.remove("hashtag");
    navRef.current.classList.remove("friends");
    navRef.current.classList.remove("schedule");
    navRef.current.classList.remove("comment");
    };
    const onfriendClick = (e) => {
    navRef.current.classList.add("friends");
    navRef.current.classList.remove("hashtag");
    navRef.current.classList.remove("place");
    navRef.current.classList.remove("schedule");
    navRef.current.classList.remove("comment");
    };
    const onscheduleClick = (e) => {
    navRef.current.classList.add("schedule");
    navRef.current.classList.remove("friends");
    navRef.current.classList.remove("hashtag");
    navRef.current.classList.remove("place");
    navRef.current.classList.remove("comment");
    };
    const oncommentClick = (e) => {
    navRef.current.classList.add("comment");
    navRef.current.classList.remove("schedule");
    navRef.current.classList.remove("friends");
    navRef.current.classList.remove("hashtag");
    navRef.current.classList.remove("place");
    };
    const oncloseClick = (e) => {
    navRef.current.classList.remove("place");
    navRef.current.classList.remove("friends");
    navRef.current.classList.remove("hashtag");
    navRef.current.classList.remove("schedule");
    navRef.current.classList.remove("comment");
    };

    //   Create Post BG 
    const bgNoneRef = useRef(null);
    const bgRef = useRef(null);
    
    // Create Thought Post 
    const clickGradient = (e) => {
    bgRef.current.classList.add("d-block");
    bgNoneRef.current.classList.add("d-none");
    mediaRef.current.classList.remove("d-block");
    alertRef.current.classList.remove("d-block");
    RecommendationRef.current.classList.remove("d-block");
    gradientMainBlockRef.current.classList.remove("d-none");
    };
    const closeBgClick = (e) => {
    bgRef.current.classList.remove("d-block");
    bgNoneRef.current.classList.remove("d-none");
    };

    // Create Media Post 
    const mediaRef = useRef(null);
    const gradientMainBlockRef = useRef(null);
    const clickMedia = (e) => {
    mediaRef.current.classList.add("d-block");
    bgNoneRef.current.classList.add("d-none");
    bgRef.current.classList.remove("d-block");
    alertRef.current.classList.remove("d-block");
    RecommendationRef.current.classList.remove("d-block");
    //gradient Button
    gradientMainBlockRef.current.classList.add("d-none");
    opneGradientRef.current.classList.remove("d-none");
    colorListRef.current.classList.remove("d-block");
    colorToggleRef.current.classList.remove("d-block");
    colorListRef.current.classList.add("d-none");
    colorToggleRef.current.classList.add("d-none");
    };
    const closeMediaClick = (e) => {
    mediaRef.current.classList.remove("d-block");
    bgNoneRef.current.classList.remove("d-none");
    gradientMainBlockRef.current.classList.remove("d-none");
    };

    // Create Recommendation Post 
    const RecommendationRef = useRef(null);
    const clickRecommendation = (e) => {
    RecommendationRef.current.classList.add("d-block");
    bgNoneRef.current.classList.add("d-none");
    bgRef.current.classList.remove("d-block");
    mediaRef.current.classList.remove("d-block");
    alertRef.current.classList.remove("d-block");
    //gradient Button
    gradientMainBlockRef.current.classList.add("d-none");
    opneGradientRef.current.classList.remove("d-none");
    colorListRef.current.classList.remove("d-block");
    colorToggleRef.current.classList.remove("d-block");
    colorListRef.current.classList.add("d-none");
    colorToggleRef.current.classList.add("d-none");
    };

    // Create Alert Post
    const alertRef = useRef(null);
    const clickAlert = (e) => {
    alertRef.current.classList.add("d-block");
    bgNoneRef.current.classList.add("d-none");
    bgRef.current.classList.remove("d-block");
    mediaRef.current.classList.remove("d-block");
    RecommendationRef.current.classList.remove("d-block");
    //gradient Button
    gradientMainBlockRef.current.classList.add("d-none");
    opneGradientRef.current.classList.remove("d-none");
    colorListRef.current.classList.remove("d-block");
    colorToggleRef.current.classList.remove("d-block");
    colorListRef.current.classList.add("d-none");
    colorToggleRef.current.classList.add("d-none");
    };

    // Media File Preview
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    // Show Color Plate 
    const colorListRef = useRef(null);
    const colorToggleRef = useRef(null);
    const opneGradientRef = useRef(null);
    const clickColorShow = (e) => {
        colorListRef.current.classList.add("d-block");
        colorToggleRef.current.classList.add("d-block");
        opneGradientRef.current.classList.add("d-none");
        colorListRef.current.classList.remove("d-none");
        colorToggleRef.current.classList.remove("d-none");
    };
    const clickColorHide = (e) => {
        opneGradientRef.current.classList.remove("d-none");
        colorListRef.current.classList.remove("d-block");
        colorToggleRef.current.classList.remove("d-block");
        colorListRef.current.classList.add("d-none");
        colorToggleRef.current.classList.add("d-none");
    };

  return (
    <>
    <div className="create-post">
        <div className="static-section">
            <div className="card-title create-port-title">
                <div className="createpost-blk">
                    <h3>create post</h3>
                    <div className="setting-dropdown">
                        <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                            <h5 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none"  className="iw-14 globe-svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589"/></svg> public <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg></h5>
                            <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                <ul>
                                    <li>
                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> public</a>
                                    </li>
                                    <li>
                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>friends</a>
                                    </li>
                                    <li>
                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>friends
                                            except</a>
                                    </li>
                                    <li>
                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>specific friends</a>
                                    </li>
                                    <li>
                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>only me</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="golive-more-blk">
                    <div className="create-btn-livetrad">
                        <NavLink to="/CreateGoLive" className="btntrad">
                        <img src="assets/images/hotspot_pulse-1.svg"/>Go Live
                        </NavLink>
                    </div>
                    <div className="settings more-settings-blk">
                        <div className="setting-btn ms-2 setting-dropdown no-bg">
                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                <div role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false" className="morebtn-cust"> More
                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </div>
                                <div className="dropdown-menu dropdown-menu-right custom-dropdown more-post-type-dropdown">
                                    <ul>
                                        <li>
                                            <a href="#" onClick={clickMedia}><img src="assets/images/Media.png"/> Media</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={clickGradient}><img src="assets/images/Thought.png"/> Thought</a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="assets/images/Go_live.png"/> Go Live</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#createPostEvent"><img src="assets/images/Event.png"/> Event</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#createPostPodcast"><img src="assets/images/Audio.png"/> Podcsat</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#createPostArticle"><img src="assets/images/Blog.png"/> Articles</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={clickRecommendation}><img src="assets/images/Recommendation.png"/> Recommendation</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#createPostPoll"><img src="assets/images/Poll.png"/> Poll</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={clickAlert}><img src="assets/images/Threat.png"/> Threat</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#createPostSell"><img src="assets/images/Sell.png"/> Sell</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-input input-style icon-right" ref={bgNoneRef}>
                <div className="creatpost-profile-blk">
                    <img src="assets/images/my-profile.jpg" className="img-fluid" alt="profile"/>
                </div>
                <textarea name="message" className="form-control enable" cols="30" rows="10" placeholder="What’s  going on? #Hashtag... @Mention." spellCheck="false"></textarea>
                {/* <input type="text" className="form-control enable" placeholder="write something here.."/> */}
                <a href="#" className="pen-icon-creatpost">
                    <img src="assets/images/pen-solid-2.png" className="img-fluid icon" alt="pen"/>
                </a>
            </div>
            <div className="media-create-post-block" ref={mediaRef}>
                <div className="search-input input-style icon-right">
                    <div className="creatpost-profile-blk">
                        <img src="assets/images/my-profile.jpg" className="img-fluid" alt="profile"/>
                    </div>
                    <textarea name="message" className="form-control enable" cols="30" rows="10" placeholder="What’s  going on? #Hashtag... @Mention." spellCheck="false"></textarea>
                    <a href="#" className="pen-icon-creatpost">
                        <img src="assets/images/pen-solid-2.png" className="img-fluid icon" alt="pen"/>
                    </a>
                </div>
                <div className="images-videos-block">
                    <a href="#" className="media-img-vid-close" onClick={closeMediaClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </a>
                    <input className="choose-file" type="file"/>
                    <img src="assets/images/image-preview.jpg"/>
                </div>
            </div>
            <div className="search-input input-style icon-right recommendation-block" ref={RecommendationRef}>
                <div className="creatpost-profile-blk">
                    <img src="assets/images/my-profile.jpg" className="img-fluid" alt="profile"/>
                </div>
                <textarea name="message" className="form-control enable" cols="30" rows="10" placeholder="I am seeking recommendation for " spellCheck="false">I am seeking recommendation for </textarea>
                {/* <input type="text" className="form-control enable" placeholder="write something here.."/> */}
                <a href="#" className="pen-icon-creatpost">
                    <img src="assets/images/pen-solid-2.png" className="img-fluid icon" alt="pen"/>
                </a>
            </div>
            <div className="alert-create-post-block" ref={alertRef}>
                <div className="user-profile-cp">
                    <img src="assets/images/my-profile.jpg" className="img-fluid" alt="profile"/>
                    <h4>Kelin jasen</h4>
                </div>
                <div className="custom-fixed-height-blk">
                    <form className="theme-form form-sm">
                        <div className="row  g-3">
                            <div className="form-group col-md-12">
                                <h4 className="create-alert-head">#creatalert</h4>
                                {/* <label>Description</label> */}
                                <div className="create-alert-textarea">
                                    <textarea rows="5" className="form-control" placeholder="Define the threat..."></textarea>
                                    <p className="input-hints">Max 320 Characters</p>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label><svg viewBox="0 0 24 24" width="12" height="12" stroke="#FF822E" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Alert Level</label>
                                <select id="inputState" className="form-control">
                                    <option>Low</option>
                                    <option>Moderate</option>
                                    <option>High</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label><svg viewBox="0 0 24 24" width="12" height="12" stroke="#16C31E" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Post Alert within</label>
                                <select id="inputState" className="form-control">
                                    <option>1 km</option>
                                    <option>2 km</option>
                                    <option>3 km</option>
                                    <option>4 km</option>
                                    <option>5 km</option>
                                    <option>6 km</option>
                                    <option>7 km</option>
                                    <option>8 km</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="create-bg">
                <div className="bg-post gr-1" ref={bgRef} id="bg-post">
                    <div className="input-sec">
                        <input type="text" className="form-control enable"
                            placeholder="What's going on" />
                        <div className="close-icon" onClick={closeBgClick}>
                            <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="gradient-bg-block" ref={gradientMainBlockRef}>
                    <img className="opengradient-box" ref={opneGradientRef} onClick={clickColorShow} src="assets/images/colorgroupbtn.png"/>
                    <ul className="gradient-bg d-none" ref={colorListRef}>
                        <li className="closearrow-btn" onClick={clickColorHide}></li>
                        <li onClick={clickGradient} className="gr-1"></li>
                        <li onClick={clickGradient} className="gr-2"></li>
                        <li onClick={clickGradient} className="gr-3"></li>
                        <li onClick={clickGradient} className="gr-4"></li>
                        <li onClick={clickGradient} className="gr-5"></li>
                        <li onClick={clickGradient} className="gr-6"></li>
                        <li onClick={clickGradient} className="gr-7"></li>
                        <li onClick={clickGradient} className="gr-8"></li>
                        <li onClick={clickGradient} className="gr-9"></li>
                        <li onClick={clickGradient} className="gr-10"></li>
                        <li onClick={clickGradient} className="gr-11"></li>
                        <li onClick={clickGradient} className="gr-12"></li>
                        <li onClick={clickGradient} className="gr-13"></li>
                        <li onClick={clickGradient} className="gr-14"></li>
                        <li onClick={clickGradient} className="gr-15"></li>
                    </ul>
                    <a href="#" className="bg-color-btn d-none"  ref={colorToggleRef} data-bs-toggle="modal" data-bs-target="#bgColorModel"><img src="assets/images/bg-color.png"/></a>
                </div>
            </div>
        </div>
        
        <div className="options-input" ref={navRef} id="additional-input">
            <a id="icon-close" href="#" onClick={oncloseClick}>
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
            {/* <div className="search-input feeling-input">
                <input type="text" className="form-control enable" list="feelings" placeholder="How Are You Feeling?"/>
                <datalist id="feelings">
                    <option value="Happy"/>
                    <option value="Sad"/>
                    <option value="Angry"/>
                    <option value="Worried"/>
                    <option value="Shy"/>
                    <option value="Excited"/>
                    <option value="Surprised"/>
                    <option value="Silly"/>
                    <option value="Embarrassed"/>
                </datalist>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smile iw-15 icon-left icon-font-light"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                </a>
            </div> */}
        </div>
        <div className="create-btn-cust-option">
            <h4>Add to your post</h4>
            <ul className="create-btn-list tooltip-sec">
                <li  onClick={clickMedia}>
                    {/* <input className="choose-file" type="file"/> */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="21" height="21" viewBox="0 0 21 21" fill="#A6A6A6"><path fillRule="evenodd" clipRule="evenodd" d="M16.625 1.75H4.375C2.8875 1.75 1.75 2.8875 1.75 4.375V16.625C1.75 18.1125 2.8875 19.25 4.375 19.25H16.625C18.1125 19.25 19.25 18.1125 19.25 16.625V4.375C19.25 2.8875 18.1125 1.75 16.625 1.75ZM3.5 4.375C3.5 3.85 3.85 3.5 4.375 3.5H16.625C17.15 3.5 17.5 3.85 17.5 4.375V11.025L14.6125 8.1375C14.2625 7.7875 13.7375 7.7875 13.3875 8.1375L4.1125 17.4125C3.7625 17.325 3.5 16.975 3.5 16.625V4.375ZM6.475 17.5H16.625C17.15 17.5 17.5 17.15 17.5 16.625V13.475L14 9.975L6.475 17.5ZM7.4375 9.625C8.6625 9.625 9.625 8.6625 9.625 7.4375C9.625 6.2125 8.6625 5.25 7.4375 5.25C6.2125 5.25 5.25 6.2125 5.25 7.4375C5.25 8.6625 6.2125 9.625 7.4375 9.625ZM7.875 7.4375C7.875 7.175 7.7 7 7.4375 7C7.175 7 7 7.175 7 7.4375C7 7.7 7.175 7.875 7.4375 7.875C7.7 7.875 7.875 7.7 7.875 7.4375Z"/></svg>
                    <div className="tooltip-cls">
                        <span>Media</span>
                    </div>
                </li>
                <li id="hashtag-btn" onClick={onhashtagClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="16" height="16" viewBox="0 0 16 16" fill="#A6A6A6" ><path d="M15.8754 8.77081C15.6635 8.1214 14.956 7.77619 14.3032 7.9881L12.7514 8.50421L11.7158 5.42804L13.2675 4.91193C13.9204 4.70001 14.2622 3.99591 14.0537 3.34308C13.8417 2.69367 13.1342 2.34845 12.4814 2.56036L10.9296 3.07648L10.393 1.47003C10.1811 0.820618 9.47358 0.475403 8.82075 0.687317C8.16792 0.899231 7.82612 1.60333 8.03461 2.25617L8.57124 3.86261L5.37885 4.92902L4.84223 3.32257C4.63032 2.67316 3.9228 2.32794 3.26997 2.53986C2.61714 2.75177 2.27534 3.45587 2.48383 4.1087L3.02046 5.71515L1.47212 6.22785C0.819284 6.43976 0.477487 7.14386 0.685983 7.79669C0.856881 8.2923 1.33881 8.61701 1.83442 8.63751C2.06684 8.67169 2.24458 8.58283 3.80659 8.06329L4.84223 11.1395L3.29047 11.6556C2.64106 11.8675 2.29585 12.575 2.50434 13.2244C2.67524 13.72 3.15717 14.0447 3.65278 14.0652C3.8852 14.0994 4.06294 14.0106 5.62495 13.491L6.16157 15.0975C6.36323 15.6751 7.00581 16.0887 7.73383 15.8802C8.38667 15.6683 8.72846 14.9642 8.51997 14.3113L7.98335 12.7049L11.1826 11.6351L11.7192 13.2415C11.9208 13.8192 12.5634 14.2327 13.2915 14.0242C13.9443 13.8123 14.2861 13.1082 14.0776 12.4554L13.541 10.8489L15.0927 10.3328C15.7421 10.1277 16.0873 9.42023 15.8754 8.77081ZM7.19038 10.3841L6.15473 7.30109L9.35053 6.23126L10.3862 9.31427L7.19038 10.3841Z"/></svg>
                    <div className="tooltip-cls">
                        <span>Hashtag</span>
                    </div>
                </li>
                <li id="checkin-btn" onClick={onplaceClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="13" height="21" viewBox="0 0 13 21" fill="#A6A6A6"><path d="M6.5 0C2.90643 0 0 3.28666 0 7.35036C0 11.7291 4.10429 17.7669 5.79429 20.0665C6.16571 20.5705 6.84357 20.5705 7.215 20.0665C8.89571 17.7669 13 11.7291 13 7.35036C13 3.28666 10.0936 0 6.5 0ZM6.5 9.97548C5.88432 9.97548 5.29385 9.69891 4.8585 9.2066C4.42315 8.71429 4.17857 8.04658 4.17857 7.35036C4.17857 6.65413 4.42315 5.98642 4.8585 5.49411C5.29385 5.0018 5.88432 4.72523 6.5 4.72523C7.11568 4.72523 7.70615 5.0018 8.1415 5.49411C8.57685 5.98642 8.82143 6.65413 8.82143 7.35036C8.82143 8.04658 8.57685 8.71429 8.1415 9.2066C7.70615 9.69891 7.11568 9.97548 6.5 9.97548Z"/></svg>
                    <div className="tooltip-cls">
                        <span>Check In</span>
                    </div>
                </li>
                <li id="friends-btn" onClick={onfriendClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="25" height="21" viewBox="0 0 25 21" fill="#A6A6A6"><path d="M24.634 14.5714L21.1065 10.9695C20.6377 10.4903 20.001 10.2227 19.3369 10.2227H16.2391C15.5476 10.2227 14.989 10.7938 14.989 11.5006V14.6632C14.989 15.3421 15.2507 15.989 15.7195 16.4682L19.247 20.0701C19.7353 20.5692 20.5283 20.5692 21.0167 20.0701L24.6301 16.3763C25.1223 15.8772 25.1223 15.0705 24.634 14.5714ZM17.493 13.7328C16.9735 13.7328 16.5555 13.3055 16.5555 12.7744C16.5555 12.2433 16.9735 11.816 17.493 11.816C18.0126 11.816 18.4306 12.2433 18.4306 12.7744C18.4306 13.3015 18.0126 13.7328 17.493 13.7328ZM8.75043 10.2187C11.5123 10.2187 13.7507 7.9306 13.7507 5.10737C13.7507 2.28813 11.5123 0 8.75043 0C5.98857 0 3.75018 2.28813 3.75018 5.11136C3.75018 7.9306 5.98857 10.2187 8.75043 10.2187ZM13.7429 14.6592V11.7402C13.2663 11.5964 12.7702 11.4926 12.2506 11.4926H11.5982C10.731 11.8999 9.7661 12.1315 8.75043 12.1315C7.73475 12.1315 6.77377 11.8999 5.90263 11.4926H5.25026C2.35168 11.4966 0 13.9005 0 16.8635V18.5247C0 19.5829 0.839885 20.4415 1.87509 20.4415H15.6258C16.2313 20.4415 16.7625 20.142 17.1063 19.6867L14.8406 17.3706C14.1335 16.6479 13.7429 15.6855 13.7429 14.6592Z"/></svg>
                    <div className="tooltip-cls">
                        <span>People Tag</span>
                    </div>
                </li>
                <li id="schedule-btn" onClick={onscheduleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="24" height="24" viewBox="0 0 24 24"  fill="#A6A6A6"><path d="M20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442Z"/><path d="M12 8V12L15 15M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#A6A6A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8V12L16 16" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                    <div className="tooltip-cls">
                        <span>Schedule Your Post</span>
                    </div>
                </li>
                <li id="comment-btn" onClick={oncommentClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="24" height="24" viewBox="0 0 24 24" fill="#A6A6A6"><path d="M12 20.9999C16.97 20.9999 21 16.9702 21 12C21 7.02974 16.97 3 12 3C7.03 3 3 7.02974 3 12C3 13.7707 3.512 15.4222 4.395 16.815L3 20.9999L7.745 19.9323C9.07479 20.6408 10.5286 21.0056 12 20.9999Z"/><line x1="7" y1="9" x2="17" y2="9" stroke="white" strokeLinecap="round"/><line x1="7" y1="12" x2="17" y2="12" stroke="white" strokeLinecap="round"/><line x1="7" y1="15" x2="17" y2="15" stroke="white" strokeLinecap="round"/></svg>
                    <div className="tooltip-cls">
                        <span>Allow Comments</span>
                    </div>
                </li>
            </ul>
        </div>
        <div id="post-btn" className="post-btn">
            <button>post</button>
        </div>
    </div>


    {/* Model Blocks */}
    <div className="modal fade" id="createPostEvent" tabIndex="-1" role="dialog" aria-labelledby="createPostEventTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered create-post-model-block" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <a href="#" data-bs-dismiss="modal" aria-label="Close" className="popupclose-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                    <div className="create-post">
                        <div className="static-section">
                            <div className="card-title create-port-title">
                                <div className="createpost-blk">
                                    <h3>create post</h3>
                                </div>
                                <div className="setting-dropdown">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                        <h5 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none"  className="iw-14 globe-svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589"/></svg> public <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg></h5>
                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                            <ul>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> public</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>friends</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>friends
                                                        except</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>specific friends</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>only me</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="event-create-post-block">
                                <div className="user-profile-cp">
                                    <img src="assets/images/my-profile.jpg" className="img-fluid" alt="profile"/>
                                    <h4>Kelin jasen</h4>
                                </div>
                                <form className="theme-form form-sm">
                                    <div className="row  g-3">
                                        <div className="form-group col-12">
                                            <label>Event Catagory</label>
                                            <select id="inputState" className="form-control">
                                                <option>Social</option>
                                                <option>Public</option>
                                                <option>Social</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Event Title*</label>
                                            <input type="text" className="form-control" required/>
                                            <p className="input-hints">Max 64 Characters</p>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Upload Event Cover Photo</label>
                                            <div className="upload-image-blk">
                                                <input type="file" onChange={handleChange} />
                                                <img src={file} className="event-img-prev"/>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Description</label>
                                            <textarea rows="3" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Event Start Date</label>
                                            <div className="icon-input-block">
                                                <input type="text" className="form-control" required/>
                                                <span className="form-iconbox-blk"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></span>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Event End Date</label>
                                            <div className="icon-input-block">
                                                <input type="text" className="form-control" required/>
                                                <span className="form-iconbox-blk"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></span>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Event Start Time</label>
                                            <div className="icon-input-block">
                                                <input type="text" className="form-control" required/>
                                                <span className="form-iconbox-blk"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></span>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Event End Time</label>
                                            <div className="icon-input-block">
                                                <input type="text" className="form-control" required/>
                                                <span className="form-iconbox-blk"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></span>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Address or Link to event</label>
                                            <input type="text" className="form-control" required/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <AddInYourPost></AddInYourPost>
                        <div id="post-btn" className="post-btn">
                            <button>post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>

    <div className="modal fade" id="createPostArticle" tabIndex="-1" role="dialog" aria-labelledby="createPostArticleTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered create-post-model-block" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <a href="#" data-bs-dismiss="modal" aria-label="Close" className="popupclose-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                    <div className="create-post">
                        <div className="static-section">
                            <div className="card-title create-port-title">
                                <div className="createpost-blk">
                                    <h3>create post</h3>
                                </div>
                                <div className="setting-dropdown">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                        <h5 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none"  className="iw-14 globe-svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589"/></svg> public <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg></h5>
                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                            <ul>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> public</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>friends</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>friends
                                                        except</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>specific friends</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>only me</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="article-create-post-block">
                                <div className="user-profile-cp">
                                    <img src="assets/images/my-profile.jpg" className="img-fluid" alt="profile"/>
                                    <h4>Kelin jasen</h4>
                                </div>
                                <form className="theme-form form-sm">
                                    <div className="row  g-3">
                                        <div className="form-group col-12">
                                            <label>Choose your Article Category</label>
                                            <select id="inputState" className="form-control">
                                                <option>Social</option>
                                                <option>Public</option>
                                                <option>Social</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Article Title*</label>
                                            <input type="text" className="form-control" required/>
                                            <p className="input-hints">Min 3 and Max 84 Characters</p>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Upload banner Image</label>
                                            <div className="upload-image-blk">
                                                <input type="file" onChange={handleChange} />
                                                <img src={file} className="event-img-prev"/>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Description</label>
                                            <textarea rows="3" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Add tags</label>
                                            <input type="text" className="form-control"/>
                                            <p className="input-hints">Min 3 and Max 16 Characters</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <AddInYourPost></AddInYourPost>
                        <div id="post-btn" className="post-btn">
                            <button>post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>

    <div className="modal fade" id="createPostPoll" tabIndex="-1" role="dialog" aria-labelledby="createPostPollTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered create-post-model-block" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <a href="#" data-bs-dismiss="modal" aria-label="Close" className="popupclose-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                    <div className="create-post">
                        <div className="static-section">
                            <div className="card-title create-port-title">
                                <div className="createpost-blk">
                                    <h3>create post</h3>
                                </div>
                                <div className="setting-dropdown">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                        <h5 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none"  className="iw-14 globe-svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589"/></svg> public <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg></h5>
                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                            <ul>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> public</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>friends</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>friends
                                                        except</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>specific friends</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>only me</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="poll-create-post-block">
                                <div className="user-profile-cp">
                                    <img src="assets/images/my-profile.jpg" className="img-fluid" alt="profile"/>
                                    <h4>Kelin jasen</h4>
                                </div>
                                <form className="theme-form form-sm">
                                    <div className="row  g-3">
                                        <div className="form-group col-12">
                                            <label>Poll Question</label>
                                            <input type="text" className="form-control" placeholder="Write your poll question here..." required/>
                                        </div>
                                        <div className="poll-option-blk">
                                            <div className="form-group col-md-12">
                                                <label>Option 1</label>
                                                <input type="text" className="form-control" placeholder="Add 1st Poll option" required/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label>Option 2</label>
                                                <input type="text" className="form-control" placeholder="Add 2nd Poll option"  required/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label>Option 3</label>
                                                <input type="text" className="form-control" placeholder="Add 3rd Poll option"  required/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label>Option 4</label>
                                                <input type="text" className="form-control" placeholder="Add 4th Poll option"  required/>
                                            </div>
                                            <div className="add-more-option-btn"><a href="#">Add More Option</a></div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Poll Duration</label>
                                            <p className="poll-duration-cont">This poll will be automatically disabled after the selected time duration</p>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Start Date</label>
                                                    <div className="icon-input-block">
                                                        <input type="text" className="form-control" placeholder="dd-mm-yyyy"/>
                                                        <span className="form-iconbox-blk"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label>End Date</label>
                                                    <div className="icon-input-block">
                                                        <input type="text" className="form-control" placeholder="dd-mm-yyyy"/>
                                                        <span className="form-iconbox-blk"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <AddInYourPost></AddInYourPost>
                        <div id="post-btn" className="post-btn">
                            <button>post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>

    <div className="modal fade" id="createPostSell" tabIndex="-1" role="dialog" aria-labelledby="createPostSellTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered create-post-model-block" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <a href="#" data-bs-dismiss="modal" aria-label="Close" className="popupclose-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                    <div className="create-post">
                        <div className="static-section">
                            <div className="card-title create-port-title">
                                <div className="createpost-blk">
                                    <h3>create post</h3>
                                </div>
                                <div className="setting-dropdown">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                        <h5 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none"  className="iw-14 globe-svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589"/></svg> public <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg></h5>
                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                            <ul>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> public</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>friends</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>friends
                                                        except</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>specific friends</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>only me</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="event-create-post-block">
                                <div className="user-profile-cp">
                                    <img src="assets/images/my-profile.jpg" className="img-fluid" alt="profile"/>
                                    <h4>Kelin jasen</h4>
                                </div>
                                <form className="theme-form form-sm">
                                    <div className="row  g-3">
                                        <div className="form-group col-12">
                                            <label>Product Category</label>
                                            <select id="inputState" className="form-control">
                                                <option>Select Category</option>
                                                <option>Electronic</option>
                                                <option>Furniture</option>
                                                <option>Toy & Baby</option>
                                                <option>Grocery</option>
                                                <option>Fashin</option>
                                                <option>Appliances</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Product Title*</label>
                                            <input type="text" className="form-control" placeholder="Enter your product title..." required/>
                                            <p className="input-hints">Max 84 Characters</p>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Upload Product Image</label>
                                            <div className="upload-image-blk">
                                                <input type="file" onChange={handleChange}/>
                                                <img src={file} className="event-img-prev"/>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Price</label>
                                            <div className="row">
                                                <div className="col-3">
                                                    <select id="inputState" className="form-control">
                                                        <option>$</option>
                                                        <option>€</option>
                                                        <option>₹</option>
                                                        <option>£</option>
                                                        <option>¥</option>
                                                        <option>J$</option>
                                                        <option>₩</option>
                                                        <option>₮</option>
                                                        <option>ƒ</option>
                                                    </select>
                                                </div>
                                                <div className="col-9">
                                                    <input type="text" className="form-control" placeholder="Enter amount..." required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Product Description</label>
                                            <textarea rows="3" className="form-control" placeholder="Enter product description here..."></textarea>
                                            <p className="input-hints">Max 600 Characters</p>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Product Location</label>
                                            <div className="icon-input-block">
                                                <input type="text" className="form-control" placeholder="Enter your product Location..." required/>
                                                <span className="form-iconbox-blk"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="iw-18 ih-18"><path d="M9.875 2.34316V2.55471L10.0836 2.58972C12.8052 3.04635 14.955 5.19502 15.4085 7.9161L15.4433 8.125H15.6551H16.875C17.3592 8.125 17.75 8.51581 17.75 9C17.75 9.48419 17.3592 9.875 16.875 9.875H15.6551H15.4433L15.4085 10.0839C14.9549 12.8051 12.8051 14.9549 10.0839 15.4085L9.875 15.4433V15.6551V16.875C9.875 17.3592 9.48419 17.75 9 17.75C8.51581 17.75 8.125 17.3592 8.125 16.875V15.6551V15.4433L7.9161 15.4085C5.19502 14.955 3.04635 12.8052 2.58972 10.0836L2.55471 9.875H2.34316H1.125C0.641708 9.875 0.25 9.48404 0.25 9C0.25 8.51596 0.641708 8.125 1.125 8.125H2.34316H2.55471L2.58972 7.91637C3.04633 5.19496 5.19496 3.04633 7.91637 2.58972L8.125 2.55471V2.34316V1.125C8.125 0.641708 8.51596 0.25 9 0.25C9.48404 0.25 9.875 0.641708 9.875 1.125V2.34316ZM6.4375 9C6.4375 7.58416 7.58416 6.4375 9 6.4375C10.4158 6.4375 11.5625 7.58416 11.5625 9C11.5625 10.4158 10.4158 11.5625 9 11.5625C7.58416 11.5625 6.4375 10.4158 6.4375 9ZM4.25 9C4.25 11.6236 6.37638 13.75 9 13.75C11.6236 13.75 13.75 11.6236 13.75 9C13.75 6.37638 11.6236 4.25 9 4.25C6.37638 4.25 4.25 6.37638 4.25 9Z" fill="#B9B9B9" stroke="white" strokeWidth="0.5"/></svg></span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <AddInYourPost></AddInYourPost>
                        <div id="post-btn" className="post-btn">
                            <button>post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>

    <div className="modal fade" id="createPostPodcast" tabIndex="-1" role="dialog" aria-labelledby="createPostPodcastTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered create-post-model-block" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <a href="#" data-bs-dismiss="modal" aria-label="Close" className="popupclose-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                    <div className="create-post">
                        <div className="static-section">
                            <div className="card-title create-port-title">
                                <div className="createpost-blk">
                                    <h3>create post</h3>
                                </div>
                                <div className="setting-dropdown">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                        <h5 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none"  className="iw-14 globe-svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589"/></svg> public <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg></h5>
                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                            <ul>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> public</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>friends</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>friends
                                                        except</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>specific friends</a>
                                                </li>
                                                <li>
                                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>only me</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="article-create-post-block">
                                <div className="user-profile-cp">
                                    <img src="assets/images/my-profile.jpg" className="img-fluid" alt="profile"/>
                                    <h4>Kelin jasen</h4>
                                </div>
                                <form className="theme-form form-sm">
                                    <div className="row  g-3">
                                        <div className="form-group col-12">
                                            <label>Podcast Type</label>
                                            <select id="inputState" className="form-control">
                                                <option>Live Podcast</option>
                                                <option>Upload Recorded Poadcast</option>
                                                <option>Create New Poadcast Series</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-12">
                                            <label>Podcast Category</label>
                                            <select id="inputState" className="form-control">
                                                <option>Education</option>
                                                <option>Politics & Crupption</option>
                                                <option>Food</option>
                                                <option>Science</option>
                                                <option>Geogrophy</option>
                                                <option>Social Work & Management</option>
                                                <option>Internationa Economy Management system</option>
                                                <option>Sports</option>
                                                <option>Tour & Travels</option>
                                                <option>Party</option>
                                                <option>Art & Craft</option>
                                                <option>Journey</option>
                                                <option>Birds & Aminals</option>
                                                <option>Business</option>
                                                <option>Software Development</option>
                                                <option>Infrastructure Development</option>
                                                <option>Astrology</option>
                                                <option>Medical & Health</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Product Title</label>
                                            <input type="text" className="form-control" required/>
                                            <p className="input-hints">Max 120 Characters</p>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Upload podcast cover Image</label>
                                            <div className="upload-image-blk">
                                                <input type="file" onChange={handleChange} />
                                                <img src={file} className="event-img-prev"/>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Upload Voice</label>
                                            <div className="upload-image-blk">
                                                <input type="file"/>
                                                <div className="audio-preview-blk">
                                                    <audio controls controlsList="nodownload noplaybackrate">
                                                        <source src="assets/images/audio/audio-file.mp3" type="audio/mpeg"/>
                                                    </audio>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Paid (Optional)</label>
                                            <div className="row">
                                                <div className="col-3">
                                                    <select id="inputState" className="form-control">
                                                        <option>$</option>
                                                        <option>€</option>
                                                        <option>₹</option>
                                                        <option>£</option>
                                                        <option>¥</option>
                                                        <option>J$</option>
                                                        <option>₩</option>
                                                        <option>₮</option>
                                                        <option>ƒ</option>
                                                    </select>
                                                </div>
                                                <div className="col-9">
                                                    <input type="text" className="form-control" placeholder="Enter amount..."/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>About Podcast</label>
                                            <textarea rows="3" className="form-control"></textarea>
                                            <p className="input-hints">Max 1200 Characters</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <AddInYourPost></AddInYourPost>
                        <div id="post-btn" className="post-btn">
                            <button>post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    </>
  );
} 
