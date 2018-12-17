import React, { Component } from 'react';
class ProductList extends Component {
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
                <th> Product ID</th>
                <th> Product Name</th>
                <th> Company</th>
                <th> Category</th>
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

export default ProductList;
