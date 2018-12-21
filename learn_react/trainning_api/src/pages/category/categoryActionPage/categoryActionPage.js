import React, { Component } from 'react';
import callAPI from '../../../utils/apiCaller';
import {Link} from 'react-router-dom'
import AgeType from '../../../components/ageType/ageType';

class CategoryActionPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            id : "",
            category_name: "",
            age_type : "",
        }
    }

    componentDidMount(){
        var {match} = this.props
        if(match){
            var id = match.params.id
            callAPI(`category/${id}`, "GET", null).then(res => {
                var category = res.data
                this.setState({
                    id : category.id,
                    category_name : category.name,
                    age_type : category.age_type,
                })
            })
        }
    }

    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.value
        this.setState({
            [name] : value
        })
    }

    onSave = (e) => {
        var { id, category_name, age_type} = this.state
        var {history} = this.props

        e.preventDefault()//not submit page
        if(id)
        {
            callAPI("category/update", "POST", {
                id : id,
                name : category_name,
                age_type : age_type,
            }).then(res => {
                history.goBack()
            })
        }
        else
        {
            callAPI("category/create", "POST", {
                name : category_name,
                age_type : age_type,
            }).then(res => {
                history.goBack()
                // history.push("")
            })
        }
        
    }

    render() {
        var { category_name, age_type } = this.state
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit = {this.onSave}>
                <div className="form-group">
                    <label> Name</label>
                    <input 
                        type = "text" 
                        className = "form-control" 
                        name = "category_name" 
                        onChange = { this.onChange }
                        value = {category_name} />
                </div>
                <div className="form-group">
                    <label> Age Type</label>
                    <AgeType value = {age_type} onChange = {this.onChange}/>
                </div>
                <button type="submit" className="btn btn-primary mr-10">Save</button>
                <Link to = "/category-list" className = "btn btn-danger "> Back to list</Link>
                </form>
            </div>    
        );
    }
}

export default CategoryActionPage;