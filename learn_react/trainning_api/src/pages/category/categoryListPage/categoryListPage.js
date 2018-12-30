import React, { Component } from 'react';
import CategoryList from '../../../components/category/categoryList/categoryList';
import callAPI from '../../../utils/apiCaller';
import {Link, Redirect} from 'react-router-dom'
import CategoryItem from '../../../components/category/categoryItem/categoryItem'

class CategoryListPage extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            categories : [],
            isLoad : false, 
            loggedInUser : JSON.parse(localStorage.getItem('user'))
        }
    }

    componentDidMount(){
        callAPI("category", "GET", null).then(res =>{
            this.setState({
                categories : res.data,
                isLoad : true,
            })
        })
    }

    onDelete = (id) => {
        var {categories} = this.state
        callAPI(`category/delete/${id}`, "GET", null).then(res => {
            if(res.status === 200)//successful
            {
                var index = this.findIndex(categories, id)
                if(index !== -1)
                {
                    categories.splice(index, 1)
                    this.setState({
                        categories : categories
                    })
                }
            }
        })
    }

    findIndex = (categories, id) =>{
        var result = -1
        categories.forEach((category, index) => {
            if(category.id === id)
            {
                result = index
            }
        });

        return result;
    }

    render() {
        var { categories, isLoad, loggedInUser } = this.state
        
        if(loggedInUser === null)
        {
            return <Redirect to = "/login" />
        }
        else if(loggedInUser.userType === "customer"){
            return <div className = "container"><h2>This site is only for ADMINISTRATIVE STAFF</h2></div>
        }
        if( !isLoad ){
            return <div>Loading...</div>
        }
        else{
            return (
                <div className="row pdt-45">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to = "/category/add" className="btn btn-info mb-10">Add a new category</Link>
                    <CategoryList>
                        { this.showCategory(categories) }
                    </CategoryList>
                    </div>
                </div> 
            );
        }
    }

    showCategory(categories){
        var result = null
        if(categories.length > 0)
        {
            result = categories.map((category, index) => {
                return <CategoryItem
                    key = {index}
                    category = {category}
                    index = {index}
                    onDelete = {this.onDelete}
                />
            })
        }
        return result;
    }
}

export default CategoryListPage;