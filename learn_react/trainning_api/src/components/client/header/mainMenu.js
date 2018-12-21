import React, { Component } from 'react';

class MainMenu extends Component {
    render() {
        return (
            <div className = "container">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse text-center" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav hihi">
                                <li><a href="#">HOME</a></li>
                                <li><a href="#">NEW ARRIVAL</a></li>
                                <li><a href="#">HOT</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CATEGORY <span className="caret" /></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">item 1</a></li>
                                        <li><a href="#">item 2</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
                
        );
    }
}

export default MainMenu;