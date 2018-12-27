import React, { Component } from 'react';
import {CartContext} from './cart'

class CartItem extends Component {

    onDelete = (id) =>{
        if(confirm("Are you sure?")){ //eslint-disable-line
            this.props.onDelete(id)
        }
    }

    render() {
        
        var { cartItem, index } = this.props
        
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{cartItem.product_id}</td>
                <td>{cartItem.name}</td>
                <td>{cartItem.size}</td>
                <td>{cartItem.color}</td>
                <td>{cartItem.price}</td>
                <td>{cartItem.quantity}</td>
                <td>
                <CartContext.Consumer>
                    {({deleteCartItem}) => <button 
                        type="button" 
                        className="btn btn-danger" 
                        onClick = {() => deleteCartItem(cartItem.product_id, cartItem.size, cartItem.color)}
                        >Delete
                    </button>}
                </CartContext.Consumer>
                {/* <button 
                        type="button" 
                        className="btn btn-danger" 
                        onClick = { () => this.onDelete(product_cart.id)} 
                        >Delete
                </button> */}
                </td>
            </tr>
        );
    }
}

export default CartItem;