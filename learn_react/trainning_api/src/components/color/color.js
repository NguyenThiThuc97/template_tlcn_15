import React, { Component } from 'react';
import { Input, FormGroup } from 'reactstrap'
import callAPI from '../../utils/apiCaller';

class Color extends Component {
    constructor(props){
        super(props)
        this.state = {
            colors : "",
            isLoad : false,
            colorIsSelected : ""
        }
    }

    componentDidMount(){
        var colorIsSelected = this.props.value
        callAPI(`color`, "GET", null).then(res => {
            this.setState({
                colors : res.data,
                isLoad : true,
                colorIsSelected : colorIsSelected
            })
        })
    }

    render() {
        var {colors, isLoad, colorIsSelected} = this.state
        if(isLoad){
            return (
                <FormGroup>
                    <Input type="select" name="color" id="exampleSelect" value = {this.props.value} onChange = {this.props.onChange}>
                        {this.showColor(colors)}
                    </Input>
                </FormGroup>
            );
        }
        else{
            return <div><h5>Loading...</h5></div>
        }
    }

    showColor(colors){
        var result = null
        if(colors.length > 0)
        {
            
            result = colors.map((color, index) => {
                
                return <option value = {color.id} key = {index}>{color.name}</option>
            })
        }
        return result;
    }
}

export default Color;