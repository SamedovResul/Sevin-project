import React from 'react'

const  Invitation = (props) =>{

  const {image, name,description, url } = props.data
  return( 
    <>
     <div  className="invition-container-box">
        <div   className="img-box"  >
          <img src={image} alt="img" />
        </div>
        <div className="text-box">  
          <h2>{name}</h2>
          <p>{description}</p>
          
            <button className='btn'
              onClick={() => window.open(url)}
             > Nümunə </button>
          
        </div>
          
      </div>
    </>
  )
} 

export default Invitation
