import React, { Component } from 'react';

class OrdersList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">List All Orders</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th> No</th>
                            <th> ID</th>
                            <th> Customer</th>
                            <th> Orders Detail</th>
                            <th> Total</th>
                            <th> Date Created</th>
                            <th> Date Tested</th>
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

export default OrdersList;