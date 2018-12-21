import React, { Component } from 'react';

class SubRightHeaderCartItem extends Component {
    render() {
        return (
            <li className="single-cart-item clearfix">
                <span className="cart-img">
                    <a href="#"><img src="img/cart/1.jpg" alt=""/></a>
                </span>
                <span className="cart-info">
                    <a href="#">Eletria ostma</a>
                    <span>$150 x 2</span>
                </span>
                <span className="trash-cart">
                    <a href="#"><i className="fa fa-trash-o"></i></a>
                </span>    
            </li>
        );
    }
}

export default SubRightHeaderCartItem;