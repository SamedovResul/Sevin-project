import React from 'react'
import { Link } from 'react-router-dom'
const  Invitation = (props) =>{

  const {image, name,description, price } = props.data
  return( 
    <>
     <div  className="invition-container-box">
        <div   className="img-box"  >
          <img src={image} alt="img" />
          <Link to='invitation'>
            <button className='btn' > Nümunə </button>
          </Link>
        </div>
        <div className="text-box">  
          <h2>{name}</h2>
          <p>{description}</p>
          <div>
            <form >
              <label htmlFor="ənənəvi">
                <input type="radio" id="html" name="fav_language" value="Ənənəvi" />
                Ənənəvi
              </label>
              <label htmlFor="online" >
                <input type="radio" id="online" name="fav_language" value="Online" />
                Online
              </label>
              <label htmlFor="eded">Ədəd
                <select id="eded">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
            </form>
          </div>
          <p>{price} manat</p>
        </div>
      </div>
    </>
  )
} 

export default Invitation
