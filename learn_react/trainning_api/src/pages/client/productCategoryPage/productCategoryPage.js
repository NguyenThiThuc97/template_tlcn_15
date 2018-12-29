import React, { Component } from 'react';
import callAPI from '../../../utils/apiCaller';
import ProductItem from '../../../components/client/productItem';
import BannerProductCategory from '../../../components/client/product/bannerProductCategory'
import ProductCategory from '../../../components/client/product/productCategory';

class ProductCategoryPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoad : false,
            products : [],
            category : 0
        }
    }
    componentWillReceiveProps(newprops){
        this.setState({
            isLoad : false
        })
        var category = newprops.match.params.id
        callAPI(`product_category/${category}`, "GET", null, null).then(res => {
            this.setState({
                products : res.data,
                category : category,
                isLoad :true
            })
        })
    }
    componentDidMount(){
        var category = this.props.match.params.id
        callAPI(`product_category/${category}`, "GET", null, null).then(res => {
            this.setState({
                isLoad : true,
                products : res.data,
                category : category
            })
        })
    }

    render() {

        var {isLoad, products, category} = this.state 
        
        if(isLoad){
            return (
                <div>
                    <BannerProductCategory/>
                    <div className="container text-center">
                        <h3> == Product Show == </h3><br />
                        <div className="row">
                            {this.showProductCategories(products)}
                        </div>
                    </div>
                    {/* <ProductCategory category = {category} /> */}
                </div>
            );
        }
        else { 
            return (
                <div>Loading...</div>
            )
        }
    }

    showProductCategories = (products) => {
        var result = null
        if( products.length > 0)
        {
            result = products.map((product, index) => {
                return (
                <ProductItem
                    path = "/category/"
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

export default ProductCategoryPage;