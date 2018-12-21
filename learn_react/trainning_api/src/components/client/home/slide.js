import React, { Component } from 'react';

class Slide extends Component {
    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img src="https://devitems.com/html/shofixe-preview/shofixe/img/slider/1.jpg" alt="Image" />
                        <div className="carousel-caption">
                            <h3>Sell $</h3>
                            <p>Money Money.</p>
                        </div>      
                    </div>
                    <div className="item">
                        <img src="https://devitems.com/html/shofixe-preview/shofixe/img/slider/2.jpg" alt="Image" />
                        <div className="carousel-caption">
                            <h3>More Sell $</h3>
                            <p>Lorem ipsum...</p>
                        </div>      
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div> 
        );
    }
}

export default Slide;