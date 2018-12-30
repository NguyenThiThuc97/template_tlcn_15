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
            isLoad : false,
            loggedInUser: JSON.parse(localStorage.getItem('user'))
        }
    }

    componentDidMount(){
        callAPI("employee", "GET", null, null).then(res =>{
            this.setState({
                employees : res.data,
                isLoad : true,
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

        var { employees, isLoad, loggedInUser } = this.state
        if(loggedInUser === null)
        {
            return <Redirect to = "/login"/>
        }
        else if(loggedInUser.userType === "customer"){
            return <div className = "container"><h2>This site is only for ADMINISTRATIVE STAFF</h2></div>
        }
        if( isLoad ){
            
            return (
                <div className="row pdt-45">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {loggedInUser.userInfor.department === 1 ? 
                    <Link to = "/employee/add" className="btn btn-info mb-10">Add a new employee</Link> : ""}
                    <EmployeeList>
                        { this.showEmployees(employees) }
                    </EmployeeList>
                    </div>
                </div> 
            );
        }
        else{
            return <div>Loading...</div>
        }
    }

    showEmployees(employees){
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