import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class ProductDetailItem extends Component {
    onDelete = (id) =>{
        if(confirm("Are you sure?")){ //eslint-disable-line
            this.props.onDelete(id)
        }
      }

    render() {
        var {productDetail, index} = this.props;
        if(this.props.productDetail){
            var product_id = productDetail.product_id
        var size = productDetail.size
        var color = productDetail.color
        return (
            <tr>
            <td>{index + 1}</td>
            <td>{product_id}</td>
            <td>{size}</td>
            <td>{color}</td>
            <td>{productDetail.price}</td>
            <td>{productDetail.quantity}</td>
            <td>{productDetail.date_received}</td>
            <td>
                <Link to = {`/product-detail/edit/${product_id}/${size}/${color}`} className="btn btn-success mr-10">Edit</Link>
                        
                <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick = { () => this.onDelete(productDetail.id)} >Delete
                </button>  
            </td>
            </tr>
        );
        }
        else {
            return null
        }
    }
}

export default ProductDetailItem;