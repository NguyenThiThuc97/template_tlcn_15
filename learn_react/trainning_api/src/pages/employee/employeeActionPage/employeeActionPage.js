import React, { Component } from 'react';
import callAPI from '../../../utils/apiCaller';
import {Link} from 'react-router-dom'
class CompanyActionPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            id : "",
            txtName: "",
            txtMail : "",
            txtAddress: "",
            txtFanpage : "",
            txtPhone : "",
            txtWebsite : ""
        }
    }

    componentDidMount(){
        var {match} = this.props
        if(match){
            var id = match.params.id
            callAPI(`company/${id}`, "GET", null).then(res => {
                var company = res.data
                this.setState({
                    id : company.id,
                    txtAddress : company.address,
                    txtFanpage : company.fanpage,
                    txtMail : company.mail,
                    txtName : company.name,
                    txtPhone : company.phone,
                    txtWebsite : company.website
                })
            })
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

    onSave = (e) => {
        var { id, txtAddress, txtFanpage, txtMail, txtName, txtPhone, txtWebsite} = this.state
        var {history} = this.props

        e.preventDefault()//not submit page
        if(id)
        {
            callAPI("company/update", "POST", {
                id : id,
                name : txtName,
                address : txtAddress,
                fanpage : txtFanpage,
                mail : txtMail,
                phone : txtPhone,
                website : txtWebsite
            }).then(res => {
                history.goBack()
            })
        }
        else
        {
            callAPI("company/create", "POST", {
                name : txtName,
                address : txtAddress,
                fanpage : txtFanpage,
                mail : txtMail,
                phone : txtPhone,
                website : txtWebsite
            }).then(res => {
                history.goBack()
                // history.push("")
            })
        }
        
    }

    render() {
        var { txtName, txtAddress, txtFanpage, txtMail, txtPhone, txtWebsite } = this.state
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit = {this.onSave}>
                <div className="form-group">
                    <label> Name</label>
                    <input 
                        type = "text" 
                        className = "form-control" 
                        name = "txtName" 
                        onChange = { this.onChange }
                        value = {txtName} />
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
                    <label> Website</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name = "txtWebsite" 
                        onChange = { this.onChange }
                        value = {txtWebsite}
                        />
                </div>
                <div className="form-group">
                    <label> Fanpage</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name = "txtFanpage" 
                        onChange = { this.onChange }
                        value = {txtFanpage}
                        />
                </div>
                <div className="form-group">
                    <label> Phone</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name = "txtPhone" 
                        onChange = { this.onChange }
                        value = {txtPhone}
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
                <button type="submit" className="btn btn-primary mr-10">Save</button>
                <Link to = "/company-list" className = "btn btn-danger "> Back to list</Link>
                </form>
            </div>    
        );
    }
}

export default CompanyActionPage;