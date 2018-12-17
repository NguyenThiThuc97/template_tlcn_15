import React, { Component } from 'react';
import { Input, FormGroup } from 'reactstrap'
import callAPI from '../../utils/apiCaller';

class Company extends Component {
    constructor(props){
        super(props)
        this.state = {
            companies : "",
            isLoad : false,
            companyIsSelected : ""
        }
    }

    componentDidMount(){
        var companyIsSelected = this.props.value
        callAPI(`company`, "GET", null).then(res => {
            this.setState({
                companies : res.data,
                isLoad : true,
                companyIsSelected : companyIsSelected
            })
        })
    }



    render() {
        var {companies, isLoad, companyIsSelected} = this.state
        if(isLoad){
            return (
                <FormGroup>
                    <Input type="select" name="company" id="exampleSelect" value = {this.props.value} onChange = {this.props.onChange}>
                        {this.showCompanies(companies)}
                    </Input>
                </FormGroup>
            );
        }
        else {
            return <div><h5>Loading...</h5></div>
        }
        
    }

    showCompanies(companies){
        var result = null
        if(companies.length > 0)
        {
            
            result = companies.map((company, index) => {
                
                return <option value = {company.id} key = {index}>{company.name}</option>
            })
        }
        return result;
    }
}

export default Company;