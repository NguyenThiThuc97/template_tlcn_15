import React, { Component } from 'react';
// import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Slider from "react-slick";
import './initApp.js'
import $ from 'jquery';

class AppClient extends Component {
    
    componentDidMount(){
        
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div>
                {/* top menu */}
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
                {/* inforation menu */}
                <div className="container text-center">
                    <div className = "row">
                          <div className = "col-sm-3">
                                <img src = "https://legupwebdesign.com/wp-content/uploads/2015/04/e-commerce-image.png" width = "200px"/>
                          </div> 
                          <div className = "col-sm-3 pdt-45">
                            <h4>+012 345 678 102</h4>
                            <h5>We are open 9 am - 10pm</h5>
                          </div>
                          <div className = "col-sm-3 pdt-45">
                            <h4>info@example.com</h4>
                            <h5>You can mail us</h5>
                          </div>
                          <div className = "col-sm-3 pdt-45"><br/>
                            <img className = "mr-10" src = "https://devitems.com/html/shofixe-preview/shofixe/img/icon/search.png"/>
                            <input type="text" placeholder="Search..."/>
                          </div>

                    </div>
                </div>
                {/* main menu */}
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
                {/* slide */}
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to={0} className="active" />
                        <li data-target="#myCarousel" data-slide-to={1} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="https://devitems.com/html/shofixe-preview/shofixe/img/slider/1.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <h3>Sell $</h3>
                                <p>Money Money.</p>
                            </div>      
                        </div>
                        <div className="item">
                            <img src="https://devitems.com/html/shofixe-preview/shofixe/img/slider/2.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <h3>More Sell $</h3>
                                <p>Lorem ipsum...</p>
                            </div>      
                        </div>
                    </div>
                    {/* Left and right controls */}
                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                    
                <div className="container text-center">    
                    <h3> == Product Show == </h3><br />
                    <div className="row">
                        <div className = "">
                            <ul className="nav nav-pills nav-fill navtop nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active mr-10" href="#menu1" data-toggle="tab" role="tab"><h4>HOT </h4></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#menu2" data-toggle="tab" role="tab"><h4>NEW ARRIVAL </h4></a>
                                </li>
                            </ul>
                            <div className="tab-content float-right">
                                <div className="tab-pane active" role="tabpanel" id="menu1">
                                    <div className = "row">
                                        <div className="col-sm-3 pdt-45">  
                                            <div className="imagecc">
                                                <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>
                                                <div className = "title pdt-20">
                                                    <b>product 1</b>
                                                    <h4>price : 10$</h4>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-sm-3 pdt-45"> 
                                            <div className="imagecc">
                                                <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>
                                                <div className = "title pdt-20">
                                                    <b>product 1</b>
                                                    <h4>price : 10$</h4>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-sm-3 pdt-45">  
                                            <div className="imagecc">
                                                <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>
                                                <div className = "title pdt-20">
                                                    <b>product 1</b>
                                                    <h4>price : 10$</h4>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-sm-3 pdt-45"> 
                                            <div className="imagecc">
                                                <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>
                                                <div className = "title pdt-20">
                                                    <b>product 1</b>
                                                    <h4>price : 10$</h4>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-sm-3 pdt-45"> 
                                            <div className="imagecc">
                                                <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>
                                                <div className = "title pdt-20">
                                                    <b>product 1</b>
                                                    <h4>price : 10$</h4>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-sm-3 pdt-45"> 
                                            <div className="imagecc">
                                                <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>
                                                <div className = "title pdt-20">
                                                    <b>product 1</b>
                                                    <h4>price : 10$</h4>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-sm-3 pdt-45"> 
                                            <div className="imagecc">
                                                <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>
                                                <div className = "title pdt-20">
                                                    <b>product 1</b>
                                                    <h4>price : 10$</h4>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-sm-3 pdt-45"> 
                                            <div className="imagecc">
                                                <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>
                                                <div className = "title pdt-20">
                                                    <b>product 1</b>
                                                    <h4>price : 10$</h4>
                                                </div>
                                            </div>   
                                        </div>
                                    </div>
                                    <div className = "row pdt-45">
                                        <button className = "default"> show more </button>
                                    </div>
                                </div>
                                <div className="tab-pane" role="tabpanel" id="menu2">
                                    <div className = "row">
                                        <div className="col-sm-3 pdt-45">  
                                            <div className="imagecc">
                                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg" className="img-fluid image" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>
                                                <div className = "title pdt-20">
                                                    <b>product 1</b>
                                                    <h4>price : 10$</h4>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-sm-3 pdt-45"> 
                                            <div className="imagecc">
                                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg" className="img-fluid image" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>
                                                <div className = "title pdt-20">
                                                    <b>product 1</b>
                                                    <h4>price : 10$</h4>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-sm-3 pdt-45">  
                                            <div className="imagecc">
                                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg" className="img-fluid image" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>
                                                <div className = "title pdt-20">
                                                    <b>product 1</b>
                                                    <h4>price : 10$</h4>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-sm-3 pdt-45"> 
                                            <div className="imagecc">
                                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg" className="img-fluid image" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>
                                                <div className = "title pdt-20">
                                                    <b>product 1</b>
                                                    <h4>price : 10$</h4>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-sm-3 pdt-45">  
                                            <div className="imagecc">
                                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg" className="img-fluid image" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>
                                                <div className = "title pdt-20">
                                                    <b>product 1</b>
                                                    <h4>price : 10$</h4>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-sm-3 pdt-45"> 
                                            <div className="imagecc">
                                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg" className="img-fluid image" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>
                                                <div className = "title pdt-20">
                                                    <b>product 1</b>
                                                    <h4>price : 10$</h4>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-sm-3 pdt-45">  
                                            <div className="imagecc">
                                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg" className="img-fluid image" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>
                                                <div className = "title pdt-20">
                                                    <b>product 1</b>
                                                    <h4>price : 10$</h4>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-sm-3 pdt-45"> 
                                        <div className="imagecc">
                                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg" className="img-fluid image" alt="smaple image"/>
                                            <div className="middle">
                                                <div className="text"><input type = "button" value = "click me"/></div>
                                            </div>
                                            <div className = "title pdt-20">
                                                <b>product 1</b>
                                                <h4>price : 10$</h4>
                                            </div>
                                        </div>   
                                    </div>
                                    </div>
                                    <div className = "row pdt-45">
                                        <button className = "default"> show more </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br />
                <div className="container text-center">    
                    <h3> == Product Show == </h3><br />
                    <div className="row">
                        <div className = "">
                            <ul className="nav nav-pills nav-fill navtop nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active mr-10" href="#man" data-toggle="tab" role="tab"><h4>MAN </h4></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#woman" data-toggle="tab" role="tab"><h4>WOMAN </h4></a>
                                </li>
                            </ul>
                            <div className="tab-content float-right">
                                <div className="tab-pane active" role="tabpanel" id="man">
                                    <div className = "row">
                                        <div className="col-sm-5">  
                                            <div className="">
                                                <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image-feature" alt="smaple image"/>
                                                <div className="middle">
                                                    <div className="text"><input type = "button" value = "click me"/></div>
                                                </div>

                                            </div>   
                                        </div>
                                        <div className = "col-sm-7">
                                            <div className = "row">
                                                <div className="col-sm-4">  
                                                    <div className="imagecc">
                                                        <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image" alt="smaple image"/>
                                                        <div className="middle">
                                                            <div className="text"><input type = "button" value = "click me"/></div>
                                                        </div>
                                                    </div>   
                                                </div>
                                                <div className="col-sm-4">  
                                                    <div className="imagecc">
                                                        <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image" alt="smaple image"/>
                                                        <div className="middle">
                                                            <div className="text"><input type = "button" value = "click me"/></div>
                                                        </div>
                                                    </div>   
                                                </div>
                                                <div className="col-sm-4"> 
                                                    <div className="imagecc">
                                                        <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image" alt="smaple image"/>
                                                        <div className="middle">
                                                            <div className="text"><input type = "button" value = "click me"/></div>
                                                        </div>
                                                    </div>   
                                                </div>
                                            </div>
                                            <div className = "row pdt-45">
                                                <button className = "default"> show more</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" role="tabpanel" id="woman">
                                    <div className = "row">
                                        <div className = "col-sm-7">
                                            <div className = "row">
                                                <div className="col-sm-4">  
                                                    <div className="imagecc">
                                                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg" className="img-fluid image" alt="smaple image"/>
                                                        <div className="middle">
                                                            <div className="text"><input type = "button" value = "click me"/></div>
                                                        </div>
                                                    </div>   
                                                </div>
                                                <div className="col-sm-4"> 
                                                    <div className="imagecc">
                                                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg" className="img-fluid image" alt="smaple image"/>
                                                        <div className="middle">
                                                            <div className="text"><input type = "button" value = "click me"/></div>
                                                        </div>
                                                    </div>   
                                                </div>
                                                <div className="col-sm-4"> 
                                                    <div className="imagecc">
                                                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg" className="img-fluid image" alt="smaple image"/>
                                                        <div className="middle">
                                                            <div className="text"><input type = "button" value = "click me"/></div>
                                                        </div>
                                                    </div>   
                                                </div>
                                            </div>
                                            <div className = "row pdt-45">
                                                <button className = "default"> show more</button>
                                            </div>
                                        </div>
                                        <div className = "col-sm-5">
                                            <div className="col-sm-3">  
                                                <div className="">
                                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg" className="img-fluid image-feature" alt="smaple image"/>
                                                    <div className="middle">
                                                        <div className="text"><input type = "button" value = "click me"/></div>
                                                    </div>
                                                </div>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br />
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
                                            <h3 className="mt-4"><i className="fa fa-envelope pr-2" /> GET IN TOUCH: </h3>
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
            </div>
        );
    }
}

export default AppClient;