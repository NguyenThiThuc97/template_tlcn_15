import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area">
                    <div className="footer-middle-area ptb-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="footer-widget">
                                        <h5>Contact</h5>
                                        <div className="single-footer-contact">
                                            <div className="footer-icon">
                                                <i className="fa fa-map-marker"></i>
                                            </div>
                                            <div className="footer-contact-info">
                                                <p>8901 Marmora Raod, </p>
                                                <p>Glasgow, D04  89GR</p>
                                            </div>
                                        </div>
                                        <div className="single-footer-contact">
                                            <div className="footer-icon">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                            <div className="footer-contact-info">
                                                <p>Telephone : +012 345 678 102</p>
                                                <p>Telephone : +032 225 501 172</p>
                                            </div>
                                        </div>
                                        <div className="single-footer-contact">
                                            <div className="footer-icon">
                                                <i className="fa fa-globe"></i>
                                            </div>
                                            <div className="footer-contact-info">
                                                <p>Email : <a href="#">info@example.com</a></p>
                                                <p>Web : <a href="#">www.example.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-12">
                                    <div className="footer-widget">
                                        <h5>Company</h5>
                                        <ul>
                                            <li><a href="index.html"><i className="fa fa-circle"></i>Home</a></li>
                                            <li><a href="about.html"><i className="fa fa-circle"></i>About us</a></li>
                                            <li><a href="contact.html"><i className="fa fa-circle"></i>Contact us</a></li>
                                            <li><a href="blog.html"><i className="fa fa-circle"></i>Our blog</a></li>
                                            <li><a href="#"><i className="fa fa-circle"></i>Supports center</a></li>
                                            <li><a href="#"><i className="fa fa-circle"></i>Privacy policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 hidden-sm col-xs-12">
                                    <div className="footer-widget">
                                        <h5>Support</h5>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-circle"></i>Delivery information</a></li>
                                            <li><a href="#"><i className="fa fa-circle"></i>Order tracking</a></li>
                                            <li><a href="#"><i className="fa fa-circle"></i>Return product</a></li>
                                            <li><a href="#"><i className="fa fa-circle"></i>Gift card</a></li>
                                            <li><a href="#"><i className="fa fa-circle"></i>Home delivery</a></li>
                                            <li><a href="#"><i className="fa fa-circle"></i>Online support</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-3 col-xs-12">
                                    <div className="footer-widget">
                                        <h5>Information</h5>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-circle"></i>Payment option</a></li>
                                            <li><a href="#"><i className="fa fa-circle"></i>Shipping</a></li>
                                            <li><a href="checkout.html"><i className="fa fa-circle"></i>Checkout</a></li>
                                            <li><a href="#"><i className="fa fa-circle"></i>Discount</a></li>
                                            <li><a href="#"><i className="fa fa-circle"></i>Sitemap</a></li>
                                            <li><a href="#"><i className="fa fa-circle"></i>Service</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-area ptb-25">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="copyright">
                                        <p>Copyright @ 2017 <span><a href="#">DevItems</a></span>. All right reserved. </p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="footer-menu text-center">
                                        <nav>
                                            <ul>
                                                <li><a href="">Site Map</a></li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                                <li className="hidden-md hidden-xs"><a href="wishlist.html">Wish List</a></li>
                                                <li><a href="#">Newsletter</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-md-4 hidden-sm">
                                    <div className="payment text-right">
                                        <img src="img/payment/1.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
        );
    }
}

export default Footer;