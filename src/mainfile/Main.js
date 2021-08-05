import {React, useState,useEffect,useRef} from 'react'
import Invition from '../data'
import InvitationPAges from '../invitionfile/Invition-pages'
import InvitationPage from '../invitionfile/Invition-page'
import Footer from '../footerfile/Footer'
import S from '../image/sevinwhiteS.png'
import Scroll from 'react-scroll-to-element';

const Main = () =>{
  const [box, setBox] = useState('close') 
  const [id, setId] = useState('')
  const [body, setBody] = useState({background: 'rgba(197, 193, 193, 0.)'})
  const [display, setDisplsay] = useState('')
  const [percentage, setPercentage] = useState()
  const [imgOpacity, setImageOpacity] = useState({opacity: ''})
  const [selected, SetSelected] = useState()

  const handlerChange = function(e){
    
		if(box !== 'close'){
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
  // window.scrollTo(0,scroll)

  //  const scrollTo = function() {
  //   scroll.scrollTo(scroll);
  // },

  useEffect(() => {
  document.getElementsByClassName("sticky")[0].style.display = "block";
  }, []);

  useEffect(() => {

    if(id && box === 'close'){
      // document.querySelector(".invition-container").scrollIntoView({behavior: "smooth", block: "end", inline: "end"});
      // divref.current.scrollTo(0,scroll)
      setPercentage(scroll / 10 * 1.4)
      document.getElementsByClassName("sticky")[0].style.display = "none";
      setDisplsay('block')
      // console.log(percentage)
      // setTop({top: percentage + 'px' })
      // console.log(true)
      SetSelected(Invition.find(element => element.id ===  id))
      setId(0)
      setBox('open')
      setBody({background: 'rgba(0, 0, 0, 0.568)'})
      setImageOpacity({opacity: '0.2'})
    }
  }, [id, box, scroll,percentage])


  

  const animationbox = {
    display: `${display}`,
    // top : `${percentage}%`
  }




  return(
    <article style={body}>
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
      <div  style={animationbox} ref={divref} className="invition-container">
            { selected ? ( 
              <InvitationPage data={selected}   />
            ) : ( <p>there is error</p> )}
        <button onClick={handlerChange} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <Footer />
    </article>
  )
}

export default Main
