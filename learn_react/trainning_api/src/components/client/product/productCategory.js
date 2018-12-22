import React, { Component } from 'react';
import ProductItem  from '../../../components/client/productItem'
import callAPI from '../../../utils/apiCaller';

class ProductCategory extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoad : false,
            products : []
        }
    }
    componentDidMount(){
        var category = this.props.category
        callAPI(`product_category/${category}`, "GET", null, null).then(res => {
            this.setState({
                isLoad : true,
                products : res.data
            })
        })
    }
    render() {
        var {isLoad, products} = this.state
        if(isLoad ){
            return (
                <div>{this.showProductCategories(products)}</div>
            )
            
        }
        else{
            return (
                <div>
                    Loading...
                </div>
            );
        }
        
    }
    showProductCategories = (products) => {
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

export default ProductCategory;