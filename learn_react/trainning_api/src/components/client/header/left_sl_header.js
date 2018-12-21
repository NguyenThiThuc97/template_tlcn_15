import React, { Component } from 'react';

class Left_SL_Header extends Component {
    render() {
        return (
            <ul className="submenu-mainmenu">
                <li><a href="#"><i className="fa fa-circle"></i>Login</a></li>
                <li><a href="account.html"><i className="fa fa-circle"></i>My Account</a></li>
                <li><a href="wishlist.html"><i className="fa fa-circle"></i>My Wishlist</a></li>
                <li><a href="cart.html"><i className="fa fa-circle"></i>My Cart</a></li>
                <li><a href="checkout.html"><i className="fa fa-circle"></i>Checkout</a></li>
            </ul>
        );
    }
}

export default Left_SL_Header;