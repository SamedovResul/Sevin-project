import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './mainfile/Main';
import Navbar from './nav-bar/Navbar'
import About from './about/About';
// import Invitation from './invitionfile/invitation';
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
      </Switch>
      
    </Router>
  )
}

export default App
