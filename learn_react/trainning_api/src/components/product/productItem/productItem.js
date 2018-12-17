import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class ProductItem extends Component {

  onDelete = (id) =>{
    if(confirm("Are you sure?")){ //eslint-disable-line
        this.props.onDelete(id)
    }
  }

  render() {
    var {product, index} = this.props;
    return (
        <tr>
          <td>{index + 1}</td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          {/* <td>
            <span className="label label-warning">not null</span></td>
          <td> */}
          <td>{product.CompanyName}</td>
          <td>{product.CategoryName}</td>
          <td>
            <Link to = {`/product/edit/${product.id}`} className="btn btn-success mr-10">Edit</Link>
                    
            <button 
                type="button" 
                className="btn btn-danger" 
                onClick = { () => this.onDelete(product.id)} >Delete
            </button>  
          </td>
        </tr>
    );
  }
}

export default ProductItem;
