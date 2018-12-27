import React, { Component } from 'react';

class OrdersItem extends Component {

    constructor(props){
        super(props)
        this.showOrdersDetail = this.showOrdersDetail.bind(this)
    }

    render() {
        var { orders, index } = this.props
        return (
            
                <tr>
                    <td>{index + 1}</td>
                    <td>{orders.id}</td>
                    <td>{orders.CustomerUsername}</td>
                    <td>{this.showOrdersDetail(orders)}</td>
                    <td>{orders.total}</td>
                    <td>{orders.date_create}</td>
                    <td>{orders.date_test}</td>
                    <td>
                        {/* <button 
                            type="button" 
                            className="btn btn-success" 
                            data-toggle="modal" data-target={`#orders`+orders.id}
                            >View Details</button> */}
                    </td>
                            
                </tr>
            
            
            
            
        );
    }

    showOrdersDetail = (orders) => {
        
        var result = null
        if(orders.orders_detail.length > 0)
        {
            
            result = orders.orders_detail.map((item, index) => {
                
                return <tr key = {index}><td>{item.product_id}</td><td>{item.size}</td><td>{item.color}</td><td>{item.quantity}</td></tr>
            })
        }
        return <table className="table table-hover">
                    <tbody>
                        {result}
                    </tbody>
                </table>;
    }    

}

export default OrdersItem;