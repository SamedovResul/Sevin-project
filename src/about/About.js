import React from 'react'
import bgphoto from '../image/bgimage.png'
import Footer from '../footerfile/Footer'
import S from '../image/sevinwhiteS.png'
export default function About(props) {
  return (
    <article onClick={props.drowerCloseClick} >
      <div className="header-container">
        <img src={bgphoto} alt="" />
        <div className='Sevin'>
          <img src={S} alt="" />
        </div>
      </div>
      <div className='container'>
        <div className='container-fluid'>
          <div className="row">
            <div className="about-section">
              <h2>About</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </article>
  )
}
