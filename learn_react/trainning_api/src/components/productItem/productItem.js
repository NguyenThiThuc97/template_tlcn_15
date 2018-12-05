import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    var {product, index} = this.props;
    return (
        <tr>
          <td>{index + 1}</td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>
            <span className="label label-warning">not null</span></td>
          <td>
            <button type="button" className="btn btn-success mr-10">Edit</button>
            
            <button type="button" className="btn btn-danger">Delete</button></td>
        </tr>
    );
  }
}

export default ProductList;
