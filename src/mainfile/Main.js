import {React, useState,useEffect,useRef} from 'react'
import Invition from '../data'
import InvitationPAges from '../invitionfile/Invition-pages'
import InvitationPage from '../invitionfile/Invition-page'
import Footer from '../footerfile/Footer'
import S from '../image/sevinwhiteS.png'

const Main = (props) =>{
  const [box, setBox] = useState('close') 
  const [id, setId] = useState('')
  const [body, setBody] = useState({background: 'rgba(197, 193, 193, 0.)'})
  const [display, setDisplsay] = useState('')
  const [imgOpacity, setImageOpacity] = useState({opacity: ''})
  const [selected, SetSelected] = useState()
  const [zIndex, setZIndex] = useState({zIndex: '1'})

  const handlerChange = function(e){
    e.stopPropagation();
		if(box !== 'close'){
      document.body.style.overflow = 'auto'
      setId('')
			setBox('close')
      setDisplsay('none')
      setBody({background: 'unset'})
      setImageOpacity({opacity: '1'})
      document.getElementsByClassName("sticky")[0].style.display = "block";
		}
	}
  
  const divref =useRef()
  let scroll = window.pageYOffset;

  useEffect(() => {
  document.getElementsByClassName("sticky")[0].style.display = "block";
  
  }, []);
  

  useEffect(() => {
    if(true === props.globalValue){
      setZIndex({zIndex: '-1'})
    }else{
      setZIndex({zIndex: '1'})
    }


    if(id && box === 'close'){
      document.getElementsByClassName("sticky")[0].style.display = "none";
      document.body.style.overflow = 'hidden'
      setDisplsay('block')
      SetSelected(Invition.find(element => element.id ===  id))
      setId(0)
      setBox('open')
      setBody({background: 'rgba(0, 0, 0, 0.568)'})
      setImageOpacity({opacity: '0.2'})
    }
  }, [id, box, scroll, props.globalValue])


  

  const animationbox = {
    display: `${display}`,
  }

  


  return(
    <article style={body} onClick={props.drowerCloseClick}>
      <div className="header-container ">
        <div className='Sevin'>
          <img src={S} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 devetname ">
              <h1>Dəvətnamələr</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container test">
        <div className="constainer-fluid">
          <div className="row" >
            
            {Invition.map((subject) =>{

          return( 
            <div 
            key={subject.id}   
            onClick={() => setId(subject.id)} 
            className="col-md-4 col-sm-6  invition-box"
            style={zIndex}
            >
              <div className="child-box">
                <InvitationPAges  
                  data={subject} 
                  handlerChange={handlerChange}
                  imgOpacity={imgOpacity}
                   />
              </div>
            </div>
              )
            })
            }
          </div>
        </div>
      </div>
      <div onClick={handlerChange}  style={animationbox} ref={divref} className="invition-container">
            { selected ? ( 
              <InvitationPage data={selected} handlerChange={handlerChange}  />
            ) : ( <p>there is error</p> )}
        
      </div>
      <Footer />
    </article>
  )
}

export default Main
