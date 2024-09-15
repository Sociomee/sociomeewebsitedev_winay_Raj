import React,{Component} from 'react'; 
import { NavLink } from "react-router-dom";
import Birthday from './left-right-components/Birthday';
import Gallery from './left-right-components/Gallery';
import Event from './left-right-components/Event';

export  default function ContentRight() {  

  return (
    <>
    <div className="content-right">
      <Birthday></Birthday>
      <Gallery></Gallery>
      <Event></Event>
    </div>
    </>
  );
} 
