import React, { Component } from 'react';
import Slide from "./../../../components/client/home/slide"
import callAPI from '../../../utils/apiCaller';
import ProductItem from "./../../../components/client/productItem"

class HomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoad : false,
            productMan : [],
            productWoman : []
        }
    }

    componentWillReceiveProps(newprops){
        console.log(newprops)
    }
    componentDidMount () {
        callAPI(`product_age_type/Man`, "GET", null, null).then(ManProduct => {
            callAPI(`product_age_type/Woman`, "GET", null, null).then(WomanProduct => {
                this.setState({
                    isLoad : true,
                    productMan : ManProduct.data,
                    productWoman : WomanProduct.data
                })
            })
        })
    }


    render() {
        var {isLoad, productMan, productWoman} = this.state
        if(isLoad){
            return (
                <div>
                    <Slide/>
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
                                                    <img src="https://www.kiton.it/sites/default/files/Kiton%20-%20Men%20Outfits_1.jpg" className="img-fluid image-feature" alt="smaple image"/>
                                                    <div className="middle">
                                                        <div className="text"><input type = "button" value = "click me"/></div>
                                                    </div>
                                                </div>   
                                            </div>
                                            <div className = "col-sm-7">
                                                <div className = "row">
                                                {this.showProduct(productMan)}    
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
                                                {this.showProduct(productWoman)}    
                                                </div>
                                                <div className = "row pdt-45">
                                                    <button className = "btn btn-success"> show more</button>
                                                </div>
                                            </div>
                                            <div className = "col-sm-5">
                                                <div className="col-sm-3">  
                                                    <div className="">
                                                        <img src="https://devitems.com/html/shofixe-preview/shofixe/img/product/b2.jpg" className="img-fluid image-feature" alt="smaple image"/>
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
                </div>
            );
        }
        else {
            return (<div>Loading...</div>)
        }
    }

    showProduct = (products) => {
        var result = null
        if( products.length > 0)
        {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        path = "/"
                        key = {index}
                        product = {product}
                        index = {index}
                    />
                    )
            })
        }
        return result;
    }
}

export default HomePage;