// import React, { Component, useState } from 'react';
// import { NavLink } from "react-router-dom";
// import { Button } from 'reactstrap';

// export default function BizTopBanner() {

//     return (
//         <>
//             <div className="group-details-top biz-details-top">
//                 <div className="gd-top-block" style={{ background: "url(assets/images/bizcover.jpg)" }}>
//                     {/* <div className="gd-top-btns">
//                         <a href="#" className="grey-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
//                         <a href="#" className="grey-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit </a>
//                     </div> */}
//                 </div>
//                 <div className="heading-title-blk head-title-biz">
//                     <div className="row align-items-center">
//                         <div className="col-xl-4 col-lg-4 col-12 order-lg-2">
//                             <div className="biz-user-pro-blk">
//                                 <img src="assets/images/ProductImg1.jpg" />
//                                 <h5>THE DETECTOR CLUB</h5>
//                                 <p><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>  228 Hope Street Glasgow, G2 3PN 0141 332</p>
//                             </div>
//                         </div>
//                         <div className="col-xl-4 col-lg-4 col-12 order-lg-1">
//                             <div className="gd-content-area-top-blk">
//                                 <div className="groupmember-blk">
//                                     <span> Entertainment</span> • <span>Magic</span>
//                                 </div>
//                                 <div className="people-likes matual-friend-sec">
//                                     <ul className="matual-friend-blk">
//                                         <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                             data-name="sufiya eliza" data-img="assets/images/story-2.jpg">
//                                             <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt="" />
//                                         </li>
//                                         <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                             data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
//                                             <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt="" />
//                                         </li>
//                                         <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                             data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
//                                             <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt="" />
//                                         </li>
//                                         <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                             data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
//                                             <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt="" />
//                                         </li>
//                                         <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                             data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
//                                             <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt="" />
//                                         </li>
//                                     </ul>
//                                     <h6>+54 Visited today</h6>
//                                 </div>
//                                 <div className="people-likes matual-friend-sec">
//                                     <ul className="matual-friend-blk">
//                                         <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                             data-name="sufiya eliza" data-img="assets/images/story-2.jpg">
//                                             <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt="" />
//                                         </li>
//                                         <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                             data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
//                                             <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt="" />
//                                         </li>
//                                         <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                             data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
//                                             <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt="" />
//                                         </li>
//                                         <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                             data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
//                                             <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt="" />
//                                         </li>
//                                         <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
//                                             data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
//                                             <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt="" />
//                                         </li>
//                                     </ul>
//                                     <h6>+12k members</h6>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-xl-4 col-lg-4 col-12 order-lg-3">
//                             <ul className="followlist-blk">
//                                 <li>2.6/4.5<span>Rating</span></li>
//                                 {/* <li>42k<span>Likes</span></li> */}
//                                 <li>52<span>Posts</span></li>
//                                 <li>524<span>Followers</span></li>
//                                 {/* <li>502<span>Follow</span></li> */}
//                             </ul>
//                             {/* <div className="create-biz-btn"><NavLink to="/CreateBiz" className="btn btn-primary green-clr-btn">Create BizPage</NavLink></div> */}
//                             <div className="create-biz-btn light-green">
//                                 <Button
//                                     outline
//                                     color="info"
//                                 >
//                                     Setup action Button
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </>
//     );
// } 
import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import ProductImg from './Img/ProductImg1.jpg'
import AvatarGroup from '@atlaskit/avatar-group'

const BizTopBanner = () => {
    const ProfileAvatar = (props) => {
        const AvatarData = [
            {
                src: "assets/images/story-2.jpg"
            },
            {
                src: "assets/images/story-3.jpg"
            },
            {
                src: "assets/images/story-4.jpg"
            },
            {
                src: "assets/images/story-2.jpg"
            }

        ]
        return (
            <>
                <div className="people-likes matual-friend-sec">
                    {/* <ul className="matual-friend-blk">
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
                        <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                            data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                            <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt="" />
                        </li>
                        <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                            data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                            <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt="" />
                        </li>
                    </ul> */}
                    <AvatarGroup data={AvatarData} appearance="stack" />
                    <h6>{props.headingName}</h6>
                </div>
            </>
        )
    }
    return (
        <>
            <Row className="group-details-top biz-details-top">
                <div className="gd-top-block" style={{ background: "url(assets/images/bizcover.jpg)" }}></div>
                <div className="heading-title-blk head-title-biz">
                    <Row className='align-items-center '>
                        <Col xl={4} lg={4} className="order-lg-2">
                            <div className="biz-user-pro-blk">
                                <img src={ProductImg} />
                                <h5>THE DETECTOR CLUB</h5>
                                <p><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>  228 Hope Street Glasgow, G2 3PN 0141 332</p>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} className="order-lg-1">
                            <div className="gd-content-area-top-blk">
                                <div className="groupmember-blk">
                                    <span> Entertainment</span> • <span>Magic</span>
                                </div>
                                <ProfileAvatar
                                    headingName={"+54 Visited today"}
                                />
                                <ProfileAvatar
                                    headingName={"+26 Visited today"}
                                />
                            </div>
                        </Col>
                        <Col xl={4} lg={4} className="order-lg-3">
                            <ul className="followlist-blk">
                                <li>2.6/4.5<span>Rating</span></li>
                                <li>{52}<span>Posts</span></li>
                                <li>{524}<span>Followers</span></li>
                            </ul>
                            <div className="create-biz-btn light-green">
                                <Button
                                    outline
                                    color="info"
                                >
                                    Setup action Button
                                </Button>
                            </div>

                        </Col>
                    </Row>

                </div>
            </Row>
        </>
    )
}

export default BizTopBanner