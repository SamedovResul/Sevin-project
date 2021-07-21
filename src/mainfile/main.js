import {React, useState,useEffect,useCallback,} from 'react'
import {useSpring, animated} from 'react-spring'
import Invition from '../data'
import InvitationPAges from '../invitionfile/Invition-pages'
import InvitationPage from '../invitionfile/Invition-page'
import Footer from '../footerfile/Footer'
import S from '../image/sevinwhiteS.png'
import disableScroll from 'disable-scroll';

const Main = () =>{
  const [box, setBox] = useState('close') 
  const [id, setId] = useState('')
  const [body, setBody] = useState({background: 'rgba(197, 193, 193, 0.)'})
  const [imgOpacity, setImageOpacity] = useState({opacity: ''})
  const selected = Invition.find(element => element.id ===  id)
  const [scrolling, setScrolling] = useState(0)
  const [transform, setTransform] = useState({top: '0px'})
  const [y, setY] = useState(window.scrollY);
  
  console.log(id)
  const handlerChange = function(e){
		if(box === 'close'){
			setBox('open')
		}else{
			setBox('close')
      disableScroll.off()
      setBody({background: 'unset'})
      setImageOpacity({opacity: '1'})
		}
	}


   const handleNavigation = useCallback(
  e => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      setScrolling(y - 1)
      setTransform({top: -y + 'px' })
    } else if (y < window.scrollY) {
      setScrolling(y - 1)
      setTransform({top: -y + 'px' })
    }
    setY(window.scrollY);
  }, [y ]
);
  
  useEffect(() => {
    if(id){
      setBox('open')
      setBody({background: 'rgba(0, 0, 0, 0.568)'})
      setImageOpacity({opacity: '0.2'})
      // if(window.innerWidth >= 400){
      //   disableScroll.on()
      // }
      
    }
    
  }, [id])
  

  console.log(box)
  const animationbox = useSpring({
			to: [{display: box === 'close' ? 'none' : 'block'}],
      from: {display:  'none'},
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
      <animated.div style={animationbox}  className="invition-container">
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