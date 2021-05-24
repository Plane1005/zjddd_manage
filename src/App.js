import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavWrapper from './component/NavWrapper/index.js'
// import Login from './app/login/index.js'
import Desi from './app/desi/index.js'
import News from './app/news/index.js'
import Proj from './app/proj/index.js'
import Caro from './app/caro/index.js'
import  './App.less'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <NavWrapper>
            <Switch>
              <Route exact path='/news' component={News}/>
              <Route exact path='/desi' component={Desi}/>
              <Route exact path='/proj' component={Proj}/>
              <Route exact path='/caro' component={Caro}/>
            </Switch>
          </NavWrapper>
        </Switch>  
      </Router>
    )
  }
}
