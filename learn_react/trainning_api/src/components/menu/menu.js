import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'

const menus = [
  {
    name : "Home Page",
    to : '/admin',
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
    name : "Manage Employee",
    to : "/employee-list",
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
  },
  {
    name : "Manage Orders",
    to : "/orders-list",
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
    var loggedUser = JSON.parse(localStorage.getItem('user'))
    if(loggedUser){
      if(loggedUser.userType == "employee")
      {
        isLogin = true
      }
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
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account <span className="caret" /></a>
                { (isLogin === false) ? 
                <ul className="dropdown-menu">
                    <li><Route><Link to = "/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></Route></li>
                </ul>:
                <ul className="dropdown-menu">
                    <li><Route><Link to = "/logout"><span className="glyphicon glyphicon-log-in"></span> Log Out</Link></Route></li>
                    <li><Route><Link to = "/edit-profile"><span className="glyphicon glyphicon-user"></span> My Profile</Link></Route></li>
                    <li><a href="#">Change Password</a></li>
                </ul>
                }
            </li>
            {/* { (isLogin === false) ? 
              <li><Route><Link to = "/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></Route></li> : 
              <li><Route><Link to = "/logout"><span className="glyphicon glyphicon-log-in"></span> Log Out</Link></Route></li>} */}
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
