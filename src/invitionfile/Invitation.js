import { useState,useRef } from 'react';
import { useLocation } from "react-router-dom";
import Invition from '../data'
import {React, useEffect} from 'react'
import Rellax from "rellax";

export default function Invitation(props) {
  const location = useLocation();
  console.log(location.state.tags)
  const rellaxRef = useRef();
  let img 
  let imgbg 
  Invition.map((subject)=>{
    if(location.state.tags === subject.name){
      img = subject.invitation.img
      imgbg = subject.invitation.imgbg
      console.log(img,imgbg)
    }
  })
  useEffect(() => {
    new Rellax(rellaxRef.current, {
      speed: 4,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }, []);

useEffect(() => {
  document.getElementsByClassName("sticky")[0].style.display = "none";
  
}, []);

  
  return (
    <>
      <div className="invitation-page" >
        <img  src={imgbg} alt="img" />
        <div className='front' ref={rellaxRef} >
          <img src={img} alt="img" />
        </div>
      </div>
    </>
  )
}
