import React, { Component } from 'react';
import callAPI from '../../../utils/apiCaller';
import Size from './../../../components/size/size'
import Color from '../../../components/color/color'
import {Link} from 'react-router-dom'
import {Input, FormGroup, Label, Form} from 'reactstrap'

class ProductDetailActionPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            product_id : "",
            size : "",
            color : "",
            quantity : 0,
            date_received : "",
            isLoad : false
        }
    }

    componentDidMount(){
        if(this.props.match.params.size && this.props.match.params.color){//update
            var product_id = this.props.match.params.product_id
            var size = this.props.match.params.size
            var color = this.props.match.params.color

            callAPI(`product_detail/view/${product_id}/${size}/${color}`, "GET", null).then(res => {
                var product_detail = res.data
                
                this.setState({
                    product_id : product_detail.product_id,
                    size : product_detail.size,
                    color : product_detail.color,
                    quantity : product_detail.quantity,
                    date_received : product_detail.date_received,
                    isLoad : true
                })
                
            })
        }
        else if(this.props.match){
            var product_id = this.props.match.params.product_id
            // console.log(this.props.match)
            this.setState({
                product_id : product_id,
                isLoad : true
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

    render() {
        var {product_id, size, color, quantity, date_received, price, isLoad} = this.state
        if(isLoad){
            return (
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Form onSubmit = {this.onSave}>
                    <div className="form-group">
                        <label> Size</label>
                        <Size value = {size} onChange = { this.onChange }/>
                    </div>
                    <div className="form-group">
                        <label> Color</label>
                        <Color value = {color} onChange = { this.onChange }/>
                    </div>
                    <div className="form-group">
                        <label> Price</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            // name = "txtMail"
                            onChange = { this.onChange }
                            // value = {txtMail}
                            />
                    </div>
                    <div className="form-group">
                        <label> Quantity</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            // name = "txtPhone" 
                            onChange = { this.onChange }
                            // value = { !!(txtPhone) ? txtPhone: "" }
                        />
                    </div>
                    <FormGroup>
                        <Label for="exampleDatetime"> Date Received</Label>
                        <Input type="datetime" name="datetime" id="exampleDatetime" placeholder="datetime placeholder" onChange = { this.onChange }/>
                    </FormGroup>
                    <button type="submit" className="btn btn-primary mr-10">Save</button>
                    <Link to = {`/product/edit/${product_id}`} className = "btn btn-danger "> Back to list</Link>
                    </Form>
                </div> 
            );
        }
        else{
            return <div><h5>Loading...</h5></div>
        }
    }
}

export default ProductDetailActionPage;