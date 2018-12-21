import React, { Component } from 'react';

class CategoryList extends Component {

    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">List All Category</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th> No</th>
                            <th> ID</th>
                            <th> Name</th>
                            <th> Age Type</th>
                            <th> Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        )
        
    }
}

export default CategoryList;