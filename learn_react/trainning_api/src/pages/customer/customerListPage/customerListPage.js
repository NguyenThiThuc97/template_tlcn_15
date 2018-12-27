import React, { Component } from 'react';
import callAPI from '../../../utils/apiCaller'
import { Link, Redirect } from 'react-router-dom'
import CustomerList from '../../../components/customer/customerList/customerList'
import CustomerItem  from '../../../components/customer/customerItem/customerItem'

class CustomerListPage extends Component {

    constructor(props)
    {
        
        super(props)
        this.state = {
            customers : [],
            isLoad : false,
            loggedInUser : JSON.parse(localStorage.getItem('user'))
        }
    }

    componentDidMount(){
        callAPI("customer", "GET", null).then(res =>{
            this.setState({
                customers : res.data,
                isLoad : true,
            })
        })
    }

    onDelete = (id) => {
        var {customers} = this.state
        callAPI(`customer/delete/${id}`, "GET", null).then(res => {
            if(res.status === 200)//successful
            {
                var index = this.findIndex(customers, id)
                if(index !== -1)
                {
                    customers.splice(index, 1)
                    this.setState({
                        customers : customers
                    })
                }
            }
        })
    }

    findIndex = (customers, id) =>{
        var result = -1
        customers.forEach((customer, index) => {
            if(customer.id === id)
            {
                result = index
            }
        });

        return result;
    }
    
    render() {

        var { customers, isLoad, loggedInUser } = this.state
        
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
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to = "/customer/add" className="btn btn-info mb-10">Add a new cutomer</Link>
                    <CustomerList>
                        { this.showCustomer(customers) }
                    </CustomerList>
                    </div>
                </div> 
            );
        }
    }
    showCustomer(customers){
        var result = null
        if(customers.length > 0)
        {
            result = customers.map((customer, index) => {
                return <CustomerItem
                    key = {index}
                    customer = {customer}
                    index = {index}
                    onDelete = {this.onDelete}
                />
            })
        }
        return result;
    }
}

export default CustomerListPage;