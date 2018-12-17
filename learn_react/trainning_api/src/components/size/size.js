import React, { Component } from 'react';
import { Input,FormGroup } from 'reactstrap'

class Size extends Component {

    constructor(props){
        super(props)
        this.state = {
            selected : "",
            isLoad : false
        }
        
    }
    componentDidMount(){
        var sizeIsSelected = this.props.value
        this.setState({
            selected : sizeIsSelected,
            isLoad : true
        })
    }

    render() {
        var colorArr = ["S", "M", "L", "XL", "XXL", "XXXL"]
        var {selected, isLoad} = this.state
        if(isLoad){
            return (
                <FormGroup>
                    <Input type="select" name="size" id="exampleSelect" value = {selected}>
                        { this.showColor(colorArr) }
                    </Input>
                </FormGroup>
            );
        }
        else {
            return <div><h5>Loading...</h5></div>
        }
    }

    showColor(colors){
        var result = null
        if(colors.length > 0)
        {
            result = colors.map((color, index) => {
                
                return <option key = {index} value = {color} >{color}</option>
            })
        }
        return result;
    }
}

export default Size;