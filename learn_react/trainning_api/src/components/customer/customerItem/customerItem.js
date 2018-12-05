import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class CustomerItem extends Component {

    onDelete = (id) =>{
        if(confirm("Are you sure?")){ //eslint-disable-line
            this.props.onDelete(id)
        }
    }

    render() {
        var { customer, index } = this.props
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{customer.id}</td>
                <td>{customer.username}</td>
                <td>{customer.full_name}</td>
                <td>{customer.mail}</td>
                <td>{customer.image}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
                <td>{customer.password}</td>
                <td>
                    <Link to = {`/customer/edit/${customer.id}`} className="btn btn-success mr-10">Edit</Link>
                    
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        onClick = { () => this.onDelete(customer.id)} >Delete</button></td>
            </tr>
        );
    }
}

export default CustomerItem;