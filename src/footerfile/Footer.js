import React from 'react'
import phone from '../image/phoneicon.png'
import instaicon from '../image/instaicon.png'
import gmail from '../image/gmailicon.png'
export default function Footer() {
  return (
    <article className='footer-container'>
      <div className="container ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 contact">
              <p>Əlaqə</p>
              <p> <span><img src={phone} alt="" /> </span> +994 </p>
              <p> <span><img src={instaicon} alt="" /> </span> @sevin </p>
              <p> <span><img src={gmail} alt="" /> </span> gamil@.com </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
