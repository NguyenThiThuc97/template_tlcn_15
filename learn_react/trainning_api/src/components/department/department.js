import React, { Component } from 'react';
import { Input, FormGroup } from 'reactstrap'
import callAPI from '../../utils/apiCaller';

class Department extends Component {

    constructor(props){
        super(props)
        this.state = {
            departments : "",
            isLoad : false,
        }
    }

    componentDidMount(){
        callAPI(`department`, "GET", null, null).then(res => {
            this.setState({
                departments : res.data,
                isLoad : true,
            })
        })
    }

    render() {
        var {departments, isLoad} = this.state
        if(isLoad){
            return (
                <FormGroup>
                    <Input type="select" name="department" id="exampleSelect" value = {this.props.value} onChange = {this.props.onChange}>
                        {this.showDepartment(departments)}
                    </Input>
                </FormGroup>
            );
        }
        else{
            return <div><h5>Loading...</h5></div>
        }
    }
    showDepartment(colors){
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

export default Department;