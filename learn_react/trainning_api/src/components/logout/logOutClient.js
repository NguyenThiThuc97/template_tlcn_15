import React, { Component } from 'react';
import { CartContext } from '../client/cart/cart';

class LogOutClient extends Component {
    constructor(props){
        super(props)
        this.state  = {

        }
    }

    componentWillMount(){
        
    }

    componentDidMount(){
        var {history} = this.props
        console.log(history)
        localStorage.removeItem("user")
        localStorage.removeItem("cart")
        history.push("/")
    }
    render() {
        return (
            <div></div>
        );
    }
}

export default LogOutClient;