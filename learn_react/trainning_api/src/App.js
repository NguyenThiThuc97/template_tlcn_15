import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/menu'
import routes from "./routes"
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      loggedUser : "",
      username : "",
      isLogin : false
    }
  }

  componentWillMount(){
    if(localStorage.getItem("user")){
      this.setState({
        loggedUser : localStorage.getItem("user"),
        isLogin : true
      })
    }
  }

  render() {
    var {isLogin} = this.state
    return (
      <Router>
          <div><Menu isLogin = {isLogin}/>
            <div className="container">
              { this.showContentMenus(routes) }
            </div>
          </div>
      </Router>
    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if(routes.length > 0)
    {
      result = routes.map((route, index) => {
        
        return (<Route
          key = {index}
          path = {route.path}
          exact = {route.exact}
          component = {route.main}
        />)
      })
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
