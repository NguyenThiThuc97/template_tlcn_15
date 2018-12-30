import React, { Component } from 'react';
import callAPI from '../../../utils/apiCaller';
import {Redirect} from 'react-router-dom'
import CartItem from './cartItem'
import CartList from './cartList'

export const CartContext = React.createContext()

export class CartProvider extends Component {

    constructor(props){
        super(props)
        this.state = {
            cartItems : JSON.parse(localStorage.getItem("cart")),
            // cartItems : JSON.parse(localStorage.getItem("cart") || "[]"),
            isLogin : false
        }
        this.addToCart = this.addToCart.bind(this)
        this.deleteCartItem = this.deleteCartItem.bind(this)
        this.showProductCarts = this.showProductCarts.bind(this)
        this.showsssss = this.showsssss.bind(this)
        this.orders = this.orders.bind(this)
        this.logout = this.logout.bind(this)
        this.onLogin = this.onLogin.bind(this)
    }

    addToCart(product, productDetail) {

        var size = productDetail.size
        var color = productDetail.color
        var quantity = productDetail.quantity
        var product_id = productDetail.product_id
        var  userLogged = JSON.parse(localStorage.getItem("user"))
        if (userLogged){
            if(userLogged.userType === "customer"){
                callAPI(`product_detail/view/${product_id}/${size}/${color}`, "GET", null, null).then(res => {
            
                    if(res.data.price){
                        var productDetail = {
                            product_id : product_id,
                            size : size,
                            color : color,
                            quantity :quantity,
                            price : res.data.price
                        }
                        var cart = JSON.parse(localStorage.getItem("cart") || "[]");
                        cart.push(productDetail)
                        localStorage.setItem("cart", JSON.stringify(cart));
                        if(this.state.cartItems){
                            this.setState({
                                cartItems : this.state.cartItems.concat(productDetail)
                            })
                        }
                        else {
                            this.state.cartItems = []
                            this.setState({
                                cartItems : this.state.cartItems.concat(productDetail)
                            })
                        }
                        
                    }
                    else {
                        alert("product not existed")
                    }
                    // console.log(this.props)
                    
                    // console.log(`category/${this.props.product.id}`)
                    // return <Redirect to = {`/category/${this.props.product.id}`}/>
                })
            }
            else{
                alert("this function is only for customer!!!")
            }
        }
        else {
            alert("please login!!!")
        }
        
        document.getElementById(`hideProductDetail`+product_id).click();
                   
    }

    showsssss(){
        var {cartItems} = this.state
        return <CartList>
            {this.showProductCarts(cartItems)}
        </CartList>
    }

    showProductCarts(){
        var {cartItems} = this.state
        var result = null
        if(cartItems.length > 0)
        {
            result = cartItems.map((cartItem, index) => {
                return <CartItem
                    key = {index}
                    product_cart = {cartItem}
                    index = {index}
                    // onDelete = {this.onDelete}
                />
            })
        }
        return result;
    }
    deleteCartItem = (id, size, color) => {
        var {cartItems} = this.state
        var index = this.findIndex(cartItems, id, size, color)
        
        if(index !== -1)
        {
            cartItems.splice(index, 1)
            this.setState({
                cartItems : cartItems
            })
            var cart = JSON.parse(localStorage.getItem("cart") || "[]");
            cart.splice(index, 1)
            localStorage.setItem("cart", JSON.stringify(cart));
            
        }
    }
    findIndex = (cartItems, id, size, color) =>{
        var result = -1
        cartItems.forEach((cartItem, index) => {
            if(cartItem.product_id === id && cartItem.size === size && cartItem.color === color)
            {
                result = index
            }
        });

        return result;
    }

    orders = (total) => {
        
        var {cartItems} = this.state
        var userLogged = JSON.parse(localStorage.getItem('user'))
        
        if(userLogged){
            console.log(total, userLogged.userInfor.id)
        var ordersSave = {
            total : total,
            customer : userLogged.userInfor.id,
            orders_detail : cartItems
        }
            if(userLogged.userType === "customer" ){
                
                if(cartItems.length !== 0){
                    callAPI("orders/create", "POST", ordersSave).then(res => {
                        console.log(res)
                    })
                    alert("you are orders")
                }
                else {
                    alert("no products in cart!!!")
                }
            }
            else {
                alert("only for customer!!!")
            }
        }
        else {
            alert ("Please login!!!")
        }
    }

    logout(){
        localStorage.removeItem("cart")
        localStorage.removeItem("user")
        this.setState({
            cartItems : null
        }) 
    }

    onLogin(username, password, userType){
        
        var userLogin = {
            username: username,
            password : password,
            userType : userType
        }
        if(username.length > 0 && password.length > 0) {
            callAPI("login", "POST", userLogin).then(res => {
                if(res.data.statusLogin){
                    if(localStorage.getItem("user")){
                        alert("user was logged")
                    }
                    else {
                        localStorage.setItem("user", JSON.stringify({
                            userType : userType,
                            username : username,
                            userInfor : res.data.user
                        }))
                        var cart = []
                        localStorage.setItem("cart", JSON.stringify(cart));
                        this.setState ({
                            isLogin : true,
                            cartItems : cart
                        })
                        document.getElementById("hidePopUpBtn").click();
                        return <Redirect to = "/"/>
                    }
                    document.getElementById("hidePopUpBtn").click();
                }
                else {
                    alert(res.data.result.message)
                }
            })
        }
        else {
            alert("please fill both username and password!!!")
        }
    }

    render() {
        return (
            <CartContext.Provider value = {{cartItems : this.state.cartItems, addToCart : this.addToCart, deleteCartItem : this.deleteCartItem, orders : this.orders, logout : this.logout, onLogin : this.onLogin}} >
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

// export default CartProvider;