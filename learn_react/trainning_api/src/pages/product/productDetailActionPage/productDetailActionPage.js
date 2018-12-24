import React, { Component } from 'react';
import callAPI from '../../../utils/apiCaller';
import Size from './../../../components/size/size'
import Color from '../../../components/color/color'
import {Link} from 'react-router-dom'
import { FormGroup, Label, Form} from 'reactstrap'

class ProductDetailActionPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            product_id : "",
            size : "S",
            color : 3,
            quantity : 0,
            date_received : "",
            isLoad : false,
            price: 0,
            action : false, // action === false ? "add" : "update",
            old_color : 0,
            old_size : ""
        }
    }

    componentDidMount(){
        if(this.props.match.params.size && this.props.match.params.color){//update
            
            var product_id = this.props.match.params.product_id
            var size = this.props.match.params.size     //old
            var color = this.props.match.params.color   //old
            
            callAPI(`product_detail/view/${product_id}/${size}/${color}`, "GET", null).then(res => {
                var product_detail = res.data
                // console.log(res.data)
                this.setState({
                    product_id : product_detail.product_id,
                    size : product_detail.size,
                    color : product_detail.color,
                    quantity : product_detail.quantity,
                    date_received : product_detail.date_received,
                    isLoad : true,
                    price : product_detail.price,
                    action : true,
                    old_size : size,
                    old_color : color
                })
                
            })
        }
        else if(this.props.match){//add
            var product_id = this.props.match.params.product_id
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
        // console.log(this.state)
    }

    onSave = (e) => {
        var {product_id, size, color, quantity, price, date_received, old_color, old_size} = this.state
        var {history} = this.props
        var dataProductDetail = {
            product_id : product_id,
            size : size,
            color : color,
            quantity : quantity, 
            price : price,
            date_received : date_received,
            old_color : old_color,
            old_size : old_size
        }
        e.preventDefault()
        callAPI("product_detail/create", "POST", dataProductDetail).then(res => {
            console.log(res)
            history.push(`/product/edit/${product_id}`)
        })
    }

    render() {
        var {product_id, size, color, quantity, date_received, price, isLoad} = this.state
        if(isLoad){
            // console.log(this.state)
            return (
                <div className="container">
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
                            name = "price"
                            onChange = { this.onChange }
                            value = {price}
                            />
                    </div>
                    <div className="form-group">
                        <label> Quantity</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name = "quantity" 
                            onChange = { this.onChange }
                            value = { quantity }
                        />
                    </div>
                    <FormGroup>
                        <Label for="exampleDatetime"> Date Received</Label>
                        <input type="date" name="date_received" id="date_received" className="form-control" value={date_received} onChange = {this.onChange}/>
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