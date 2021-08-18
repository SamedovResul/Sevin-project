import {React, useEffect,useRef } from 'react'
import {useHistory } from 'react-router-dom'
const  Invitation = (props) =>{
  const {image, name,description, price,kod } = props.data;
  let history = useHistory();
  function handleClick() {

    history.push({
            pathname: '/invitation',
            state:{
                tags: name 
            }
    });
  }
  
  const stopPropagation = (event) =>{
    event.stopPropagation();
  }

  return( 
    <div className="invition-border" onClick={stopPropagation}>
    
     <div   className="invition-container-box">
      <button onClick={props.handlerChange} type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
        <div   className="img-box"  >
          <img src={image} alt="img" />
            <button className='btn' onClick={handleClick} >
              Nümunə sayta keçin 
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              </button>
        </div>
        <div className="text-box">  
          <div >
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Kod: {kod} </p>
          </div>
          <div>
            <p>Qiymət:{price} AZN  </p>
          </div>
        </div>
        
      </div>
    </div>
  )
} 

export default Invitation
