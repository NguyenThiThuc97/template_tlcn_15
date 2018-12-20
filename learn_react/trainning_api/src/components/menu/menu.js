import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'

const menus = [
  {
    name : "Home Page",
    to : '/',
    exact : true
  },
  {
    name : "Manage Product",
    to : "/product-list",
    exact : false
  },
  {
    name : "Manage Company",
    to : "/company-list",
    exact : false
  },
  {
    name : "Manage Customer",
    to : "/customer-list",
    exact : false
  },
  {
    name : "Manage Category",
    to : "/category-list",
    exact : false
  }
]

const MenuLink = ({label, to, ActiveOnlyWhenExact}) => {
  return (
    <Route
      path = {to}
      exact = {ActiveOnlyWhenExact}
      children = {({match}) => {
        var active = match ? "active": ""
        return (
          <li className = {active}>
            <Link to = {to}>
              {label}
            </Link>
          </li>
        )
      }}
    />
  )
}

class Menu extends Component {

  constructor(props){
    super(props)
    this.state = {
      loggedUser : "",
      isLogin : false
    }
  }
  
  render() {
    var {isLogin} = this.state
    var loggedUser = localStorage.getItem("user")
    if(loggedUser !== null){
      isLogin = true
    }
    window.addEventListener('storage', function(e){
      this.console.log(e)
    })
    // console.log(isLogin)
    return (
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
          <div className="navbar-header">
          {/* <img/> */}
          </div>
            <ul className="nav navbar-nav">
            { this.showMenus(menus) }
            </ul>
            <ul className="nav navbar-nav navbar-right">
            { (isLogin === false) ? 
              <li><Route><Link to = "/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></Route></li> : 
              <li><Route><Link to = "/logout"><span className="glyphicon glyphicon-log-in"></span> Log Out</Link></Route></li>}
            </ul>
          </div>
        </nav>
        
    );
  }
  showMenus = (menus) =>{
    var result = null;
    if(menus.length > 0 )
    {
      result = menus.map((menu,index) => {
        return <MenuLink
          key = {index}
          label = {menu.name}
          to = {menu.to}
          ActiveOnlyWhenExact =  {menu.exact}
        />
      })
    }
    return result;
  }
}

export default Menu;
