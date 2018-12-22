import React, { Component } from 'react';

class ProductItem extends Component {

    showProductDetail = (product_id) => {

    }

    render() {
        var {product, index} = this.props;
        return (
            <div>
                <div className="col-sm-4 "> 
                    <div className="imagecc">
                        <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image" alt="smaple image"/>
                        <div className="middle">
                            <div className="text"><button className = "btn btn-default" data-toggle="modal" data-target="#myModal"><i className = "fa fa-shopping-cart"></i> Add To Cart</button></div>
                        </div>
                        <div className = "title pdt-20">
                            <b>{product.name}</b>
                            <h4>{product.price}</h4>
                        </div>
                    </div>   
                </div>
                {/* Modal */}
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                    {/* Modal content*/}
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            <h4 className="modal-title">Select Product Detail</h4>
                        </div>
                        <div className="modal-body">
                            <p>Some text in the modal.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success">Add To Cart</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;