import React from 'react'
import insta from '../image/sevininstaiconqara.png'
export default function Footer() {
  return (
    <article className='footer-container'>
      <div className="container ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 contact">
              <p>Əlaqə</p>
              <img src={insta} alt="alt" />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
