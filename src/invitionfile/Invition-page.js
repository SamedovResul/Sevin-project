import {React, useEffect,useRef } from 'react'
import {useHistory } from 'react-router-dom'
const  Invitation = (props) =>{
  const {image, name,description, price } = props.data;
  let history = useHistory();
  function handleClick() {

    history.push({
            pathname: '/invitation',
            state:{
                tags: name 
            }
    });
  }
  
  return( 
    <>
     <div   className="invition-container-box">
        <div   className="img-box"  >
          <img src={image} alt="img" />
            <button className='btn' onClick={handleClick} > Nümunə </button>
        </div>
        <div className="text-box">  
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{price} manat</p>
        </div>
      </div>
    </>
  )
} 

export default Invitation
