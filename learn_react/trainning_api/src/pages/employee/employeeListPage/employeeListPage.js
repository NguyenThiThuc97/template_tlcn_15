import React, { Component } from 'react';
import callAPI from '../../../utils/apiCaller'
import { Link, Redirect } from 'react-router-dom'
import EmployeeList from '../../../components/employee/employeeList/employeeList';
import EmployeeItem from '../../../components/employee/employeeItem/employeeItem';


class EmployeeListPage extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            employees : [],
            isLoad : false
        }
    }

    componentDidMount(){
        callAPI("employee", "GET", null).then(res =>{
            this.setState({
                employee : res.data,
                isLoad : true
            })
        })
    }

    onDelete = (id) => {
        var {employees} = this.state
        callAPI(`employee/delete/${id}`, "GET", null).then(res => {
            if(res.status === 200)//successful
            {
                var index = this.findIndex(employees, id)
                if(index !== -1)
                {
                    employees.splice(index, 1)
                    this.setState({
                        employees : employees
                    })
                }
            }
        })
    }

    findIndex = (employees, id) =>{
        var result = -1
        employees.forEach((employee, index) => {
            if(employee.id === id)
            {
                result = index
            }
        });

        return result;
    }

    render() {

        var loggedInUser = localStorage.getItem("user")

        if(loggedInUser !== null)
        {
            return <Redirect to = "/login"/>
        }


        var { employees, isLoad } = this.state
        if( !isLoad ){
            return <div>Loading...</div>
        }
        else{
            return (
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to = "/employee/add" className="btn btn-info mb-10">Add a new employee</Link>
                    <EmployeeList>
                        { this.showEmployees(employees) }
                    </EmployeeList>
                    </div>
                </div> 
            );
        }
    }
    showEmployee(employees){
        var result = null
        if(employees.length > 0)
        {
            result = employees.map((employee, index) => {
                return <EmployeeItem
                            key = {index}
                            employee = {employee}
                            index = {index}
                            onDelete = {this.onDelete}
                        />
            })
        }
        return result;
    }
}

export default EmployeeListPage;