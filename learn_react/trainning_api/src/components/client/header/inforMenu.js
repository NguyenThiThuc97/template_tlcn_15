import React, { Component } from 'react';
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';
import callAPI from '../../../utils/apiCaller';
import Select from 'react-select';
import {Route, Link} from 'react-router-dom'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

class InformationMenu extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            productNames : [],
            isLoad : false
        }
    }
    componentDidMount(){
        callAPI("all_product_name", "GET", null, null).then(res => {
            this.setState({
                isLoad : true,
                productNames : res.data,
                selectedOption: null,
            })
        })
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption : selectedOption });
    }

    render() {
        var {productNames, isLoad, selectedOption} = this.state
        
        if(isLoad){
            return (
                <div className="container text-center">
                    <div className = "row">
                            <div className = "col-sm-3">
                                <img src = "https://legupwebdesign.com/wp-content/uploads/2015/04/e-commerce-image.png" width = "200px"/>
                            </div> 
                            <div className = "col-sm-3 pdt-45">
                            <h4>+012 345 678 102</h4>
                            <h5>We are open 9 am - 10pm</h5>
                            </div>
                            <div className = "col-sm-3 pdt-45">
                            <h4>info@example.com</h4>
                            <h5>You can mail us</h5>
                            </div>
                            <div className = "col-sm-3 pdt-45">
                            {/* <input type="text" placeholder="Search..."/> */}
                            <div className = "mr-10"><Select
                                                        value={selectedOption}
                                                        onChange={this.handleChange}
                                                        options={productNames}
                                                    /></div>
                            {selectedOption ? 
                            <Route><Link to = {`/search/${selectedOption.value}`}><img className = "pdt-10" src = "https://devitems.com/html/shofixe-preview/shofixe/img/icon/search.png"/></Link></Route>:
                            <img className = "pdt-10" src = "https://devitems.com/html/shofixe-preview/shofixe/img/icon/search.png"/>}
                            </div>
    
                    </div>
                </div>
                    
            );
        }
        else {
            return (<div>Loading...</div>)
        }
    }
}

export default InformationMenu;