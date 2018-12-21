import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
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
        );
    }
}

export default ProductItem;