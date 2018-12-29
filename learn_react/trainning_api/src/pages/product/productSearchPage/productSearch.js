import React, { Component } from 'react';
import callAPI, { callImage } from '../../../utils/apiCaller';
import ProductItem from '../../../components/client/productItem';
import Color from '../../../components/color/color';

class ProductSearch extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            isLoad : false,
            product : null
        }
    }

    componentDidMount(){
        
        callAPI(`product/${this.props.match.params.id}`, "GET", null, null).then(res => {
            
            this.setState({
                isLoad : true,
                product : res.data
            })
            // console.log(res.data)
        })
    }

    showProductDetail = (product) => {
        
        var result = null
        if(product.product.length > 0)
        {
            
            result = product.product.map((item, index) => {
                
                return <tr key = {index}><td>{item.size}</td><td><Color value = {item.color}/></td><td>{item.price}</td></tr>
            })
        }
        return  <tbody>
                    {result}
                </tbody>
                
    }  

    render() {
        var {isLoad, product} = this.state
        
        if(isLoad){
            return (
                <div className="container text-center">
                    <h3> == Product Detail == </h3><br />
                    <div className="row">
                        <div className = "">
                            <ProductItem product = {product}/>
                        </div>
                        <div className = "col-sm-5">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Size</th>
                                    <th>Color</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            
                                {this.showProductDetail(product)}
                            
                        </table>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>Loading...</div>
            );
        }
    }
}

export default ProductSearch;