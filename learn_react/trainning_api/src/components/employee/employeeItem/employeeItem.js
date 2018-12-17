import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class EmployeeItem extends Component {

    onDelete = (id) =>{
        if(confirm("Are you sure?")){ //eslint-disable-line
            this.props.onDelete(id)
        }
    }

    render() {
        var { employee, index } = this.props
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{employee.id}</td>
                <td>{employee.username}</td>
                <td>{employee.fullname}</td>
                <td>{employee.mail}</td>
                <td>{employee.phone}</td>
                <td>{employee.address}</td>
                <td>{employee.departmentName}</td>
                <td>
                    <Link to = {`/employee/edit/${employee.id}`} className="btn btn-success mr-10">Edit</Link>
                    
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        onClick = { () => this.onDelete(employee.id)} >Delete</button></td>
            </tr>
        );
    }
}

export default EmployeeItem;