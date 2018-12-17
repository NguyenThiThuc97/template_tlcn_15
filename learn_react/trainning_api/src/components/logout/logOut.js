import React, { Component } from 'react';

class LogOut extends Component {

    constructor(props){
        super(props)
        this.state  = {

        }
    }

    componentWillMount(){
        var {history} = this.props
        localStorage.removeItem("user")
        history.push("/login")
    }

    render() {
        return (
            <div>
                <h5>Loading...</h5>
            </div>
        );
    }
}

export default LogOut;