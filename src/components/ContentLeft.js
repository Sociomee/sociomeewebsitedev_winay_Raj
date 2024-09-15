import React,{Component} from 'react'; 
import { NavLink } from "react-router-dom";
import ProfileBox from './left-right-components/ProfileBox';
import FriendSuggestion from './left-right-components/FriendSuggestion';
import FriendRequest from './left-right-components/FriendRequest';
import LikedBizPage from './left-right-components/LikedBizPage';
import Weather from './left-right-components/Weather';

export  default function ContentLeft() {  
  
  return (
    <>
    <div className="content-left">
      <ProfileBox></ProfileBox>
      <FriendSuggestion></FriendSuggestion>
      <FriendRequest></FriendRequest>
      <LikedBizPage></LikedBizPage>
      <Weather></Weather>
    </div>
    </>
  );
} 
