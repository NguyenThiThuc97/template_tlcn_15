import React, { Component } from 'react';

class ProductActionPage extends Component {

  constructor(props){
    super(props)
    this.state = ""
  }

  render() {
    return(
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form>
          <div className="form-group">
            <label>Product Name</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input type="text" className="form-control"/>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>      
    )
  }
}

export default ProductActionPage;
