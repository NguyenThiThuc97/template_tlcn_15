import React, { Component } from 'react';
import SubRightHeaderCartItem from './sub_right_header_cart_item'

class Right_SL_Header extends Component {
    render() {
        return (
            <ul>
                <li className=" hidden-xs"><a href="account.html">Login or Register</a></li>
                <li className=" hidden-xs"><a href="checkout.html">Checkout</a></li>
                <li><a href="cart.html"><img src="https://devitems.com/html/shofixe-preview/shofixe/img/icon/cart_red.png" alt="cart"/>Cart (3)</a>
                    <ul className="submenu-mainmenu">
                         <SubRightHeaderCartItem/>
                    </ul>
                </li>
            </ul>
        );
    }
}

export default Right_SL_Header;