import React, { Component } from 'react';
import {Route, Link, Redirect} from 'react-router-dom'
import callAPI from '../../../utils/apiCaller';

class TopMenu extends Component {

    constructor(props){
        super(props)
        this.state = {
            username : "",
            password : "",
            userType : "customer",
            isLogin : false,
            cart : []
        }
    }

    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.value
        this.setState({
            [name] : value
        })
    }

    onLogin = (e) => {
        console.log("tao zo day roi ne!!!")
        e.preventDefault()
        var {username, userType} = this.state
        callAPI("login", "POST", this.state).then(res => {
            if(res.data.statusLogin){
                if(localStorage.getItem("user")){
                    alert("user was logged")
                }
                else {
                    localStorage.setItem("user", JSON.stringify({
                        userType : userType,
                        username : username,
                    }))
                    var cart = []
                    localStorage.setItem("cart", JSON.stringify(cart));
                    this.setState ({
                        isLogin : true
                    })
                    document.getElementById("hidePopUpBtn").click();
                    return <Redirect to = "/"/>
                }
                document.getElementById("hidePopUpBtn").click();
            }
            else {
                alert(res.data.result.message)
            }
        })
    }

    logOut = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("cart")
        this.setState ({
            isLogin : false
        })
    }

    render() {
        var {isLogin} = this.state
        var loggedUser = localStorage.getItem("user")
        if(loggedUser !== null){
        isLogin = true
        }
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                        <li><a href="#"><span className="glyphicon glyphicon-home"></span></a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account <span className="caret" /></a>
                            { (isLogin === false) ? 
                            <ul className="dropdown-menu">
                                <li><a href="#"data-toggle="modal" data-target="#myModal">Login</a></li>
                            </ul>:
                            <ul className="dropdown-menu">
                                <li><a href="#"data-toggle="modal" onClick = {this.logOut}>Logout</a></li>
                                <li><a href="#">My Profile</a></li>
                            </ul>
                            }
                        </li>
                        </ul>
                        
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-shopping-cart"></span> Cart <span className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Product 1</a></li>
                                    <li><a href="#">Product 2</a></li>
                                    <li><a href="#">Product 3</a></li>
                                    <li role="separator" className="divider" />
                                    <li><a href="#">Sub Total : 100$</a></li>
                                    <li role="separator" className="divider" />
                                    <li><Route><Link to = "/cart">View Cart</Link></Route></li>
                                    <li><a href="#">Checkout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Modal */}
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                    {/* Modal content*/}
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            <h4 className="modal-title">Login Form</h4>
                        </div>
                        
                        <form onSubmit = {this.onLogin}>
                            <div className="modal-body">
                                        <div className = "row pdt-20">
                                            <div className = "col-sm-3">
                                                <label> Username : </label>
                                            </div>
                                            <div className = "col-sm-5">
                                                <input type = "text" placeholder = "username" name = "username" className="form-control" onChange = {this.onChange}/>
                                            </div>
                                        </div>
                                        <div className = "row pdt-20">
                                            <div className = "col-sm-3">
                                            <label> Password : </label>
                                            </div>
                                            <div className = "col-sm-5">
                                                <input type = "password" placeholder = "password" name = "password" className="form-control"  onChange = {this.onChange}/>
                                            </div>
                                            
                                            
                                        </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-success">Login</button>
                                <button type="button" className="btn btn-danger" id="hidePopUpBtn" data-dismiss="modal">Close</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default TopMenu;