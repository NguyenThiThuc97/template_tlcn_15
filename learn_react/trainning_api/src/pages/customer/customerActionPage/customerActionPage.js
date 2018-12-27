import React, { Component } from 'react';
import {callAPI, callImage} from '../../../utils/apiCaller';
import {Link} from 'react-router-dom'

class CustomerActionPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            id : "",
            txtUsername: "",
            txtFullName : "",
            txtMail : "",
            txtAddress: "",
            imgImage : null,//to server
            txtPhone : "",
            txtPassword : "",
            img : ""//to client
        }
    }

    componentDidMount(){
        var { match } = this.props
        if( match ){
            var id = match.params.id
            callAPI(`customer/${id}`, "GET", null).then(res => {
                var customer = res.data
                
                this.setState({
                    id : customer.id,
                    txtUsername : customer.username,
                    txtFullName : customer.full_name,
                    txtAddress : customer.address,
                    imgImage : customer.image,
                    txtMail : customer.mail,
                    txtPhone : customer.phone,
                    txtPassword : customer.password
                })
                
            })
        }
    }

    onChange = (e) => {
        var target = e.target
        var name = target.name
        
        var value = target.type === 'file' ? target.files[0] : target.value
        this.setState({
            [name] : value
        })
    }

    onSave = (e) => {
        var { id, txtUsername, txtFullName, txtMail, txtAddress, txtPhone, imgImage, txtPassword } = this.state
        var {history} = this.props
        
        e.preventDefault()//not submit page
        if(id)
        {
            if( imgImage.length == null){//want to update image //undefined
                
                const data = new FormData();
                data.append('id', id)
                data.append('image', imgImage);
                data.append('username', txtUsername);
                data.append('full_name', txtFullName);
                data.append('address', txtAddress);
                data.append('mail', txtMail);
                data.append('phone', txtPhone);
                callAPI("customer/update", "POST", data).then(res => {
                    history.push("/customer-list")
                })
            }
            else{
                
                callAPI("customer/update", "POST", {
                    id : id,
                    username : txtUsername,
                    full_name : txtFullName,
                    address : txtAddress,
                    mail : txtMail,
                    phone : txtPhone
                }).then(res => {
                    history.push("/customer-list")
                })
            }
            
        }
        else
        {
            const data = new FormData();
            data.append('image', imgImage);
            data.append('username', txtUsername);
            data.append('full_name', txtFullName);
            data.append('address', txtAddress);
            data.append('mail', txtMail);
            data.append('password', txtPassword);
            data.append('phone', txtPhone);
            callAPI("customer/create", "POST", data, true).then(res => {
                history.push("/customer-list")
                // history.push("")
            })
        } 
    }

    render() {
        var { txtUsername, txtFullName, txtAddress, imgImage, txtMail, txtPhone, txtPassword } = this.state
        
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit = {this.onSave}>
                <div className="form-group">
                    <label> Username</label>
                    <input 
                        type = "text" 
                        className = "form-control" 
                        name = "txtUsername" 
                        onChange = { this.onChange }
                        value = { txtUsername } />
                </div>
                <div className="form-group">
                    <label> Full Name</label>
                    <input 
                        type = "text" 
                        className = "form-control" 
                        name = "txtFullName" 
                        onChange = { this.onChange }
                        value = { txtFullName } />
                </div>
                <div className="form-group">
                    <label> Mail</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name = "txtMail"
                        onChange = { this.onChange }
                        value = {txtMail}
                        />
                </div>
                <div className="form-group">
                    <label> Phone</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name = "txtPhone" 
                        onChange = { this.onChange }
                        value = { !!(txtPhone) ? txtPhone: "" }
                    />
                </div>
                <div className="form-group">
                    <label> Password</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name = "txtPassword" 
                        onChange = { this.onChange }
                        value = { txtPassword }
                    />
                </div>
                <div className="form-group">
                    <label> Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name = "txtAddress" 
                        onChange = { this.onChange } 
                        value = {txtAddress}
                    />
                </div>
                <div className="form-group">
                    <label> Image</label>
                    <input 
                        type="file" 
                        className="form-control" 
                        name = "imgImage" 
                        onChange = { this.onChange }
                    />
                    <img src={callImage("GET", "customer", imgImage)} className="img-responsive image" alt="Customer Image Profile"></img>
                </div>
                <button type="submit" className="btn btn-primary mr-10">Save</button>
                <Link to = "/customer-list" className = "btn btn-danger "> Back to list</Link>
                </form>
            </div>    
        );
    }
}

export default CustomerActionPage;