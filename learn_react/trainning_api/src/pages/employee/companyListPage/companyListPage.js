import React, { Component } from 'react';
import callAPI from '../../../utils/apiCaller'
import {Link} from 'react-router-dom'
import CompanyList from './../../../components/company/companyList/companyList'
import ProductItem  from '../../../components/company/companyItem/companyItem'
import productListPage from '../../productListPage/productListPage';
class CompanyListPage extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            companies : [],
            isLoad : false
        }
    }

    componentDidMount(){
        callAPI("company", "GET", null).then(res =>{
            this.setState({
                companies : res.data,
                isLoad : true
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
        var { companies, isLoad } = this.state
        if( !isLoad ){
            return <div>Loading...</div>
        }
        else{
            return (
                <div className="row">
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
                return <ProductItem
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