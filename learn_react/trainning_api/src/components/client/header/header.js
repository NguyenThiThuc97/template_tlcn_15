import React, { Component } from 'react';
import LeftSLHeader from './left_sl_header'
import CenterSLHeader from './center_sl_header'
import RightSLHeader from './right_sl_header'
import MainMenu from './mainMenu'
import InforHeader from './infor_header'

class Header extends Component {
    render() {
        return (
            <header className="header-area">
                <div className="header-top-area ptb-10 hidden-sm hidden-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="account-usd text-left">
                                    <ul>
                                        <li><a href="account.html">My Account <i className="fa fa-angle-down"></i></a>
                                            <LeftSLHeader/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="social-icons text-center">
                                    <CenterSLHeader/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="top-right">
                                    <div className="top-login-cart">
                                        <RightSLHeader/>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>   
                </div>
                <div className="logo-info-area ptb-35">
                    <div className="container">
                        <InforHeader/>
                    </div>
                </div>
                <div className="mainmenu-area text-center hidden-sm hidden-xs">
                    <nav>
                        <div className="mainmenu">
                            <MainMenu/>
                        </div>
                    </nav>                  
                </div>    
            </header>
        );
    }
}

export default Header;