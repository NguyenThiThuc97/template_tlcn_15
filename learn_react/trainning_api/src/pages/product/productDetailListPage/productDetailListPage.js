import React, { Component } from 'react';
import callAPI from '../../../utils/apiCaller';
import ProductDetailList from '../../../components/product/productDetailList/productDetailList';
import ProductDetailItem from '../../../components/product/productDetailItem/productDetailItem';
import {Link, Redirect} from 'react-router-dom'

class ProductDetailListPage extends Component {

    constructor(props){
        super(props)
        this.state = {
          productDetails : [], 
          isLoad : false,
          loggedInUser : JSON.parse(localStorage.getItem('user')),
          product_id : "" 
        }
    }

    componentDidMount (){//is called after component render first time
        var id = this.props.data
    
        callAPI(`product/${id}`, "GET", null, ).then(res=>
          {
            this.setState({
              products : res.data, 
              isLoad : true,
              product_id : id
            //   loggedInUser : loggedInUser
            })
          })
      
      }

    render() {
        var { isLoad, products, product_id, loggedInUser } = this.state
        if(loggedInUser === null)
        {
            return <Redirect to = "/login"/>
        }
        else if(loggedInUser.userType === "customer"){
            return <div className = "container"><h2>This site is only for ADMINISTRATIVE STAFF</h2></div>
        }
        var productDetails = products ? products.product : null
        if(isLoad === false){
            return (
                <div>
                    <h5>Loading...</h5>
                </div>
            );
        }
        else {
            return (
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to = {`/product-detail/add/${product_id}`} className="btn btn-info mb-10">Add a new product detail</Link>
                    <ProductDetailList>
                        { this.showProductDetail(productDetails) }
                    </ProductDetailList>
                    </div>
                </div>
            )
        }
    }

    showProductDetail(products){
        var result = null
        if(products.length > 0)
        {
            
            result = products.map((product, index) => {
                
                return <ProductDetailItem
                    key = {index}
                    productDetail = {product}
                    index = {index}
                    onDelete = {this.onDelete}
                />
            })
        }
        return result;
    }
}

export default ProductDetailListPage;