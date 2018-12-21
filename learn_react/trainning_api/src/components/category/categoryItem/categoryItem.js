import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class CategoryItem extends Component {

    onDelete = (id) =>{
        if(confirm("Are you sure?")){ //eslint-disable-line
            this.props.onDelete(id)
        }
    }

    render() {
        var { category, index } = this.props
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.age_type}</td>
                <td>
                    <Link to = {`/category/edit/${category.id}`} className="btn btn-success mr-10">Edit</Link>
                    
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        onClick = { () => this.onDelete(category.id)} >Delete</button></td>
            </tr>
        );
    }
}

export default CategoryItem;