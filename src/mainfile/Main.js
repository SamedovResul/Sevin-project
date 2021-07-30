import {React, useState,useEffect,useRef} from 'react'
import {useSpring, animated} from 'react-spring'
import Invition from '../data'
import InvitationPAges from '../invitionfile/Invition-pages'
import InvitationPage from '../invitionfile/Invition-page'
import Footer from '../footerfile/Footer'
import S from '../image/sevinwhiteS.png'
import Rellax from "rellax";
// import disableScroll from 'disable-scroll';

const Main = () =>{
  const [box, setBox] = useState('close') 
  const [id, setId] = useState('')
  const [body, setBody] = useState({background: 'rgba(197, 193, 193, 0.)'})
  const [top, setTop] = useState({top: ''})
  const [percentage, setPercentage] = useState(0)
  const [imgOpacity, setImageOpacity] = useState({opacity: ''})
  const [selected, SetSelected] = useState()


  const handlerChange = function(e){
    
		if(box !== 'close'){
      setId('')
			setBox('close')
      setBody({background: 'unset'})
      setImageOpacity({opacity: '1'})
		}
	}

  let scroll = window.pageYOffset
  


  useEffect(() => {

    if(id && box === 'close'){
      setPercentage(scroll / 10 * 2)
      console.log(percentage)
      setTop({top: percentage + 'px' })
      console.log(true)
      SetSelected(Invition.find(element => element.id ===  id))
      setId(0)
      setBox('open')
      setBody({background: 'rgba(0, 0, 0, 0.568)'})
      setImageOpacity({opacity: '0.2'})
    }
  }, [id, box, scroll,percentage])


  const rellaxRef = useRef();
  useEffect(() => {
    new Rellax(rellaxRef.current, {
      speed: 4,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }, []);
  

  const animationbox = useSpring({
			to: [{display: box === 'close' ? 'none' : 'block',top: `${percentage}%` }],
      from: {display:  'none', top:`${percentage}%` },
			config: {
				duration: 50
			}
		})


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
              <h1>dəvətnamələr</h1>
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
            className="col-md-3 col-sm-4   invition-box"
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
      <animated.div ref={rellaxRef} style={animationbox}  className="invition-container">
            { selected ? ( 
              <InvitationPage data={selected}  />
            ) : ( <p>there is error</p> )}
        <button onClick={handlerChange} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
      </animated.div>
      <Footer />
    </article>
  )
}

export default Main
