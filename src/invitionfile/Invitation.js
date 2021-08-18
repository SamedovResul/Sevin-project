import { useState,useRef,  } from 'react';
import { useLocation } from "react-router-dom";
import {useSpring, animated} from 'react-spring'
import Invition from '../data'
import {React, useEffect} from 'react'
import Rellax from "rellax";

export default function Invitation(props) {
  const location = useLocation();
  const rellaxRef = useRef();
  let img 
  let imgbg 
  let css

  Invition.map((subject)=>{
    if(location.state.tags === subject.name){
      css = subject
      img = subject.invitation.img
      imgbg = subject.invitation.imgbg
       
    }
  })
  console.log(css.color)
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
  console.log(css.Topx)

  const map = useSpring({
    loop: css.Frompx === 0 ? false : true ,
    to: [{background:  css.Tobackground,
        boxShadow: `0 0 ${css.Topx} ${css.Toshadow} , 0 0 ${css.Topx} ${css.Toshadow}, 0 0 ${css.Topx} ${css.Toshadow}`,
        color: css.color,
        border: `1px solid ${css.border}`
    }],
    from: {
      background:  css.Frombackground,
      boxShadow: `0 0 0px ${css.fromshadow} , 0 0 0px ${css.fromshadow}, 0 0 0px ${css.fromshadow}`,
      color: css.color,
      border: `1px solid ${css.border}`
    },
    config: {
      duration: 3500,
    },
	})



useEffect(() => {
  document.getElementsByClassName("sticky")[0].style.display = "none";
  document.body.style.overflow = 'auto'
}, []);

  const spanOne = {
    background: `linear-gradient(90deg, transparent, ${css.span})`,
  }
  const spanTwo = {
    background: `linear-gradient(180deg, transparent, ${css.span})`,
  }
  const spanThree = {
    background: `linear-gradient(270deg, transparent, ${css.span})`,
    
  }
  const spanFour = {
    background: `linear-gradient(360deg, transparent, ${css.span})`,
  }
  


  return (
    <>
      <article className="invitation-page" >
        <img  src={imgbg} alt="img" />
        <div className='front' ref={rellaxRef} >
          <img src={img} alt="img" />
        </div>
        <animated.div style={map} className='map' onClick={() => window.open( 'https://www.google.co.uk/maps/place/Baku+Castle/@40.3961313,49.853478,17z/data=!3m1!4b1!4m5!3m4!1s0x40307d23b67ab439:0xa464c3f6a03ab335!8m2!3d40.3961272!4d49.8556667')}>
          Ünvana baxın
          <span  style={spanOne} ></span>
          <span style={spanTwo} ></span>
          <span style={spanThree} ></span>
          <span style={spanFour} ></span>
        </animated.div>
      </article>
    </>
  )
}
