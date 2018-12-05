import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'

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
  render() {
    return (
        <div className="navbar navbar-default">
          <b className="navbar-brand" href="">Call API</b>
          <ul className="nav navbar-nav">
            { this.showMenus(menus) }
          </ul>
        </div>
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
