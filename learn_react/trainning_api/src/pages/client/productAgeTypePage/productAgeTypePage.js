import React, { Component } from 'react';
import ProductItem from '../../../components/client/productItem';
import callAPI from '../../../utils/apiCaller';


class ProductAgeTypePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoad : false,
            products : [],
            age_type : ""
        }
    }

    componentDidMount(){
        var age_type = this.props.match.params.age_type
        callAPI(`product_age_type/${age_type}`, "GET", null, null).then(res => {
            this.setState({
                isLoad : true,
                products : res.data,
                age_type : age_type
            })
        })
    }

    render() {
        var {isLoad, products, age_type} = this.state 
        if(isLoad){
            return (
                <div>
                    <div className = "banner">
                        {age_type === "Man" ? 
                        <img className = "image-banner" src = "https://drive.google.com/uc?export=view&id=1EO54c2R-iANTXtaPVLzsMWHjhNscQDCd"/>:
                        <img className = "image-banner" src = "https://drive.google.com/uc?export=view&id=1tiBh6GjcTR1p9hJnmL4gweS4cxoNV2TZ"/>}
                        {/*  */}
                        {age_type === "Man" ?
                        <div className="text-block"> 
                            <h4>Product For Men</h4>
                            <p>Home > Product Age Type</p>
                        </div>:
                        <div className="text-block"> 
                            <h4>Product For Woman</h4>
                            <p>Home > Product Age Type</p>
                        </div>}
                    </div>
                    <div className="container text-center">
                            <h3> == Product Show == </h3><br />
                            <div className="row">
                                {this.showProductAgeType(products)}
                            </div>
                        </div>
                </div>
            );
        }
        else {
            return (
                <div>Loading...</div>
            )
        }
    }

    showProductAgeType = (products) => {
        var result = null
        if( products.length > 0)
        {
            result = products.map((product, index) => {
                return (
                <ProductItem
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

export default ProductAgeTypePage;