import React, { Component, useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import history from './history';
import Home from "./components/Home";
import Login from "./components/login-components/Login";
import Signup from "./components/login-components/Signup";
import Otp from "./components/login-components/Otp";
import SignupEmail from "./components/login-components/SignupEmail";
import SignupProfile from "./components/login-components/SignupProfile";
import SignupDetail from "./components/login-components/SignupDetail";
import SignupInterest from "./components/login-components/SignupInterest";
import ForgotPassword from "./components/login-components/ForgotPassword";
import ForgotPasswordOtp from "./components/login-components/ForgotPasswordOtp";
import ResetPassword from "./components/login-components/ResetPassword";
import MyTimeline from "./components/profile-components/MyTimeline";
import MyProfile from "./components/profile-components/MyProfile";
import MyMedia from "./components/profile-components/MyMedia";
import MyMediaListView from "./components/profile-components/MyMediaListView";
import MyShotz from "./components/profile-components/MyShotz";
import MyPodcast from "./components/profile-components/MyPodcast";
import MyPodcastDetails from "./components/profile-components/MyPodcastDetails";
import Group from "./components/group-components/Group";
import OwnedGroup from "./components/group-components/OwnedGroup";
import JoinedGroup from "./components/group-components/JoinedGroup";
import InviteGroup from "./components/group-components/InviteGroup";
import GroupJointRequest from "./components/group-components/GroupJointRequest";
import GroupDetail from "./components/group-components/GroupDetail";
import GroupMember from "./components/group-components/GroupMember";
import GdBlockedPeople from "./components/group-components/GdBlockedPeople";
import GdPostRequest from "./components/group-components/GdPostRequest";
import GdSetting from "./components/group-components/GdSetting";
import GdAbout from "./components/group-components/GdAbout";
import Biz from "./components/biz-components/Biz";
import OwnedBiz from "./components/biz-components/OwnedBiz";
import JoinedBiz from "./components/biz-components/JoinedBiz";
import BizDetail from "./components/biz-components/BizDetail";
import BizAbout from "./components/biz-components/BizAbout";
import BizPost from "./components/biz-components/BizPost";
import BizReview from "./components/biz-components/BizReview";
import BizPhotos from "./components/biz-components/BizPhotos";
import CreateBiz from "./components/biz-components/CreateBiz";
import CreateBizPage from "./components/biz-components/CreateBizPage";
import Favorites from "./components/Favorites";
import { useEffect } from "react";
import AdManager from "./components/ad-manager-components/AdManager";
import AdPausd from "./components/ad-manager-components/AdPausd";
import AdDrafted from "./components/ad-manager-components/AdDrafted";
import AdApprovalPending from "./components/ad-manager-components/AdApprovalPending";
import AdCompleted from "./components/ad-manager-components/AdCompleted";
import AdTransactionSummary from "./components/ad-manager-components/AdTransactionSummary";
import AdAllTransactionSummary from "./components/ad-manager-components/AdAllTransactionSummary";
import Marketplace from "./components/marketplace-components/Marketplace";
import MpPending from "./components/marketplace-components/MpPending";
import MpSale from "./components/marketplace-components/MpSale";
import MpSold from "./components/marketplace-components/MpSold";
import MpDetail from "./components/marketplace-components/MpDetail";
import Tops from "./components/top-trending-components/Tops";
import Trending from "./components/top-trending-components/Trending";
import GoLive from "./components/golive-components/GoLive";
import GoLiveDetail from "./components/golive-components/GoLiveDetail";
import CreateGoLive from "./components/golive-components/CreateGoLive";
import CreateGoLiveDetail from "./components/golive-components/CreateGoLiveDetail";

const Root = () => {
    const [userProfile, setUserProfile] = useState('');

    return (
        // <Router history={history}>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/Signup" element={<Signup />} />
                <Route exact path="/Otp" element={<Otp />} />
                <Route exact path="/SignupEmail" element={<SignupEmail />} />
                <Route exact path="/SignupProfile" element={<SignupProfile />} />
                <Route exact path="/SignupDetail" element={<SignupDetail />} />
                <Route exact path="/SignupInterest" element={<SignupInterest />} />
                <Route exact path="/ForgotPassword" element={<ForgotPassword/>}/>
                <Route exact path="/ForgotPasswordOtp" element={<ForgotPasswordOtp/>}/>
                <Route exact path="/ResetPassword" element={<ResetPassword/>}/>
                <Route exact path="/Home" element={<Home />} />
                <Route exact path="/MyTimeline" element={<MyTimeline />} />
                <Route exact path="/MyProfile" element={<MyProfile />} />
                <Route exact path="/MyMedia" element={<MyMedia />} />
                <Route exact path="/MyMediaListView" element={<MyMediaListView />} />
                <Route exact path="/MyShotz" element={<MyShotz />} />
                <Route exact path="/MyPodcast" element={<MyPodcast />} />
                <Route exact path="/MyPodcastDetails" element={<MyPodcastDetails />} />
                <Route exact path="/favorites" element={<Favorites />} />
                <Route exact path="/Group" element={<Group />} />
                <Route exact path="/OwnedGroup" element={<OwnedGroup />} />
                <Route exact path="/JoinedGroup" element={<JoinedGroup />} />
                <Route exact path="/InviteGroup" element={<InviteGroup />} />
                <Route exact path="/GroupJointRequest" element={<GroupJointRequest />} />
                <Route exact path="/GroupDetail" element={<GroupDetail />} />
                <Route exact path="/GroupMember" element={<GroupMember />} />
                <Route exact path="/GdBlockedPeople" element={<GdBlockedPeople />} />
                <Route exact path="/GdPostRequest" element={<GdPostRequest />} />
                <Route exact path="/GdSetting" element={<GdSetting />} />
                <Route exact path="/GdAbout" element={<GdAbout />} />
                <Route exact path="/Biz" element={<Biz/>}/>
                <Route exact path="/OwnedBiz" element={<OwnedBiz/>}/>
                <Route exact path="/JoinedBiz" element={<JoinedBiz/>}/>
                <Route exact path="/BizDetail" element={<BizDetail/>}/>
                <Route exact path="/BizAbout" element={<BizAbout/>}/>
                <Route exact path="/BizPost" element={<BizPost/>}/>
                <Route exact path="/BizReview" element={<BizReview/>}/>
                <Route exact path="/BizPhotos" element={<BizPhotos/>}/>
                <Route exact path="/CreateBiz" element={<CreateBiz/>}/>
                <Route exact path="/CreateBizPage" element={<CreateBizPage/>}/>
                <Route exact path="/AdManager" element={<AdManager />} />
                <Route exact path="/AdPausd" element={<AdPausd />} />
                <Route exact path="/AdDrafted" element={<AdDrafted />} />
                <Route exact path="/AdApprovalPending" element={<AdApprovalPending />} />
                <Route exact path="/AdCompleted" element={<AdCompleted />} />
                <Route exact path="/TransactionSummary" element={<AdTransactionSummary />} />
                <Route exact path="/AllTransactionSummary" element={<AdAllTransactionSummary />} />
                <Route exact path="/Marketplace" element={<Marketplace/>}/>
                <Route exact path="/MpPending" element={<MpPending/>}/>
                <Route exact path="/MpSale" element={<MpSale/>}/>
                <Route exact path="/MpSold" element={<MpSold/>}/>
                <Route exact path="/MpDetail" element={<MpDetail/>}/>
                <Route exact path="/Tops" element={<Tops/>}/>
                <Route exact path="/Trending" element={<Trending/>}/>
                <Route exact path="/GoLive" element={<GoLive/>}/>
                <Route exact path="/GoLiveDetail" element={<GoLiveDetail/>}/>
                <Route exact path="/CreateGoLive" element={<CreateGoLive/>}/>
                <Route exact path="/CreateGoLiveDetail" element={<CreateGoLiveDetail/>}/>
                {/* <Route path="*" element={<NotFound/>}/> */}
            </Routes>
        // </Router>
    )
}
export default Root 