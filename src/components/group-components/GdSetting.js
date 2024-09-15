import React,{Component, useState} from 'react'; 
import { NavLink } from "react-router-dom";
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import GroupDetailMenu from './GroupDetailMenu';
import Models from './Models';

class GdSetting extends Component {  

    constructor() {
        super();
      
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange() {
        this.setState({
          checked: !this.state.checked
      })
    }

    render() {
        const content = this.state.checked 
    	? <div className="gd-set-noti-blk">
            <ul>
                <li>
                    <p>Comments on Group Posts</p>
                    <div className="checkbox_animated">
                        <div>
                            <input type="checkbox" name="gender" id="comment-post"/>
                            <label for="comment-post"></label>
                        </div>
                    </div>
                </li>
                <li>
                    <p>New Followers on Group</p>
                    <div className="checkbox_animated">
                        <div>
                            <input type="checkbox" name="gender" id="follow-group"/>
                            <label for="follow-group"></label>
                        </div>
                    </div>
                </li>
                <li>
                    <p>Likes on Group posts</p>
                    <div className="checkbox_animated">
                        <div>
                            <input type="checkbox" name="gender" id="like-post"/>
                            <label for="like-post"></label>
                        </div>
                    </div>
                </li>
                <li>
                    <p>Group post shares</p>
                    <div className="checkbox_animated">
                        <div>
                            <input type="checkbox" name="gender" id="post-share"/>
                            <label for="post-share"></label>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        : null;

        return (
        <>
            <Header></Header>
            <div className="page-body container-fluid profile-page">
            <LeftSidebar></LeftSidebar>
            <div className="page-center">
                <div className="group-details-top">
                    <div className="gd-top-block" style={{background:"url(assets/images/gd-banner.jpg)"}}>
                        <div className="gd-top-btns">
                            <a href="#" className="grey-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Invite People</a>
                            <a href="#" className="grey-btn"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-13 ih-13"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit </a>
                        </div>
                    </div>
                    <div className="heading-title-blk">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
                                <h3>Holland Night Club</h3>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
                                <ul className="followlist-blk">
                                    <li>4k<span>Likes</span></li>
                                    <li>52<span>Posts</span></li>
                                    <li>524<span>Followers</span></li>
                                    <li>502<span>Follow</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="gd-content-area-top-blk">
                        <div className="groupmember-blk">
                            <span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-10 ih-10"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Public Group</span> • <span>Friend</span> 
                        </div>
                        <div className="people-likes matual-friend-sec">
                            <ul className="matual-friend-blk">
                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                    data-name="sufiya eliza" data-img="assets/images/story-2.jpg">
                                    <img src="assets/images/story-2.jpg" className="img-fluid bg-img" alt=""/>
                                </li>
                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                    data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                    <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                                </li>
                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                    data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                    <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                                </li>
                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                    data-name="sufiya eliza" data-img="assets/images/story-3.jpg">
                                    <img src="assets/images/story-3.jpg" className="img-fluid bg-img" alt=""/>
                                </li>
                                <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                    data-name="sufiya eliza" data-img="assets/images/story-4.jpg">
                                    <img src="assets/images/story-4.jpg" className="img-fluid bg-img" alt=""/>
                                </li>
                            </ul>
                            <h6>+75 members</h6>
                        </div>
                        <p>The #1 Platform for Virtual Sales Teams. Get visibility into your conversations and deals with Revenue...</p>
                    </div>
                </div>
                <GroupDetailMenu></GroupDetailMenu>

                <div className="container-fluid section-t-space px-0">
                    <div className="page-content">
                        <div className="content-center w-100">
                            <div className="gd-setting-block">
                                <div className="gd-setting-head">
                                    <h3>Group Setting</h3>
                                </div>
                                <div className="gd-setting-cont">
                                    <div className="gdsetting-toggle-box">
                                        <div className="gd-setting-toggle-cont">
                                            <h4>Pin Group</h4>
                                            <p>Your pinned Group will appear on top of your Group list. Your currently pinned group is "Gong Advertisement."</p>
                                            <p><a href="#">Unpin Gong Advertisment</a></p>
                                        </div>
                                        <div className="gd-setting-toggle toggle-sec">
                                            <div className="button toggle-btn">
                                                <input type="checkbox" className="checkbox"/>
                                                <div className="knobs">
                                                    <span></span>
                                                </div>
                                                <div className="layer"></div>
                                            </div>
                                            <label>Public / Private</label>
                                        </div>
                                    </div>
                                    <div className="gdsetting-toggle-box">
                                        <div className="gd-setting-toggle-cont">
                                            <h4>Group Visibility</h4>
                                            <p>Your default Group visibility is public. Turn off visibility to make your Group appear only to members with a role in the Group.</p>
                                        </div>
                                        <div className="gd-setting-toggle toggle-sec">
                                            <div className="button toggle-btn">
                                                <input type="checkbox" className="checkbox"/>
                                                <div className="knobs">
                                                    <span></span>
                                                </div>
                                                <div className="layer"></div>
                                            </div>
                                            <label>Public / Private</label>
                                        </div>
                                    </div>
                                    <div className="gdsetting-toggle-box">
                                        <div className="gd-setting-toggle-cont">
                                            <h4>Review Post</h4>
                                            <p>Review all posts by members before it gets posted.</p>
                                        </div>
                                        <div className="gd-setting-toggle toggle-sec">
                                            <div className="button toggle-btn">
                                                <input type="checkbox" className="checkbox"/>
                                                <div className="knobs">
                                                    <span></span>
                                                </div>
                                                <div className="layer"></div>
                                            </div>
                                            <label>Public / Private</label>
                                        </div>
                                    </div>
                                    <div className="gdsetting-toggle-box">
                                        <div className="gd-setting-toggle-cont">
                                            <h4>Review Member</h4>
                                            <p>Review Group join requests.</p>
                                        </div>
                                        <div className="gd-setting-toggle toggle-sec">
                                            <div className="button toggle-btn">
                                                <input type="checkbox" className="checkbox"/>
                                                <div className="knobs">
                                                    <span></span>
                                                </div>
                                                <div className="layer"></div>
                                            </div>
                                            <label>Public / Private</label>
                                        </div>
                                    </div>
                                    <div className="gdsetting-toggle-box">
                                        <div className="gd-setting-toggle-cont">
                                            <h4>Group post shares to stories</h4>
                                            <p>Turn off to prohibit sharing of Group posts to personal profile stories</p>
                                        </div>
                                        <div className="gd-setting-toggle toggle-sec">
                                            <div className="button toggle-btn">
                                                <input type="checkbox" className="checkbox"/>
                                                <div className="knobs">
                                                    <span></span>
                                                </div>
                                                <div className="layer"></div>
                                            </div>
                                            <label>Public / Private</label>
                                        </div>
                                    </div>
                                    <div className='gd-setting-delete-group'>
                                        <div className="row align-items-center">
                                            <div className="col-md-6"><h4>Delete Group</h4></div>
                                            <div className="col-md-6">
                                                <div className="gd-delete-btn"><a className="btn btn-primary">Delete “Holland Night Club” permanently</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gd-setting-block">
                                <div className="gd-setting-head">
                                    <h3>Notification Settings</h3>
                                </div>
                                <div className="gd-setting-cont">
                                    <div className="gd-setting-notification-block">
                                        <div className="gdsetting-toggle-box">
                                            <div className="gd-setting-toggle-cont">
                                                <h4>Notification on Sociomee</h4>
                                                <p>This will enable notifications for activities on your Group.</p>
                                            </div>
                                            <div className="gd-setting-toggle toggle-sec">
                                                <div className="button toggle-btn">
                                                    <input type="checkbox" className="checkbox" checked={ this.state.checked } onChange={ this.handleChange }/>
                                                    <div className="knobs">
                                                        <span></span>
                                                    </div>
                                                    <div className="layer"></div>
                                                </div>
                                                <label>Yes / No</label>
                                            </div>
                                        </div>
                                        { content }
                                    </div>
                                    <div className="gd-setting-notification-block">
                                        <div className="gdsetting-toggle-box">
                                            <div className="gd-setting-toggle-cont">
                                                <h4>Notification on Sociomee</h4>
                                                <p>This will enable notifications for activities on your Group.</p>
                                                <p><a href="#">testman@mail.com</a></p>
                                            </div>
                                            <div className="gd-setting-toggle toggle-sec">
                                                <div className="button toggle-btn">
                                                    <input type="checkbox" className="checkbox"/>
                                                    <div className="knobs">
                                                        <span></span>
                                                    </div>
                                                    <div className="layer"></div>
                                                </div>
                                                <label>Yes / No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <RightSidebar></RightSidebar>
            </div>
            <Models></Models>
        </>
        );
    }
} 

export default GdSetting 