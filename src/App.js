import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './mainfile/Main';
import Navbar from './nav-bar/Navbar'
import About from './about/About';
import Invitation from './invitionfile/Invitation';
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
        <Route path='/invitation'>
          <Invitation />
        </Route>
      </Switch>
      
    </Router>
  )
}

export default App
