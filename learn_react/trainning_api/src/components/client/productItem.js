import React, { Component } from 'react';
import Size from '../../components/size/size'
import Color from '../../components/color/color'

class ProductItem extends Component {
    constructor(props){
        super (props)
        this.state = {
            size : "",
            color : 0
        }
    }

    showProductDetail = (product_id) => {

    }

    addToCart = () =>{
        var {size, color} = this.state
        var productDetail = {
            product_id : this.props.product.id,
            size : size,
            color : color
        }
        var cart = JSON.parse(localStorage.getItem("cart") || "[]");
        cart.push(productDetail)
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(this.props)
        document.getElementById("hideProductDetail").click();
    }

    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.value
        this.setState({
            [name] : value
        })
    }
    render() {
        var {product, index} = this.props;
        var {size, color} = this.state
        return (
            <div>
                <div className="col-sm-4 "> 
                    <div className="imagecc">
                        <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image" alt="smaple image"/>
                        <div className="middle">
                            <div className="text"><button className = "btn btn-default" data-toggle="modal" data-target="#product"><i className = "fa fa-shopping-cart"></i> Add To Cart</button></div>
                        </div>
                        <div className = "title pdt-20">
                            <b>{product.name}</b>
                        </div>
                    </div>   
                </div>
                {/* Modal */}
                <div className="modal fade" id="product" role="dialog">
                    <div className="modal-dialog">
                    {/* Modal content*/}
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            <h4 className="modal-title">Select Product Detail</h4>
                        </div>
                        <div className="modal-body">
                        <div className = "row">
                            <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image-product-detail" alt="smaple image"/>
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Size</th>
                                        <th>Color</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Size value = {size} onChange = { this.onChange }/></td>
                                        <td><Color value = {color} onChange = { this.onChange }/></td>
                                        <td>
                                            <div className="form-group">
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    name = "quantity" 
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" onClick = {this.addToCart}>Add To Cart</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" id = "hideProductDetail">Close</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;