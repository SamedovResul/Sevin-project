import {React, useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {useSpring, animated} from 'react-spring'
import bgImgWhite from '../image/sevinwhite.png'
import bgImgBlack  from '../image/sevinblack.png'
const Navbar = (props) =>{
  const [style, setStyle] = useState({color: 'white'});
  const [navstyle, setNavstyle] = useState(false);
  const [border, setBorder] = useState({borderLeft: "1px solid white", })
  const [bgimage, setBgimage] = useState(bgImgBlack)



  const sideBar = useSpring({
    to: [{right: props.globalValue ? '0%' : '-55%'}],
    from: {right:  '-55%'},
    config: {
      duration: 500
    }
	})

  useEffect(() => {
    document.getElementsByClassName("sticky")[0].style.display = "block";
  }, [])


  // let navAnimation 

  
  useEffect(() => {
    const handlerChange = () =>{
      if(window.scrollY > 30){
        setNavstyle(true)
        
        setBgimage(bgImgWhite)
      }else if(window.scrollY < 10){
        setStyle({color: 'white'})
        setNavstyle(false)
        setBorder({ borderLeft: "1px solid white" })
        setBgimage(bgImgBlack)
      }
    }
    document.addEventListener('scroll', handlerChange)
  }, [])
    const  navAnimation = useSpring({
      to: [{
        background: navstyle ? 'rgba(0, 0, 0, 2.452)' 
        :'rgba(0, 0, 0, -1.548)' }],
      from: {
      background: 'rgba(0, 0, 0, -1.548)'
      },
      config: {
				duration: 500
			}
    })


  
    
  return(
    <article className='sticky'>
      <animated.div style={navAnimation}  className="nav-container" >
        <div className="logo">
          <img src={bgimage} alt="png" />
        </div>
        <div className="nav-box">
          <ul>
            
              <Link  to='/'>
                <li style={style}  >
                  Ana səhifə
                </li>
              </Link>
            
            
              <Link style={border} to='/'>
                <li style={style} >
                  Dəvətnamələr
                </li>
              </Link>

              <Link style={border} to='/about'>
                <li style={style} >
                 Haqqımızda
                </li>
              </Link>
            
          </ul>
            <button className="open-burger" onClick={props.drowerOpenClick} >
              <p>&#9776;</p>
            </button>
        </div>
      </ animated.div>

      <animated.div style={sideBar} className="side-container" >
          <button className="close-burger" onClick={props.drowerCloseClick} >
            <p>&#9776;</p>
          </button>
          <ul>
              <Link  to='/'>
                <li style={style}  >
                  Ana səhifə
                </li>
              </Link>
            
            
              <Link style={border} to='/about'>
                <li style={style} >
                  Haqqımızda
                </li>
              </Link>

              <Link style={border} to='/'>
                <li style={style} >
                 Dəvətnamələr
                </li>
              </Link>
            
          </ul>
        
      </animated.div>
    </article>
  )
}

export default Navbar
