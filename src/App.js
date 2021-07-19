import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './mainfile/main';
import Navbar from './nav-bar/navbar';
import About from './about/about';
import Invitation from './invitionfile/invitation';
const App = (props) =>{
  
  console.log()

  return(
    <Router>
        <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Router path='/invitation' >
          <Invitation />
        </Router>
      </Switch>
      
    </Router>
  )
}

export default App
