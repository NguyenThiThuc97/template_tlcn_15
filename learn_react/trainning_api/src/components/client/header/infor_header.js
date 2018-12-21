import React, { Component } from 'react';

class InforHeader extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="header-logo">
                        <a href="index.html"><img src="https://devitems.com/html/shofixe-preview/shofixe/img/logo/1.png" alt="shofixe"/></a>
                    </div>
                </div>
                <div className="col-md-3 hidden-sm hidden-xs">
                    <div className="info">
                        <div className="info-icon">

                        </div>
                        <div className="info-text">
                            <h4>+012 345 678 102</h4>
                            <p>We are open 9 am - 10pm</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 hidden-sm hidden-xs">
                    <div className="info">
                        <div className="info-icon">

                        </div>
                        <div className="info-text">
                            <h4>info@example.com</h4>
                            <p>You can mail us</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="search-box">
                        <img src="https://devitems.com/html/shofixe-preview/shofixe/img/icon/search.png" alt=""/>
                        <form action="#">
                            <input type="text" placeholder="Search..."/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default InforHeader;