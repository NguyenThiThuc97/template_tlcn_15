import React, { Component } from 'react';

class CartBanner extends Component {
    render() {
        return (
            <div className = "banner">
                <img className = "image-banner" src = "https://devitems.com/html/shofixe-preview/shofixe/img/banner/9.jpg"/>
                <div className="text-block"> 
                    <h4>SHOPPING CART</h4>
                    <p>Home > Cart</p>
                </div>
            </div>
        );
    }
}

export default CartBanner;