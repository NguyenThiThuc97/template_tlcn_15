import React, { Component } from 'react';
import {callAPI} from './../../utils/apiCaller'
import { Redirect } from 'react-router-dom'

class LoginPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            userType : "customer",
            username : "",
            password : ""
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
        e.preventDefault();
        var { userType, username, password } = this.state
        var {history} = this.props
        callAPI("login", "POST", this.state).then(res => {
            if(res.data.statusLogin){
                localStorage.setItem("user", JSON.stringify({
                    userType : userType,
                    username : username,
                    password : password
                }))
                history.push("/admin")
            }
            else {
                alert(res.data.result.message)
            }
        })
    }

    render() {
        var {  username, password, userType } = this.state
        
        var loggedInUser = localStorage.getItem("user")

        if(loggedInUser !== null)
        {
            return <Redirect to = "/admin"/>
        }
        return (
            <form onSubmit = { this.onLogin }>
                <div className="radio form-group" >
                    <label className = "mr-10">
                        <input 
                            type="radio" 
                            id="input" 
                            name = "userType"
                            onChange = { this.onChange }
                            value = "customer"
                            defaultChecked
                        /> Customer
                    </label>
                    <label>
                        <input type="radio" 
                            id="input" 
                            value = "employee" 
                            onChange = { this.onChange }
                            name = "userType"  
                            /> Employee
                    </label>
                </div>
                <div className = "form-group">
                    <label htmlFor="username"> Username: </label>
                    <input
                        className="form-control"
                        type="text" 
                        style={{width: '200px'}} 
                        placeholder = "username" 
                        name = "username" 
                        onChange = {this.onChange}
                        value = {username}
                        />
                </div>
                <div className = "form-group">
                    <label htmlFor = "password" > Password: </label>
                    <input 
                        className="form-control"
                        type="text" 
                        style={{width: '200px'}} 
                        placeholder = "password" 
                        name = "password"
                        onChange = {this.onChange}
                        value = {password}
                        />
                </div>
                <button type="submit" className="btn btn-default">Login</button>
            </form>
        );
    }
}

export default LoginPage;