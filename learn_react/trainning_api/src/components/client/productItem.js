import React, { Component } from 'react';

class ProductItem extends Component {



    render() {
        var {product, index} = this.props;
        return (
            <div className="col-sm-4 pdt-45"> 
                <div className="imagecc">
                    <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image" alt="smaple image"/>
                    <div className="middle">
                        <div className="text"><button className = "btn btn-default"><i className = "fa fa-shopping-cart"></i> Add To Cart</button></div>
                    </div>
                    <div className = "title pdt-20">
                        <b>{product.name}</b>
                        <h4>{product.price}</h4>
                    </div>
                </div>   
            </div>
        );
    }
}

export default ProductItem;