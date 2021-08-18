import {React, useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './mainfile/Main';
import Navbar from './nav-bar/Navbar'
import About from './about/About';
import Invitation from './invitionfile/Invitation';
const App = (props) =>{
  const [globalValue, setGlobalValue] = useState(false)
  const drowerOpenClick = () =>{
    setGlobalValue(true)
  }
  const drowerCloseClick = () =>{
    setGlobalValue(false)
  }
  console.log(globalValue)
  return(
    <Router>
        <Navbar drowerOpenClick={drowerOpenClick} drowerCloseClick={drowerCloseClick}  globalValue={globalValue} />
      <Switch>
        <Route exact path='/'>
          <Main drowerCloseClick={drowerCloseClick} globalValue={globalValue} />
        </Route>
        <Route path='/about'>
          <About drowerCloseClick={drowerCloseClick} />
        </Route>
        <Route path='/invitation'>
          <Invitation />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
