import React, { Component } from 'react';

class InformationMenu extends Component {
    render() {
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
                        <div className = "col-sm-3 pdt-45"><br/>
                        <img className = "mr-10" src = "https://devitems.com/html/shofixe-preview/shofixe/img/icon/search.png"/>
                        <input type="text" placeholder="Search..."/>
                        </div>

                </div>
            </div>
                
        );
    }
}

export default InformationMenu;