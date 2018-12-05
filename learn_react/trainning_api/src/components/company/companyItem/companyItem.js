import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class CompanyItem extends Component {

    onDelete = (id) =>{
        if(confirm("Are you sure?")){ //eslint-disable-line
            this.props.onDelete(id)
        }
    }

    render() {
        var { company, index } = this.props
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{company.id}</td>
                <td>{company.name}</td>
                {/* <td>{company.mail}</td>
                <td>{company.website}</td>
                <td>{company.fanpage}</td> */}
                <td>{company.phone}</td>
                <td>{company.address}</td>
                <td>
                    <Link to = {`/company/edit/${company.id}`} className="btn btn-success mr-10">Edit</Link>
                    
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        onClick = { () => this.onDelete(company.id)} >Delete</button></td>
            </tr>
        );
    }
}

export default CompanyItem;