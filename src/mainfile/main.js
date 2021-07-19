import {React, useState,useEffect} from 'react'
import {useSpring, animated} from 'react-spring'
import Invition from '../data'
import InvitationPAges from '../invitionfile/invition-pages'
import InvitationPage from '../invitionfile/invition-page'
import Footer from '../footerfile/footer'
import S from '../image/sevinwhiteS.png'
import disableScroll from 'disable-scroll';

const Main = () =>{
  const [box, setBox] = useState('close') 
  const [id, setId] = useState('')
  const selected = Invition.find(element => element.id ===  id)
  
  console.log(id)
  const handlerChange = function(e){
		if(box === 'close'){
			setBox('open')
		}else{
			setBox('close')
      disableScroll.off()
		}
	}

  
  useEffect(() => {
    if(id){
      setBox('open')
      disableScroll.on()
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
    <article>
      <div className="header-container test ">
        <div className='Sevin'>
          <img src={S} alt="" />
        </div>
      </div>
      <div className="container test">
        <div className="constainer-fluid">
          <div className="row ">
            
            {Invition.map((subject) =>{

          return( 
            <div 
            key={subject.id}   
            onClick={() => setId(subject.id)} 
            className="col-md-3 col-sm-4   invition-box"
            >
              <div className="">
                <InvitationPAges  data={subject} handlerChange={handlerChange} />
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