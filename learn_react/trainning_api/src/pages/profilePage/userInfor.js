import React, { Component } from 'react';
import {callAPI, callImage} from '../../utils/apiCaller';
import Category from '../../components/category/category'
import {Link} from 'react-router-dom'
import Department from '../../components/department/department';


class UserInfor extends Component {

    constructor(props){
        super(props)
        this.state = {
            id : "",
            username : "", 
            fullname : "",
            phone : "",
            mail : "",
            address : "",
            image : "",
            password : "",
            department : "",
            isLoad : false
        }        
        this.afterSave = this.afterSave.bind(this)
    }

    afterSave = () => {
        var userLogged = JSON.parse(localStorage.getItem('user'))
        var userInfor = userLogged.userInfor
        if(userLogged.userType === "employee"){
            
            callAPI(`employee/${userInfor.id}`, "GET", null, null).then(res => {
                var user = res.data
                this.setState({
                    userLogged : JSON.parse(localStorage.getItem('user')),
                    id : user[0].id,
                    username: user[0].username,
                    fullname : user[0].fullname,
                    phone: user[0].phone,
                    mail : user[0].mail,
                    address : user[0].address,
                    department : user[0].department,
                    image : user[0].image,
                    password : user[0].password,
                    isLoad : true
                })
            })
        }
        else if(userLogged.userType === "customer"){
            callAPI(`customer/${userInfor.id}`, "GET", null, null).then(res => {
                var user = res.data
                this.setState({
                    userLogged : JSON.parse(localStorage.getItem('user')),
                    id : user.id,
                    username: user.username,
                    fullname : user.full_name,
                    phone: user.phone,
                    mail : user.mail,
                    address : user.address,
                    image : user.image,
                    password : user.password,
                    isLoad : true
                })
            })
        }
        else {
            console.log("dd")
        }
    }

    componentDidMount(){
        this.afterSave()
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
        var userLogged = JSON.parse(localStorage.getItem('user'))
        if(userLogged.userType === "employee"){
            var { id, username, fullname, phone, mail, address, image, department, password } = this.state
            var {history} = this.props
            
            e.preventDefault()//not submit page
            if( image.length == null ){//want to update image //undefined
                
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
                    this.afterSave()
                    alert("Upload Your Information Successfull!")              
                })
            }
            else{
                console.log("not update image")
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
                    this.afterSave()
                    alert("Upload Your Information Successfull!")                    
                })
            }
            
        }
        else {
            var { id, username, fullname, mail, address, phone, image, password } = this.state
            var {history} = this.props
        
            e.preventDefault()//not submit page
            if( image.length == null){//want to update image //undefined
                    
                const data = new FormData();
                data.append('id', id)
                data.append('image', image);
                data.append('username', username);
                data.append('full_name', fullname);
                data.append('address', address);
                data.append('mail', mail);
                data.append('phone', phone);
                callAPI("customer/update", "POST", data).then(res => {
                    this.afterSave()
                    alert("Upload Your Information Successfull!")              
                })
            }
            else{
                
                callAPI("customer/update", "POST", {
                    id : id,
                    username : username,
                    full_name : fullname,
                    address : address,
                    mail : mail,
                    phone : phone
                }).then(res => {
                    this.afterSave()
                    alert("Upload Your Information Successfull!")              
                })
            }
        }
    }

    render() {
        var userLogged = JSON.parse(localStorage.getItem('user'))
        var { username, fullname, phone, mail, address, image, password, department, isLoad} = this.state
        
        if(userLogged === null){
            return <div><h1>Please login!!!</h1></div>
        }
        if(isLoad === false ){
            return <div>Loading...</div>
        }
        else {
            return (
                <div className = "container pdt-45">
                    <div className="">
                    <form onSubmit = {this.onSave}>
                        <h3>User Profile</h3>
                        <div className="form-group">
                            <label> Username</label>
                            <input 
                                    type="text"
                                    name = "username" 
                                    className="form-control"
                                    onChange = {this.onChange}
                                    value  = {username}
                                    />
                        </div>
                        <div className="form-group">
                            <label> Full Name</label>
                            <input 
                                    type="text"
                                    name = "fullname" 
                                    className="form-control"
                                    onChange = {this.onChange}
                                    value  = {fullname}
                                    />
                        </div>
                        <div className="form-group">
                            <label> Phone</label>
                            <input type="number" className="form-control" onChange = {this.onChange} value = { phone } name = "phone"/>
                        </div>
                        <div className="form-group">
                            <label> Mail</label>
                            <input type="text" className="form-control" onChange = {this.onChange} value = { mail } name = "mail"/>
                        </div>
                        <div className="form-group">
                            <label> Address</label>
                            <input type="text" className="form-control" onChange = {this.onChange} value = { address } name = "address"/>
                        </div>
                        { department ? 
                            <div className="form-group">
                                <label> Department</label>
                                <Department  value = {department} onChange = { this.onChange }/>
                            </div>:
                            <div></div>
                        }
                        
                        <div className="form-group">
                            <label> Image</label>
                            <input type="file" className="form-control" onChange = {this.onChange} name = "image"/>
                            {userLogged.userType === "employee" ? 
                            <img src={callImage("GET", "employee", image)} className="img-responsive image" alt="Employee Image"></img>:
                            <img src={callImage("GET", "customer", image)} className="img-responsive image" alt="Customer Image"></img>
                            }
                        </div>
                        
                        <button type="submit" className="btn btn-primary mr-10">Save</button>
                        {/* <Link to = "/product-list" className = "btn btn-danger "> Back to list</Link> */}
                        <br/><br/><br/>
                        
                    </form>
                    </div> 
                </div>    
            );
        }
    }
}

export default UserInfor;