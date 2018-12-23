import React, { Component } from 'react';
import CartBanner from '../../../components/client/cart/cartBanner'
import CartList from '../../../components/client/cart/cartList'
import CartItem from '../../../components/client/cart/cartItem'

class CartPage extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            product_carts : [],
            isLoad : false
        }
    }

    summaryOrders = (productCarts) => {
        var result = 0
        for(var val of productCarts){
            result += val.quantity*val.price
        }
        return result
    }

    render() {
        var product_carts = JSON.parse(localStorage.getItem('cart'))
        
        return (
            <div>
                <CartBanner/>
                <div className = "container pdt-45">
                    <CartList>
                        {this.showProductCarts(product_carts)}
                    </CartList>
                    <h4>Total : {this.summaryOrders(product_carts)}</h4>
                </div>
                
            </div>
        );
    }
    showProductCarts(product_carts){
        var result = null
        if(product_carts.length > 0)
        {
            result = product_carts.map((product_cart, index) => {
                return <CartItem
                    key = {index}
                    product_cart = {product_cart}
                    index = {index}
                    // onDelete = {this.onDelete}
                />
            })
        }
        return result;
    }
}

export default CartPage;