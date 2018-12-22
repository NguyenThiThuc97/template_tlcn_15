import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className = "banner">
                <img className = "image-banner" src = "https://devitems.com/html/shofixe-preview/shofixe/img/banner/8.jpg"/>
                <div className="text-block"> 
                    <h4>Contact Us</h4>
                    <p>Home > Contact</p>
                </div>
            </div>
        );
    }
}

export default Banner;