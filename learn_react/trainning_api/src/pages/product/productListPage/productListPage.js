import React, { Component } from 'react';
import {connect} from 'react-redux'
import callAPI from '../../../utils/apiCaller'
import { Link, Redirect } from 'react-router-dom'

import ProductList from '../../../components/product/productList/productList'
import ProductItem from '../../../components/product/productItem/productItem'
// import { actFetchProduct } from '../../actions/index'

class ProductListPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      products : [], 
      isLoad : false,
      loggedInUser : ""
    }
  }

  componentDidMount (){//is called after component render first time

    var loggedInUser = JSON.parse(localStorage.getItem('user'))

    callAPI("product", "GET", null).then(res=>
      {
        this.setState({
          products : res.data, 
          isLoad : true,
          loggedInUser : loggedInUser
        })
      })
  
  }

  render() {
    // var {products} = this.props
    var { isLoad, products, loggedInUser } = this.state

    if(loggedInUser === null)
        {
            return <Redirect to = "/login" />
        }

    if(!isLoad)
    {
      return <div>loading..</div>
    }
    else
      {
        return (
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Link to = "/product/add" className="btn btn-info mb-10">Add a new product</Link>
              <ProductList>
                { this.showProduct(products) }
              </ProductList>
            </div>
          </div> 
        )
      }
    
  }
  showProduct(products) {
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
const mapStateToProps = state => {
  return {
    products : state.products        // because we have combined to products in index.js of reducers 
  }
}

// const mapDispatchToProps = (dispatch, props) => {
//   return {
//     fetchAllProducts = (products) => {
//       dispatch(actFetchProduct(products))
//     }
//   }
// }
export default connect(mapStateToProps, null)(ProductListPage);
