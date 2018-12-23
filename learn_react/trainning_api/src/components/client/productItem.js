import React, { Component } from 'react';
import Size from '../../components/size/size'
import Color from '../../components/color/color'
import {Redirect} from 'react-router-dom'
import callAPI from '../../utils/apiCaller';

class ProductItem extends Component {
    constructor(props){
        super (props)
        this.state = {
            size : "",
            color : 0,
            product_id : this.props.product.id
        }
    }

    showProductDetail = (product_id) => {

    }

    addToCart = () =>{
        var {size, color, quantity, product_id} = this.state

        callAPI(`product_detail/view/${product_id}/${size}/${color}`, "GET", null, null).then(res => {
            
            if(res.data.price){
                var productDetail = {
                    product_id : product_id,
                    size : size,
                    color : color,
                    quantity :quantity,
                    price : res.data.price
                }
                var cart = JSON.parse(localStorage.getItem("cart") || "[]");
                cart.push(productDetail)
                localStorage.setItem("cart", JSON.stringify(cart));
            }
            else {
                alert("product not existed")
            }
            // console.log(this.props)
            
            document.getElementById(`hideProductDetail`+product_id).click();
            var path = this.props.path
            
            if(path === "/"){
                return <Redirect to = "/contact"/>
            }
            else {
                return <Redirect to = {`${path}${this.props.product.id}`}/>
            }
            
            // console.log(`category/${this.props.product.id}`)
            // return <Redirect to = {`/category/${this.props.product.id}`}/>
        })
        
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
        var {size, color, product_id, quantity} = this.state
        console.log(this.state)
        return (
            <div>
                <div className="col-sm-4 "> 
                    <div className="imagecc">
                        <img src="https://www.jollyhers.com/media/catalog/product/f3/b1/1.jpg" className="img-fluid image" alt="smaple image"/>
                        <div className="middle">
                            <div className="text"><button className = "btn btn-default" data-toggle="modal" data-target={`#product`+product_id}><i className = "fa fa-shopping-cart"></i> Add To Cart</button></div>
                        </div>
                        <div className = "title pdt-20">
                            <b>{product.name}</b>
                        </div>
                    </div>   
                </div>
                {/* Modal */}
                <div className="modal fade" id={`product`+product_id} role="dialog">
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
                                                    onChange = {this.onChange}
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
                            <button type="button" className="btn btn-danger" data-dismiss="modal" id = {`hideProductDetail`+product_id}>Close</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;