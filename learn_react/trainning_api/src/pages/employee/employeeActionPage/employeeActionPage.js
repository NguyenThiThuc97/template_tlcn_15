import React, { Component } from 'react';
import callAPI, { callImage } from '../../../utils/apiCaller';
import {Link} from 'react-router-dom'
import Department from '../../../components/department/department'

class CompanyActionPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            id : "",
            username: "",
            fullname : "",
            phone: "",
            mail : "",
            address : "",
            department : "",
            image : null,
            password : ""
        }
    }

    componentDidMount(){
        var {match} = this.props
        if(match){
            var id = match.params.id
            callAPI(`employee/${id}`, "GET", null).then(res => {
                var employee = res.data
                this.setState({
                    id : employee.id,
                    username : employee.username,
                    fullname : employee.fullname,
                    phone : employee.phone,
                    mail : employee.mail,
                    address : employee.address,
                    department : employee.department,
                    image: employee.image,
                    password : employee.password
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
        var { id, username, fullname, phone, mail, address, image, department, password } = this.state
        var {history} = this.props
        
        e.preventDefault()//not submit page
        if(id)
        {
            if( image.length == null){//want to update image //undefined
                
                const data = new FormData();
                data.append('id', id)
                data.append('image', image);
                data.append('username', username);
                data.append('fullname', fullname);
                data.append('phone', phone);
                data.append('mail', mail);
                data.append('address', address);
                data.append('department', department);
                callAPI("employee/update", "POST", data).then(res => {
                    history.push("/employee-list")
                })
            }
            else{
                
                callAPI("employee/update", "POST", {
                    id : id,
                    username : username,
                    fullname : fullname,
                    phone : phone,
                    mail : mail,
                    address : address,
                    department : department,
                    password : password
                }).then(res => {
                    history.push("/employee-list")
                })
            }
            
        }
        else
        {
            console.log("zo day roi")
            const data = new FormData();
            data.append('image', image);
            data.append('username', username);
            data.append('fullname', fullname);
            data.append('phone', phone);
            data.append('mail', mail);
            data.append('address', address);
            data.append('department', department);
            data.append('password', password);
            callAPI("employee/create", "POST", data, true).then(res => {
                // history.goBack()
                history.push("/employee-list")
            })
        } 
    }

    render() {
        var { username, fullname, phone, mail, address, department, password, image } = this.state
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit = {this.onSave}>
                <div className="form-group">
                    <label> Username</label>
                    <input 
                        type = "text" 
                        className = "form-control" 
                        name = "username" 
                        onChange = { this.onChange }
                        value = { username } />
                </div>
                <div className="form-group">
                    <label> Full Name</label>
                    <input 
                        type = "text" 
                        className = "form-control" 
                        name = "fullname" 
                        onChange = { this.onChange }
                        value = { fullname } />
                </div>
                <div className="form-group">
                    <label> Mail</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name = "mail"
                        onChange = { this.onChange }
                        value = { mail }
                        />
                </div>
                <div className="form-group">
                    <label> Phone</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name = "phone" 
                        onChange = { this.onChange }
                        value = { !!(phone) ? phone: "" }
                    />
                </div>
                <div className="form-group">
                    <label> Password</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name = "password" 
                        onChange = { this.onChange }
                        value = { password }
                    />
                </div>
                <div className="form-group">
                    <label> Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name = "address" 
                        onChange = { this.onChange } 
                        value = { address }
                    />
                </div>
                <div className="form-group">
                    <label> Department</label>
                    <Department  value = {department} onChange = { this.onChange }/>
                </div>
                <div className="form-group">
                    <label> Image</label>
                    <input 
                        type="file" 
                        className="form-control" 
                        name = "image" 
                        onChange = { this.onChange }
                    />
                    <img src={callImage("GET", "employee", image)} className="img-responsive" alt="Customer Image Profile"></img>
                </div>
                <button type="submit" className="btn btn-primary mr-10">Save</button>
                <Link to = "/employee-list" className = "btn btn-danger "> Back to list</Link>
                </form>
            </div>    
        );
    }
}

export default CompanyActionPage;