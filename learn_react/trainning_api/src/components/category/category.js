import React, { Component } from 'react';
import { Input, FormGroup } from 'reactstrap'
import callAPI from '../../utils/apiCaller';

class Category extends Component {

    constructor(props){
        super(props)
        this.state = {
            categories : "",
            isLoad : false,
            categoryIsSelected : ""
        }
    }

    componentDidMount(){
        var categoryIsSelected = this.props.value
        callAPI(`category`, "GET", null).then(res => {
            this.setState({
                categories : res.data,
                isLoad : true,
                categoryIsSelected : categoryIsSelected
            })
        })
    }

    render() {
        var {categories, isLoad, categoryIsSelected} = this.state
        if(isLoad){
            return (
                <FormGroup>
                    <Input type="select" name="size" id="exampleSelect" value = {categoryIsSelected}>
                        {this.showCategories(categories)}
                    </Input>
                </FormGroup>
            );
        }
        else {
            return <div><h5>Loading...</h5></div>
        }
        
    }

    showCategories(categories){
        var result = null
        if(categories.length > 0)
        {
            
            result = categories.map((category, index) => {
                
                return <option value = {category.id} key = {index}>{category.name} {category.age_type}</option>
            })
        }
        return result;
    }
}

export default Category;