import React, { Component } from 'react';
import callAPI from '../../utils/apiCaller';
import OrdersList from '../../components/orders/ordersList';
import OrdersItem from '../../components/orders/ordersItem';

class OrdersPage extends Component {

    constructor (props){
        super (props)
        this.state = {
            isLoad : false,
            ordersList : [] 
        }
    }

    componentDidMount = () => {
        callAPI("orders", "GET", null, null).then(res => {
            this.setState({
                isLoad : true,
                ordersList : res.data
            })
        })
    }

    render() {

        var {isLoad, ordersList} = this.state

        if(isLoad){
            return (
                <div className="row pdt-45">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <OrdersList>
                        { this.showOrders(ordersList) }
                    </OrdersList>
                    </div>
                </div> 
            )
        }
        else {
            return (
                <div>
                    Loading...
                </div>
            );
        }
        
    }

    showOrders(ordersList){
        var result = null
        if(ordersList.length > 0)
        {
            result = ordersList.map((orders, index) => {
                return <OrdersItem
                            key = {index}
                            orders = {orders}
                            index = {index}
                            // onDelete = {this.onDelete}
                        />
            })
        }
        return result;
    }
}

export default OrdersPage;