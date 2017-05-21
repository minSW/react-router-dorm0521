import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import home from './home'
import about from './about'
import topics from './topics'

class App extends Component{
  render=()=>{
    return (
        <div> 
          <Router>
            <div>
              <ul>
               <li><Link to="/">home</Link></li>
               <li><Link to="/about">about</Link></li>
               <li><Link to="/topics">topics</Link> </li>
             </ul>
             <hr/>
             <Route exact path="/" component={home} />
             <Route path="/about" component={about} />
             <Route path="/topics" component={topics} />
            </div>
          </Router>
        </div>
   );
  }
}

export default App
