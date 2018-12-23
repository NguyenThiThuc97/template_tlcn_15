import React, { Component } from 'react';

class CartList extends Component {
    render() {
        return (
            
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th> No</th>
                        <th> ID</th>
                        <th> Name</th>
                        <th> Size</th>
                        <th> Color</th>
                        <th> Price</th>
                        <th> Quantity</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
            
        );
    }
}

export default CartList;    