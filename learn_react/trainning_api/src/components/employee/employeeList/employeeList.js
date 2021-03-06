import React, { Component } from 'react';

class EmployeeList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">List All Product</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th> No</th>
                            <th> ID</th>
                            <th> Username</th>
                            <th> Full Name</th>
                            <th> Mail</th>
                            <th> Phone</th>
                            <th> Address</th>
                            <th> Department</th>
                            <th> Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default EmployeeList;