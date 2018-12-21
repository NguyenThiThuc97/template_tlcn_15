import React, { Component } from 'react';

class TopMenu extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                        <li><a href="#"><span className="glyphicon glyphicon-home"></span></a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account <span className="caret" /></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Login</a></li>
                                <li><a href="#">My Profile</a></li>
                            </ul>
                        </li>
                        </ul>
                        
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-shopping-cart"></span> Cart <span className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Product 1</a></li>
                                    <li><a href="#">Product 2</a></li>
                                    <li><a href="#">Product 3</a></li>
                                    <li role="separator" className="divider" />
                                    <li><a href="#">Sub Total : 100$</a></li>
                                    <li role="separator" className="divider" />
                                    <li><a href="#">View Cart</a></li>
                                    <li><a href="#">Checkout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default TopMenu;