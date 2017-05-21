import React from 'react'
import {Link, Route} from 'react-router-dom'

const topic=({match})=>(
    <div>
    <h3>topic</h3>
    {match.params.par}</div>
)
//match안에 url parameter 들어감

const empty=()=>(
    <div>Empty</div>
)
const topics= ({match})=>(
    <div>
      <h2>Topics</h2>
      <ul>
        <li><Link to={match.url+'/first'}>first</Link></li>
        <li><Link to={match.url+'/second'}>second</Link></li>
        <li><Link to={match.url+'/third'}>third</Link></li>
      </ul>
      <hr/>
      <Route exact path={match.url} component={empty}/>
      <Route exact path={match.url+'/:par'} component={topic}/>
    </div>
    
)

export default topics
