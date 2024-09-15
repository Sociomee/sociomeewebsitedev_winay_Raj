import { useState } from 'react'
import Header from '../../Header'
import LeftSidebar from '../../LeftSidebar'
import RightSidebar from '../../RightSidebar'
import BizTopBanner from '../../biz-components/BizTopBanner'
import BizDetailMenu from '../../biz-components/BizDetailMenu'
import { Card, CardTitle, Col, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label, Row, UncontrolledButtonDropdown, UncontrolledTooltip } from 'reactstrap'
import { Link, NavLink } from 'react-router-dom'
import Club from '../../biz-components/Img/Club.png'
import Media from '../../biz-components/Img/media.png'
import Post from '../../biz-components/Img/Post.png'
import Post1 from '../../biz-components/Img/Post1.png'
import Post2 from '../../biz-components/Img/Post2.png'
import SlideImg from '../../biz-components/Img/slideImg.png'

const PostBiz = () => {
    const [mapdata, setMapData] = useState([
        {
            link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2266.133469088304!2d10.344347315868879!3d55.39057698045794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cdfc6c8acf0bd%3A0xc9e5ab1219682ea!2sDybdevej%2010%2C%205200%20Odense%2C%20Denmark!5e0!3m2!1sen!2sin!4v1656575287386!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
            name2: "Dybdevej 10, 5200 Odense, Denmark",
            icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>

        },
        {
            link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2266.133469088304!2d10.344347315868879!3d55.39057698045794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cdfc6c8acf0bd%3A0xc9e5ab1219682ea!2sDybdevej%2010%2C%205200%20Odense%2C%20Denmark!5e0!3m2!1sen!2sin!4v1656575287386!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
            name2: "Dybdevej 10, 5200 Odense, New York",
            icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>

        }

    ])
    const [time, setTime] = useState([
        {
            name: "Timing",
            update: "Open now",
            time: "9:00AM - 6:00PM",
            icon1: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
            icon2: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

        }
    ])
    const [website, setWebsite] = useState([
        {
            name: "Website",
            link1: "www.behance.net",
            link2: "www.gihub.net",
            icon1: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
            icon2: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

        },
        {
            name: "Email",
            link1: "digital@gmail.com",
            link2: "info@sociomee.com",
            icon1: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
            icon2: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

        }

    ])
    const [Contact, setContact] = useState([
        {
            name: "Contact",
            mob: "8818844881",
            icon1: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
            icon2: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
        }

    ])
    const RowFirstSideData = () => {
        return (
            <>
                <div className="custom-card-block">
                    <div className="custom-card-head biz-carddetail-blk">
                        <h4>Overview</h4>
                    </div>
                    <div className="biz-about-cont">
                        {
                            mapdata.map((e, index) => (
                                <ul>
                                    <li>
                                        <div className="bizabout-location" key={index} >
                                            {e.link}
                                            <div className="biz-icon-cont-blk">
                                                <div className="icon">
                                                    {e.icon}
                                                </div>
                                                <div className="details">
                                                    <h6>{e.name2}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))
                        }
                        {
                            time.map((tym, index) => (
                                <ul>
                                    <li>
                                        <div className="biz-icon-cont-blk" key={index}>
                                            <div className="icon">
                                                {tym.icon1}
                                            </div>
                                            <div className="details">
                                                <div className='me-auto'>
                                                    <h5>{tym.name}</h5>
                                                    <h6><span className="green">{tym.update}</span> {tym.time}</h6>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))
                        }
                        {
                            website.map((web, index) => (
                                <ul>
                                    <li>
                                        <div className="biz-icon-cont-blk" key={index}>
                                            <div className="icon">
                                                {web.icon1}
                                            </div>
                                            <div className="details">
                                                <div className='me-auto'>
                                                    <h5>{web.name}</h5>
                                                    <h6><Link to={"www.behance.net"}>{web.link1}</Link> <br /> <Link to={"www.gihub.net"}>{web.link2}</Link></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))
                        }
                        {
                            Contact.map((info, index) => (
                                <ul>
                                    <li>
                                        <div className="biz-icon-cont-blk" key={index}>
                                            <div className="icon" >
                                                {info.icon1}
                                            </div>
                                            <div className="details">

                                                <div className='me-auto'>
                                                    <h5>{info.name}</h5>
                                                    <h6>{info.mob}</h6>
                                                </div>



                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))}
                    </div>

                </div>
            </>
        )
    }
    const MediaDataOption = [
        {
            img: "http://www.w3.org/2000/svg",
            Tooltip: "Media",
            TooltipId: "MediaID",
            path: "M16.625 1.75H4.375C2.8875 1.75 1.75 2.8875 1.75 4.375V16.625C1.75 18.1125 2.8875 19.25 4.375 19.25H16.625C18.1125 19.25 19.25 18.1125 19.25 16.625V4.375C19.25 2.8875 18.1125 1.75 16.625 1.75ZM3.5 4.375C3.5 3.85 3.85 3.5 4.375 3.5H16.625C17.15 3.5 17.5 3.85 17.5 4.375V11.025L14.6125 8.1375C14.2625 7.7875 13.7375 7.7875 13.3875 8.1375L4.1125 17.4125C3.7625 17.325 3.5 16.975 3.5 16.625V4.375ZM6.475 17.5H16.625C17.15 17.5 17.5 17.15 17.5 16.625V13.475L14 9.975L6.475 17.5ZM7.4375 9.625C8.6625 9.625 9.625 8.6625 9.625 7.4375C9.625 6.2125 8.6625 5.25 7.4375 5.25C6.2125 5.25 5.25 6.2125 5.25 7.4375C5.25 8.6625 6.2125 9.625 7.4375 9.625ZM7.875 7.4375C7.875 7.175 7.7 7 7.4375 7C7.175 7 7 7.175 7 7.4375C7 7.7 7.175 7.875 7.4375 7.875C7.7 7.875 7.875 7.7 7.875 7.4375Z"
        },
        {
            img: "http://www.w3.org/2000/svg",
            path: "M15.8754 8.77081C15.6635 8.1214 14.956 7.77619 14.3032 7.9881L12.7514 8.50421L11.7158 5.42804L13.2675 4.91193C13.9204 4.70001 14.2622 3.99591 14.0537 3.34308C13.8417 2.69367 13.1342 2.34845 12.4814 2.56036L10.9296 3.07648L10.393 1.47003C10.1811 0.820618 9.47358 0.475403 8.82075 0.687317C8.16792 0.899231 7.82612 1.60333 8.03461 2.25617L8.57124 3.86261L5.37885 4.92902L4.84223 3.32257C4.63032 2.67316 3.9228 2.32794 3.26997 2.53986C2.61714 2.75177 2.27534 3.45587 2.48383 4.1087L3.02046 5.71515L1.47212 6.22785C0.819284 6.43976 0.477487 7.14386 0.685983 7.79669C0.856881 8.2923 1.33881 8.61701 1.83442 8.63751C2.06684 8.67169 2.24458 8.58283 3.80659 8.06329L4.84223 11.1395L3.29047 11.6556C2.64106 11.8675 2.29585 12.575 2.50434 13.2244C2.67524 13.72 3.15717 14.0447 3.65278 14.0652C3.8852 14.0994 4.06294 14.0106 5.62495 13.491L6.16157 15.0975C6.36323 15.6751 7.00581 16.0887 7.73383 15.8802C8.38667 15.6683 8.72846 14.9642 8.51997 14.3113L7.98335 12.7049L11.1826 11.6351L11.7192 13.2415C11.9208 13.8192 12.5634 14.2327 13.2915 14.0242C13.9443 13.8123 14.2861 13.1082 14.0776 12.4554L13.541 10.8489L15.0927 10.3328C15.7421 10.1277 16.0873 9.42023 15.8754 8.77081ZM7.19038 10.3841L6.15473 7.30109L9.35053 6.23126L10.3862 9.31427L7.19038 10.3841Z",
            Tooltip: "Hashtag",
            TooltipId: "HashtagID"
        },
        {
            img: "http://www.w3.org/2000/svg",
            path: "M6.5 0C2.90643 0 0 3.28666 0 7.35036C0 11.7291 4.10429 17.7669 5.79429 20.0665C6.16571 20.5705 6.84357 20.5705 7.215 20.0665C8.89571 17.7669 13 11.7291 13 7.35036C13 3.28666 10.0936 0 6.5 0ZM6.5 9.97548C5.88432 9.97548 5.29385 9.69891 4.8585 9.2066C4.42315 8.71429 4.17857 8.04658 4.17857 7.35036C4.17857 6.65413 4.42315 5.98642 4.8585 5.49411C5.29385 5.0018 5.88432 4.72523 6.5 4.72523C7.11568 4.72523 7.70615 5.0018 8.1415 5.49411C8.57685 5.98642 8.82143 6.65413 8.82143 7.35036C8.82143 8.04658 8.57685 8.71429 8.1415 9.2066C7.70615 9.69891 7.11568 9.97548 6.5 9.97548Z",
            Tooltip: "Check In",
            TooltipId: "CheckID"
        },
        {
            img: "http://www.w3.org/2000/svg",
            path: "M24.634 14.5714L21.1065 10.9695C20.6377 10.4903 20.001 10.2227 19.3369 10.2227H16.2391C15.5476 10.2227 14.989 10.7938 14.989 11.5006V14.6632C14.989 15.3421 15.2507 15.989 15.7195 16.4682L19.247 20.0701C19.7353 20.5692 20.5283 20.5692 21.0167 20.0701L24.6301 16.3763C25.1223 15.8772 25.1223 15.0705 24.634 14.5714ZM17.493 13.7328C16.9735 13.7328 16.5555 13.3055 16.5555 12.7744C16.5555 12.2433 16.9735 11.816 17.493 11.816C18.0126 11.816 18.4306 12.2433 18.4306 12.7744C18.4306 13.3015 18.0126 13.7328 17.493 13.7328ZM8.75043 10.2187C11.5123 10.2187 13.7507 7.9306 13.7507 5.10737C13.7507 2.28813 11.5123 0 8.75043 0C5.98857 0 3.75018 2.28813 3.75018 5.11136C3.75018 7.9306 5.98857 10.2187 8.75043 10.2187ZM13.7429 14.6592V11.7402C13.2663 11.5964 12.7702 11.4926 12.2506 11.4926H11.5982C10.731 11.8999 9.7661 12.1315 8.75043 12.1315C7.73475 12.1315 6.77377 11.8999 5.90263 11.4926H5.25026C2.35168 11.4966 0 13.9005 0 16.8635V18.5247C0 19.5829 0.839885 20.4415 1.87509 20.4415H15.6258C16.2313 20.4415 16.7625 20.142 17.1063 19.6867L14.8406 17.3706C14.1335 16.6479 13.7429 15.6855 13.7429 14.6592Z",
            Tooltip: "People Tag",
            TooltipId: "PeopleID"
        },
        {
            img: "http://www.w3.org/2000/svg",
            path: "M20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442Z",
            Tooltip: "Schedule Your Post",
            TooltipId: "ScheduleID"
        },
        {
            img: "http://www.w3.org/2000/svg",
            path: "M12 20.9999C16.97 20.9999 21 16.9702 21 12C21 7.02974 16.97 3 12 3C7.03 3 3 7.02974 3 12C3 13.7707 3.512 15.4222 4.395 16.815L3 20.9999L7.745 19.9323C9.07479 20.6408 10.5286 21.0056 12 20.9999Z",
            Tooltip: "Allow Comments",
            TooltipId: "AllowID"
        }

    ]
    const RowSecondSideData = () => {
        return (
            <>
                <div className="create-post">
                    <div className="static-section">
                        <div className="card-title create-port-title">
                            <div className="createpost-blk">
                                <h3>create post</h3>
                            </div>
                            <div className="settings more-settings-blk">
                                <div className="setting-btn ms-2 setting-dropdown no-bg">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                        <div role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false" className="morebtn-cust"> More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="search-input input-style icon-right" >
                            <div className="creatpost-profile-blk">
                                <img
                                    src={Club}
                                    className="img-fluid"
                                    alt="profile"
                                />
                            </div>
                            <textarea
                                name="message"
                                className="form-control enable"
                                cols="30"
                                rows="10"
                                placeholder="What’s  going on? #Hashtag... @Mention."
                                spellCheck="false"

                            ></textarea>

                            <div className="pen-icon-creatpost" role='button'>
                                <img
                                    src={Club}
                                    className="img-fluid icon"
                                    alt="pen"
                                />
                            </div>
                        </div>
                    </div>
                    <Row className="create-btn-cust-option">
                        <Col>
                            <h4>Add to your post</h4>
                        </Col>
                        <Col className='d-flex justify-content-end'>
                            {/* <ul className="create-btn-list tooltip-sec">
                                <li > */}
                            {/* <input className="choose-file" type="file"/> */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" id='positionTop' className="addpost-option-btn" width="21" height="21" viewBox="0 0 21 21" fill="#A6A6A6"><path fillRule="evenodd" clipRule="evenodd" d="M16.625 1.75H4.375C2.8875 1.75 1.75 2.8875 1.75 4.375V16.625C1.75 18.1125 2.8875 19.25 4.375 19.25H16.625C18.1125 19.25 19.25 18.1125 19.25 16.625V4.375C19.25 2.8875 18.1125 1.75 16.625 1.75ZM3.5 4.375C3.5 3.85 3.85 3.5 4.375 3.5H16.625C17.15 3.5 17.5 3.85 17.5 4.375V11.025L14.6125 8.1375C14.2625 7.7875 13.7375 7.7875 13.3875 8.1375L4.1125 17.4125C3.7625 17.325 3.5 16.975 3.5 16.625V4.375ZM6.475 17.5H16.625C17.15 17.5 17.5 17.15 17.5 16.625V13.475L14 9.975L6.475 17.5ZM7.4375 9.625C8.6625 9.625 9.625 8.6625 9.625 7.4375C9.625 6.2125 8.6625 5.25 7.4375 5.25C6.2125 5.25 5.25 6.2125 5.25 7.4375C5.25 8.6625 6.2125 9.625 7.4375 9.625ZM7.875 7.4375C7.875 7.175 7.7 7 7.4375 7C7.175 7 7 7.175 7 7.4375C7 7.7 7.175 7.875 7.4375 7.875C7.7 7.875 7.875 7.7 7.875 7.4375Z" /></svg> */}
                            {/* <div className="tooltip-cls">
                                        <span>Media</span>
                                    </div> */}
                            {/* <span id='positionTop'>Media</span> */}
                            {/* <img src='http://www.w3.org/2000/svg' width="21" height="21" /> */}
                            {/* <UncontrolledTooltip target='positionTop' placement='top'>
                                        Media
                                    </UncontrolledTooltip> */}
                            <ul className="create-btn-list tooltip-sec">
                                {
                                    MediaDataOption.map((e, index) => (
                                        <li key={index}>
                                            <svg xmlns={e.img} id={e.TooltipId} className="addpost-option-btn" width="21" height="21" viewBox="0 0 21 21" fill="#A6A6A6"><path fillRule="evenodd" clipRule="evenodd"
                                                d={e.path} /></svg>
                                            <UncontrolledTooltip target={e.TooltipId} placement='top'>
                                                {e.Tooltip}
                                            </UncontrolledTooltip>
                                        </li>
                                    ))
                                }
                            </ul>

                            {/* </li> */}
                            {/* <li id="hashtag-btn" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="16" height="16" viewBox="0 0 16 16"  ><path 
                                    d="M15.8754 8.77081C15.6635 8.1214 14.956 7.77619 14.3032 7.9881L12.7514 8.50421L11.7158 5.42804L13.2675 4.91193C13.9204 4.70001 14.2622 3.99591 14.0537 3.34308C13.8417 2.69367 13.1342 2.34845 12.4814 2.56036L10.9296 3.07648L10.393 1.47003C10.1811 0.820618 9.47358 0.475403 8.82075 0.687317C8.16792 0.899231 7.82612 1.60333 8.03461 2.25617L8.57124 3.86261L5.37885 4.92902L4.84223 3.32257C4.63032 2.67316 3.9228 2.32794 3.26997 2.53986C2.61714 2.75177 2.27534 3.45587 2.48383 4.1087L3.02046 5.71515L1.47212 6.22785C0.819284 6.43976 0.477487 7.14386 0.685983 7.79669C0.856881 8.2923 1.33881 8.61701 1.83442 8.63751C2.06684 8.67169 2.24458 8.58283 3.80659 8.06329L4.84223 11.1395L3.29047 11.6556C2.64106 11.8675 2.29585 12.575 2.50434 13.2244C2.67524 13.72 3.15717 14.0447 3.65278 14.0652C3.8852 14.0994 4.06294 14.0106 5.62495 13.491L6.16157 15.0975C6.36323 15.6751 7.00581 16.0887 7.73383 15.8802C8.38667 15.6683 8.72846 14.9642 8.51997 14.3113L7.98335 12.7049L11.1826 11.6351L11.7192 13.2415C11.9208 13.8192 12.5634 14.2327 13.2915 14.0242C13.9443 13.8123 14.2861 13.1082 14.0776 12.4554L13.541 10.8489L15.0927 10.3328C15.7421 10.1277 16.0873 9.42023 15.8754 8.77081ZM7.19038 10.3841L6.15473 7.30109L9.35053 6.23126L10.3862 9.31427L7.19038 10.3841Z" /></svg>
                                    <div className="tooltip-cls">
                                        <span>Hashtag</span>
                                    </div>
                                </li> */}
                            {/* <li id="checkin-btn" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="13" height="21" viewBox="0 0 13 21" ><path 
                                    d="M6.5 0C2.90643 0 0 3.28666 0 7.35036C0 11.7291 4.10429 17.7669 5.79429 20.0665C6.16571 20.5705 6.84357 20.5705 7.215 20.0665C8.89571 17.7669 13 11.7291 13 7.35036C13 3.28666 10.0936 0 6.5 0ZM6.5 9.97548C5.88432 9.97548 5.29385 9.69891 4.8585 9.2066C4.42315 8.71429 4.17857 8.04658 4.17857 7.35036C4.17857 6.65413 4.42315 5.98642 4.8585 5.49411C5.29385 5.0018 5.88432 4.72523 6.5 4.72523C7.11568 4.72523 7.70615 5.0018 8.1415 5.49411C8.57685 5.98642 8.82143 6.65413 8.82143 7.35036C8.82143 8.04658 8.57685 8.71429 8.1415 9.2066C7.70615 9.69891 7.11568 9.97548 6.5 9.97548Z" /></svg>
                                    <div className="tooltip-cls">
                                        <span>Check In</span>
                                    </div>
                                </li> */}
                            {/* <li id="friends-btn" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="25" height="21" viewBox="0 0 25 21" ><path
                                        d="M24.634 14.5714L21.1065 10.9695C20.6377 10.4903 20.001 10.2227 19.3369 10.2227H16.2391C15.5476 10.2227 14.989 10.7938 14.989 11.5006V14.6632C14.989 15.3421 15.2507 15.989 15.7195 16.4682L19.247 20.0701C19.7353 20.5692 20.5283 20.5692 21.0167 20.0701L24.6301 16.3763C25.1223 15.8772 25.1223 15.0705 24.634 14.5714ZM17.493 13.7328C16.9735 13.7328 16.5555 13.3055 16.5555 12.7744C16.5555 12.2433 16.9735 11.816 17.493 11.816C18.0126 11.816 18.4306 12.2433 18.4306 12.7744C18.4306 13.3015 18.0126 13.7328 17.493 13.7328ZM8.75043 10.2187C11.5123 10.2187 13.7507 7.9306 13.7507 5.10737C13.7507 2.28813 11.5123 0 8.75043 0C5.98857 0 3.75018 2.28813 3.75018 5.11136C3.75018 7.9306 5.98857 10.2187 8.75043 10.2187ZM13.7429 14.6592V11.7402C13.2663 11.5964 12.7702 11.4926 12.2506 11.4926H11.5982C10.731 11.8999 9.7661 12.1315 8.75043 12.1315C7.73475 12.1315 6.77377 11.8999 5.90263 11.4926H5.25026C2.35168 11.4966 0 13.9005 0 16.8635V18.5247C0 19.5829 0.839885 20.4415 1.87509 20.4415H15.6258C16.2313 20.4415 16.7625 20.142 17.1063 19.6867L14.8406 17.3706C14.1335 16.6479 13.7429 15.6855 13.7429 14.6592Z" /></svg>
                                    <div className="tooltip-cls">
                                        <span>People Tag</span>
                                    </div>
                                </li> */}
                            {/* <li id="schedule-btn" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="24" height="24" viewBox="0 0 24 24" ><path 
                                    d="M20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442Z" /><path d="M12 8V12L15 15M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#A6A6A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 8V12L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
                                    <div className="tooltip-cls">
                                        <span>Schedule Your Post</span>
                                    </div>
                                </li>
                                <li id="comment-btn" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="addpost-option-btn" width="24" height="24" viewBox="0 0 24 24" ><path 
                                    d="M12 20.9999C16.97 20.9999 21 16.9702 21 12C21 7.02974 16.97 3 12 3C7.03 3 3 7.02974 3 12C3 13.7707 3.512 15.4222 4.395 16.815L3 20.9999L7.745 19.9323C9.07479 20.6408 10.5286 21.0056 12 20.9999Z" /><line x1="7" y1="9" x2="17" y2="9" stroke="white" strokeLinecap="round" /><line x1="7" y1="12" x2="17" y2="12" stroke="white" strokeLinecap="round" /><line x1="7" y1="15" x2="17" y2="15" stroke="white" strokeLinecap="round" /></svg>
                                    <div className="tooltip-cls">
                                        <span>Allow Comments</span>
                                    </div>
                                </li> */}
                            {/* </ul> */}
                        </Col>
                    </Row>

                    <div id="post-btn" className="post-btn">
                        <button className={'btn btn-solid'}  >post</button>
                    </div>

                </div>
                <div className="post-panel section-t-space">
                    <div className="post-wrapper col-grid-box section-b-space">
                        <div className="post-title">
                            <div className="profile">
                                <div className="media">
                                    <a className="popover-cls user-img" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img="assets/images/my-profile.jpg">
                                        <img src={Club}
                                            className="img-fluid bg-img" alt="user" />
                                    </a>
                                    <div className="media-body">
                                        <h5>The Director Club</h5>
                                        <h6>30 mins ago</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="setting-btn ms-auto setting-dropdown no-bg">
                                <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                    <div role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-font-color iw-14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                        <ul>
                                            <li>
                                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>save post</a>
                                            </li>
                                            <li>
                                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>hide post</a>
                                            </li>
                                            <li>
                                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>unfollow sufiya</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-details">
                            <div className="img-wrapper">

                                <MediaInfo />
                            </div>
                            <div className="detail-box">
                                <h3>Celebration new album song launched</h3>
                                <h5 className="tag"><span>#Musiccelebration,</span> #music, #party, #music
                                </h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    has been the industry's standard dummy text ever since the 1500s
                                </p>
                                <div className="bookmark favourite-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="people-likes">
                                    <ul>
                                        <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                            data-name="sufiya eliza" data-img="assets/images/story-2.jpg">
                                            <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt="" />
                                        </li>
                                        <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                            data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                            <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt="" />
                                        </li>
                                        <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                            data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                            <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt="" />
                                        </li>
                                    </ul>
                                    <h6>+12 people react this post</h6>
                                </div>
                            </div>
                            <div className="like-panel">
                                <div className="left-emoji">
                                    <ul>
                                        <li>
                                            <img src="assets/svg/emoji/040.svg" alt="smile" />
                                        </li>
                                        <li>
                                            <img src="assets/svg/emoji/113.svg" alt="heart" />
                                        </li>
                                        <li>
                                            <img src="assets/svg/emoji/027.svg" alt="cry" />
                                        </li>
                                        <li>
                                            <img src="assets/svg/emoji/033.svg" alt="angry" />
                                        </li>
                                    </ul>
                                    <h6>+75</h6>
                                </div>
                                <div className="right-stats">
                                    <ul>
                                        <li>
                                            <h5>
                                                <i className="iw-16 ih-16" data-feather="message-square"></i>
                                                <span>4565</span> comment
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <i className="iw-16 ih-16" data-feather="share"></i><span>985</span>
                                                share
                                            </h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="post-react">
                                <ul>
                                    <li className="react-btn">
                                        <a className="react-click" href="#">
                                            <div className="post-btn-cust selected"><img src="assets/images/like.png" /></div> react
                                        </a>
                                        <div className="react-box">
                                            <ul>
                                                <li data-title="smile">
                                                    <a href="#">
                                                        <img src="assets/svg/emoji/040.svg" alt="smile" />
                                                    </a>
                                                </li>
                                                <li data-title="love">
                                                    <a href="#">
                                                        <img src="assets/svg/emoji/113.svg" alt="heart" />
                                                    </a>
                                                </li>
                                                <li data-title="cry">
                                                    <a href="#">
                                                        <img src="assets/svg/emoji/027.svg" alt="cry" />
                                                    </a>
                                                </li>
                                                <li data-title="wow">
                                                    <a href="#">
                                                        <img src="assets/svg/emoji/052.svg" alt="angry" />
                                                    </a>
                                                </li>
                                                <li data-title="angry">
                                                    <a href="#">
                                                        <img src="assets/svg/emoji/039.svg" alt="angry" />
                                                    </a>
                                                </li>
                                                <li data-title="haha">
                                                    <a href="#">
                                                        <img src="assets/svg/emoji/042.svg" alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="comment-click">
                                        <a href="#">
                                            <div className="post-btn-cust selected"><img src="assets/images/comment.png" /></div> comment
                                        </a>
                                    </li>
                                    <li data-bs-target="#shareModal" data-bs-toggle="modal">
                                        <a href="#">
                                            <div className="post-btn-cust"><img src="assets/images/share.png" /></div> share
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="comment-section">
                                <div className="reply">
                                    <div className="search-input input-style input-lg icon-right">
                                        <input type="text" className="form-control emojiPicker"
                                            placeholder="write a comment.." />
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-2 iw-14 ih-14"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                        </a>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iw-14 ih-14"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
    const MediaInfo = () => {
        return (
            <>

                {/* <Row>
                    <div class="col-lg-8 col-md-8 mb-8 mb-lg-0 ml-0">
                        <img
                            src="assets/images/post-9.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </div>
                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="assets/images/post-9.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />
                        <img
                            src="assets/images/post-9.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />

                    </div>

                    

                </Row> */}
                <div className="img-wrapper">
                    <div className="gallery-section">
                        <div className="portfolio-section ratio_square">
                            <div className="container-fluid p-0">
                                <div className="row">
                                    <div className="col-8 pt-cls">
                                        <div className="overlay">
                                            <div className="portfolio-image">
                                                <a href="#" data-bs-toggle="modal"
                                                    data-bs-target="#imageModel">
                                                    <img src={Post} alt="dpk-IMG" className="img-fluid bg-img" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 row m-0">
                                        <div className="col-12 pt-cls p-0">
                                            <div className="overlay">
                                                <div className="portfolio-image">
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#imageModel">
                                                        <img src={Post} alt="" className="img-fluid bg-img" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 pt-cls p-0">
                                            <div className="overlay image-plus">
                                                <div className="portfolio-image">
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#imageModel">
                                                        <img src={Post} alt="" className="img-fluid bg-img" />
                                                        <span>+20</span>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    // Main_Return_function
    return (
        <>
            <Header />
            <div className="page-body container-fluid profile-page">
                <LeftSidebar />
                <div className="page-center">
                    <div className="content-center w-100">
                        <div className="gdpost-about-blk">
                            <BizTopBanner />
                            <BizDetailMenu />
                            <Row className='mt-3'>
                                <Col md={4}>
                                    <RowFirstSideData />
                                </Col>
                                <Col md={8}>
                                    <RowSecondSideData />
                                </Col>
                            </Row>

                        </div>
                    </div>

                </div>
                <RightSidebar />
            </div>
        </>
    )
}

export default PostBiz