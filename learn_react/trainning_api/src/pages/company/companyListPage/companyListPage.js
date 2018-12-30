import React, { Component } from 'react';
import callAPI from '../../../utils/apiCaller'
import {Link, Redirect} from 'react-router-dom'
import CompanyList from './../../../components/company/companyList/companyList'
import CompanyItem  from '../../../components/company/companyItem/companyItem'

class CompanyListPage extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            companies : [],
            isLoad : false,
            loggedInUser : JSON.parse(localStorage.getItem('user'))
        }
    }

    componentDidMount(){
        callAPI("company", "GET", null).then(res =>{
            this.setState({
                companies : res.data,
                isLoad : true,
            })
        })
    }

    onDelete = (id) => {
        var {companies} = this.state
        callAPI(`company/delete/${id}`, "GET", null).then(res => {
            if(res.status === 200)//successful
            {
                var index = this.findIndex(companies, id)
                if(index !== -1)
                {
                    companies.splice(index, 1)
                    this.setState({
                        companies : companies
                    })
                }
            }
        })
    }

    findIndex = (companies, id) =>{
        var result = -1
        companies.forEach((company, index) => {
            if(company.id === id)
            {
                result = index
            }
        });

        return result;
    }

    render() {
        var { companies, isLoad, loggedInUser } = this.state
        
        if(loggedInUser === null)
        {
            return <Redirect to = "/login" />
        }
        else if(loggedInUser.userType === "customer"){
            return <div className = "container"><h2>This site is only for ADMINISTRATIVE STAFF</h2></div>
        }
        if( !isLoad ){
            return <div>Loading...</div>
        }
        else{
            return (
                <div className="row pdt-45">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to = "/company/add" className="btn btn-info mb-10">Add a new company</Link>
                    <CompanyList>
                        { this.showCompany(companies) }
                    </CompanyList>
                    </div>
                </div> 
            );
        }
    }
    showCompany(companies){
        var result = null
        if(companies.length > 0)
        {
            result = companies.map((company, index) => {
                return <CompanyItem
                    key = {index}
                    company = {company}
                    index = {index}
                    onDelete = {this.onDelete}
                />
            })
        }
        return result;
    }
}

export default CompanyListPage;