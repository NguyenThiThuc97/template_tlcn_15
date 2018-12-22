import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import callAPI from '../../../utils/apiCaller'

class MainMenu extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoad : false,
            categories : []
        }
    }

    componentDidMount(){
        callAPI("category", "GET", null, false).then(res => {
            var data = res.data
            this.setState ({
                isLoad : true,
                categories : res.data
            }) 
        })
    }

    render() {
        
        var {isLoad, categories} = this.state
        if(isLoad){
            return (
                <div className = "container">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse text-center" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav hihi">
                                    <li><Route><Link to = "/">HOME </Link></Route></li>
                                    <li><a href="#">NEW ARRIVAL</a></li>
                                    <li><a href="#">HOT</a></li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CATEGORY <span className="caret" /></a>
                                        <ul className="dropdown-menu">
                                            {this.showCategories(categories)}
                                        </ul>
                                    </li>
                                    <li><Route><Link to = "/contact">CONTACT </Link></Route></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>   
            );
        }
        else{
            return <div>Loading...</div>
        }
    }

    showCategories = (categories) => {
        var result = null;
        if(categories.length > 0 )
        {
            result = categories.map((category,index) => {
                return <li key = {index} ><Route>
                    <Link to = {`/category/${category.id}`} >{category.name} {category.age_type}</Link>
                </Route></li>
            })
        }
        return result;
    }
}

export default MainMenu;