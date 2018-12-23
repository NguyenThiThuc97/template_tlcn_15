import React, { Component } from 'react';

class CartItem extends Component {

    onDelete = (id) =>{
        if(confirm("Are you sure?")){ //eslint-disable-line
            this.props.onDelete(id)
        }
    }

    render() {
        var { product_cart, index } = this.props
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product_cart.product_id}</td>
                <td>{product_cart.name}</td>
                <td>{product_cart.size}</td>
                <td>{product_cart.color}</td>
                <td>{product_cart.price}</td>
                <td>{product_cart.quantity}</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        // onClick = { () => this.onDelete(company.id)} 
                        >Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;