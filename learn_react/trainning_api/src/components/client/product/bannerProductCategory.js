import React, { Component } from 'react';

const RandomImage = [
    
    {
        id : 1,
        name : "banner 1",
        imgURL : "https://www.pmrcr.com/wp-content/uploads/2016/02/iStock_000066681675_Double-1920x320.jpg"
    },
    {
        id : 2,
        name : "banner 2",
        imgURL : "http://shelosttheplot.com/image/cache/catalog/mew23-1920x320-.jpg"
    },
    {
        id : 0,
        name : "banner 3",
        imgURL : "https://devitems.com/html/shofixe-preview/shofixe/img/banner/12.jpg"
    },
]

class BannerProductCategory extends Component {

    render() {
        var randomValue = Math.floor(Math.random() * Math.floor(3));
        return (
            <div className = "banner">
                <img className = "image-banner" src = {RandomImage[randomValue].imgURL}/>
                <div className="text-block"> 
                    <h4>Product Category</h4>
                    <p>Home > Category</p>
                </div>
            </div>
        );
    }
}

export default BannerProductCategory;