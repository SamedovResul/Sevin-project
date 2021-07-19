import {React, useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {useSpring, animated} from 'react-spring'

const Navbar = () =>{
  const [style, setStyle] = useState({color: 'white'});
  const [navstyle, setNavstyle] = useState(false);
  const [border, setBorder] = useState({borderLeft: "1px solid white", })
  const [open, setOpen] = useState(false)

  const handlerBurger = function(){
    if(!open){
      setOpen(true)
    }else{
      setOpen(false)
    }
    console.log(open)
  }

  const sideBar = useSpring({
			to: [{right: open ? '0%' : '-50%'}],
      from: {right:  '-50%'},
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
      }else if(window.scrollY < 10){
        setStyle({color: 'white'})
        setNavstyle(false)
        setBorder({ borderLeft: "1px solid white" })
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
      <animated.div style={navAnimation}  className="nav-container">
        <div className="logo">
          <p style={style} >Sevin</p>
        </div>
        <div className="nav-box">
          <ul>
            
              <Link  to='/'>
                <li style={style}  >
                  Home
                </li>
              </Link>
            
            
              <Link style={border} to='/about'>
                <li style={style} >
                  About
                </li>
              </Link>

              <Link style={border} to='/'>
                <li style={style} >
                  Invitations
                </li>
              </Link>
            
          </ul>
            <button className="open-burger" onClick={handlerBurger} >
              <p>&#9776;</p>
            </button>
        </div>
      </ animated.div>

      <animated.div style={sideBar} className="side-container" >
          <button className="close-burger" onClick={handlerBurger} >
            <p>&#9776;</p>
          </button>
          <ul>
              <Link  to='/'>
                <li style={style}  >
                  Home
                </li>
              </Link>
            
            
              <Link style={border} to='/about'>
                <li style={style} >
                  About
                </li>
              </Link>

              <Link style={border} to='/'>
                <li style={style} >
                  Invitions
                </li>
              </Link>
            
          </ul>
        
      </animated.div>
    </article>
  )
}

export default Navbar