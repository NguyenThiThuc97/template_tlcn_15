import React, { Component } from 'react';
// import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Slider from "react-slick";
import './initApp.js'
import $ from 'jquery';
import routesClient from "./routesClient"
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/client/header/header'
import Footer from "./components/client/footer/footer"

class AppClient extends Component {
    
    componentDidMount(){
        
    }

    render() {
        return (
            <Router>
                <div>
                    {/* header */}
                    <Header/>
                    {/* slide */}
                    {/* product */}
                    { this.showContentMenus(routesClient) }
                    {/* footer */}
                    <Footer/>
                    
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

export default AppClient;