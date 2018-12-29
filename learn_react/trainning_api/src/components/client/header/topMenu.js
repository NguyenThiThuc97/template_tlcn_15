import React, { Component } from 'react';
import {Route, Link, Redirect} from 'react-router-dom'
import callAPI from '../../../utils/apiCaller';
import {CartContext} from '../cart/cart'

class TopMenu extends Component {

    constructor(props){
        super(props)
        this.state = {
            username : "",
            password : "",
            userType : "customer",
            isLogin : JSON.parse(localStorage.getItem("cart")) ? true : false,
            cart : [],
            old_pwd : "",
            new_pwd : ""
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
                        userInfor : res.data.user
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
        return <Redirect to = "/logout"/>
    }

    onChangePwd = (e) => {
        e.preventDefault()
        var loggedUser = JSON.parse(localStorage.getItem('user'))
        var {old_pwd, new_pwd} = this.state
        var userInforUpdate = {
            id : loggedUser.userInfor.id,
            new_pwd : new_pwd,
            old_pwd : old_pwd
        }
        callAPI("customer/update_pwd", "POST", userInforUpdate, null).then(res => {
            if(res.data.statusUpdatePwd === false){
                alert(res.data.message)
            }
        })
        document.getElementById("hidePopUpUpdatePwd").click();
    }

    componentDidUpdate(prevProps, prevState){
        // console.log(prevState)
        // console.log(this.state.isLogin)
    }

    render() {
        window.addEventListener('storage', e => {console.log(e)})
        var {isLogin} = this.state
        // var loggedUser = JSON.parse(localStorage.getItem('user'))
        // if(loggedUser !== null){
        //     if(loggedUser.userType === "customer")
        //         isLogin = true
        // }
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                        <li><a href="#"><span className="glyphicon glyphicon-home"></span></a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account <span className="caret" /></a>
                            {/* <CartContext.Consumer>
                                {({cartItems}) => cartItems.length > 0 ? this.setState({isLogin : true}) : this.setState({isLogin : false})}
                            </CartContext.Consumer>
                            {console.log(this.state.isLogin)} */}
                            {/* <CartContext.Consumer>
                                {({cartItems}) => console.log(cartItems.length === 0)}
                            </CartContext.Consumer> */}
                            <CartContext.Consumer>
                            { ({cartItems}) => cartItems  ?   
                            <ul className="dropdown-menu">
                                {/* <li><a href="#" data-toggle="modal" onClick = {this.logOut}><span className="glyphicon glyphicon-log-in"></span> Logout</a></li> */}
                                <CartContext.Consumer>
                                    {({logout}) => <li><a href="#" data-toggle="modal" onClick = {() => logout()}><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>}
                                </CartContext.Consumer>
                                {/* <li><Route><Link to = "/logout"><span className="glyphicon glyphicon-log-in"></span> Logout</Link></Route></li> */}
                                <li><Route><Link to = "/edit-profile"><span className="glyphicon glyphicon-user"></span> My Profile</Link></Route></li>
                                <li><a href="#" data-toggle="modal" data-target="#modalUpdatePwd">Change Password</a></li>
                            </ul>
                            : 
                            <ul className="dropdown-menu">
                            {}
                                <li><a href="#" data-toggle="modal" data-target="#myModal">Login</a></li>
                                {/* <CartContext.Consumer>
                                {({login}) => <li><a href="#" data-toggle="modal" onClick = {() => login(this.state.username, this.state.password, this.state.userType)}><span className="glyphicon glyphicon-log-in"></span> Login</a></li>}
                                </CartContext.Consumer> */}
                            </ul>
                            }</CartContext.Consumer>
                        </li>
                        </ul>
                        
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <CartContext.Consumer>
                                    {({cartItems}) => <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-shopping-cart"></span> Cart ({cartItems?cartItems.length : "0"})<span className="caret" /></a>}
                                </CartContext.Consumer>
                                
                                <ul className="dropdown-menu">
                                    {/* <li><a href="#">Product 1</a></li> */}
                                    {/* <li role="separator" className="divider" /> */}
                                    {/* <li><a href="#">Sub Total : 100$</a></li> */}
                                    <li role="separator" className="divider" />
                                    <li><Route><Link to = "/cart">View Cart</Link></Route></li>
                                    <li><a href="#">Checkout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Modal Login*/}
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                    {/* Modal content*/}
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            <h4 className="modal-title">Login Form</h4>
                        </div>
                        
                        <form>
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
                            <CartContext.Consumer>
                            {({onLogin}) => <button onClick = {() => onLogin(this.state.username, this.state.password, this.state.userType)} type="button" className="btn btn-success">Login</button>}
                            </CartContext.Consumer>
                                <button type="button" className="btn btn-danger" id="hidePopUpBtn" data-dismiss="modal">Close</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
                
                {/* Model Change User Password */}
                <div className="modal fade" id="modalUpdatePwd" role="dialog">
                    <div className="modal-dialog">
                    {/* Modal content*/}
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            <h4 className="modal-title">Change Password Form</h4>
                        </div>
                        
                        <form onSubmit = {this.onChangePwd}>
                            <div className="modal-body">
                                <div className = "row pdt-20">
                                    <div className = "col-sm-3">
                                        <label> Old Password : </label>
                                    </div>
                                    <div className = "col-sm-5">
                                        <input type = "text" placeholder = "old password" name = "old_pwd" className="form-control" onChange = {this.onChange}/>
                                    </div>
                                </div>
                                <div className = "row pdt-20">
                                    <div className = "col-sm-3">
                                    <label> New Password : </label>
                                    </div>
                                    <div className = "col-sm-5">
                                        <input type = "text" placeholder = "new password" name = "new_pwd" className="form-control"  onChange = {this.onChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-success">Change</button>
                                <button type="button" className="btn btn-danger" id="hidePopUpUpdatePwd" data-dismiss="modal">Close</button>
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