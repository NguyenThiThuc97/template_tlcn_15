import React, { Component } from 'react';

class MainMenu extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="index.html">New Arrival</a>
                </li>
                <li className="shop"><a href="shop-grid-right-sidebar.html">Hot</a>
                </li>
                <li className="dropdown"><a href="shop.html">Categories</a>
                    <ul className="submenu-mainmenu">
                        <li><a href="cart.html"><i className="fa fa-circle"></i>Dess</a></li>
                        <li><a href="checkout.html"><i className="fa fa-circle"></i>Coat</a></li>
                        <li><a href="contact.html"><i className="fa fa-circle"></i>...</a></li>
                    </ul>
                </li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        );
    }
}

export default MainMenu;