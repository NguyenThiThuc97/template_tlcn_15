import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-5">
                        <h4>The Cute Dogs Shop</h4>
                        <ul className="list-unstyled quick-links">
                            <li><a><span className = "glyphicon glyphicon-map-marker"></span> 1 Võ Văn Ngân, Linh Chiểu, Thủ Đức, Hồ Chí Minh, Việt Nam</a></li>
                            <li><a><span className = "glyphicon glyphicon-phone"></span> 0123 456 789</a></li>
                            <li><a><span className = "glyphicon glyphicon-globe"></span> Web : www.example.com</a></li>
                        </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-7">
                        {/* <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Home</a></li>
                            <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />About</a></li>
                            <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />FAQ</a></li>
                            <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Get Started</a></li>
                            <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Videos</a></li>
                        </ul> */}
                        {/* contact form */}
                        {/* Section: Contact v.3 */}
                            <div className="card">
                                <div className="row">
                                    <div className="card-body form">
                                        <h3 className=""><i className="fa fa-envelope pr-2" /> GET IN TOUCH: </h3>
                                        <div className="row pdt-20">
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                <input type="text" id="form-contact-name" className="form-control" placeholder = "Your name"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                <input type="text" id="form-contact-email" className="form-control" placeholder = "Your email"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row pdt-20">
                                            <div className="col-md-12">
                                                <div className="md-form mb-0">
                                                    <textarea type="text" id="form-contact-message" className="form-control md-textarea" rows={5} defaultValue={""} placeholder ="Your message"/>
                                                    <br/>
                                                    <center><a className="btn-floating btn-lg blue" href = "#">
                                                        <i className="fa fa-send-o fa-xs" />
                                                    </a></center>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pdt-45">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                        <ul className="list-unstyled list-inline social text-center">
                            <li className="list-inline-item mr-10"><a ><i className="fa fa-facebook" /></a></li>
                            <li className="list-inline-item mr-10"><a ><i className="fa fa-twitter" /></a></li>
                            <li className="list-inline-item mr-10"><a ><i className="fa fa-instagram" /></a></li>
                            <li className="list-inline-item mr-10"><a ><i className="fa fa-google-plus" /></a></li>
                            <li className="list-inline-item mr-10"><a  target="_blank"><i className="fa fa-envelope" /></a></li>
                        </ul>
                        </div>
                    </div>	
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
                            <p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Sunlimetech</a></p>
                        </div>
                    </div>	
                </div>
            </section>
        );
    }
}

export default Footer;