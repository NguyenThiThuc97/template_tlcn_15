import React, { Component } from 'react';
import callAPI, { callImage } from '../../../utils/apiCaller';
import ProductDetailListPage from '../productDetailListPage/productDetailListPage';
import Category from '../../../components/category/category';
import Company from '../../../components/company/company';
import {Link} from 'react-router-dom'
class ProductActionPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      id : "",
      productName : "",
      alias : "",
      company :0,
      companyName : "",
      category : 0,
      categoryName : "",
      image : "",
      action : false //true: update, false: create
    }
  }

  componentDidMount(){
    var {match} = this.props
    if(match){//update

      var id = match.params.id
      callAPI(`product/${id}`, 'GET', null).then(res => {

        var product = res.data
        
        this.setState({
            id : product.id,
            productName : product.name,
            alias : product.alias,
            company : product.company,
            companyName : product.CompanyName,
            category : product.category,
            categoryName : product.CategoryName,
            image : product.image,
            action :  true
        })
      })
    }

  }

  onChange = (e) => {
    var target = e.target
    var name = target.name
    
    var value = target.type === 'file' ? target.files[0] : target.value
    this.setState({
        [name] : value
    })
  }

  onSave = (e) => {
    var { id, productName, alias, company, category, image } = this.state
        var {history} = this.props
        
        e.preventDefault()//not submit page
        if(id)
        {
            if( image.length == null){//want to update image //undefined
                
                const data = new FormData();
                data.append('id', id)
                data.append('name', productName)
                data.append('image', image);
                data.append('alias', alias);
                data.append('category', category);
                data.append('company', company);
                callAPI("product/update", "POST", data).then(res => {
                  history.push("/product-list")
                })
            }
            else{
                
                callAPI("product/update", "POST", {
                    id : id,
                    name : productName,
                    alias : alias,
                    category : category,
                    company : company,
                }).then(res => {
                  history.push("/product-list")
                })
            }
            
        }
        else
        {
          
            const data = new FormData();
            data.append('name', productName);
            data.append('alias', alias);
            data.append('company', company);
            data.append('category', category);
            data.append('image', image);
            callAPI("product/create", "POST", data, true).then(res => {
              console.log(res)
                history.push("/product-list")
                // history.push("")
            })
        }
  }

  render() {
    var { id, productName, alias, category, company, image } = this.state
    
    return(
      <div className = "container pdt-45">

      
      <div className="">
        <form onSubmit = {this.onSave}>
          <div className="form-group">
            <label> Product Name</label>
            <input 
                  type="text"
                  name = "productName" 
                  className="form-control"
                  onChange = {this.onChange}
                  value  = {productName}
                  />
          </div>
          <div className="form-group">
            <label> Alias</label>
            <input type="text" className="form-control" onChange = {this.onChange} value = { alias } name = "alias"/>
          </div>
          <div className="form-group">
            <label> Category Name</label>
            <Category  value = {category} onChange = { this.onChange }/>
            {/* <input type="text" className="form-control" onChange = {this.onChange} value = { categoryName } name = "category"/> */}
          </div>
          <div className="form-group">
            <label> Company Name</label>
            <Company  value = {company} onChange = { this.onChange }/>
            {/* <input type="text" className="form-control" onChange = {this.onChange} value = { companyName }/> */}
          </div>
          <div className="form-group">
            <label> Image</label>
            <input type="file" className="form-control" onChange = {this.onChange} name = "image"/>
            <img src={callImage("GET", "product", image)} className="img-responsive image" alt="Product Image"></img>
          </div>
          
          <button type="submit" className="btn btn-primary mr-10">Save</button>
          <Link to = "/product-list" className = "btn btn-danger "> Back to list</Link>
          <br/><br/><br/>
          
          {id? <ProductDetailListPage data = {id}/>:""}
        </form>
      </div> 
      </div>     
    )
  }
}

export default ProductActionPage;
