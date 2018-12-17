import React, { Component } from 'react';

class ProductDetailList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title"> List All Product Detail</h3>
                </div>
                <div className="panel-body">
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th> No</th>
                        <th> ID</th>
                        <th> Size</th>
                        <th> Color</th>
                        <th> Price</th>
                        <th> Quantity</th>
                        <th> Date Received</th>
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

export default ProductDetailList;