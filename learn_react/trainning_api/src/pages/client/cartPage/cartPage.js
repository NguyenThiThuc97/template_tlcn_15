import React, { Component } from 'react';
import CartBanner from '../../../components/client/cart/cartBanner'
import CartList from '../../../components/client/cart/cartList'
import CartItem from '../../../components/client/cart/cartItem'
import callAPI from '../../../utils/apiCaller';
import {CartContext} from './../../../components/client/cart/cart'

class CartPage extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            product_carts : JSON.parse(localStorage.getItem('cart')),
            isLoad : false
        }
    }

    componentWillReceiveProps(newprops){
        console.log(newprops)
    }

    summaryOrders = (productCarts) => {
        var result = 0
        for(var val of productCarts){
            result += val.quantity*val.price
        }
        return result.toString()
    }

    // onDelete = (id) => {
    //     var {product_carts} = this.state
    //     var index = this.findIndex(product_carts, id)
    //     if(index !== -1)
    //     {
    //         product_carts.splice(index, 1)
    //         this.setState({
    //             product_carts : product_carts
    //         })
    //         var cart = JSON.parse(localStorage.getItem("cart") || "[]");
    //         cart.splice(index, 1)
    //         localStorage.setItem("cart", JSON.stringify(cart));
    //     }
    // }

    // findIndex = (product_carts, id) =>{
    //     var result = -1
    //     product_carts.forEach((product_cart, index) => {
    //         if(product_cart.id === id)
    //         {
    //             result = index
    //         }
    //     });

    //     return result;
    // }

    render() {
        
        // var {product_carts} = this.state
        return (
            <div>
                <CartBanner/>
                <div className = "container pdt-45">
                
                    <CartContext.Consumer>
                        {({cartItems}) => <CartList>{this.showProductCarts({cartItems})}</CartList>}
                    </CartContext.Consumer>
                    
                    <CartContext.Consumer>
                        {({cartItems}) => <h4>Total : {cartItems ? this.summaryOrders(cartItems): "0"}</h4>}
                    </CartContext.Consumer>

                    <CartContext.Consumer>
                        {({orders, cartItems}) => <button className = "btn btn-success" onClick = {() => orders(this.summaryOrders(cartItems))}>Orders</button>}
                    </CartContext.Consumer>
                </div>
                    
                
            </div>
        );
    }
    showProductCarts(cartItems){
        
        var result = null
        if(cartItems.cartItems){
            if(cartItems.cartItems.length > 0)
            {
                
                result = cartItems.cartItems.map((cartItem, index) => {
                    
                    return <CartItem
                        key = {index}
                        cartItem = {cartItem}
                        index = {index}
                        // onDelete = {this.onDelete}
                    />
                })
            }
        }
        
        return result;
    }
}

export default CartPage;