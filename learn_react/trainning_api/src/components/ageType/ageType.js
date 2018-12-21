import React, { Component } from 'react';
import { Input,FormGroup } from 'reactstrap'

class AgeType extends Component {

    constructor(props){
        super(props)
        this.state = {
            selected : "",
            isLoad : false
        }
        
    }

    render() {
        var ageTypeArr = ["Girl", "Boy", "Man", "Woman", "Oldster", "Gammer"]
        return (
            <FormGroup>
                <Input type="select" name="age_type" id="exampleSelect" value = {this.props.value} onChange = {this.props.onChange}>
                    { this.showAgeType(ageTypeArr) }
                </Input>
            </FormGroup>
        );
    }

    showAgeType(age_types){
        var result = null
        if(age_types.length > 0)
        {
            result = age_types.map((age_type, index) => {
                
                return <option key = {index} value = {age_type} >{age_type}</option>
            })
        }
        return result;
    }
}

export default AgeType;